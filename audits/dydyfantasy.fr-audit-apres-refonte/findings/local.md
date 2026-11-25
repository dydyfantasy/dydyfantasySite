# Audit SEO local après refonte - dydyfantasy.fr (25/11/2026)

**Score SEO local : 78 / 100 (matin : 64 → +14)**. Entreprise à zone desservie (SAB), adresse de rue masquée (adresse complète seulement dans /mentions-legales, noindex : conforme, à ne pas déplacer).

| Dimension | Poids | Matin | Après | Commentaire |
|---|---|---|---|---|
| Signaux GBP | 25 % | 14 | 20 | Liens `g.page/.../CdpLaKDiVThEEBM` et `/review` présents dans le HTML de l'accueil ; fiche dans `sameAs`. Catégories, posts, photos : non vérifiables |
| Avis et réputation | 20 % | 14 | 17 | « Plus de 70 avis Google » (fiche : 73), boutons « Laisser un avis » ; pas d'`aggregateRating` (bon choix). Taux de réponse et rythme non vérifiables |
| SEO local on-page | 20 % | 15 | 17 | Toujours « Toulouse » dans 14 titres sur 17 ; H1 unique partout ; 8 pages prestation/événement ; pas de pages villes (voulu) |
| NAP et citations | 15 % | 7 | 8 | NAP du site cohérent et sans adresse de rue ; annuaires toujours non vérifiés |
| Schéma local | 10 % | 8 | 9 | Type `EntertainmentBusiness` (sous-type plus précis), `areaServed` = 20 villes `City` identiques à la fiche ; `geo` toujours à 4 décimales |
| Liens et autorité locale | 10 % | 6 | 7 | Références clients et avis cités ; liens externes non vérifiés |

Proximité (environ 55 % du classement local) : non modifiable ; le pack local est surtout atteignable près de Fonsorbes.

## Constats du matin : état

- H1 (aucun lien vers la fiche) : **corrigé** (liens fiche et dépôt d'avis, `sameAs`).
- H2 (zone site vs fiche) : **corrigé** côté site : 20 villes dans `areaServed` sur les 17 pages (40 entrées `City` sur les pages prestation/événement, qui ajoutent un `Service`). Reste à publier Lavaur et Giroussens dans la fiche (en cours chez le propriétaire).
- M4 (sous-type) : **corrigé** ; `geo` 5 décimales : **non corrigé** (43.5356 ; 1.2317).
- M1, M2, M3 : inchangés (voir ci-dessous).

## Constats restants

**Moyenne**
1. **Fiche et site à garder identiques.** Une fois Lavaur et Giroussens ajoutés à la fiche, comparer les deux listes (ordre et orthographe inclus). Vérification : GBP > Modifier le profil > Zones desservies contre `areaServed` (Schema Markup Validator sur l'accueil).
2. **Annuaires : présence toujours non vérifiée** (recherches publiques bloquées ce matin, non refaites ; aucune conclusion). Hors site, à faire par le propriétaire : rechercher « Dydy Fantasy » et le numéro entre guillemets ; créer ou contrôler Pages Jaunes (et Mappy), Bing Places, Apple Business Connect, Mariages.net / Zankyou pour la cible mariage, annuaires CCI et mairie de Fonsorbes ; même nom, même téléphone, même zone, sans adresse de rue. Yelp et BBB pèsent peu en France.
3. **Avis : entretenir le rythme.** Envoyer le lien d'avis (SMS ou QR code) après chaque soirée, répondre à tous les avis. Le « Plus de 70 » en dur reste valable (73) : le mettre à jour vers « Plus de 80 » le moment venu.
4. **Pages villes** : toujours pas de création en masse (pages doorway). Une page ne se justifie que si le contenu est réel (établissement, soirées, avis propres). Décider avec les impressions Search Console.

**Basse**
5. `geo` à 5 décimales (centre de la commune, pas un domicile).
6. `sameAs` Facebook en `profile.php?id=...` : URL propre si elle existe.
7. Écart de contenu à vérifier : « 4 bars » (qui-suis-je) ; une version du matin indiquait 3 : vérifier la cohérence sur toutes les pages. Qui-suis-je annonce « plus de 150 soirées » : à confirmer avec les chiffres réels.
8. Aucun e-mail pro visible : en prévoir un pour les inscriptions d'annuaires.

## Actions GBP pour le propriétaire (non vérifiables ici)
Catégorie principale adaptée à la recherche visée (facteur n°1 ; une mauvaise catégorie est le facteur négatif n°1) ; catégories secondaires seulement pour de vraies prestations ; une entrée « Services » par prestation ; posts réguliers (agenda) ; photos et vidéos ajoutées régulièrement ; Questions-réponses amorcées (zone, matériel, réponse sous 24 h) ; lien du site `https://dydyfantasy.fr/`.

## Comment vérifier
1. `curl -s https://dydyfantasy.fr/ | grep -o "g.page/r/[A-Za-z0-9]*"` : liens fiche et avis.
2. Rich Results Test et validator.schema.org : `EntertainmentBusiness`, 20 `City`, absence d'`aggregateRating`.
3. Pack local : contrôle manuel depuis Fonsorbes, Colomiers et Toulouse.
4. GBP > Performances (appels, clics itinéraire/site, nombre d'avis sur 30 jours).
5. Tableau nom / téléphone / zone par annuaire.

## Limites
Pas d'API GBP ni DataForSEO. Non évalués : catégories GBP, posts, photos, réponses aux avis, vélocité, classement du pack, annuaires. Les 73 avis et les 20 zones viennent de votre brief, non confirmés indépendamment. Audit fondé sur crawl.json (17 pages) et le rendu de l'accueil.
