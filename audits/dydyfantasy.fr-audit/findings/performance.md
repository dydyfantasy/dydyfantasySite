# Audit Performance et Images : https://dydyfantasy.fr (25/11/2026)

## Méthode et limites

- PageSpeed Insights (API v5) : **indisponible**. Quota keyless dépassé (HTTP 429 « Queries per day ») sur les deux stratégies. Aucune clé Google API configurée, donc ni données terrain (CrUX) ni Lighthouse.
- Toutes les valeurs ci-dessous sont des **mesures de labo / estimations** à partir de requêtes HTTP réelles (curl, Python) sur le site en ligne, de l'HTML pré-rendu et d'un rendu Chromium mobile (`render_page.py`, sandbox actif). **Aucun chiffre LCP/INP/CLS n'est mesuré** : ce sont des estimations raisonnées.
- Pages testées : `/`, `/prestations/blind-test-quiz`, `/evenements/mariage`, `/dydy-quiz`, `/galerie`. Mesures depuis une connexion fixe (TTFB de test, pas représentatif d'un mobile 4G).

## Scores (estimés, labo)

| Domaine | Score /100 | Remarque |
|---|---|---|
| Performance | **84** | Base technique saine (SSG, cache, gzip, TTFB bas). Points perdus : JS d'hydratation, lot d'images preload, script bloquant d'agenda, logos clients. |
| Images | **66** | Hero et photos correctement dimensionnés/responsives ; logos clients massivement surdimensionnés, galerie sans width/height, textes alternatifs générés de façon mécanique. |

## Core Web Vitals (estimations, non mesurées)

| Page | LCP probable | INP | CLS | Statut estimé |
|---|---|---|---|---|
| `/` mobile | Hero `hero-scene-*.webp` (90 à 162 Ko selon l'écran), estimé 2,0 à 2,8 s en 4G lente simulée | Bon (peu d'interactions lourdes, 1 bundle de ~150 Ko gzip) | Faible, risque limité | Limite pass/improve (surveiller LCP) |
| `/` ordinateur | Hero 1536 px = **314 Ko**, estimé 1,2 à 1,8 s | Bon | Faible | Pass probable |
| `/prestations/blind-test-quiz`, `/evenements/mariage`, `/dydy-quiz` | LCP = H1 / texte (aucune image au-dessus de la ligne de flottaison hors logo) | Bon | Faible | Pass probable |
| `/galerie` | Texte ou 1re photo lazy | Bon | **Risque modéré** (photos sans dimensions) | Pass probable, à vérifier |

Pour confirmer : lancer PSI avec clé, et consulter CrUX (cruxvis.withgoogle.com) ; avec ~70 avis et un trafic local, il se peut que CrUX n'ait pas assez de données pour l'origine.

## Mesures clés

- **TTFB** (5 pages) : 0,10 à 0,13 s. Excellent. Serveur Apache OVH, HTTP/1.1 observé côté curl (la prise en charge HTTP/2 n'a pas pu être testée : libcurl local sans HTTP/2).
- **HTML (gzip)** : accueil 14,2 Ko (71 Ko brut) ; blind-test 13,3 Ko ; mariage 12,3 Ko ; dydy-quiz 9,8 Ko ; galerie 6,9 Ko.
- **JS+CSS gzip chargés** (modulepreload + CSS) : accueil ≈ 160 Ko, autres pages ≈ 148 à 155 Ko. Principaux : `entry.client-eSAOGWLg.js` 67,4 Ko, `chunk-6KYCQHYJ-D3bs4Vjo.js` 43,8 Ko (React Router/React), `Home-DTh2hRGY.js` 9,9 Ko, `root-CLGs4yJW.js` 5,4 Ko, `root-D4qTH_Yf.css` 10,6 Ko gzip (53 Ko brut).
- **Polices** : Sora en woff2, `font-display: swap`, 3 graisses (400/600/800) latin, ≈ 14,7 à 15 Ko chacune (≈ 44 Ko), **non préchargées**.
- **Cache** : assets hachés `public, max-age=31536000, immutable` ; images `/clients/*` et logo OG `max-age=31536000` ; `events.js` `no-store` (voulu) ; HTML `max-age=0`. Compression gzip active sur HTML, JS, CSS.
- **Tiers** : un seul, Google Analytics (`gtag/js` injecté 1,5 s après l'événement `load`). Aucun iframe, aucune vidéo dans le DOM rendu (voir constat ci-dessous).

## Ce qui fonctionne

- Site statique pré-rendu : contenu et H1 dans le HTML initial, TTFB ~0,12 s, HTML léger.
- Image LCP de l'accueil : `fetchPriority="high"`, `srcSet` 640/768/1024/1536, `sizes`, `width`/`height`, **préchargement avec `imageSrcSet`/`imageSizes`**, pas de lazy.
- Gzip et cache `immutable` d'un an sur tous les fichiers hachés ; HTML non mis en cache.
- Google Analytics différé (load + 1,5 s) : n'affecte pas le LCP.
- Avis Google (Featurable), Leaflet et vidéos chargés côté navigateur uniquement, hors du chemin critique du HTML.
- Polices `font-display: swap`, woff2.
- Toutes les images de gabarit (accueil, logos, mascotte) portent `width`/`height` ; `loading="lazy"` + `decoding="async"` sur les images sous la ligne de flottaison.
- Animations en `transform`/`opacity` (CSS), pas de bibliothèque d'animation.
- 0 erreur console au rendu mobile des pages testées.

## Constats Performance

### Haute

**P1. Cinq préchargements d'images concurrents du hero sur l'accueil (LCP mobile)**
- Preuve : `<head>` de `/` : `logo-texte-480` (27 Ko), `hero-scene` (640 à 1536), `logo-texte` srcset (480/640/960, jusqu'à 70 Ko), `perso-tete-64/128`. Sur un mobile lent, ces ressources partagent la bande passante avec le hero (71 à 162 Ko).
- Correction : ne conserver que le preload du hero (`fetchPriority="high"`). Supprimer le preload `logo-texte-480` (l'`<img>` est déjà dans le HTML, découvert immédiatement) et celui de `perso-tete` ; garder le logo du hero seulement s'il est le plus grand élément, sinon le laisser en lazy/standard. Alternative : `fetchPriority="low"` sur ces images secondaires.
- Vérifier : PSI/Lighthouse mobile, onglet Réseau : le hero doit démarrer en premier ; « LCP request discovery » et « Resource load delay » doivent rester < 200 ms.

**P2. Sizes du hero potentiellement trop généreux et fichier desktop lourd**
- Preuve : `hero-scene-1536-D_lEKMHD.webp` = **314 126 octets** (affiché en plein écran desktop) ; `-1024` = 161 790 ; `-768` = 89 876 ; `-640` = 71 282. `sizes="(max-width: 767px) 87vw, 100vw"` : un mobile 390 px DPR 3 choisit déjà ~1024 (162 Ko).
- Correction : régénérer le hero avec une qualité plus basse (q 60 à 65) ou en AVIF (cible 120 Ko pour 1536, 70 Ko pour 1024, 45 Ko pour 640). Vérifier que 87vw correspond bien à la largeur réelle du hero au CSS ; sinon ajuster `sizes`.
- Vérifier : taille des fichiers dans `build/client/assets/` ; Lighthouse « Properly size images » / « Improve image delivery ».

### Moyenne

**P3. `/events/events.js` : script synchrone bloquant avant l'hydratation**
- Preuve : `<script src="/events/events.js"></script>` (sans `async`/`defer`) juste avant les scripts React, en fin de `<body>`, `no-store` : 4 527 octets bruts, 933 gzip, une requête réseau obligatoire (HTTP/1.1) avant le script d'amorçage qui hydrate.
- Impact : retarde légèrement l'hydratation (donc l'INP des toutes premières interactions) d'un aller-retour réseau.
- Correction : le déclarer avec `defer` en conservant l'ordre (script classique `defer` s'exécute avant les modules), ou l'insérer avant `<script type="module">` avec `async` et laisser `useEvents` gérer l'absence (`null`). Ne pas supprimer le `no-store`.
- Vérifier : onglet Réseau, `events.js` ne doit plus bloquer ; l'agenda doit toujours s'afficher.

**P4. Pas de préchargement des polices critiques**
- Preuve : aucun `<link rel="preload" as="font">` dans le `<head>` ; Sora latin 400/600/800 (≈ 44 Ko) découverts seulement après lecture de `root-D4qTH_Yf.css`. Le texte H1 (LCP des pages prestations/événements) attend la police ou s'affiche en police de secours puis « swap » : risque de petit décalage (CLS) et LCP texte retardé.
- Correction : précharger les deux woff2 de H1/corps (`sora-latin-800-normal-…woff2`, `sora-latin-400-normal-…woff2`) avec `crossorigin`, et ajuster la police de repli avec `size-adjust` pour réduire le décalage. Retirer la graisse 600 si peu utilisée.
- Vérifier : Lighthouse « Ensure text remains visible », CLS dans l'enregistrement Performance.

**P5. JS d'hydratation ≈ 150 Ko gzip sur toutes les pages**
- Preuve : 38 fichiers chargés sur `/` dont `entry.client` 67 Ko + `chunk-6KYCQHYJ` 44 Ko ; ~22 requêtes minuscules d'icônes (`*Icon-*.js` 0,4 à 1,2 Ko) en modulepreload, soit autant d'allers-retours sur HTTP/1.1 si HTTP/2 n'est pas activé chez OVH.
- Correction : regrouper les icônes Heroicons dans un seul chunk (`manualChunks` Rollup dans `vite.config`) ; vérifier le plan OVH pour HTTP/2. Surveiller l'INP sur mobile milieu de gamme.
- Vérifier : nombre de requêtes JS à l'accueil (cible < 15) ; `npx vite-bundle-visualizer`.

**P6. Éléments d'arrière-plan animés de grande taille (`StageLights`)**
- Preuve : 6+ `span.spot` de 40 à 50 rem avec dégradé coloré et `animation: spot-drift` (transform) + 3 `streak` ; `data-mobile-off` masque une partie sur mobile. Grandes surfaces composées en continu : coût GPU/batterie, pas de blur (conforme).
- Correction : s'assurer que `will-change` est limité, que les `spot` sont `pointer-events: none`, et réduire encore le nombre sur mobile (≤ 3). Déjà coupé par `prefers-reduced-motion`.
- Vérifier : DevTools > Rendering > Layer borders / Frame rendering stats sur un téléphone moyen de gamme.

### Basse

**P7. Aucune vidéo trouvée dans le DOM rendu de `/` et `/dydy-quiz`**
- Preuve : rendu Chromium mobile : 0 `<video>`, 0 `<source>` sur `/` et `/dydy-quiz` (CLAUDE.md prévoit `dydy-quiz-accueil.mp4`/`presentation.mp4`). Soit la version en ligne ne les contient pas encore, soit elles sont injectées après interaction/scroll (non déclenché par le rendu). Non évaluable. À vérifier avant mise en ligne : `preload="none"`, `poster` avec `width`/`height`, mp4 mobile distinct, `muted playsinline`, pas de lecture hors écran.
- Vérifier : poids de chaque mp4 (cible < 1,5 Mo pour la boucle d'accueil), absence de téléchargement avant visibilité.

**P8. HTML `Cache-Control: max-age=0` sans validation visible**
- Preuve : en-têtes de `/` : `Cache-Control: max-age=0`, `Expires` = date de la requête ; pas d'`ETag` observé.
- Correction : ajouter `ETag`/`Last-Modified` (Apache `FileETag MTime Size`) pour permettre des 304 sur visite répétée.
- Vérifier : `curl -I` doit montrer `ETag` ; seconde requête avec `If-None-Match` renvoie 304.

**P9. Google Analytics chargé 1,5 s après `load`**
- Bon pour le LCP. Écarte toutefois les rebonds rapides des statistiques ; acceptable. Si un bandeau de consentement est requis (RGPD/CNIL), le charger après consentement.

## Constats Images (score 66/100)

### Haute

**I1. Logos clients massivement surdimensionnés (accueil)**
- Preuve (affichés à 48×48 px, `h-12 w-12`) :
  - `/clients/La ville en rose.png` : 171 873 octets, 1184×1172
  - `/clients/Le cul de bouteille.jpg` : 136 169 octets, 1413×1413
  - `/clients/La table ronde.webp` : 59 116 octets
  - `/clients/Le BBT.jpg` : 50 447 octets, 664×664
  - `/clients/Cosy.jpg` : 36 436 octets, 1080×1080
  - `/clients/La taverne blagnac.jpg` : 26 295 ; `Decathlon.jpg` 22 592 (1164×720) ; `girousens.jpg` 22 040 ; autres < 8 Ko.
  - Total ≈ **544 Ko** pour 11 pastilles de 48 px (96 px en 2x), soit 6 à 10 fois trop. Le bandeau est dupliqué (22 `<img>`, mêmes URL, donc téléchargés une fois).
  - Aucun `srcset`, formats JPG/PNG (non WebP/AVIF).
- Correction : redimensionner chaque logo à 96×96 (192 px max si retina) et exporter en WebP (q 80) : cible 2 à 6 Ko chacun, ≈ 40 Ko au total. Idéalement les passer par `src/assets/` (imagetools) plutôt que `public/`. Renommer sans espaces ni majuscules (`la-ville-en-rose.webp`).
- Vérifier : somme des octets des `/clients/*` < 60 Ko ; Lighthouse « Efficiently encode images » et « Properly size images ».

### Moyenne

**I2. Galerie : images sans `width`/`height` (risque CLS)**
- Preuve : `/galerie`, 3 photos (`02-presentation-DEchqCZo.webp`, `03-dydy-fantasy-Dq4FQiI0.webp`, `soiree-blind-test-karaoke-salle-des-fetes-BI88ngeI.webp`) : `loading="lazy"`, `srcSet` présent, mais **ni `width` ni `height`** (alors que les mêmes photos ont des dimensions sur l'accueil). Les images lazy sans dimensions provoquent un décalage de mise en page quand elles se chargent.
- Correction : ajouter `width`/`height` (ou `aspect-ratio` CSS) dans le composant de galerie à partir des métadonnées d'`vite-imagetools` (`?as=metadata` ou `w`/`h`).
- Vérifier : Lighthouse « Image elements do not have explicit width and height », CLS de `/galerie` < 0,05.

**I3. Textes alternatifs générés mécaniquement à partir du nom de fichier**
- Preuve : galerie `alt="Dydy fantasy animateur toulouse — Dydy Fantasy"`, `alt="Soiree blind test karaoke salle des fetes"` (sans accents) ; accueil `alt="Dydy Fantasy en soirée : dydy fantasy"` (tautologique), `alt="…: presentation"`, `alt="…: scene salle des fetes"` (sans accents). Aucune alt absente (0 `img_without_alt` sur 16 pages) et les empty-alt (1 à 2 par page) sont décoratifs (mascotte, tête, voir ci-dessous) : conforme.
- Correction : nommer les fichiers avec des mots descriptifs et accentués dans `src/assets/…` (ex. `soiree-blind-test-karaoke-salle-des-fetes-toulouse.webp` + mapping) ou prévoir un fichier de légendes `alt`. Retirer le suffixe « — Dydy Fantasy » répété.
- Vérifier : `grep alt` sur l'HTML pré-rendu ; relecture rapide des 3 alt de la galerie et des 3 de l'accueil.

**I4. Logo texte 960 px (70 Ko) potentiellement servi dans le hero**
- Preuve : `<img src="logo-texte-960-x_S8wo0m.webp">` (hero) avec `srcSet` 480/640/960 = 26,8 / ? / 69,6 Ko et `sizes="(min-width: 768px) 30rem, 85vw"` ; préchargé. Sur desktop 30 rem = 480 CSS px, mobile 85vw ≈ 330 px : le 960 n'est utile qu'en DPR 2 desktop.
- Correction : vérifier la qualité WebP du logo (texte plat : q 70 ou PNG-8/SVG vectoriel suffit). Un SVG du logo texte serait < 15 Ko.
- Vérifier : taille du fichier après conversion ; rendu net en retina.

### Basse

**I5. Pages prestations/événements sans photo au-dessus de la ligne de flottaison**
- Preuve : `/prestations/blind-test-quiz`, `/evenements/mariage`, `/dydy-quiz` : seulement 4 `<img>` (logo, 2 mascotte). Bon pour le LCP (texte) mais peu de preuve visuelle ; si des photos sont ajoutées, utiliser `fetchpriority="high"` + preload sur la seule image LCP et dimensions explicites.

**I6. Images décoratives avec `alt=""` correctes**
- `perso-tete-64` (préchargée, `alt=""`) et `perso-240` (`alt=""`) sont décoratives : OK. Rien à corriger.

**I7. Format AVIF absent**
- Tous les raster sont WebP (bon). Le passage à AVIF réduirait encore le hero de 25 à 35 %, mais le gain principal reste I1 et P2.

## Plan d'action priorisé

1. I1 : recompresser les 11 logos clients (gain ≈ 500 Ko, 0 risque).
2. P1 : réduire les preloads de l'accueil au seul hero.
3. P2 : alléger `hero-scene-1536` et 1024.
4. I2 : width/height sur la galerie.
5. P3 + P4 : `events.js` en `defer`, préchargement des polices Sora 400 et 800.
6. I3 : meilleurs alt.
7. P5 : fusion des chunks d'icônes ; vérifier HTTP/2 chez OVH.

## Comment vérifier

- Relancer PSI avec une clé Google API (`/seo google setup`) puis `pagespeed_check.py` et `crux_history.py` sur les 5 URL en mobile.
- DevTools > Performance (throttling Slow 4G, CPU x4) : LCP, « Element render delay », CLS.
- `curl -sI` sur les ressources ci-dessus pour tailles et en-têtes.
- Search Console > Signaux Web essentiels (données terrain, 28 jours).
