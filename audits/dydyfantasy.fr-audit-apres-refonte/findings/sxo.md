# Analyse SXO après refonte — dydyfantasy.fr

Date : 25/11/2026 (soir), après la mise en ligne de la refonte (commit 33bc3a4).
Comparaison avec : `audits/dydyfantasy.fr-audit/findings/sxo.md` (même jour, matin, score 49).

**Méthode** : les SERP de ce matin sont reprises telles quelles (5 requêtes, 8 à 10 résultats chacune, aucune nouvelle recherche). Les pages du site ont été réévaluées à partir de deux sources : `render_page.py --mode auto` sur 8 pages en ligne (blind test, karaoké, DJ, mariage, entreprise, anniversaire, bars, contact), puis extraction des titres, images, vidéos, avis, appels à l'action et du formulaire, et `crawl.json` (17 pages : title, H1, description, JSON-LD, og:image).
Les pages sont pré-rendues (`is_spa: false`). Le mode `auto` a donc lu le HTML sans lancer Chromium, ce qui n'a pas d'incidence ici : le contenu visible est déjà dans le HTML.

---

## SXO Gap Score : 69/100 (matin : 49/100, soit +20)

Ce score est distinct du score de santé SEO.

| Dimension | Avant | Après | Preuve (site en ligne, ce soir) |
|---|---|---|---|
| Type de page | 9/15 | 9/15 | Rien n'a changé face aux SERP. Entreprise reste une page de prestation face à une SERP de listes et de plateformes, et son title parle toujours d'« animateur micro ». Le title de /prestations/dj (« DJ mariage et soirée à Toulouse & Gers ») concurrence toujours /evenements/mariage. Le title et le H1 de la page Anniversaire ne contiennent toujours pas « adulte ». Ces trois points sont reportés volontairement à mi-janvier. |
| Profondeur du contenu | 8/15 | 11/15 | Les pages comptent maintenant 930 à 1 470 mots, contre 470 à 630 ce matin. Chaque page a ses propres titres de section (« Votre karaoké, en pratique », « Vos questions sur l'anniversaire adulte »…). La page Karaoké annonce « Plus de 90 000 chansons ». La page Mariage détaille le vin d'honneur, la rencontre préalable en personne ou en visio et le repérage des lieux. En revanche, le bloc « En pratique » a le même texte sur les 7 pages (« Elle s'adapte à votre événement : on la cale ensemble selon votre programme »), et aucune page ne donne de durée, de nombre de joueurs ni d'élément de budget. |
| Signaux UX | 10/15 | 11/15 | L'option « DJ » est maintenant dans le formulaire, et la promesse « buzzers » est corrigée (« Chacun joue sur son téléphone, qui devient son buzzer »). Chaque page a sa propre mise en scène interactive. Ce qui reste : le bouton secondaire « Voir l'agenda » est le même partout, le téléphone n'apparaît qu'en pied de page (pas de lien `tel:` dans `<header>`), les liens vers /contact ne présélectionnent pas le type d'événement, et le formulaire n'a pas de champ pour le nombre de participants. |
| Données structurées | 10/15 | 11/15 | `priceRange` a été retiré. `Service` et `BreadcrumbList` sont présents sur les 8 pages, et `VideoObject` sur /dydy-quiz. Les pages qui ont des extraits vidéo n'ont pas de `VideoObject` : c'est mineur. |
| Médias | 2/15 | 9/15 | Ce matin : 0 photo et 0 vidéo. Ce soir : une vraie photo en haut de 6 pages sur 7, dont le texte alternatif est tiré du nom de fichier (« mariage premiere danse », « bars soiree quiz biergarten saint orens »…). La page Blind test a le quiz de démo à la place. Il y a 4 balises `<video>` sur Blind test, Karaoké, DJ, Entreprise et Bars, 2 sur Mariage, et **0 sur Anniversaire**. L'image de partage (`og:image`) est devenue `partage-dydy-fantasy.jpg` sur toutes les pages. |
| Autorité / preuves | 4/15 | 11/15 | « 4,9/5 · plus de 70 avis Google » sous le hero des 7 pages. Un avis cité mot pour mot sur 6 pages sur 7 (mariés, bar La Ville en Rose, joueurs, organisateurs) : il manque sur **Anniversaire**. Le bandeau de 13 logos (Décathlon, bars résidents…) est sur chaque page. Sur Mariage : liens vers mariages.net et vers la galerie des mariages. Le fond de la concurrence reste en avance sur la page Mariage (voir H2). |
| Fraîcheur | 6/10 | 7/10 | La page Bars a un bloc « Prochaines soirées blind test & karaoké autour de Toulouse ». Le chiffre « 4 bars » est à jour (description de Qui suis-je, page Bars). La date détectée reste la date générique 2026-01-01, et il n'y a pas de bloc « Dernières soirées ». |

---

## Type de page attendu par Google : avant / après

| Requête | Page | Décalage ce matin | Décalage ce soir | Ce qui a changé |
|---|---|---|---|---|
| animateur blind test toulouse | /prestations/blind-test-quiz | ALIGNÉ (sans preuves) | **ALIGNÉ** | Le niveau de preuve est maintenant comparable à So Events 31 (note Google, logos de bars, avis cité). Il manque toujours la durée, que la page Nanobox donne. |
| dj mariage toulouse | /evenements/mariage (+ /prestations/dj) | MOYEN | **MOYEN** | Les preuves sont là (avis de mariés, photo, vidéos, lien mariages.net). Le chevauchement entre les deux pages et l'absence de prix restent (report à mi-janvier, choix du propriétaire). |
| animation karaoké toulouse | /prestations/karaoke | ALIGNÉ sur la moitié prestataires | **ALIGNÉ** sur la même moitié | Le nombre de chansons (« Plus de 90 000 ») égale ou dépasse celui des concurrents (28 000 à 40 000). L'intention « où chanter » n'est toujours pas servie sur cette page : l'agenda n'y est pas intégré. |
| team building quiz toulouse | /evenements/entreprise | ÉLEVÉ | **ÉLEVÉ** | Décathlon et un avis (« il est certain que nous retravaillerons ensemble ») renforcent la confiance, mais le type de page et l'absence de données de comparaison (durée, nombre de participants, HT) ne changent pas. |
| animateur anniversaire toulouse | /evenements/anniversaire | MOYEN | **MOYEN** | « adulte » n'apparaît que dans le titre de la FAQ, en bas de page. Le title et le H1 restent inchangés jusqu'à mi-janvier. |

**Constat principal** : le constat critique C1 (aucune preuve) est en grande partie corrigé, d'où l'essentiel des +20 points. Les écarts de type de page (Entreprise ÉLEVÉ, Mariage et Anniversaire MOYEN) sont tous en attente de décisions déjà reportées, ou de contenus que le propriétaire ne veut pas publier.

---

## Avant / après, constat par constat

| Constat du matin | Statut | Preuve ce soir |
|---|---|---|
| C1 — Aucune preuve sur les pages de prestation | **Corrigé à 85 %** | Note Google, bandeau de logos, photo et extraits vidéo sur les pages, avis cité sur 6 pages sur 7. Ce qui manque : un avis et des vidéos sur Anniversaire. |
| H1 — Team building : décalage de type de page | **Ouvert** | Le title est toujours « Team building & animateur micro à Toulouse ». Pas de durée, pas de taille de groupe, pas de mention HT. La fiche Funbooker n'a pas pu être vérifiée. |
| H2 — DJ mariage : angle, chevauchement, preuves | **Partiel** | Preuves et contenu DJ et vin d'honneur ajoutés. Le chevauchement entre les deux pages reste (après mi-janvier). Il n'y a pas de bouton « Vérifier ma date ». |
| H3 — Budget, durée, taille de groupe | **Partiel, et limité par le choix du propriétaire** | Le bloc « En pratique » indique : déplacement offert dans un rayon de 50 km, matériel fourni, durée sur mesure, devis gratuit sous 24 h. Il ne donne ni chiffre ni élément de budget. |
| M1 — Anniversaire enfants ou adultes | **Partiel** | « Vos questions sur l'anniversaire adulte » en titre de FAQ. Le title et le H1 attendent mi-janvier. |
| M2 — Karaoké « où chanter » | **Partiel** | Le nombre de chansons est ajouté. L'agenda est intégré sur Bars, mais pas sur Karaoké ni sur Blind test. |
| M3 — Même parcours d'action pour tous | **Partiel** | L'option DJ est ajoutée au formulaire. Restent : « Voir l'agenda » partout, pas de téléphone dans l'en-tête, pas de `?type=`, pas de champ pour le nombre de participants. |
| M4 — Buzzers et pages trop semblables | **Buzzers corrigés**. Ressemblance entre pages : **non mesurée** | Le bloc « En pratique » ajoute un texte identique sur 7 pages, et le bandeau de logos est commun à toutes. La part de texte commun a probablement augmenté : à mesurer de nouveau. |
| B1 — Adresse sur mariages.net | Non vérifié | Hors du périmètre de cette analyse. |
| B2 — « 3 bars » → 4 | **Corrigé** | « Résident dans 4 bars » (description de Qui suis-je), « 4 bars » sur la page Bars. |
| B3 — `priceRange: "€"` | **Corrigé** | Absent du JSON-LD. |
| B4 — Fraîcheur et image de partage | **Partiel** | Image de partage corrigée. Pas de date visible, pas de « Dernières soirées ». |

---

## Personas réévalués (du plus faible au plus fort)

| Persona | Page | Pertinence | Clarté | Confiance | Action | Avant | Après |
|---|---|---|---|---|---|---|---|
| Parent (anniversaire d'enfant) | /evenements/anniversaire | 4 | 7 | 7 | 5 | 20 | **23** (hors cible, il doit vite comprendre que ce n'est pas pour lui) |
| Amateur de karaoké « où chanter » | /prestations/karaoke | 8 | 9 | 12 | 11 | 34 | **40** (opportunité non saisie) |
| RH / office manager | /evenements/entreprise | 16 | 12 | 16 | 16 | 51 | **60** |
| Particulier (anniversaire adulte) | /evenements/anniversaire | 19 | 16 | 10 | 16 | 56 | **61** |
| Futurs mariés | /evenements/mariage | 18 | 16 | 15 | 15 | 50 | **64** |
| Gérant de bar | /evenements/bars-restaurants | 23 | 18 | 21 | 19 | 70 | **81** |

Le point faible commun n'est plus la confiance, sauf sur la page Anniversaire. C'est maintenant **la clarté** pour décider : durée, nombre de participants, budget, disponibilité de la date.

- **RH (60)**, le plus faible des personas commerciaux. Clarté : 12/25. La page ne dit rien de ce qu'il faut pour présenter le projet en interne : durée d'une session, taille des équipes, devis HT ou facture. Sans publier de prix, on peut remplacer « Une durée à votre mesure » par des faits réels donnés par Dydy, par exemple « 200 participants et plus déjà animés », « devis HT et facture pour les entreprises » (à faire confirmer), et un exemple de déroulé de séminaire. Ajouter aussi un bouton secondaire « Appeler » ou « Échanger en visio » à la place de « Voir l'agenda ».
- **Anniversaire adulte (61)**. Confiance : 10/25. C'est la seule page sans avis cité ni vidéo. Ajouter un avis Google d'anniversaire s'il en existe un, sinon un avis de soirée privée, ainsi que les extraits de la galerie. « adulte » dans le title et le H1 reste prévu pour mi-janvier.
- **Futurs mariés (64)**. Confiance : 15/25, Action : 15/25. Les preuves sont là, mais le site ne compte qu'un mariage et une partie des concurrents affichent jusqu'à 32 à 127 avis. Ajouter un bouton « Vérifier ma date » vers `/contact?type=Mariage` (le formulaire sait déjà lire `type`). Ce matin, mariages.net affichait « à partir de 800 € » : ce prix reste visible par les couples tant qu'il est en ligne là-bas, même si le site n'en parle pas.
- **Gérant de bar (81)**. C'est la page la plus aboutie : mot du bar La Ville en Rose, agenda intégré, photo du Biergarten, 4 vidéos. Reste à ajouter une indication du format d'une soirée type (sans chiffre si le propriétaire refuse).

---

## Constats restants (par priorité)

1. **HAUTE — Entreprise : aucune donnée pour comparer** (H1 et H3). C'est la page la plus loin de sa SERP. Ajouter des faits non chiffrés ou déjà publics (200 et plus déjà animés, matériel, intervention sur le lieu de l'événement, mention HT si confirmée). La fiche Funbooker reste la piste la plus courte pour cette requête. Le title est à revoir à mi-janvier.
2. **HAUTE — Le bloc « En pratique » est générique.** Le même texte sur 7 pages n'apporte pas d'information propre à chaque intention, et augmente la part de texte commun entre les pages. Garder les 4 titres, mais écrire une phrase propre à chaque page avec des faits réels : Mariage : rencontre préalable et repérage ; Karaoké : paroles sur grand écran, chansons choisies sur téléphone ; Entreprise : facture ou HT si confirmé ; Bars : date fixe chaque semaine ou chaque mois.
3. **MOYENNE — Anniversaire : la page la moins prouvée.** 0 avis cité, 0 vidéo. Le title et le H1 sont reportés à mi-janvier.
4. **MOYENNE — Parcours d'action.** Bouton secondaire adapté à chaque page (« Vérifier ma date », « Appeler »), liens `/contact?type=…`, téléphone dans l'en-tête sur mobile, champ facultatif « Nombre de participants » (aujourd'hui seulement demandé dans le texte « Avant de m'écrire »).
5. **MOYENNE — Karaoké et Blind test : intégrer l'agenda** déjà utilisé sur la page Bars, pour servir l'intention « où chanter ou jouer ce soir ».
6. **MOYENNE — DJ mariage : chevauchement entre les deux pages** (déjà prévu après mi-janvier).
7. **BASSE** — `VideoObject` pour les extraits vidéo des pages (facultatif), bloc « Dernières soirées » pour la fraîcheur, adresse sur mariages.net (B1, non vérifiée).

---

## Comment vérifier

1. **Rendu** : `claude-seo run render_page.py <url> --mode auto --json` sur les 7 pages. Objectif : au moins 1 avis cité et au moins 1 `<video>` sur chaque page, Anniversaire compris (aujourd'hui 0 et 0). Vérifier aussi qu'un lien `tel:` existe dans `<header>`, et que les liens de chaque page vers /contact contiennent `?type=`.
2. **Texte commun** : comparer de nouveau les pages par séquences de 5 mots (même méthode que ce matin). Objectif : moins de 25 % de texte commun par page, après réécriture du bloc « En pratique ».
3. **Search Console**, 4 à 8 semaines après le 25/11 : CTR et position de « blind test toulouse » (12,5 au 17/11), des requêtes « mariage » sur /evenements/mariage (« dj mariage toulouse » : 57), et des requêtes « team building » et « anniversaire ». La hausse attendue des preuves se mesure d'abord sur le CTR et sur les demandes, pas sur la position.
4. **GA4** : envois réussis du formulaire, clics `tel:` et WhatsApp, ventilés par page d'arrivée. Comparer les 4 semaines avant et après le 25/11.
5. **Formulaire** : relever dans les demandes reçues la part qui contient la date, le nombre de participants et le format. C'est l'indicateur que la clarté s'améliore.

---

## Limites

- Les SERP n'ont pas été relancées (consigne). Ce sont celles de ce matin, avec leurs propres limites : moteur non Google.fr ; pack local, « Autres questions posées », annonces et aperçu IA non observés.
- Pas de rendu Chromium : le mode `auto` a détecté des pages pré-rendues. Le widget d'avis Google, chargé dans le navigateur à l'approche de la section, n'a donc pas été évalué ; seuls les avis écrits dans le HTML comptent. Pas de capture d'écran, et le haut de page a été jugé d'après l'ordre du DOM.
- Le texte commun aux pages n'a pas été mesuré de nouveau. mariages.net, Funbooker et la fiche Google n'ont pas été consultés ce soir.
- Les notes par persona restent des jugements d'expert à partir des signaux relevés. Ce ne sont pas des mesures d'utilisateurs.
- Aucun chiffre, prix ou référence n'a été inventé. Les suggestions marquées « à confirmer » dépendent de Dydy.

Pour aller plus loin : `/seo content` (preuves et E-E-A-T de la page Anniversaire), `/seo local` (pack local), `/seo schema` (VideoObject). Un rapport PDF peut être généré avec `/seo google report`.

---

## Données pour audit-data.json (catégorie « Search Experience »)

```json
{
  "category": "Search Experience",
  "sxo_gap_score": 69,
  "previous_score": 49,
  "dimensions": {"page_type": 9, "content_depth": 11, "ux_signals": 11, "schema": 11, "media": 9, "authority": 11, "freshness": 7},
  "queries": [
    {"query": "animateur blind test toulouse", "target": "/prestations/blind-test-quiz", "mismatch": "ALIGNED"},
    {"query": "dj mariage toulouse", "target": "/evenements/mariage", "mismatch": "MEDIUM"},
    {"query": "animation karaoké toulouse", "target": "/prestations/karaoke", "mismatch": "ALIGNED"},
    {"query": "team building quiz toulouse", "target": "/evenements/entreprise", "mismatch": "HIGH"},
    {"query": "animateur anniversaire toulouse", "target": "/evenements/anniversaire", "mismatch": "MEDIUM"}
  ],
  "findings": [
    {"id": "SXO-C1", "status": "mostly_fixed", "remaining": "Anniversaire : 0 avis cité, 0 vidéo"},
    {"id": "SXO-H1", "status": "open", "severity": "high"},
    {"id": "SXO-H2", "status": "partial", "severity": "high", "note": "cannibalisation reportée mi-janvier"},
    {"id": "SXO-H3", "status": "partial", "severity": "high", "note": "prix/durée chiffrée refusés par le propriétaire ; bloc En pratique générique"},
    {"id": "SXO-NEW1", "status": "open", "severity": "high", "title": "Bloc « En pratique » identique sur 7 pages"},
    {"id": "SXO-M1", "status": "partial", "severity": "medium"},
    {"id": "SXO-M2", "status": "partial", "severity": "medium"},
    {"id": "SXO-M3", "status": "partial", "severity": "medium"},
    {"id": "SXO-M4", "status": "buzzers_fixed_duplication_unmeasured", "severity": "medium"},
    {"id": "SXO-B2", "status": "fixed"},
    {"id": "SXO-B3", "status": "fixed"},
    {"id": "SXO-B4", "status": "partial", "severity": "low"}
  ],
  "personas": [
    {"name": "Parent (anniversaire enfant)", "before": 20, "after": 23},
    {"name": "Amateur de karaoké", "before": 34, "after": 40},
    {"name": "RH / office manager", "before": 51, "after": 60},
    {"name": "Particulier (anniversaire adulte)", "before": 56, "after": 61},
    {"name": "Futurs mariés", "before": 50, "after": 64},
    {"name": "Gérant de bar", "before": 70, "after": 81}
  ]
}
```
