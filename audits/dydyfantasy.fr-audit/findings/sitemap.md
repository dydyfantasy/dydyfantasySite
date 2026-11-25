# Audit sitemap XML — dydyfantasy.fr (25/11/2026)

**Score : 90/100**

## Ce qui fonctionne
- `https://dydyfantasy.fr/sitemap.xml` : HTTP 200, `application/xml`, XML valide, 1 164 octets, 15 URL, 0 doublon, 0 `loc` invalide, 0 URL d'un autre hôte (outil sitemap_discovery).
- Les 15 URL renvoient 200 (crawl.json), sans redirection, avec une balise canonical identique à l'URL et sans `robots` restrictif : toutes indexables et canoniques vers elles-mêmes.
- Toutes les URL sont en HTTPS, sans www, sans `/` final : cohérent avec les canonicals et les 301 (`/qui-suis-je/` vers `/qui-suis-je`, `www` vers la racine, `/notre-approche` vers `/mon-approche`).
- Déclaration dans robots.txt : `Sitemap: https://dydyfantasy.fr/sitemap.xml` (URL absolue), avec `User-agent: *` / `Allow: /`. Aucun blocage.
- Aucun `priority` ni `changefreq` (rien à retirer).
- Couverture : les liens internes de l'accueil pointent uniquement vers des pages du sitemap. `/privacy` (200, `noindex`) est volontairement absente du sitemap, ce qui est correct. `/privacy/` répond 301.
- Pas d'index de sitemap inutile : `sitemap_index.xml`, `sitemap-index.xml` et `wp-sitemap.xml` renvoient 404, ce qui est normal ici.

## Constats

### Critique
Aucun.

### Haute
Aucun.

### Moyenne
**M1. Aucune balise `<lastmod>`** (0 sur 15).
- Preuve : `lastmod_count: 0` ; le fichier ne contient que des `<loc>`.
- Impact : Google peut utiliser `lastmod`, à condition qu'il soit fiable. Sans lui, le sitemap ne dit pas quelles pages ont changé. Pour un site de 15 pages qui évolue, la perte est modérée. Le sitemap est écrit à la main (en-tête `Last-Modified` du fichier : 18/11/2026).
- Correction : ajouter pour chaque page la date de la dernière modification significative du contenu (texte, offre, FAQ), au format `YYYY-MM-DD`. Ne pas mettre la date du jour partout ni la date du build : Google ignore alors le champ pour tout le site. Ne mettre à jour que les pages réellement modifiées. La date de dernier commit git du fichier de page correspondant peut servir de base.
- Vérification : rouvrir `/sitemap.xml` et contrôler que les dates varient d'une page à l'autre ; relancer `sitemap_discovery.py ... --expand` : `lastmod_count` = 15 et `lastmod_identical_share` bien inférieur à 1.

### Basse
**B1. Sitemap vidéo : pas utile pour l'instant.**
- Preuve : le HTML servi de `/dydy-quiz` ne contient ni `<video>`, ni `.mp4`, ni `VideoObject`. La page `/galerie` ne contient aucune vidéo (7 `<img>` dans le HTML pré-rendu). Les vidéos de `src/assets/videos/` et la vidéo de présentation décrites dans le projet ne sont donc pas présentes sur le site en ligne. La mise en ligne a peut-être été faite sans elles, ou les vidéos sont ajoutées après le rendu.
- Correction : si la vidéo de `/dydy-quiz` est mise en ligne, ajouter un JSON-LD `VideoObject` (déjà prévu dans le code : `PRESENTATION_META`) plutôt qu'un sitemap vidéo, vu qu'il n'y a qu'une vidéo, intégrée dans une page déjà indexée. Un sitemap vidéo n'apporte rien à cette échelle.
- Vérification : test des résultats enrichis de Google ou rapport « Vidéos » de la Search Console après indexation.

**B2. Sitemap images : pas nécessaire.**
- Les images sont dans le HTML (balises `<img>` avec `alt` : 0 image sans alt sur l'accueil), donc Google les découvre via l'exploration normale. Un sitemap image n'ajoute que peu de valeur pour les images de la galerie. Ne le faire que si la galerie est chargée en JavaScript ou si l'indexation des images pose problème en Search Console.

**B3. Entretien manuel du sitemap.**
- Le fichier est statique (`public/sitemap.xml`) : tout oubli lors de l'ajout d'une page crée un écart avec les pages prérendues. Ce risque est déjà couvert par la consigne du CLAUDE.md. Correction facultative : un script de contrôle comparant `prerender` et `sitemap.xml` avant chaque mise en ligne.

## Détail du contrôle des URL
Les 15 URL ci-dessous sont à 200, canonicals identiques à l'URL, sans noindex :
`/`, `/qui-suis-je`, `/prestations`, `/prestations/blind-test-quiz`, `/prestations/karaoke`, `/prestations/dj`, `/prestations/sur-mesure`, `/evenements/mariage`, `/evenements/entreprise`, `/evenements/anniversaire`, `/evenements/bars-restaurants`, `/mon-approche`, `/dydy-quiz`, `/galerie`, `/contact`.

## Comment vérifier
1. `curl -s https://dydyfantasy.fr/sitemap.xml` : XML valide, 15 `<loc>`.
2. `curl -s https://dydyfantasy.fr/robots.txt` : ligne `Sitemap:` présente.
3. Search Console, rubrique Sitemaps : statut « Réussite », 15 URL découvertes, puis rubrique Pages : 15 pages indexées et `/privacy` exclue (noindex).
4. Après ajout de `lastmod` : relancer l'outil d'expansion et contrôler `lastmod_count` et `lastmod_invalid_count` = 0.

## Note sur le score
- Base 100.
- −8 : `lastmod` absent.
- −2 : pas de sitemap vidéo ni de balisage `VideoObject` visible en ligne (vidéo non retrouvée dans le HTML).
