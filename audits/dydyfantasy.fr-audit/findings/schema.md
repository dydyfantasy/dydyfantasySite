# Audit Schema.org / données structurées — https://dydyfantasy.fr (site en ligne)

Date : 25/11/2026. Périmètre : 16 pages (15 du sitemap + /privacy), HTML brut récupéré par curl et blocs JSON-LD extraits et analysés un par un. Aucun Microdata ni RDFa. Dépôt local ignoré (refonte non publiée).

## Score : 68 / 100

| Critère | Note |
|---|---|
| Syntaxe et validité (JSON valide, @context https, URLs absolues) | 18/20 |
| LocalBusiness (propriétés, cohérence NAP, sameAs, logo) | 20/30 |
| Service + BreadcrumbList (pages prestation/événement) | 17/20 |
| Liens entre entités (@id, provider) | 6/10 |
| Opportunités exploitées (WebSite, Person, WebPage, VideoObject…) | 7/20 |

## Ce qui fonctionne

- Les 16 pages ont un JSON-LD valide. Aucune erreur de syntaxe, @context `https://schema.org` partout, URLs absolues.
- LocalBusiness identique sur toutes les pages, avec un @id stable `https://dydyfantasy.fr/#entreprise`.
- Pas d'adresse de rue : conforme au choix « zone desservie ». Seuls `addressLocality` Fonsorbes, `postalCode` 31470 et `addressRegion` Occitanie sont publiés.
- Téléphone `+33695953356` : même numéro que le `tel:` et le texte visible (06 95 95 33 56). Fonsorbes et la liste de zones sont aussi dans le texte visible. Pas de contradiction NAP.
- `logo` = `/icon-512.png`, PNG 512x512 qui répond 200 (carré, au-dessus du minimum de 112 px). `image` = `/dydy_fantasy_logo-v3.webp`, qui répond 200 (WebP 1782x396).
- `sameAs` : Facebook et Instagram uniquement, comme prévu.
- Service : `provider` pointe vers `{"@id": ".../#entreprise"}`, donc le lien entre entités est correct. Les 4 pages prestation et les 4 pages événement ont le même schéma.
- BreadcrumbList : positions 1..n, URLs absolues et sans slash final, cohérentes avec les canonicals. /prestations a bien le sien (Accueil > Prestations).
- Aucun type déprécié : pas de HowTo, pas de FAQPage, pas de SpecialAnnouncement. Pas de faux AggregateRating ni de faux Review.

## Constats

### Critique
Aucun.

### Haute

**H1. `areaServed` du LocalBusiness ne reflète pas la liste de villes de la fiche Google Business Profile.**
- Preuve : le bloc contient un `GeoCircle` de 50 km centré sur Toulouse (43.6047, 1.4442), puis `City` Toulouse, puis `AdministrativeArea` Haute-Garonne, Gers et Tarn. La règle du projet demande la même liste que la fiche Google (villes autour de Toulouse et Toulouse).
- Problèmes : le Tarn et le Gers entiers sont déclarés comme zone desservie, alors que le texte visible parle de « Gers voisin » et de « Tarn (clients existants) ». Le cercle de 50 km est lui-même un signal flou et incohérent avec ces régions entières.
- Correction : remplacer par la liste exacte des villes de la fiche Google. Je ne la connais pas, donc **à fournir par le propriétaire** (copie depuis GBP > Zone de service). Exemple ci-dessous avec des placeholders à remplacer. Garder Toulouse et, si voulu, Haute-Garonne. Ne garder Gers et Tarn que s'ils sont bien dans la fiche.
- Reproduire la même liste dans les `areaServed` des 8 Service. Ils contiennent aujourd'hui les chaînes `["Toulouse","Haute-Garonne","Gers","Tarn"]`, sans type.

**H2. Sous-type LocalBusiness trop générique.**
- Preuve : `"@type": "LocalBusiness"`.
- Correction : utiliser `EntertainmentBusiness`, sous-type valide de LocalBusiness qui décrit mieux un animateur ou DJ. Il n'y a pas de rich result Google lié, c'est uniquement de la précision sémantique. Voir bloc corrigé.

### Moyenne

**M1. Pas de `WebSite` ni de `Person` / auteur, et pas de lien entre entités.**
- Preuve : aucun bloc WebSite ni Person sur le site. La page /qui-suis-je est centrée sur l'animateur (« ingénieur développeur le jour, animateur le soir ») sans entité Person.
- Correction : ajouter `WebSite` (accueil uniquement) et `Person` (animateur, `founder` du LocalBusiness) ; le nom réel est **à fournir par le propriétaire**. Voir blocs.

