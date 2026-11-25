# Profil de liens entrants : dydyfantasy.fr (25/11/2026, après refonte)

## Score : DONNÉES INSUFFISANTES (pas de note chiffrée)

Palier 0 (Common Crawl + crawler de vérification). Aucun des 7 facteurs du score n'a de source : pas de note, pour ne pas en fabriquer une trompeuse.

## Changement depuis ce matin : aucun

| # | Constat | Gravité | Preuve |
|---|---|---|---|
| 1 | Domaine toujours absent du Web Graph Common Crawl (in_crawl false, in_rankings false, PageRank et centralité harmonique null). Résultat identique à ce matin. | Info (non concluant) | `commoncrawl_graph.py dydyfantasy.fr`, release `cc-main-2026-aug-sep-oct`, résultat en cache du 25/11/2026 (confiance 0,50) |
| 2 | Aucun domaine référent, ancre ou lien toxique mesurable (pas de Moz, Bing, DataForSEO). | Info | Rapport de ce matin, inchangé |
| 3 | Aucune liste de backlinks fournie : rien à vérifier avec le crawler. | Info | Non exécuté |
| 4 | Profils sociaux `sameAs` (Facebook, Instagram) : signaux d'entité, pas de vrais backlinks. | Faible | Rapport de ce matin |

Les liens entrants ne dépendent pas d'une refonte du jour. Le résultat Common Crawl vient du cache : le Web Graph est trimestriel, aucune nouvelle donnée n'est possible avant la prochaine release. L'absence n'est pas une preuve d'absence de liens. L'URL des pages n'ayant pas changé, aucun lien existant n'est perdu par la refonte (à confirmer dans Search Console, voir ci-dessous).

## Vérifier (propriétaire, gratuit)

1. Search Console > Liens > Sites référents et Pages les plus citées (export CSV). Contrôler que les pages citées répondent toujours (pas de 404) après la mise en ligne.
2. Bing Webmaster Tools > Backlinks.
3. Avec un export, relancer `verify_backlinks.py`.
4. Recherche Google `"dydyfantasy.fr" -site:dydyfantasy.fr`.

## Pistes réalistes (hypothèses, rien n'est constaté)

- Bars résidents : lien « Animations : Dydy Fantasy » depuis leur site, page Facebook ou agenda. Le plus local et le plus naturel.
- Clients entreprises : mention avec lien seulement avec leur accord (Decathlon : ne rien promettre en leur nom).
- Partenaires mariage : lieux, photographes, traiteurs de Haute-Garonne, avec recommandations croisées.
- Sites locaux : agendas de Fonsorbes et des communes voisines, offices de tourisme, presse locale.
- Annuaires choisis : fiche Google (vérifier que le site est renseigné), Pages Jaunes, annuaires mariage sélectifs.
- Agenda public et appli Dydy Quiz : contenus que les bars et organisateurs peuvent relayer.
- Cohérence NAP (nom, téléphone, zone desservie) partout ; pas d'achat massif de liens.

Priorité : Moyenne. Mesurer d'abord (15 minutes dans Search Console), puis viser 5 à 10 liens locaux qualitatifs.

Hors périmètre : E-E-A-T (`/seo content`), crawlabilité (`/seo technical`).
