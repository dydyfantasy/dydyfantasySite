# Audit sitemap XML — dydyfantasy.fr, après refonte (25/11/2026)

**Score : 90 → 96/100**

## Ce qui fonctionne
- `https://dydyfantasy.fr/sitemap.xml` : 200, XML valide, 1 597 octets, 15 URL uniques, 0 doublon, 0 `loc` invalide, 0 URL d'un autre hôte, aucun `priority`/`changefreq`.
- Déclaré dans robots.txt (URL absolue, `Allow: /`). `sitemap_index.xml`, `sitemap-index.xml`, `wp-sitemap.xml` : 404, normal.
- Les 15 URL : 200, sans redirection, canonical identique, sans robots restrictif (crawl.json).
- **Corrigé depuis ce matin (M1)** : `lastmod` présent sur 15/15, 0 invalide (format `YYYY-MM-DD`).
- Cohérence avec le site : `/privacy` et `/mentions-legales` répondent 200, `noindex`, sans canonical, absentes du sitemap : conforme à l'intention. `/mentions-legales/` renvoie 301 vers `/mentions-legales`. Les liens internes (accueil, contact, galerie) pointent uniquement vers des pages du sitemap, plus ces deux pages noindex. Aucun lien vers une page absente du sitemap ni vers une page en erreur ou redirigée.
- Redirections : www, `/qui-suis-je/` et `/notre-approche` en 301 vers les bonnes cibles ; faux chemin en vrai 404.

## Constats

### Critique / Haute / Moyenne
Aucun.

### Basse
**B1. `lastmod` identique partout (2026-11-25, part identique = 1,0).**
- Preuve : `lastmod_oldest = lastmod_newest = 2026-11-25`.
- Impact : Google ignore `lastmod` s'il ne distingue pas les pages réellement modifiées. Aujourd'hui c'est défendable (refonte de toutes les pages mises en ligne le même jour), mais ce sera faux dès la prochaine modification d'une seule page.
- Correction : à partir de maintenant, ne changer que la date des pages réellement modifiées (texte, offre, FAQ), pas celle des autres. Ne pas la mettre à jour à chaque build.
- Vérification : après la prochaine modification, rouvrir le sitemap : les dates doivent différer d'une page à l'autre.

**B2. Entretien manuel du sitemap** (inchangé). Fichier statique : prévoir un contrôle `prerender` contre `sitemap.xml` avant mise en ligne. Facultatif.

**B3. Sitemap images / vidéo** : toujours inutile à cette échelle (images dans le HTML, une seule vidéo, page déjà indexée). Le `VideoObject` de `/dydy-quiz` est mentionné dans le dernier commit ; son rendu en ligne relève de l'audit SEO technique, hors périmètre ici.

## Comparaison avec ce matin
| Point | Matin | Maintenant |
|---|---|---|
| URL / validité | 15, valide | 15, valide |
| lastmod | 0/15 (−8) | 15/15, identiques (−3) |
| Vidéo | −2 (non visible en ligne) | non pénalisé (hors sitemap, pas d'impact sitemap) |
| Pages noindex hors sitemap | `/privacy` | `/privacy` + `/mentions-legales`, cohérent |

## Note sur le score
Base 100 ; −3 `lastmod` identique ; −1 entretien manuel sans contrôle automatique.