**M2. Pas de `WebPage` ni de `@id` sur les Service et les BreadcrumbList.**
- Preuve : les Service n'ont pas d'`@id`. Rien ne relie le fil d'Ariane à la page.
- Correction : ajouter `@id` (`https://dydyfantasy.fr/prestations/dj#service`) et, de préférence, regrouper en `@graph` : WebPage avec `breadcrumb` et `mainEntity` pointant vers le Service. Voir exemple.

**M3. Les Service sont minimaux.**
- Preuve : seuls name, serviceType, url, description, provider et areaServed sont présents.
- Correction : ajouter `@id`, `image` et `category`. `offers` seulement si un prix réel est fourni (**à fournir par le propriétaire**, ne rien inventer).

**M4. Pas de VideoObject sur /dydy-quiz.**
- Preuve : la page /dydy-quiz en ligne ne contient aucune balise `<video>`, aucun mp4 ni embed YouTube/Vimeo. Le VideoObject n'est donc pas applicable aujourd'hui.
- Action : au moment de la mise en ligne d'une vidéo, ajouter un VideoObject avec `name`, `description`, `thumbnailUrl`, `uploadDate` ISO 8601, `duration` ISO 8601 et `contentUrl`. Les valeurs sont **à fournir** (date et durée réelles). Modèle plus bas.

**M5. Pas d'entité pour l'application Dydy Quiz.**
- Preuve : /dydy-quiz présente l'appli (« utilisée dans plus de 150 soirées ») mais le JSON-LD de la page est le LocalBusiness seul.
- Correction : ajouter un `WebApplication` (entité seulement, sans viser un rich result : Google exige prix et avis pour les applications). Pas d'`offers` ni d'`aggregateRating` sans données réelles.

### Basse

- **B1. `priceRange: "€"`** : valide mais peu informatif. Ne le remplacer que par une vraie fourchette (**à fournir par le propriétaire**), sinon le conserver ou le retirer.
- **B2. `url` du LocalBusiness** pointe vers l'accueil sur toutes les pages. C'est correct pour l'entité, juste à connaître.
- **B3. `email` absent.** À ajouter seulement s'il est publié sur le site (**à fournir**).
- **B4. Facebook sans `www`** (`https://facebook.com/profile.php?id=...`) : fonctionne, mais préférer `https://www.facebook.com/profile.php?id=61578462940099` pour la cohérence avec la fiche.
- **B5. Fil d'Ariane des pages événement** : Accueil > Mariage, sans niveau « Événements ». C'est cohérent car il n'existe pas de page /evenements. À revoir si une page hub est créée.
- **B6. Avis Google** : le widget est chargé côté navigateur. Ne pas ajouter d'`AggregateRating` auto-déclaré sur le LocalBusiness (non éligible aux résultats enrichis, risque d'action manuelle).
- **Info FAQ** : aucun FAQPage détecté sur le site en ligne. Rien à faire (résultats enrichis FAQ retirés par Google le 7 mai 2026).

## JSON-LD corrigé / à ajouter (prêt à copier)

Les valeurs entre `<<...>>` sont à fournir par le propriétaire.

### 1. LocalBusiness corrigé (remplace le bloc de `root.jsx`, sur toutes les pages)

```json
{
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "@id": "https://dydyfantasy.fr/#entreprise",
  "name": "Dydy Fantasy",
  "url": "https://dydyfantasy.fr/",
  "image": "https://dydyfantasy.fr/dydy_fantasy_logo-v3.webp",
  "logo": "https://dydyfantasy.fr/icon-512.png",
  "description": "Animateur et DJ à Toulouse : blind tests, quiz interactifs, karaokés et animations sur mesure pour mariages, entreprises, anniversaires, bars et restaurants.",
  "telephone": "+33695953356",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fonsorbes",
    "postalCode": "31470",
    "addressRegion": "Occitanie",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 43.5356, "longitude": 1.2317 },
  "areaServed": [
    { "@type": "City", "name": "Toulouse" },
    { "@type": "City", "name": "<<ville 2 de la fiche Google>>" },
    { "@type": "City", "name": "<<ville 3 de la fiche Google>>" }
  ],
  "founder": { "@id": "https://dydyfantasy.fr/#animateur" },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61578462940099",
    "https://www.instagram.com/dydy_fantasy"
  ],
  "priceRange": "€"
}
```
Compléter `areaServed` avec toutes les villes de la fiche Google (une ligne `City` par ville) et dupliquer la même liste dans les Service.

