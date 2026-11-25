# Audit SEO complet — dydyfantasy.fr (site en ligne)

**Date :** 25/11/2026 · **Version analysée :** site en ligne (contenu du commit `828c4cd`), pas la branche `design/accueil-v3`
**Outil :** plugin claude-seo 2.6.2 (10 agents spécialisés) · **Type d'entreprise détecté :** service local à zone desservie (SAB)

**Sources disponibles :** HTML et en-têtes HTTP du site en ligne, recherches web publiques.
**Sources absentes :** Search Console, GA4, CrUX (données terrain), PageSpeed (quota sans clé : erreur 429), Moz/Bing, DataForSEO. Les mesures de performance sont donc des **estimations de labo**. Le classement dans le pack local Google n'a pas pu être observé.

## Note de santé SEO : **72 / 100**

| Catégorie | Poids | Note | Détail |
|---|---|---|---|
| SEO technique | 22 % | 80 | [findings/technical.md](findings/technical.md) |
| Qualité des contenus | 23 % | 62 | [findings/content.md](findings/content.md) |
| On-page (titles, descriptions, titres, liens) | 20 % | 76 | [findings/content.md](findings/content.md) |
| Données structurées | 10 % | 68 | [findings/schema.md](findings/schema.md) |
| Performance (CWV, estimée) | 10 % | 84 | [findings/performance.md](findings/performance.md) |
| Prêt pour la recherche IA | 10 % | 65 | GEO 57 (80 %) + agents 96 (20 %) — [geo.md](findings/geo.md), [agentic.md](findings/agentic.md) |
| Images | 5 % | 66 | [findings/performance.md](findings/performance.md) |

Notes hors calcul : SEO local **64** ([local.md](findings/local.md)), expérience de recherche (SXO) **49** ([sxo.md](findings/sxo.md)), sitemap **90** ([sitemap.md](findings/sitemap.md)), liens entrants **non notés** (données insuffisantes, [backlinks.md](findings/backlinks.md)).

