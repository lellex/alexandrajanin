// Menu hamburger mobile
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.nav-hamburger');
    var menu = document.getElementById('nav-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Fermer le menu au clic sur un lien
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Ouvrir le menu');
      });
    });
  });
})();

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

// Filtre des offres par profil cible
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var filterBar = document.querySelector('.offres-filter');
    if (!filterBar) return;

    var buttons = filterBar.querySelectorAll('.offres-filter-btn');
    var sections = document.querySelectorAll('.offres-category');
    var allCards = document.querySelectorAll('.offre-card');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var FADE_MS = 200;

    function matchesProfile(card, profile) {
      var profils = (card.dataset.profils || '').split(' ');
      return profile === 'all' || profils.indexOf('all') !== -1 || profils.indexOf(profile) !== -1;
    }

    function showMatching(profile) {
      sections.forEach(function (category) {
        var cards = category.querySelectorAll('.offre-card');
        var visibleCount = 0;
        cards.forEach(function (card) {
          var match = matchesProfile(card, profile);
          card.classList.toggle('offre-card--hidden', !match);
          if (match) visibleCount++;
        });
        category.classList.toggle('offres-category--hidden', visibleCount === 0);
      });
      // Double rAF : laisse le navigateur peindre l'état display:flex + opacity:0
      // avant de retirer la classe de fondu, sinon la transition est sautée.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          allCards.forEach(function (card) {
            if (!card.classList.contains('offre-card--hidden')) {
              card.classList.remove('offre-card--fade');
            }
          });
        });
      });
    }

    function applyFilter(profile) {
      if (reduceMotion) {
        showMatching(profile);
        return;
      }
      allCards.forEach(function (card) { card.classList.add('offre-card--fade'); });
      window.setTimeout(function () { showMatching(profile); }, FADE_MS);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.classList.contains('is-active')) return;
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        applyFilter(btn.dataset.filter);
      });
    });
  });
})();
