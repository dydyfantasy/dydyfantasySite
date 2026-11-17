# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Site vitrine de **Dydy Fantasy**, animateur événementiel basé à Toulouse : DJ, quiz interactifs, blind tests, karaoké et animations personnalisées. Domaine de production : `https://dydyfantasy.fr`. Tout le contenu visible est en **français**.

Objectifs du site :

- Générer des demandes de devis et faciliter la prise de contact.
- Développer la visibilité sur les recherches locales (Toulouse / Occitanie).
- Valoriser photos, vidéos, événements réalisés et avis clients.
- Donner une image professionnelle, moderne, dynamique et conviviale.

Zone d'intervention : basé à l'ouest de Toulouse ; Haute-Garonne, Gers voisin, Tarn (clients existants). Ne pas inventer de références : citer uniquement des clients et prestations réelles (ex. Decathlon : animation micro / speaker d'une journée avec démos).

## Commandes

```bash
npm run dev       # serveur de dev (react-router dev)
npm run build     # build de production -> build/client/
npm run preview   # sert build/client/
npm run lint      # ESLint (config flat dans eslint.config.js)
```

Pas de suite de tests. Audits : `/bilan` (agents `audit-technique` et `audit-seo` dans `.claude/agents/`, rapports et historique dans `audits/`).

## Stack et architecture

React 19 + Vite 7 (JSX, pas de TypeScript), Tailwind CSS v4, React Router 7 en **mode framework** (`ssr: false`, site statique), `motion` pour les animations, `react-helmet` pour le SEO par page, `react-leaflet` pour la carte de zone d'intervention.

- `react-router.config.js` : `appDirectory: "src"`, `ssr: false`. Importer depuis `react-router` (plus `react-router-dom`).
- `src/routes.js` : liste des routes (adresse -> fichier de `src/pages/`), dont `*` -> `NotFound.jsx`.
- `src/root.jsx` : `Layout` = squelette HTML de toutes les pages (head, meta par défaut, JSON-LD `LocalBusiness`, Google Analytics, script de l’agenda) ; composant par défaut = Header + `<Outlet />` + Footer + widgets flottants (`WhatsAppButton`, `FloatingNextEvent`, `ScrollToHash`).
- `src/entry.client.jsx` : hydratation (`hydrateRoot` + `HydratedRouter`).
- `src/pages/` : pages de route, composées de sections de `src/components/`. Chaque page définit son `<title>` et ses meta via `react-helmet`.
- Styles : surtout des classes Tailwind inline dans le JSX. Tailwind v4 est chargé par le plugin `@tailwindcss/vite` et `@import "tailwindcss"` dans `src/index.css` (pas de `tailwind.config.js` en v4). Quelques feuilles de style spécifiques dans `src/css/`.
- `Reveal.jsx` : wrapper d'animation d'apparition au scroll (motion `useInView`), réutilisé partout.
- Le code des composants est exécuté dans Node.js à la compilation (génération HTML) : pas d’accès à `window`/`document`/`localStorage` pendant le rendu, uniquement dans `useEffect`. Les bibliothèques qui touchent `window` à l’import se chargent côté navigateur (ex. `ClientOnlyZoneMap.jsx` pour Leaflet).
- État actuel : mode SPA (un seul `index.html`, contenu injecté par JavaScript). Le pré-rendu par page est prévu (phase 1, étape 4).

### Agenda des événements (modifiable sans rebuild)

Les événements ne sont **pas** dans le bundle. `public/events/events.js` définit un global `window.DYDY_EVENTS = [...]`, chargé par une balise `<script>` classique dans `root.jsx` avant les scripts React. `AgendaSection.jsx` et `FloatingNextEvent.jsx` le lisent via le hook `src/hooks/useEvents.js` (`null` tant que non lu, puis tableau). L'agenda se met donc à jour sur le serveur en remplaçant uniquement ce fichier ; `.htaccess` désactive son cache.

Champs d'un événement : `id`, `title`, `date` (`YYYY-MM-DD`, parsée en date locale), `hour` (ex. `"20h00"`), `place`, `city`, `address` (optionnel), `type`, `description`, `publicEvent` (false = événement privé, pas de lien carte), `isNew` (optionnel), `poster` (optionnel, chemin sous `/events/`). Les affiches vont dans `public/events/`.

### Assets

- `public/` est servi à la racine : logos clients (`public/clients/`, référencés en chemin absolu depuis `TrustedBySection.jsx`), affiches d'événements, `robots.txt`, `sitemap.xml`, `.htaccess`.
- `src/assets/` : images et vidéos importées par les composants (hashées par Vite).
- Toute nouvelle route doit être ajoutée à `public/sitemap.xml`.

### Services externes

- Formulaire de contact (`ContactForm.jsx`) : envoi direct vers Formspree, pas de backend.
- ID Google Analytics et données JSON-LD de l'entreprise : dans `root.jsx`.
- `GoogleReviewsSection.jsx` utilise `react-google-reviews`.

## Déploiement

Build statique hébergé sur Apache. `public/.htaccess` (copié dans `build/client/`) force HTTPS + domaine sans www, réécrit les chemins inconnus vers `index.html` pour le routing client, et règle gzip et cache.

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
