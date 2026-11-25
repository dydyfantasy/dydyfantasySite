# Profil de liens entrants : dydyfantasy.fr (25/11/2026)

## Score : DONNÉES INSUFFISANTES (pas de note chiffrée)

Palier d'accès : Tier 0 (Common Crawl + crawler de vérification). Aucun des 7 facteurs du score (domaines référents, qualité, ancres, toxicité, vélocité, follow/nofollow, géographie) n'a de source. Moins de 4 facteurs disponibles, donc aucune note n'est donnée, pour ne pas en fabriquer une trompeuse.

## Constaté

| # | Constat | Gravité | Preuve (source, confiance) |
|---|---|---|---|
| 1 | Domaine absent du Web Graph Common Crawl (ni dans le crawl, ni dans les classements) : PageRank, centralité harmonique et rangs = null | Info (non concluant) | `commoncrawl_graph.py dydyfantasy.fr`, release `cc-main-2026-aug-sep-oct`, 25/11/2026 (confiance 0,50) |
| 2 | Aucun domaine référent, ancre ou lien toxique mesurable avec les sources disponibles | Info | Pas de clé Moz, Bing, Keywords Everywhere ni DataForSEO (`backlinks_auth.py --check`) |
| 3 | Aucune liste de backlinks connus fournie : le crawler de vérification n'a donc rien à contrôler | Info | Non exécuté |
| 4 | Profils sociaux déclarés dans le JSON-LD `sameAs` : Facebook (profile.php?id=61578462940099) et Instagram (dydy_fantasy). Ce sont des signaux d'entité, pas des backlinks SEO (nofollow en général) | Faible | `src/root.jsx` ligne 52 (lecture du code) |

Limites : le Web Graph de Common Crawl est un échantillon trimestriel qui couvre surtout les sites déjà bien liés. L'absence d'un petit site local ne prouve pas qu'il n'a aucun lien, ni qu'il en a peu. On sait seulement qu'il est trop petit ou trop peu lié pour y figurer. Je n'ai relevé aucun lien toxique, mais je n'ai aucun moyen de le confirmer : l'absence de preuve n'est pas une preuve d'absence.

## Comment vérifier (à faire par le propriétaire, gratuit)

1. Google Search Console > Liens > « Sites référents » et « Pages les plus citées » (export CSV) : source la plus fiable pour un petit site.
2. Bing Webmaster Tools (propriété vérifiée) > Backlinks, puis une clé API pour réactiver le palier 2.
3. Moz Link Explorer gratuit (clé API, 2 500 lignes/mois) pour DA/PA et Spam Score.
4. Avec l'export, relancer `verify_backlinks.py` pour confirmer que les liens existent encore et lire leur rel (nofollow, sponsored).
5. Chercher `"dydyfantasy.fr" -site:dydyfantasy.fr` dans Google pour repérer les mentions manuellement.

## Suggéré (hypothèses, rien n'est constaté)

Pistes réalistes pour un animateur local, à lancer une fois l'état des lieux fait :

- **Bars clients résidents** : demander un lien « Animations : Dydy Fantasy » depuis leur page Facebook, leur site ou leur agenda. C'est le lien le plus naturel et le plus local.
- **Clients entreprises** : une mention avec lien sur une page actualité ou témoignage, uniquement si le client est d'accord (Decathlon : prestation réelle, ne rien promettre en leur nom).
- **Partenaires mariage** : lieux de réception, photographes, traiteurs, wedding planners de Haute-Garonne. Un échange de recommandations (page « prestataires conseillés ») donne un lien contextuel.
- **Presse et sites locaux** : agenda de Fonsorbes et des communes voisines, offices de tourisme et sites municipaux (animations, agendas d'événements publics), journaux locaux avec un angle « animateur local, soirées quiz en bars ».
- **Annuaires** : Google Business Profile (déjà en place d'après le projet, à vérifier que le site y est renseigné), Pages Jaunes, annuaires de mariage et de prestataires événementiels réputés (Mariages.net, Zankyou), à choisir sélectivement pour éviter les annuaires de faible qualité.
- **Contenu à citer** : l'agenda public (`/events`) et l'appli Dydy Quiz peuvent attirer des liens des bars et organisateurs qui relaient les dates.
- **Cohérence NAP** : mêmes nom, téléphone et zone desservie partout (site, JSON-LD, fiche Google), pas de lien en achat massif ni d'échanges en réseau.

Priorité globale : Moyenne. D'abord mesurer (Search Console, 15 minutes), ensuite viser 5 à 10 liens locaux qualitatifs plutôt qu'un volume.

Hors périmètre : E-E-A-T (`/seo content`) et crawlabilité (`/seo technical`).
