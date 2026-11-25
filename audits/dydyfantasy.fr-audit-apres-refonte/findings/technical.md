# SEO technique : https://dydyfantasy.fr (en ligne, après refonte, 25/11/2026)

**Score technique : 91/100 (matin : 80).** Aucun bloquant. Restent : cache HTML sans validateur (ETag absent), hygiène mineure.

## Avant → après

| Constat du matin | Avant | Après | Preuve |
|---|---|---|---|
| H1 en-têtes de sécurité | Échec | **Corrigé** | `curl -sI /` : X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy présents |
| B2 charset | Absent | **Corrigé** | `Content-Type: text/html; charset=UTF-8` |
| M2 sitemap sans lastmod | Absent | **Corrigé** | 15 URL, `lastmod 2026-11-25` |
| M1 HTML sans ETag/Last-Modified | Présent | **Toujours là** | `Cache-Control: max-age=0`, ni ETag ni Last-Modified sur `/` ni `/mon-approche` (le sitemap, lui, a un Last-Modified : OVH retire l'ETag sur les pages servies via réécriture) |
| M3 `/404` en 200 | 200 | **Toujours là** (ignorable) | `/404` = 200 noindex ; `/zzz` = 404 correct |
| B1 `/privacy` sans canonical | Absent | **Toujours là** | pas de canonical, noindex présent (volontaire) |
| B5 IndexNow, B6 llms.txt | Absents | Inchangés (optionnels) | |
| http→https, www, slash final, anciennes URL | OK | OK | crawl.json : 301 propres, 404 réel |
| robots.txt | OK | OK | `Allow: /` + Sitemap valide |

## Vérifié après refonte
- 17 pages en 200, 1 seul H1 chacune, canonical auto-référent (hors privacy), titres 45-68 caractères, descriptions 140-167 caractères, 0 image sans alt.
- 15 URL du sitemap = 15 pages indexables ; privacy et mentions-legales en noindex, hors sitemap.
- Pré-rendu : contenu, H1 et JSON-LD dans le HTML initial (39 à 102 Ko selon la page).
- JSON-LD EntertainmentBusiness avec `areaServed` (liste de villes), sans adresse de rue.
- Redirections : une seule étape, sans chaîne.

## Constats

### Critique
Aucun.

### Haute
Aucun.

### Moyenne
**M1. HTML sans validateur de cache.** Preuve : `curl -sI https://dydyfantasy.fr/mon-approche` montre `Cache-Control: max-age=0` sans ETag ni Last-Modified. Chaque visite retélécharge ~15 Ko gzippés. Effet SEO quasi nul. Correction possible (non garantie sur OVH mutualisé) : `Header set Cache-Control "public, max-age=0, must-revalidate"` pour le HTML, ou accepter l'état actuel. Vérifier : `curl -sI -H "If-None-Match: ..."` doit renvoyer 304. Je classerais ceci en « accepter ».

### Basse
- **B1. `/privacy` sans canonical** et description de 59 caractères : sans effet (noindex). Ajouter le canonical `https://dydyfantasy.fr/privacy` pour l'uniformité.
- **B2. `/galerie` mince en texte** (192 mots, description 140 caractères) : normal pour une galerie, mais une phrase d'introduction avec « Toulouse » aiderait. Vérifier ensuite la balise `title` après mi-janvier (titres gelés).
- **B3. Permissions-Policy** sans `payment=()` : facultatif. Pas de CSP : acceptable (pas de GA, mais Formspree, Featurable, OSM) ; si souhaité, commencer en `Content-Security-Policy-Report-Only`.
- **B4. HSTS `preload`** : confirmer l'inscription sur hstspreload.org, sinon retirer `preload`.
- **B5. `/404` en 200** : ignorable (noindex).
- **B6. Données JSON-LD** : 20 entités `City` répétées sur chaque page (HTML de 94 Ko sur l'accueil), volontaire pour `areaServed` ; sans risque.

## Non vérifiable ici
Core Web Vitals réels (pas de CrUX/PSI) : à contrôler sur mobile pour l'accueil (38 images, 94 Ko de HTML), `/galerie` (vidéos) et `/contact` ou l'agenda (carte OSM). Rendu hors accueil lu depuis crawl.json, non page par page. `<meta charset>` non retrouvé par mon grep (écriture `charSet` probable) ; l'en-tête HTTP suffit.

## Comment vérifier
- `curl -sI https://dydyfantasy.fr/ | grep -iE "x-content|x-frame|referrer|permissions|content-type"`
- Search Console > Sitemaps : 15 pages découvertes, lastmod lu ; Inspection d'URL sur 2-3 pages.
- PageSpeed Insights mobile sur accueil, `/galerie`, `/prestations/blind-test-quiz`.
- securityheaders.com : B ou plus attendu sans CSP.
