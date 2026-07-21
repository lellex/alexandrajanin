---
name: alexandrajanin.fr
description: Site vitrine d'Alexandra Janin, développeuse web indépendante en Dordogne
colors:
  violet-aubergine: "#380075"
  violet-clair: "#6c35a7"
  lilas: "#ede6f7"
  jaune-miel: "#ffb700"
  miel-sombre: "#c98f00"
  miel-pale: "#fff3cc"
  creme: "#fffcf4"
  creme-sombre: "#fff3db"
  noyer: "#7c5522"
  noyer-moyen: "#a07440"
  noyer-pale: "#fef8ec"
  encre: "#1a1820"
  encre-noire: "#1d1c1e"
  gris-mauve: "#52495c"
  blanc: "#ffffff"
typography:
  display:
    fontFamily: "VG5000, sans-serif"
    fontSize: "3.4rem"
    fontWeight: 700
    lineHeight: 1.08
  headline:
    fontFamily: "VG5000, sans-serif"
    fontSize: "2.7rem"
    fontWeight: 700
    lineHeight: 1.12
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "1.5px"
rounded:
  sm: "4px"
  md: "6px"
  pill: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.violet-aubergine}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.5rem"
  button-outline:
    backgroundColor: "{colors.creme-sombre}"
    textColor: "{colors.violet-aubergine}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.5rem"
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.violet-clair}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  filter-pill-active:
    backgroundColor: "{colors.violet-aubergine}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.pill}"
  tag:
    backgroundColor: "{colors.lilas}"
    textColor: "{colors.violet-clair}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  card-offre:
    backgroundColor: "transparent"
    textColor: "{colors.encre}"
    rounded: "{rounded.md}"
    padding: "1.6rem 1.4rem"
  input:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.encre}"
    rounded: "{rounded.md}"
    padding: "0.65rem 0.9rem"
---

# Design System: alexandrajanin.fr

## 1. Overview

**Creative North Star : « L'atelier de la développeuse »**

Un atelier d'artisane du logiciel : des outils sérieux, des traits francs, et partout des touches personnelles assumées. La rigueur technique est visible — préfixes `// ` en IBM Plex Mono, curseur qui clignote, bordures nettes de 2px — mais elle est réchauffée par un violet profond, un jaune miel, des fleurs vectorielles qui tournent lentement en arrière-plan et une typographie display (VG5000) au dessin singulier. Rien n'est générique : chaque page porte la même signature reconnaissable, celle d'une personne, pas d'une agence.

Le système rejette explicitement l'agence web corporate (stock photos, jargon, promesses creuses), le site « IA-généré » (grilles de cards identiques, gradients décoratifs, héros SaaS interchangeable) et le fait-main qui paraît bricolé. La fantaisie est dosée : une signature, pas un gadget — le sérieux reste lisible au premier regard.

**Key Characteristics:**
- Plat et franc : bordures 2px, ombres dures sans flou, esthétique proche de la sérigraphie.
- Trio typographique contrasté : VG5000 (display singulier) + DM Sans (corps lisible) + IBM Plex Mono (signature technique).
- Palette chaude et engagée : aubergine + miel sur fonds crème, ponctuée de noyer.
- Motifs floraux décoratifs en rotation lente, toujours en opacité très faible (0.07–0.13).
- Éco-conçu et accessible par principe : ce que le site vend, il le démontre.

## 2. Colors

Une palette chaude et terrienne — aubergine, miel, crème, noyer — qui évoque à la fois l'encre du code et la douceur du terroir périgourdin.

