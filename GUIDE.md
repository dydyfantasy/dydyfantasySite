# Gérer mon site sans Claude

Recettes pas à pas pour les mises à jour courantes. Tout se fait dans le dossier du projet, ouvert dans VS Code.

## Les 3 commandes à connaître

Dans le terminal de VS Code (menu Terminal → Nouveau terminal) :

| Commande | À quoi ça sert |
|---|---|
| `npm run dev -- --host` | Voir le site en direct sur le PC **et sur le téléphone** (même wifi, adresse « Network » affichée). Ctrl+C pour arrêter. |
| `npm run videos` | Alléger les vidéos déposées (voir plus bas). |
| `npm run build` | Fabriquer le site à mettre en ligne, dans `build/client/`. |

Après chaque modification, vérifiez avec `npm run dev -- --host` avant de mettre en ligne.

---

## Ajouter des photos

Déposez simplement les fichiers (jpg, png, webp) dans le bon dossier. Pas besoin de les redimensionner : le site les optimise tout seul.
**Le nom du fichier sert de description pour Google** : décrivez ce qu'on voit, en minuscules avec des tirets, ex. `bars-soiree-quiz-colomiers.jpg` (pas `IMG_4521.jpg`).

| Où sur le site | Dossier | Règle de nom |
|---|---|---|
| Accueil, tuiles « Vos événements » + haut des pages événement | `src/assets/evenements/` | Commence par `mariage`, `entreprise`, `anniversaire` ou `bars` (une photo par événement, en paysage de préférence : sinon recadrée au centre) |
| Haut des pages Karaoké, DJ, Sur mesure | `src/assets/prestations/` | Commence par `karaoke`, `dj` ou `sur-mesure` (en paysage de préférence : sinon recadrée au centre) |
| Accueil, carrousel de secours de « Mais c'est qui Dydy Fantasy ? » (affiché seulement si aucune vidéo n'est marquée `accueil`) | `src/assets/carrousel/` | Ordre = ordre alphabétique : commencez par `04-`, `05-`… |
| Page Galerie (photos **et vidéos**) | `src/assets/galerie/mariages/`, `entreprises/`, `anniversaires/`, `bars/`, `soirees/` | Libre (descriptif). Vidéos : voir plus bas |
| Page Dydy Quiz, grand écran de « Une appli, mille façons de jouer » (une capture par mode) | `src/assets/dydy-quiz/` | Commence par le mode : `quiz`, `bingo-musical`, `sondages`, `challenge-photo`, `match-machine` ou `classement` (voir `LISEZ-MOI.txt`) |

⚠️ Ne mettez dans ces dossiers **que** les photos à afficher (pas de brouillons ni de copies) : tout ce qui s'y trouve apparaît sur le site.

Vie privée : de dos ou de loin, c'est l'idéal. Visages reconnaissables = accord des personnes. Pas d'enfants reconnaissables.

## Ajouter ou changer une vidéo

