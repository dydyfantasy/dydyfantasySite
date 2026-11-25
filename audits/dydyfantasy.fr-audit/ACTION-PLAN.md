# Plan d'action — audit du 25/11/2026 (site en ligne)

La colonne **Refonte** indique l'état de la branche `design/accueil-v3` au 25/11 :
- ✅ déjà corrigé
- 🟡 en partie
- ❌ pas encore
- ❓ décision ou information à fournir par toi

## Phase 1 — À faire avant ou avec la mise en ligne de la refonte

| # | Action | Gravité | Refonte | Comment vérifier |
|---|---|---|---|---|
| 1 | Créer une page **Mentions légales + confidentialité du site** (identité, SIRET, hébergeur OVH, formulaire Formspree, GA) et la lier dans le pied de page | Critique (légal) | ❌ ❓ (infos légales à fournir) | La page répond 200 et le lien est présent sur les 15 pages |
| 2 | Demander le **consentement avant Google Analytics** (ou passer à une mesure exemptée de consentement) | Haute (légal) | ❌ ❓ | Aucun cookie `_ga` avant d'accepter (outils du navigateur > Application > Cookies) |
| 3 | Corriger « 3 bars » → 4 | Haute | ✅ | `grep "3 bars"` sur le HTML compilé ne trouve rien |
| 4 | Corriger les « buzzers » → téléphone des invités | Haute | ✅ | Idem avec « buzzers » |
| 5 | Vérifier « 4,9 · +70 avis » par rapport à la fiche Google réelle | Moyenne | ❓ | Comparaison à la main avec la fiche |
| 6 | Logos clients en WebP 96 à 192 px (≈ 544 Ko → ≈ 40 Ko). Les déplacer dans `src/assets/` pour qu'ils soient optimisés au build | Haute | ❌ (`lfest.png` 134 Ko ajouté) | Poids total des logos dans l'onglet Réseau < 60 Ko |
| 7 | `fetchPriority="low"` sur le logo du menu et la tête de la mascotte, pour ne précharger que le hero | Haute | ❓ à vérifier dans le build | Une seule balise `<link rel="preload" as="image">` dans le HTML de l'accueil |
| 8 | Recompresser le hero (WebP q60-65 ou AVIF) | Haute | ❓ | Lighthouse mobile : LCP en baisse |
| 9 | `width`/`height` sur les vignettes de /galerie | Moyenne | ✅ | CLS de /galerie < 0,1 |
| 10 | Ajouter « DJ » (et « Anniversaire ») aux types du formulaire de contact. Vérifier que les valeurs `?type=` du configurateur existent dans la liste | Moyenne | ❌ | Ouvrir `/contact?type=DJ` : le champ est pré-rempli |

## Phase 2 — Fort impact, semaines 2-3 (après la mise en ligne)

| # | Action | Gravité | Refonte | Comment vérifier / indicateur |
|---|---|---|---|---|
| 11 | **Preuves sur chaque page de prestation** : 1 ou 2 avis cités mot pour mot dans le HTML (sans balisage d'avis), une vraie photo, les références clients liées au type d'événement | Critique (SXO) | 🟡 (galerie « En images » sur 4 pages événement + avis sur Mariage ; rien sur les 4 pages prestation) | Le texte de l'avis est présent dans `curl` de la page ; taux de clic vers /contact (GA) |
| 12 | Lien **« Laisser un avis Google »** + URL de la fiche dans le pied de page, la page contact et `sameAs` | Haute | ❌ ❓ (liens à fournir) | Lien présent ; nombre d'avis sur la fiche par mois |
| 13 | `areaServed` = liste exacte des villes de la fiche Google (`City` nommées) | Haute | ❌ ❓ (liste à fournir) | validator.schema.org ; comparaison avec la fiche |
| 14 | Bloc **« En pratique »** sur les pages prestation et événement : durée type, nombre d'invités, matériel, délai de réservation, et budget indicatif si tu le décides (Mariages.net annonce déjà « à partir de 800 € ») | Haute | ❌ ❓ (décision prix) | Search Console : impressions sur les requêtes « prix / tarif animateur … » |
| 15 | En-têtes de sécurité dans `.htaccess` (+ `AddDefaultCharset UTF-8`) | Haute | ❌ | `curl -I https://dydyfantasy.fr/` montre les en-têtes |

## Phase 3 — Contenu et autorité, mois 2

| # | Action | Gravité | Refonte | Comment vérifier / indicateur |
|---|---|---|---|---|
| 16 | Séparer « DJ mariage » : /evenements/mariage porte la requête avec une vraie section DJ ; /prestations/dj vise « DJ soirée / anniversaire / Gers » et renvoie vers Mariage | Haute | ❓ | Search Console : une seule URL classée sur « dj mariage toulouse » |
| 17 | Mariages.net : demander un avis à chaque couple (1 seul aujourd'hui) | Haute | — (hors site) | Nombre d'avis sur Mariages.net |
| 18 | Entreprise : bloc pratique (durée, taille de groupe, formats) + fiche Funbooker à étudier | Haute | ❌ | Impressions sur « team building quiz toulouse » |
| 19 | Rendre les 8 pages de prestation plus uniques (H2 propres, contenus spécifiques) | Moyenne | 🟡 (mises en scène propres, textes inchangés) | Taux de texte unique > 70 % |
| 20 | Anniversaire : préciser « adulte » (ou ajouter une offre enfants si elle existe) | Moyenne | ❓ | Taux de clics de la page dans Search Console |
| 21 | `EntertainmentBusiness` + `WebSite` + `Person` (nom réel à fournir) + `@id` sur les Service | Moyenne | ❌ ❓ | Rich Results Test sans erreur |
| 22 | `<lastmod>` réels dans le sitemap | Moyenne | ❌ | Search Console > Sitemaps lu sans erreur |
| 23 | Liens locaux : bars clients, lieux de réception, agendas des communes | Moyenne | — | Search Console > Liens : domaines référents |

## Phase 4 — Suivi

- **Avant la mise en ligne :** `/claude-seo:seo drift baseline` sur les pages clés, puis `drift compare` juste après la mise en ligne.
- **Mi-janvier 2027 :** export Search Console à comparer avec la référence de novembre (≈ 6 clics hors marque sur 12 mois). Ne pas toucher aux titles d'ici là.
- **Clé Google PageSpeed (gratuite)** pour avoir de vraies mesures Lighthouse et CrUX au prochain audit.
