# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Site vitrine de **Dydy Fantasy**, animateur événementiel basé à Toulouse : DJ, quiz interactifs, blind tests, karaoké et animations personnalisées. Domaine de production : `https://dydyfantasy.fr`. Tout le contenu visible est en **français**.

Objectifs du site :

- Générer des demandes de devis et faciliter la prise de contact.
- Développer la visibilité sur les recherches locales (Toulouse / Occitanie).
- Valoriser photos, vidéos, événements réalisés et avis clients.
- Donner une image professionnelle, moderne, dynamique et conviviale.

Coordonnées de référence (à garder identiques partout : site, JSON-LD, fiche Google) : basé à **Fonsorbes (31470)**, tél. `+33 6 95 95 33 56`, réseaux : Facebook et Instagram uniquement. La fiche Google Business Profile est en **zone desservie** (adresse masquée, liste de villes autour de Toulouse et Toulouse) : le JSON-LD doit refléter la même liste dans `areaServed`, sans adresse de rue.

Zone d'intervention : basé à Fonsorbes (ouest de Toulouse), déplacements dans un rayon d'environ 50 km ; Haute-Garonne, Gers voisin, Tarn (clients existants). Ne pas inventer de références : citer uniquement des clients et prestations réelles (ex. Decathlon : animation micro / speaker d'une journée avec démos).

## Commandes

```bash
npm run dev       # serveur de dev (react-router dev)
npm run build     # build de production -> build/client/
npm run preview   # sert build/client/
npm run lint      # ESLint (config flat dans eslint.config.js)
```

Pas de suite de tests. Audits : `/bilan` (agents `audit-technique` et `audit-seo` dans `.claude/agents/`, rapports et historique dans `audits/`).

## Stack et architecture

React 19 + Vite 7 (JSX, pas de TypeScript), Tailwind CSS v4, React Router 7 en **mode framework** (`ssr: false`, site statique), `react-leaflet` pour la carte de zone d'intervention.

- `react-router.config.js` : `appDirectory: "src"`, `ssr: false`. Importer depuis `react-router` (plus `react-router-dom`).
- `src/routes.js` : liste des routes (adresse -> fichier de `src/pages/`), dont `*` -> `NotFound.jsx`.
- `src/root.jsx` : `Layout` = squelette HTML de toutes les pages (head commun : charset, viewport, favicon, JSON-LD `LocalBusiness`, Google Analytics, script de l’agenda) ; composant par défaut = `LedHeader` + `<Outlet />` + `LedFooter` + `ScrollToHash` + `NextEventBubble`.
- `src/entry.client.jsx` : hydratation (`hydrateRoot` + `HydratedRouter`).
- `src/pages/` : pages de route, composées de sections de `src/components/`. Chaque page contient exactement un `<Seo />` (`src/components/Seo.jsx` : title, description, canonical ou `noindex`, Open Graph). Balises natives React 19, placées automatiquement dans le `<head>` : pas de `react-helmet`, et ne pas remettre de `<title>`/description dans `root.jsx` (doublons).
- Styles : surtout des classes Tailwind inline dans le JSX. Tailwind v4 est chargé par le plugin `@tailwindcss/vite` et `@import "tailwindcss"` dans `src/index.css` (pas de `tailwind.config.js` en v4). Quelques feuilles de style spécifiques dans `src/css/`.
- Apparitions au défilement : `src/components/led/ScrollReveal.jsx`. La bibliothèque `motion` a été retirée : animations en CSS uniquement.
- Le code des composants est exécuté dans Node.js à la compilation (génération HTML) : pas d’accès à `window`/`document`/`localStorage` pendant le rendu, uniquement dans `useEffect`. Les bibliothèques qui touchent `window` à l’import se chargent côté navigateur (ex. `ClientOnlyZoneMap.jsx` pour Leaflet).
- **Pré-rendu** : `prerender` dans `react-router.config.js` liste les pages générées en HTML complet (`build/client/<page>/index.html`). Toute nouvelle page doit y être ajoutée, ainsi que dans `public/sitemap.xml`. `/404` est pré-rendu pour servir de page d’erreur Apache.

### Refonte v2 (branche `design/accueil-v2`)

Identité « soirée / LED » : fond sombre, néons cyan `#19d3f0` et rose `#ff2fae`, police Sora, styles partagés dans `src/css/led.css` (classe `.led` + variables `--ink`, `--cyan`, `--pink`, `--gold`). Pas de `filter: blur`/`backdrop-filter` animés ; animations en `transform`/`opacity` uniquement, toutes coupées par `prefers-reduced-motion`.

- `src/components/led/` : `LedHeader` (menus « Prestations » / « Événements » avec icônes), `LedFooter`, `NextEventBubble`, `StageLights` (lumières de fond), `ScrollReveal` (apparition au défilement, un seul IntersectionObserver, contenu visible dans le HTML pré-rendu), `SectionTitle`, sections de l'accueil (`HeroLed`, `LedEvents`, `LedAgenda` + fiche `<dialog>`, `LedClients`, `LedReviews`, `LedAbout` + `PhotoCarousel`, `LedFinal` avec la mascotte).
- `src/components/led/ServicePage.jsx` : **modèle commun** des pages de prestation et d'événement (hero + fil d'Ariane, points, formats, frise, inclus, FAQ, liens croisés, JSON-LD `Service` + `BreadcrumbList`). Pages dans `src/pages/prestations/` et `src/pages/evenements/` : uniquement du contenu passé en props.
- `src/data/navigation.js` : **source unique** des pages prestations / événements (lien, libellé, icône, couleur) pour le menu, le pied de page et « À découvrir aussi ». Ajouter une page = l'ajouter ici + `src/routes.js` + `prerender` + `public/sitemap.xml`.
- Photos déposées sans code : `src/assets/carrousel/` (carrousel de l'accueil) `src/assets/galerie/<catégorie>/` (page `/galerie`), `src/assets/evenements/` (tuiles « Vos événements » de l’accueil : nom commençant par `mariage`, `entreprise`, `anniversaire` ou `bars`) et `src/assets/dydy-quiz/` (captures de l’appli, page `/dydy-quiz`), optimisées à la compilation par `vite-imagetools` ; le nom de fichier sert de texte alternatif (SEO).
- Identité : `src/assets/brand/` (logo texte, mascotte, tête de la mascotte), favicon tête de la mascotte.
- **Style v3 « soirée en direct »** (toutes les pages portent la classe `fun` sur leur conteneur `.led`) : titres de section géants numérotés comme des pistes (`SectionTitle`, compteur CSS), mots en couleur en néon, `Spectrum` (spectre audio en bas des heros), `LedDivider` (bandes LED entre sections), `PeekingMascot` (tête de la mascotte + bulle au bord de l’écran, grand écran uniquement, parent `relative`), bulle de la mascotte dans `LedFinal` (prop `bubble`), reflet sur les boutons `.btn-neon`. Accueil : quiz en tuiles pleines + compte à rebours + confettis, chiffres sur bande inclinée (`LedStats band` + `CountUp`), tuiles événements en flyers paysage (photos dans `src/assets/evenements/`), aperçu Dydy Quiz (`LiveLeaderboard`, remplacé par la vidéo si présente).
- Guide utilisateur (gérer le site sans Claude) : `GUIDE.md`, à tenir à jour. `npm run videos` (`scripts/videos.mjs`) compresse les vidéos de `src/assets/videos/` et `src/assets/galerie/*/` avec ffmpeg et range les originaux dans `medias-sources/` (même chemin) ; génère aussi `src/assets/galerie-apercus/` (image d’aperçu de chaque vidéo de galerie + extrait muet de 6 s des vidéos dont le nom contient « accueil », montrés par `GalleryClips` dans `LedAbout` sur l’accueil, à la place du carrousel photo qui ne sert plus que de secours ; données communes dans `src/data/galerie.js`) (ignoré par git).
- Vidéos déposées sans code : `src/assets/videos/` (`dydy-quiz-accueil.mp4` boucle muette de l’accueil, `dydy-quiz-presentation.mp4` page `/dydy-quiz`, image d’attente du même nom), lues via `videoAssets.js`. Données VideoObject : `PRESENTATION_META` dans `src/pages/DydyQuiz.jsx` (date + durée).
- Chiffres réels de l’activité (soirées par mois, invités, bars résidents) : `src/components/led/LedStats.jsx`, à tenir à jour.
- Ne jamais inventer de chiffres, références ou prestations : textes basés sur les infos réelles du site et de l'utilisateur.

### Agenda des événements (modifiable sans rebuild)

Les événements ne sont **pas** dans le bundle. `public/events/events.js` définit un global `window.DYDY_EVENTS = [...]`, chargé par une balise `<script>` classique dans `root.jsx` avant les scripts React. `LedAgenda.jsx` et `NextEventBubble.jsx` le lisent via le hook `src/hooks/useEvents.js` (`null` tant que non lu, puis tableau). L'agenda se met donc à jour sur le serveur en remplaçant uniquement ce fichier ; `.htaccess` désactive son cache.

Champs d'un événement : `id`, `title`, `date` (`YYYY-MM-DD`, parsée en date locale), `hour` (ex. `"20h00"`), `place`, `city`, `address` (optionnel), `type`, `description`, `publicEvent` (false = événement privé, pas de lien carte), `isNew` (optionnel), `poster` (optionnel, chemin sous `/events/`). Les affiches vont dans `public/events/`.

### Assets

- `public/` est servi à la racine : logos clients (`public/clients/`, référencés en chemin absolu depuis `LedClients.jsx`), affiches d'événements, `robots.txt`, `sitemap.xml`, `.htaccess`.
- `src/assets/` : images et vidéos importées par les composants (hashées par Vite).
- Toute nouvelle route doit être ajoutée à `public/sitemap.xml`.

### Services externes

- Formulaire de contact (`ContactForm.jsx`) : envoi direct vers Formspree, pas de backend.
- ID Google Analytics et données JSON-LD de l'entreprise : dans `root.jsx`.
- `LedReviews.jsx` charge le widget `react-google-reviews` (Featurable) uniquement dans le navigateur, à l’approche de la section (`ReviewsWidget.jsx`, import différé). **Version figée à 1.7.4** par prudence. Le carrousel (react-slick) démarre à 3 avis et ne bascule à 1 sur mobile qu’au redimensionnement : `ReviewsWidget.jsx` calcule donc lui-même le nombre d’avis par écran (`maxItems`, ResizeObserver). Toute mise à jour du widget : vérifier le rendu en ouvrant directement la page sur un téléphone.

## Déploiement

Build statique hébergé sur Apache. `public/.htaccess` (copié dans `build/client/`) force HTTPS + domaine sans www, redirige en 301 les anciennes adresses (`/notre-approche`) et les adresses avec `/` final, sert `<page>/index.html` pour `/<page>` (`DirectorySlash Off`), renvoie un vrai 404 (`ErrorDocument 404 /404/index.html`), et règle gzip et cache. `npm run preview` (vite preview) ne reproduit pas ces règles : il sert l’accueil pour toutes les adresses, d’où de fausses erreurs d’hydratation #418.

Hébergement OVH mutualisé ; mise en ligne par WinSCP sur `ftp.cluster021.hosting.ovh.net` (et non cluster121, malgré ce qu'affiche une page de l'espace client), dossier `www`. ⚠️ `events.js` et les affiches sont souvent modifiés directement sur le serveur : les rapatrier dans `public/events/` avant chaque build, sinon l'envoi écrase l'agenda en ligne.

**On met en ligne le contenu de `build/client/`.** `build/`, `dist/` et `.react-router/` sont ignorés par git. Les anciens builds (`dist old/`, `distold24/`) ont été retirés du dépôt ; ils restent dans l'historique git (commit `4a516dd`).

## Architecture cible du site

Le site doit évoluer progressivement vers deux grands ensembles :

- **Mes prestations** : Blind Test & Quiz, Karaoké, DJ, Événements sur mesure.
- **Vos événements** : Mariage, Team building & événements d'entreprise, Anniversaire.

Chaque page doit répondre à une intention de recherche identifiable et présenter clairement la valeur de la prestation.

## SEO — priorité stratégique

Toute évolution doit tenir compte du référencement naturel :

- Title et meta description pertinents et propres à chaque page.
- Hiérarchie sémantique H1 / H2 / H3 respectée (un seul H1 par page).
- Contenus utiles, uniques, adaptés aux intentions de recherche.
- Images et vidéos optimisées (formats, dimensions, lazy loading).
- URL lisibles et pérennes ; maillage interne cohérent.
- Données structurées Schema.org lorsque pertinentes.
- Contenus importants accessibles aux moteurs de recherche.
- Core Web Vitals pris en compte.
- Acquis SEO préservés lors des refactorings (URL existantes, redirections si changement).

Ne jamais supposer qu'une optimisation améliore le SEO sans expliquer son mécanisme et, si possible, proposer une méthode de vérification.

## Expérience utilisateur

- Mobile-first.
- Navigation intuitive et rapide.
- Identité visuelle cohérente entre toutes les pages.
- Animations modernes, légères et pertinentes.
- Appels à l'action visibles sans être intrusifs.
- Accessibilité et lisibilité des contenus.

## Façon de travailler

- Respecter les conventions existantes ; favoriser la modularité et la réutilisation.
- Limiter les dépendances inutiles.
- Pas de réécriture complète sans justification ; préserver les fonctionnalités existantes.
- Proposer un plan avant toute modification majeure.
- Vérifier les changements avec `npm run lint` et `npm run build`.
