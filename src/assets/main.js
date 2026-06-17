// Ouvre un <details> ciblé par l'ancre de l'URL
(function () {
  function openDetailsFromHash() {
    var hash = window.location.hash;
    if (!hash) return;
    var target = document.querySelector(hash);
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  document.addEventListener('DOMContentLoaded', openDetailsFromHash);
  window.addEventListener('hashchange', openDetailsFromHash);
})();

// Carousel témoignages
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('.carousel-temoignages');
  if (!carousel) return;

  var slides = Array.from(carousel.querySelectorAll('.temoignage-slide'));
  var dotsContainer = carousel.querySelector('.carousel-dots');
  var controls = carousel.querySelector('.carousel-controls');
  var current = 0;

  if (slides.length <= 1) {
    controls.style.display = 'none';
    return;
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Témoignage ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  carousel.querySelector('.carousel-prev').addEventListener('click', function () { goTo(current - 1); });
  carousel.querySelector('.carousel-next').addEventListener('click', function () { goTo(current + 1); });
});

// Bouton "voir plus" réalisations
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('btn-voir-plus');
  if (!btn) return;
  btn.addEventListener('click', function () {
    document.querySelectorAll('.real-card--hidden').forEach(function (card) {
      card.classList.remove('real-card--hidden');
    });
    btn.closest('.real-voir-plus-wrap').remove();
  });
});

// Parallaxe fleur hero
(function () {
  var flower = document.querySelector('.hero-flower');
  if (!flower) return;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        flower.style.transform = 'rotate(' + window.scrollY * 0.12 + 'deg)';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