### Primary
- **Violet aubergine** (#380075) : la couleur d'identité. Titres, bordures de cards, boutons actifs, logo. C'est l'« encre » du site.
- **Violet clair** (#6c35a7) : liens, labels de section, états intermédiaires. Toujours au service de l'aubergine, jamais en concurrence.
- **Lilas** (#ede6f7) : fond des tags et survols doux.

### Secondary
- **Jaune miel** (#ffb700) : l'accent chaleureux. Logo (pétales), badge « nouveau », soulignements. Utilisé avec parcimonie : sa rareté fait son effet.
- **Miel sombre** (#c98f00) : variante lisible du miel pour bordures et textes dorés.
- **Miel pâle** (#fff3cc) : fond teinté doré.

### Tertiary
- **Noyer** (#7c5522) : l'encre de la section « Sites internet » (bordures de cards, tags gold). Avec **Noyer moyen** (#a07440) et **Noyer pâle** (#fef8ec) en soutien.

### Neutral
- **Encre** (#1a1820) : texte courant. **Encre noire** (#1d1c1e) : bordures de la section « Logiciels ».
- **Gris mauve** (#52495c) : texte secondaire (sous-titres, descriptions).
- **Crème** (#fffcf4) / **Crème sombre** (#fff3db) : fonds de boutons et filets discrets.
- **Blanc** (#ffffff) : fond de page principal.

### Named Rules
**La règle des trois encres.** Chaque famille d'offres a son encre de bordure : aubergine pour le conseil, encre noire pour le logiciel, noyer pour les sites. On ne mélange pas les encres à l'intérieur d'une section.

**La règle du miel rare.** Le jaune miel couvre moins de 10 % de n'importe quel écran. C'est un rayon de soleil, pas un fond.

## 3. Typography

**Display Font:** VG5000 (avec sans-serif en repli)
**Body Font:** DM Sans (avec sans-serif en repli)
**Label/Mono Font:** IBM Plex Mono (avec monospace en repli)

**Character:** Un trio à fort contraste : le dessin singulier et légèrement rétro-futuriste de VG5000 donne la voix, DM Sans assure une lecture impeccable, IBM Plex Mono signe la crédibilité technique. Trois familles, trois rôles, jamais interchangeables.

### Hierarchy
- **Display** (700, 3.4rem, 1.08) : titre du héros uniquement, en aubergine, avec curseur clignotant `_` en violet clair.
- **Headline** (700, 2.7rem, 1.12) : titres de section (`.section-title`), toujours en VG5000 aubergine.
- **Title** (VG5000 ou DM Sans 600 selon le niveau) : titres de cards et de catégories, accompagnés d'un glyphe décoratif (✧ ※ ❊).
- **Body** (500, 1rem/16px, 1.6) : DM Sans. Sous-titres à 1.125rem en gris mauve.
- **Label** (700, 1rem, +1.5px, MAJUSCULES) : IBM Plex Mono, préfixé `// `. Aussi utilisé pour les boutons, tags et prix (graisses 400–500, tailles 0.6–1rem).

### Named Rules
**La règle du `// `.** Le seul kicker autorisé est le label mono préfixé `// ` (commentaire de code). C'est la signature dev du site — pas un eyebrow générique. Un par section, jamais plus.

**La règle des trois voix.** VG5000 pour la voix, DM Sans pour le contenu, Plex Mono pour la machine. Ne jamais faire porter à une famille le rôle d'une autre.

## 4. Elevation

Plat assumé, esthétique sérigraphie : les surfaces sont plates, le relief vient des bordures franches de 2px et d'ombres **dures, sans flou** (`box-shadow: 5px 5px 0`). Le flou décoratif est proscrit ; la profondeur se raconte par la couleur et le trait, comme sur une affiche imprimée. Seules exceptions fonctionnelles : l'ombre douce du menu mobile et l'anneau de focus.

### Shadow Vocabulary
- **Tampon** (`box-shadow: 5px 5px 0 var(--cream)`) : ombre dure décalée, réservée aux éléments mis en avant (bloc RDV).
- **Badge** (`box-shadow: 0 2px 6px rgba(0,0,0,0.15)`) : micro-ombre du badge « nouveau », seul flou toléré à petite échelle.
- **Focus** (`box-shadow: 0 0 0 3px rgba(108,53,167,0.12)`) : anneau de focus des champs de formulaire. Fonctionnel, jamais décoratif.

### Named Rules
**La règle de la sérigraphie.** Pas de flou décoratif. Si une ombre apparaît, elle est soit dure et décalée (relief imprimé), soit fonctionnelle (focus, menu mobile). Un glassmorphism ou un glow serait une faute.

## 5. Components

Robustes et chaleureux : du solide avant tout — bordures franches, mono assumé — réchauffé par la couleur et les détails qui bougent.

### Buttons
- **Shape:** coins doucement arrondis (6px), police IBM Plex Mono avec léger espacement (+0.5 à 1px).
- **Primary (« bouton tampon »):** un span crème bordé d'aubergine (2px), décalé de -4px/-4px sur un socle aubergine plein. Au survol, le span glisse à -7px/-7px — l'ombre du socle grandit, effet mécanique et tactile.
- **Hover / Focus:** transitions 0.2–0.3s en `cubic-bezier(0.7, 0, 0.2, 1)` (départ franc, arrivée douce).
- **Outline:** fond crème sombre, texte aubergine, même géométrie sans le socle décalé.

### Chips
- **Filter pills:** bordure 2px violet clair, texte mono 0.85rem, forme pilule (9999px). Survol : fond lilas. Actif : fond aubergine plein, texte blanc.
- **Tags:** pilules pleines, fond lilas / texte violet clair ; variante gold (fond miel translucide / texte noyer) pour la stack technique.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** transparent, avec un léger voile dégradé vertical en ::before (10 % d'opacité max) teinté de l'encre de la section.
- **Shadow Strategy:** aucune ombre (voir Elevation) ; le relief vient de la bordure 2px.
- **Border:** 2px pleine, couleur selon la règle des trois encres.
- **Internal Padding:** 1.6rem 1.4rem.

### Inputs / Fields
- **Style:** bordure 1px noyer, 6px de rayon, DM Sans 1rem, fond blanc.
- **Focus:** bordure violet clair + anneau lilas (`0 0 0 3px rgba(108,53,167,0.12)`), outline supprimé.
- **Select:** chevron SVG inline en data-URI, apparence native supprimée.

### Navigation
- **Style:** barre sticky blanche, filet bas crème sombre, logo SVG bicolore (aubergine + miel).
- **Liens:** VG5000 1rem aubergine, soulignement animé au survol (::before). Page courante marquée `aria-current`.
- **Mobile:** hamburger 3 barres, menu plein écran en glissé 0.22s `cubic-bezier(0.2, 1, 0.8, 1)`, liens à 1.5rem.

### Fleurs décoratives (composant signature)
Des SVG floraux positionnés en absolu, opacité 0.07–0.13, rotation continue très lente (38–50s, linéaire), certains liés au scroll. Toujours `aria-hidden`, toujours désactivées par `prefers-reduced-motion`. Elles habillent les coins de sections sans jamais gêner la lecture.

## 6. Do's and Don'ts

### Do:
- **Do** utiliser le bouton tampon (socle aubergine + span crème décalé) pour tout CTA primaire ; c'est le geste signature du site.
- **Do** respecter la règle des trois encres : aubergine (conseil), encre noire (logiciel), noyer (sites) pour bordures et accents de section.
- **Do** écrire les labels techniques (prix, tags, filtres, kickers `// `) en IBM Plex Mono.
- **Do** garder les fleurs décoratives sous 0.13 d'opacité, en `aria-hidden`, avec une alternative `prefers-reduced-motion`.
- **Do** viser WCAG AA partout : contrastes ≥ 4.5:1 pour le texte courant, focus visibles, navigation clavier.
- **Do** rester éco-conçu : polices auto-hébergées en woff2, SVG inline, zéro framework front, zéro tracker.

### Don't:
- **Don't** ressembler à une « agence web corporate » : stock photos, jargon marketing, promesses creuses, template interchangeable (anti-référence PRODUCT.md).
- **Don't** produire du « site IA-généré » : grilles de cards identiques, gradients décoratifs, héros SaaS générique, gradient text (anti-référence PRODUCT.md).
- **Don't** laisser le fait-main paraître bricolé : les rotations et décalages sont calibrés (2.5deg max sur le badge), jamais aléatoires.
- **Don't** ajouter d'ombres floues décoratives, de glassmorphism ou de glow : la règle de la sérigraphie l'interdit.
- **Don't** utiliser le jaune miel en fond de grande surface : moins de 10 % de l'écran, toujours.
- **Don't** introduire une quatrième famille typographique, ni faire porter à une famille le rôle d'une autre.