1. Déposez la vidéo dans `src/assets/videos/` avec **exactement** ce nom (en écrasant l'ancienne) :
   - `dydy-quiz-accueil.mp4` : boucle de l'accueil, format paysage, sans son ;
   - `dydy-quiz-accueil-mobile.mp4` : même boucle en portrait, pour les téléphones ;
   - `dydy-quiz-presentation.mp4` : vidéo « C'est quoi Dydy Quiz ? », en grand en haut de la page Dydy Quiz, avec le son (format paysage, pour ordinateur) ;
   - `dydy-quiz-presentation-mobile.mp4` : même vidéo en portrait, pour les téléphones (facultatif).
2. Image d'attente (affichée avant le chargement) : même nom en `.jpg`, ex. `dydy-quiz-accueil.jpg`.
3. Conseillé : tapez `npm run videos`. La commande allège les nouvelles vidéos et range vos originaux dans `medias-sources/videos/` (jamais publié). On peut la relancer sans risque.
   - Message « fichier bloqué » : arrêtez `npm run dev` (Ctrl+C) et relancez `npm run videos`.

Les vidéos marchent aussi sans `npm run videos`, elles sont juste plus lourdes à charger.

### Vidéos de la galerie

1. Déposez la vidéo brute (`.mp4` ou `.mov` de l'iPhone) dans la bonne catégorie de `src/assets/galerie/` (`mariages/`, `bars/`…), avec un nom descriptif, ex. `karaoke-la-ville-en-rose-colomiers.mov`.
2. Tapez `npm run videos` : la vidéo est allégée **en gardant le son**, le `.mov` devient `.mp4`, l'original est rangé dans `medias-sources/galerie/`.
3. **Obligatoire pour les `.mov`** : sans cette étape, la galerie ne les affiche pas.

La commande crée aussi, dans `src/assets/galerie-apercus/`, une image d'aperçu par vidéo (vignettes de la galerie). **Ce dossier est automatique : n'y touchez pas.**

### Choisir les vidéos montrées sur l'accueil (« Mais c'est qui Dydy Fantasy ? »)

Ajoutez `accueil` au début du nom de la vidéo dans la galerie, ex. `karaoke-ville-en-rose.mp4` → `accueil-karaoke-ville-en-rose.mp4`, puis tapez `npm run videos`.

- L'accueil montre un extrait muet de 6 secondes de chaque vidéo choisie (6 maximum, dans l'ordre alphabétique des catégories puis des noms). Un clic mène à la galerie, sur la bonne catégorie.
- Pour retirer une vidéo de l'accueil : enlevez `accueil-` de son nom, puis `npm run videos`.
- Le mot « accueil » n'apparaît pas dans la description lue par Google.

Les pages Mariage, Entreprise, Anniversaire et Bars montrent aussi automatiquement 4 extraits de leur catégorie de galerie (section « En images ») : ceux marqués `accueil` d'abord, puis les autres par ordre alphabétique.

Visez des vidéos courtes (15 à 60 secondes). Dans la galerie, la vidéo s'ouvre en grand au clic, avec le son et les boutons de lecture.

## Ajouter une référence client (bandeau « Ils m'ont fait confiance »)

1. Déposez le logo (carré si possible, jpg / png / webp, peu importe son poids) dans `src/assets/clients/`, ex. `mon-client.png`. Il est réduit et converti en WebP automatiquement à la compilation.
2. Ouvrez `src/components/led/LedClients.jsx` et ajoutez une ligne dans la liste `CLIENTS`, sur le modèle des autres (`logo` = nom exact du fichier, sans dossier) :

```js
{ name: "Nom du client", type: "Bar / restaurant", location: "Ville (31)", logo: "mon-client.png" },
```

Gardez bien les guillemets, les virgules et l'accolade. Sans logo, supprimez simplement `logo: "…"` : l'initiale s'affiche à la place.

## Mettre à jour l'agenda (prochaines dates)

L'agenda ne nécessite **pas** de rebuild : il est dans `public/events/events.js` (et sur le serveur dans `www/events/events.js`).

- Copiez un bloc `{ … },` existant et changez les valeurs. La date s'écrit `"2026-12-31"`, l'heure `"20h00"`.
- `publicEvent: false` pour une soirée privée (pas de lien vers la carte).
- Affiche facultative : déposez l'image dans `public/events/` et écrivez `poster: "/events/mon-affiche.jpg"`.

Sur le serveur, vous pouvez modifier directement `www/events/events.js` avec WinSCP : c'est en ligne immédiatement.

## Changer un texte

Cherchez la phrase dans VS Code (Ctrl+Maj+F, dans tout le projet), puis modifiez-la entre les guillemets. Repères :

| Texte | Fichier |
|---|---|
| Accueil : quiz du haut | `src/components/led/HeroLed.jsx` |
| Accueil : tuiles « Vos événements » | `src/components/led/LedEvents.jsx` |
| Accueil : « Mais c'est qui Dydy Fantasy ? » | `src/components/led/LedAbout.jsx` |
| Chiffres (soirées par mois, invités…) | `src/components/led/LedStats.jsx` |
| Pages Mariage, Entreprise, Anniversaire, Bars | `src/pages/evenements/` |
| Pages Blind test, Karaoké, DJ, Sur mesure | `src/pages/prestations/` |
| Autres pages (Qui suis-je, Contact, Dydy Quiz…) | `src/pages/` |

Le titre et la description vus dans Google sont dans le bloc `seo={{ … }}` (ou `<Seo … />`) en haut de chaque page : titre ~60 caractères max, description ~155 max.

## Mettre en ligne

1. **D'abord**, avec WinSCP, rapatriez le dossier serveur `www/events/` dans `public/events/` du projet (sinon l'envoi écrase l'agenda en ligne).
2. `npm run build`
3. Avec WinSCP (`ftp.cluster021.hosting.ovh.net`), envoyez **le contenu** de `build/client/` dans `www/`.
4. Vérifiez le site sur le téléphone.

## Suivre ses visiteurs et son référencement

Le site n'utilise **aucun cookie** de mesure (pas de Google Analytics) : pas de bandeau cookies à afficher.

- **Position sur Google, recherches tapées, clics et impressions** : Search Console (search.google.com/search-console), menu « Performances ».
- **Nombre de visiteurs** (toutes sources : Google, Facebook, Instagram, liens directs) : espace client OVH, Hébergements, onglet « Statistiques et logs ».

⚠️ Ne rajoutez pas Google Analytics (ou un autre outil qui dépose des cookies) sans bandeau de consentement : c'est obligatoire dans ce cas (règles CNIL).

## Si quelque chose casse

- Le site ne s'affiche plus en `npm run dev` : le message d'erreur dans le terminal indique le fichier et la ligne (souvent une virgule ou un guillemet oublié).
- Annuler toutes les modifications non enregistrées dans git : dans VS Code, onglet « Contrôle de code source » (icône branches), clic droit sur le fichier → « Ignorer les modifications ».
- Le site en ligne reste celui du dernier envoi WinSCP : tant que vous n'envoyez rien, rien ne change en ligne.