### 2. WebSite (accueil uniquement)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dydyfantasy.fr/#website",
  "url": "https://dydyfantasy.fr/",
  "name": "Dydy Fantasy",
  "inLanguage": "fr-FR",
  "publisher": { "@id": "https://dydyfantasy.fr/#entreprise" }
}
```

### 3. Person (page /qui-suis-je, ou accueil)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dydyfantasy.fr/#animateur",
  "name": "<<prénom et nom réels>>",
  "alias": "Dydy",
  "jobTitle": "Animateur événementiel et DJ",
  "url": "https://dydyfantasy.fr/qui-suis-je",
  "worksFor": { "@id": "https://dydyfantasy.fr/#entreprise" },
  "sameAs": ["https://www.instagram.com/dydy_fantasy"]
}
```

### 4. Service enrichi + WebPage + fil d'Ariane (exemple /prestations/dj, à décliner sur les 8 pages)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://dydyfantasy.fr/prestations/dj#webpage",
      "url": "https://dydyfantasy.fr/prestations/dj",
      "isPartOf": { "@id": "https://dydyfantasy.fr/#website" },
      "inLanguage": "fr-FR",
      "breadcrumb": { "@id": "https://dydyfantasy.fr/prestations/dj#breadcrumb" },
      "mainEntity": { "@id": "https://dydyfantasy.fr/prestations/dj#service" }
    },
    {
      "@type": "Service",
      "@id": "https://dydyfantasy.fr/prestations/dj#service",
      "name": "DJ mariage et soirée à Toulouse & Gers",
      "serviceType": "DJ",
      "url": "https://dydyfantasy.fr/prestations/dj",
      "description": "<<reprendre la description actuelle>>",
      "provider": { "@id": "https://dydyfantasy.fr/#entreprise" },
      "areaServed": [
        { "@type": "City", "name": "Toulouse" },
        { "@type": "City", "name": "<<ville de la fiche Google>>" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dydyfantasy.fr/prestations/dj#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://dydyfantasy.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Prestations", "item": "https://dydyfantasy.fr/prestations" },
        { "@type": "ListItem", "position": 3, "name": "DJ", "item": "https://dydyfantasy.fr/prestations/dj" }
      ]
    }
  ]
}
```

### 5. WebApplication Dydy Quiz (page /dydy-quiz)

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://dydyfantasy.fr/dydy-quiz#app",
  "name": "Dydy Quiz",
  "url": "https://dydyfantasy.fr/dydy-quiz",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Tout navigateur (aucune installation)",
  "description": "Appli de quiz et blind test sur smartphone : les invités scannent un QR code et jouent, avec les scores en direct sur grand écran.",
  "creator": { "@id": "https://dydyfantasy.fr/#animateur" },
  "provider": { "@id": "https://dydyfantasy.fr/#entreprise" }
}
```

### 6. VideoObject (seulement quand une vidéo sera en ligne sur /dydy-quiz)

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Dydy Quiz : présentation",
  "description": "<<description réelle>>",
  "thumbnailUrl": "https://dydyfantasy.fr/<<image-d-attente>>.jpg",
  "uploadDate": "<<AAAA-MM-JJ>>",
  "duration": "<<PT1M30S>>",
  "contentUrl": "https://dydyfantasy.fr/<<chemin-reel>>.mp4"
}
```

## Vérification

1. Rich Results Test (https://search.google.com/test/rich-results) : tester `/`, `/prestations/dj`, `/evenements/mariage`, `/dydy-quiz`. Attendu : Fil d'Ariane détecté. LocalBusiness et Service ne produisent pas de résultat enrichi dédié, c'est normal.
2. Schema Markup Validator (https://validator.schema.org) : coller l'URL, vérifier 0 erreur et le rattachement `provider` vers `#entreprise`. Pour les nouveaux blocs, vérifier que `EntertainmentBusiness`, `founder` et `WebApplication` sont reconnus.
3. Cohérence : comparer `areaServed` avec la liste de villes de Google Business Profile.
4. Search Console > Améliorations > Fils d'Ariane : contrôler les erreurs 7 à 14 jours après publication.
5. Contrôle rapide : `curl -s https://dydyfantasy.fr/prestations/dj | grep -o 'ld+json'` doit renvoyer les blocs.