**Lecture :** la base technique est saine. Aucun problème ne bloque l'indexation. Ce qui freine, c'est ce qu'un visiteur ou Google trouve **sur les pages de prestation** : pas de preuves (photos, avis, références), pas d'informations pratiques (budget, durée, nombre d'invités), quelques chiffres faux, et un lien faible avec la fiche Google.

## Correction apportée aux rapports des agents

- `technical.md` dit ne pas avoir trouvé de `<meta charset>`. C'est faux : le HTML contient `<meta charSet="UTF-8"/>` (la casse est sans importance en HTML). Ajouter `AddDefaultCharset UTF-8` dans `.htaccess` reste un plus mineur.
- `technical.md` signale une redirection http → https « sans Location ». Elle fonctionne bien en un seul 301 vers `https://dydyfantasy.fr/` : l'anomalie venait du premier outil de crawl.

## Top 5 des problèmes

1. **Aucune preuve sur les 8 pages prestation / événement** (Critique côté SXO, Haute côté contenu). Ces pages ne montrent que le logo et la mascotte. La note « 4,9/5 · +70 avis », les logos clients et les chiffres ne sont que sur l'accueil. Les avis sont chargés en JavaScript : ils sont absents du HTML que lisent Google et les IA.
2. **Pas de mentions légales ni de politique de confidentialité du site**, et Google Analytics se charge sans consentement. Ce n'est pas un facteur de classement, mais c'est une **obligation légale** en France (LCEN pour les mentions, règles CNIL pour les cookies de mesure). C'est aussi un signal de confiance.
3. **Des chiffres et promesses inexacts** : « 3 bars résidents » apparaît 5 fois (il y en a 4), et des « buzzers » sont annoncés alors que ce sont les téléphones des invités. La note « 4,9 » et le nombre « +70 » sont aussi à vérifier (72 avis 5 étoiles d'après tes notes).
4. **Lien faible avec la fiche Google** : aucun lien vers la fiche ni vers « laisser un avis », la fiche n'est pas dans `sameAs`, et `areaServed` (cercle de 50 km + 3 départements) ne reprend pas la liste de villes de la fiche.
5. **Aucune information pratique** (budget indicatif, durée, nombre d'invités, délai de réservation), alors que les résultats Google et les IA l'attendent. Ton profil Mariages.net annonce « à partir de 800 € » mais le site ne dit rien.

## Top 5 des corrections rapides

1. Logos clients : environ 544 Ko pour des pastilles de 48 px. En WebP 96 à 192 px, ça passe à environ 40 Ko.
2. En-têtes de sécurité (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`) : 4 lignes dans `.htaccess`.
3. Ajouter le lien « Laisser un avis Google » et l'URL de la fiche (pied de page, page contact, `sameAs`).
4. Corriger « 3 bars » → 4 et « buzzers » → « téléphone-buzzer » (déjà fait dans la refonte).
5. Ajouter l'option « DJ » au formulaire de contact (absente aujourd'hui).

## Constats par catégorie

### SEO technique — 80
**Ce qui marche :** HTTPS + HSTS, redirections en un seul 301 (http, www, `/` final, `/notre-approche`), vrai 404, canonicals auto-référentes, contenu complet dans le HTML pré-rendu, gzip, fichiers hachés en cache d'un an `immutable`, `/.git` en 403, robots.txt correct.
- **Haute :** en-têtes de sécurité absents en dehors de HSTS. Pour une CSP, tester d'abord en mode Report-Only (GA, Formspree, Leaflet, Featurable).
- **Moyenne :** le HTML est servi en `max-age=0` sans ETag ni Last-Modified, donc sans réponse 304.
- **Basse :** `/404` répond 200 en accès direct, pas d'IndexNow (optionnel).

### Contenus — 62 · On-page — 76
- **Critique :** mentions légales et politique de confidentialité absentes (voir Top 5).
- **Haute :** « 3 bars » ×5 (accueil, /qui-suis-je texte + meta description, /evenements/bars-restaurants hero + FAQ). L'agenda en ligne montre 4 bars récurrents, dont le Biergarten, absent des références.
- **Haute :** « buzzers » sur /prestations/blind-test-quiz (meta, hero, étape 03), /qui-suis-je et /mon-approche.
- **Haute :** pages proches. Les 8 pages de prestation n'ont que 48 à 73 % de texte propre, et 5 H2 sur 7 sont identiques. /prestations/dj et /evenements/mariage visent toutes les deux « DJ mariage Toulouse ».
- **Moyenne :** /galerie n'a que 3 photos et aucune vidéo alors que son title promet des vidéos. La section « Dydy Quiz en action » est vide.
- Titles et descriptions uniques, sans modèle répété. Un seul H1 par page.

### Données structurées — 68
- **Haute :** `areaServed` ne reprend pas la liste de villes de la fiche Google. Les Service reprennent seulement 4 noms en simples chaînes.
- **Moyenne :** le type générique `LocalBusiness` pourrait devenir `EntertainmentBusiness`. Rien ne relie les entités : pas de `WebSite` ni de `Person`, et les Service n'ont pas d'`@id`.
- **Basse :** `priceRange: "€"` n'apporte rien. Pas de `VideoObject` (aucune vidéo en ligne aujourd'hui).
- Correct : `@id` stable, `provider` relié, BreadcrumbList cohérents, aucun faux avis, pas de FAQPage ni HowTo.

### Performance — 84 (estimée) · Images — 66
- TTFB de 0,10 à 0,13 s. JS + CSS : environ 150 à 160 Ko compressés. Un seul script tiers (GA, différé). LCP de l'accueil = image du hero, déjà en `fetchPriority="high"`.
- **Haute :** logos clients trop lourds (voir les corrections rapides).
- **Haute :** 4 préchargements d'images se font concurrence avec le hero (2 logos, la tête de la mascotte, le hero). React 19 précharge automatiquement les images non `lazy` : mettre `fetchPriority="low"` sur les images non critiques.
- **Haute :** le hero pèse 314 Ko en 1536 px et 162 Ko en 1024 px. Il faut le recompresser.
- **Moyenne :** les photos de /galerie n'ont ni `width` ni `height` (risque de CLS). `events.js` est synchrone et retarde l'hydratation. Les polices ne sont pas préchargées.
- Les textes alternatifs viennent des noms de fichiers : présents partout, mais sans accents et répétitifs.

### Prêt pour la recherche IA — 65
- Tous les robots IA testés reçoivent un 200 avec le même HTML. Le formulaire de contact est utilisable par un agent (8 champs étiquetés).
- **Haute :** aucune réponse aux questions « combien coûte… ». Les avis ne sont pas dans le HTML. La marque est peu présente hors du site (homonymes « DyDy », pas de YouTube, fiche Google non reliée).
- **Moyenne :** l'agenda est invisible pour les robots IA (chargé en JS). FAQ courtes, rien sur la durée ni le délai de réservation.

### SEO local — 64
- Le NAP est identique partout. Pas d'adresse de rue (conforme pour une zone desservie). « Toulouse » figure dans 14 titles sur 16.
- **Haute :** aucun lien vers la fiche ni vers la page d'avis. `areaServed` est à aligner sur la fiche. Le Tarn n'apparaît dans aucun title ni H1.
- **Moyenne :** pas de pages villes en masse (risque de « doorway pages »). Au plus 1 ou 2 pages avec un vrai contenu, ou un bloc « Où j'interviens ».
- Présence dans les annuaires non vérifiable automatiquement : une liste de contrôle est dans `local.md`.

### Expérience de recherche (SXO) — 49
- **« team building quiz toulouse »** : la première page Google est faite de listes d'idées et de plateformes (Funbooker ×3, Quiz Room) avec des prix par personne. Aucun animateur indépendant n'y figure. Une fiche Funbooker et un bloc « en pratique » (durée, taille de groupe, budget) sur /evenements/entreprise sont recommandés.
- **« dj mariage toulouse »** (position 57 dans Search Console) : la page est dominée par des DJ spécialisés mariage, et Mariages.net est 1er. Sur Mariages.net, Dydy est 15e de la page avec 1 seul avis. Sur /evenements/mariage, le DJ ne tient qu'en une ligne.
- **Anniversaire :** 4 résultats sur 9 visent les enfants, et « adulte » n'apparaît ni dans le title ni dans le H1.
- **Karaoké :** 4 résultats sur 9 répondent à « où chanter », alors que l'agenda public n'est pas affiché sur la page.
- L'ordre des résultats est indicatif (outil de recherche ≠ google.fr depuis Toulouse).

### Sitemap — 90
- XML valide, 15 URL en 200 indexables et canoniques. /privacy est exclue à juste titre. Pas de `priority` ni de `changefreq`.
- **Moyenne :** aucun `<lastmod>`. Il faut des dates réelles de modification, pas la date du build.

### Liens entrants — non noté
- Le domaine est absent de Common Crawl, ce qui n'est pas concluant pour un petit site. La source de référence sera Search Console > Liens.
- Pistes : bars clients, prestataires de mariage (lieux, photographes, traiteurs), agendas des communes, presse locale.

## Points déjà connus avant l'audit

Liste de villes pour `areaServed`, og:image 1200×630 tirée d'une vraie photo, pages de prestation à rendre plus uniques, photos et captures Dydy Quiz, « Occitanie » dans les textes. Ne pas toucher aux titles pendant 4 à 8 semaines après la mise en ligne du 18–23/11 (période de mesure).
