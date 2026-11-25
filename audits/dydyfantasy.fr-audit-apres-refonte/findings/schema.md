# Audit Schema.org / données structurées — dydyfantasy.fr (après refonte, 25/11/2026)

Périmètre : 17 pages du crawl (toutes en 200). HTML brut récupéré par curl, chaque bloc JSON-LD parsé. Aucun Microdata ni RDFa. Blocs JSON-LD = JSON valide, `@context` `https://schema.org`, URLs absolues partout.

## Score : 79 / 100 (matin : 68)

| Critère | Avant | Après |
|---|---|---|
| Syntaxe et validité | 18/20 | 19/20 |
| Entreprise (propriétés, NAP, sameAs, logo, image) | 20/30 | 27/30 |
| Service + BreadcrumbList | 17/20 | 17/20 |
| Liens entre entités (@id, provider) | 6/10 | 6/10 |
| Opportunités exploitées | 7/20 | 10/20 |

## Tableau avant → après

| Point | Avant | Après | État |
|---|---|---|---|
| Type | LocalBusiness | EntertainmentBusiness (17 pages) | Corrigé |
| areaServed entreprise | GeoCircle 50 km + Gers + Tarn entiers | 20 `City` (Pibrac ... Giroussens, dont Toulouse) | Corrigé |
| areaServed des 8 Service | chaînes sans type | mêmes 20 `City` | Corrigé |
| image | logo WebP 1782x396 | `/partage-dydy-fantasy.jpg` (200, image/jpeg, 153 Ko), identique à og:image | Corrigé |
| sameAs | Facebook, Instagram | + fiche Google `g.page/r/CdpLaKDiVThEEBM` | Corrigé |
| priceRange | « € » | absent (choix du propriétaire) | Accepté |
| VideoObject /dydy-quiz | absent | présent, valide (voir ci-dessous) | Corrigé |
| Adresse | ville + CP, sans rue | idem (volontaire) | OK |
| FAQPage / HowTo | aucun | aucun | OK |
| Avis (Review/AggregateRating) | aucun | aucun (volontaire) | OK |
| WebSite | absent | absent | Restant |
| Person | absente | absente (volontaire, nom réel exclu) | Accepté |
| @id / WebPage sur Service | absent | absent | Restant |
| WebApplication Dydy Quiz | absent | absent | Restant (optionnel) |
| Facebook sameAs | sans `www` | sans `www` (redirection 301 vers www) | Restant |

## Validation par bloc

- EntertainmentBusiness (17 pages) : PASS. `@id` `https://dydyfantasy.fr/#entreprise`, name, url, image, logo (icon-512.png, 200, image/png), description, telephone `+33695953356`, PostalAddress sans rue, geo, 20 City, 3 sameAs. Aucun placeholder.
- Service (8 pages prestation/événement) : PASS. `provider` en `@id` vers l'entreprise, areaServed typé. Les 20 villes sont répétées dans chaque Service (volumineux mais valide).
- BreadcrumbList (9 pages) : PASS. Positions 1..n, URLs absolues sans slash final, alignées sur les canonicals. Pages événement : Accueil > Mariage (pas de page hub, cohérent).
- Cohérence texte/schéma : les Service citent « Toulouse et le Gers » ; Samatan et L'Isle-Jourdain (Gers) sont bien dans la liste. Cohérent avec la fiche.

## Validation VideoObject (/dydy-quiz)

| Propriété | Valeur | Verdict |
|---|---|---|
| name (requis) | « C'est quoi Dydy Quiz ? » | OK |
| thumbnailUrl (requis) | `https://dydyfantasy.fr/assets/dydy-quiz-presentation-CPWi_0o5.webp` | OK, 200, image/webp, absolue, identique au `poster` du lecteur |
| uploadDate (requis) | `2026-11-25` | OK, ISO 8601 (date seule acceptée). Idéalement avec fuseau, ex. `2026-11-25T08:00:00+01:00` |
| contentUrl (recommandé) | `.../assets/dydy-quiz-presentation-CT9bmlJM.mp4` | OK, 200, video/mp4, 7,9 Mo |
| description | présente | OK |
| duration | `PT1M5S` | Format OK. Valeur non vérifiée par moi : à comparer à la vraie durée de la vidéo |

La vidéo est bien visible sur la page (`<video>` avec poster et aria-label), donc le balisage correspond au contenu. Points de vigilance : (1) les noms de fichiers sont hachés par Vite : si la vidéo ou le poster est recompressé, les URLs du JSON-LD changent seules à la compilation, vérifier après chaque build ; (2) la vidéo est en `preload="none"` avec lecteur natif : Google peut ne pas l'indexer comme « page vidéo » si la vidéo n'est pas jugée principale ; ce n'est pas une erreur de balisage.

## Erreurs et opportunités restantes

Aucune erreur critique ni haute.

**M1. Pas de WebSite ni de @id de page.** Opportunité sémantique, sans rich result. À mettre sur l'accueil :

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

**M2. Service sans @id ni image.** Ajouter `"@id": "https://dydyfantasy.fr/prestations/dj#service"` et `"image"` (photo réelle de la page) pour pouvoir relier Service, BreadcrumbList et VideoObject. Même principe pour le VideoObject : `"@id": "https://dydyfantasy.fr/dydy-quiz#video"` et `"publisher": {"@id": "https://dydyfantasy.fr/#entreprise"}`.

**B1. Facebook** : remplacer `https://facebook.com/profile.php?id=61578462940099` par `https://www.facebook.com/profile.php?id=61578462940099` (l'adresse actuelle redirige en 301).

**B2. WebApplication Dydy Quiz (optionnel, sans Person ni prix inventés)** :

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://dydyfantasy.fr/dydy-quiz#app",
  "name": "Dydy Quiz",
  "url": "https://dydyfantasy.fr/dydy-quiz",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Tout navigateur",
  "description": "Appli de quiz et blind test : les invités scannent un QR code et jouent depuis leur téléphone, le classement s'affiche en direct sur grand écran.",
  "provider": { "@id": "https://dydyfantasy.fr/#entreprise" }
}
```
Pas d'`offers` ni d'`aggregateRating` sans données réelles. Aucun rich result attendu.

**B3. Info** : `email` absent (à ajouter seulement s'il est publié sur le site). Pas de FAQPage : rien à faire. Pas de balisage d'avis : conforme à la règle Google.

## Comment vérifier

1. Rich Results Test (https://search.google.com/test/rich-results) sur `/dydy-quiz` : « Vidéos » détecté, sans erreur ; sur `/prestations/dj` : « Fil d'Ariane » détecté.
2. Schema Markup Validator (https://validator.schema.org) sur `/`, `/prestations/dj`, `/dydy-quiz` : 0 erreur, `EntertainmentBusiness` reconnu, `provider` rattaché à `#entreprise`.
3. Search Console > Améliorations : rubriques « Fils d'Ariane » et « Vidéos » ; contrôler 7 à 14 jours après la mise en ligne. Rapport « Pages vidéo » dans Indexation.
4. Terminal : `curl -s https://dydyfantasy.fr/dydy-quiz | grep -o '"@type": *"VideoObject"'` ; puis `curl -sI` sur `thumbnailUrl` et `contentUrl` (attendu 200).
5. Durée : `ffprobe -v error -show_entries format=duration -of csv=p=0 src/assets/videos/dydy-quiz-presentation.mp4` doit donner environ 65 s (PT1M5S).
6. Comparer `areaServed` avec la liste de zones de la fiche Google Business Profile.
