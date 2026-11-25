# SEO technique : https://dydyfantasy.fr (en ligne, 25/11/2026)

**Score technique : 80/100.** Aucun bloquant. Les écarts viennent des en-têtes de sécurité absents, d'un cache HTML à `max-age=0`, de l'absence de `lastmod` dans le sitemap et de quelques détails d'hygiène.

| Catégorie | Statut |
|---|---|
| Crawlabilité (robots, sitemap) | OK |
| Indexabilité (canonicals, noindex) | OK |
| Redirections / codes HTTP / 404 | OK |
| HTTPS / HSTS | OK |
| En-têtes de sécurité (hors HSTS) | Échec |
| Cache / compression | Partiel |
| Rendu JS | OK (pré-rendu) |
| Mobile | OK |
| URL | OK |
| IndexNow | Non implémenté (optionnel) |

## Ce qui fonctionne (preuves)
- **http -> https : confirmé, 301 avec `Location` lisible.** `curl -I http://dydyfantasy.fr/` renvoie `301`, `location: https://dydyfantasy.fr/` et `strict-transport-security`. Le constat « 301 sans Location » vient de l'outil du crawl, pas du serveur. Même résultat pour `http://www`, `https://www` (une seule étape vers `https://dydyfantasy.fr/`, pas de chaîne).
- `/mon-approche/` -> 301 `https://dydyfantasy.fr/mon-approche`. `/notre-approche` -> 301 `https://dydyfantasy.fr/mon-approche`. `/prestations/` et `/clients/` -> 301 sans slash final.
- Vrai 404 : `/zzz` renvoie `404`, avec le gabarit « Page introuvable », `noindex`. `/Prestations` (casse différente) renvoie aussi 404, donc pas de doublon de casse.
- `robots.txt` : `User-agent: * / Allow: /` + `Sitemap: https://dydyfantasy.fr/sitemap.xml`. Il est valide et la déclaration est à jour.
- `sitemap.xml` : 15 URL en 200, toutes canoniques et sans slash final. `/privacy` est absent, ce qui est cohérent avec son `noindex`.
- Les 16 pages renvoient 200 et ont un canonical auto-référent (`/privacy` n'en a pas, mais elle est en noindex). `/index.html` répond 200 avec canonical `https://dydyfantasy.fr/`. `/contact?x=1` répond 200 avec le canonical de `/contact` (à confirmer dans le crawl).
- Rendu : le HTML initial contient H1, contenu, JSON-LD, canonical et viewport (`width=device-width, initial-scale=1.0`). Le HTML fait environ 71 Ko décompressés. Pas de dépendance à l'exécution JS pour le contenu important. Seul l'agenda est chargé côté navigateur (`/events/events.js`, 933 octets, `no-store`, voulu).
- HSTS présent : `max-age=31536000; includeSubDomains; preload`. Vérifiez que le domaine est bien inscrit sur hstspreload.org avant de garder `preload`.
- Compression gzip active sur HTML, CSS, JS, `robots.txt` et `events.js`. Les `.webp` ne sont pas compressés, ce qui est normal.
- Cache : `/assets/*` (CSS, JS, images hashées) en `public, max-age=31536000, immutable`. Favicon en 1 an. `events.js` en `no-store`.
- Fichiers sensibles : `/.git/config` renvoie 403.
- Performance (source) : préchargement de l'image hero avec `fetchpriority=high` et `srcset`, `modulepreload` des chunks, images en WebP responsives.
- JSON-LD : l'adresse contient seulement `addressLocality` Fonsorbes, `postalCode` 31470, région et pays, sans rue. C'est cohérent avec le choix SAB. `sameAs` contient seulement Facebook et Instagram.

## Constats

### Critique
Aucun.

### Haute

**H1. Aucun en-tête de sécurité hors HSTS.**
- Preuve : `curl -sI https://dydyfantasy.fr/` ne renvoie ni `X-Content-Type-Options`, ni `Referrer-Policy`, ni `X-Frame-Options` ou `frame-ancestors`, ni `Permissions-Policy`, ni `Content-Security-Policy`.
- Impact : pas d'effet direct sur le classement, mais le site est plus exposé (clickjacking, sniffing MIME). Les scanners de sécurité le sanctionnent.
- Correction `.htaccess` (le bloc doit rester dans `<IfModule mod_headers.c>`) :
```
<IfModule mod_headers.c>
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
</IfModule>
```
- CSP : à ajouter ensuite, d'abord en `Content-Security-Policy-Report-Only`. Le site utilise des scripts inline (JSON-LD, gtag) et charge Google Analytics, Formspree, Featurable, les tuiles Leaflet et des vidéos. Une CSP stricte peut casser ces éléments.
- Vérification : `curl -sI https://dydyfantasy.fr/ | grep -iE "x-content|referrer|x-frame|permissions"`. Puis securityheaders.com, avec un objectif B ou plus sans CSP et A avec CSP. Testez ensuite le formulaire, la carte, les avis et GA.

### Moyenne

**M1. HTML servi avec `Cache-Control: max-age=0` et sans `ETag` ni `Last-Modified`.**
- Preuve : `/` renvoie `Cache-Control: max-age=0`, `Expires` égal à la date de la requête, et aucun validateur. Chaque visite retélécharge le HTML complet.
- Effet : pas de requête conditionnelle 304. Le gain serait faible (HTML de 14 Ko gzippé), mais c'est un point d'hygiène. Votre règle d'expiration HTML ressemble à `ExpiresByType text/html "access plus 0 seconds"`.
- Correction : garder le cache court mais activer la validation. Activez `FileETag MTime Size`, ou ajoutez `Header set Cache-Control "public, max-age=0, must-revalidate"` pour `.html`. Faites aussi en sorte que le fichier `Last-Modified` ressorte pour les pages `index.html` (l'OVH mutualisé le retire parfois pour du contenu servi via rewrite).
- Vérification : `curl -sI -H "If-None-Match: <etag>" https://dydyfantasy.fr/` doit renvoyer 304.

**M2. Sitemap sans `<lastmod>`.**
- Preuve : 0 occurrence de `lastmod` dans `/sitemap.xml`.
- Impact : Google s'appuie sur `lastmod` quand il est fiable pour prioriser la ré-exploration, mais ce n'est pas bloquant sur 15 pages.
- Correction : ajoutez `<lastmod>2026-11-25</lastmod>` (la date de dernière modification réelle de la page) dans `public/sitemap.xml`, et ne la changez que lors d'une vraie modification de contenu.
- Vérification : Search Console > Sitemaps, statut « Réussite » et 15 pages découvertes.

**M3. `/404` répond en 200 en accès direct.**
- Preuve : `GET /404` renvoie `200` avec `noindex`. Ce n'est pas un vrai problème, car `/zzz` renvoie bien 404. C'est seulement un doublon ignorable avec `noindex`, mais l'adresse `/404` est servie avec un statut 200.
- Correction optionnelle : bloquer l'accès direct via une règle de réécriture qui renvoie 404 pour `^404/?$` (pas indispensable).

### Basse

**B1. `/privacy` sans canonical.** Elle est volontairement en noindex, donc c'est acceptable. Ajoutez tout de même un canonical auto-référent pour l'uniformité. À vérifier : `curl -s .../privacy | grep canonical`.

**B2. `Content-Type: text/html` sans `charset`.** Le `<meta charset>` du HTML est absent de la sortie de mon `grep` (aucune ligne n'est ressortie) : vérifiez-le dans le source. Les pages générées par l'outil de crawl affichaient des caractères mal décodés (`Ã `), ce qui laisse supposer que le navigateur ou l'outil devine le jeu de caractères. Correction `.htaccess` : `AddDefaultCharset UTF-8`. Vérification : `curl -sI https://dydyfantasy.fr/ | grep -i content-type` doit afficher `charset=UTF-8`.

**B3. Pages d'erreur Apache natives en `iso-8859-1`** (les 301 renvoient un petit corps HTML). Aucun impact SEO. Ignorable.

**B4. `/clients/` et ses logos.** `/clients` renvoie 403 (listing de répertoire désactivé). Ce n'est pas un problème. Les logos eux-mêmes sont dans `public/clients/` et servis individuellement.

**B5. IndexNow non implémenté** (`/indexnow.txt` renvoie 404). IndexNow est optionnel, sans effet sur Google, et utile surtout pour Bing, Yandex et Naver. Sur 15 pages, le gain est faible. Si vous voulez l'ajouter : générez une clé, placez `<clé>.txt` dans `public/`, puis envoyez un POST à `https://api.indexnow.org/indexnow` après chaque mise en ligne.

**B6. `llms.txt` absent** (404). Facultatif, aucun effet prouvé sur le classement.

## Points non vérifiables ici
- Core Web Vitals réels (pas d'accès CrUX/PSI). À contrôler dans PageSpeed Insights sur mobile : accueil, `/galerie` (vidéos) et `/contact` (carte Leaflet).
- Contenu des pages au-delà de l'accueil et de `/404` : j'ai relu les métadonnées du `crawl.json` fourni (titres, canonicals et H1 uniques et cohérents sur les 16 pages), pas chaque HTML.
- Comportement de `/contact?x=1` côté canonical : confirmé uniquement pour `/index.html` et `/404`.

## Ordre de correction conseillé
1. H1 (en-têtes de sécurité, puis CSP en Report-Only).
2. B2 (`AddDefaultCharset UTF-8`), à faire tout de suite car c'est une ligne.
3. M2 (`lastmod`).
4. M1, puis le reste.
