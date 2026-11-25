# Analyse SXO (Search Experience Optimization) — dydyfantasy.fr

Date : 25/11/2026 · Site analysé : version en ligne (contenu du commit 828c4cd, pas la branche `design/accueil-v3`).
Méthode : rendu Chromium (`render_page.py --mode always`, bac à sable du navigateur actif) des pages cibles + `parse_html.py`, analyse des 8 à 10 premiers résultats de chaque requête (WebSearch), visite de 12 pages concurrentes, positions Search Console de l'export du 17/11/2026.

---

## SXO Gap Score : 49/100

Ce score est distinct du score de santé SEO : il mesure l'écart entre ce que Google met en avant pour les 5 requêtes et ce que les pages du site montrent.

| Dimension | Score | Preuve |
|---|---|---|
| Type de page | 9/15 | 3 requêtes sur 5 alignées (pages de prestataire). « team building quiz toulouse » : la SERP ne contient que des plateformes, des listes d'idées et des salles de quiz, 0 animateur indépendant. « animateur anniversaire toulouse » : 4 résultats sur 9 visent les enfants. |
| Profondeur du contenu | 8/15 | 470 à 630 mots de contenu propre par page, bonne structure (pour qui, formats, déroulé, inclus, FAQ). Mais 24 à 49 % du texte est commun à d'autres pages (blocs « De votre idée au jour J » et « Ce que je peux apporter » identiques mot pour mot), et il n'y a aucune donnée pratique : durée, nombre de joueurs par format, budget, conditions. |
| Signaux UX | 10/15 | H1 = prestation + Toulouse, « Demander mon devis » dès le haut de page et répété, « Réponse sous 24 h · Devis tout compris », FAQ en accordéon, quiz de démo jouable sur la page blind test. Points faibles : téléphone absent de l'en-tête, même CTA secondaire « Voir l'agenda » partout, formulaire sans option « DJ » ni champ « nombre de participants ». |
| Données structurées | 10/15 | `LocalBusiness` + `Service` + `BreadcrumbList` valides sur chaque page. Pas de `VideoObject` (pas de vidéo), `priceRange: "€"` peu cohérent avec le tarif affiché sur mariages.net. |
| Médias | 2/15 | 0 photo réelle et 0 vidéo sur les 6 pages ciblées : les 4 images sont le logo (×2) et la mascotte (×2). La galerie ne compte que 3 photos et 0 vidéo. |
| Autorité / preuves | 4/15 | « 4,9/5 · +70 avis Google », les 11 logos clients et les chiffres (150+ soirées, 12 à 15 par mois) sont uniquement sur l'accueil. Aucun avis cité sur les pages de prestation. Seule preuve sur une page cible : Décathlon (VitalSport), en texte seulement, sur /evenements/entreprise. |
| Fraîcheur | 6/10 | Agenda public à jour (bulle « Prochaine soirée » du 25/11 au Biergarten sur chaque page), textes revus en novembre. Aucune date visible ni « dernières soirées animées » sur les pages, et certains chiffres ont déjà vieilli (voir B2). |

---

## Constat principal : où la page ne correspond pas au type de page attendu

| Requête | Ce que Google classe (consensus) | Page du site | Type de la page | Décalage | Position Search Console (17/11) |
|---|---|---|---|---|---|
| animateur blind test toulouse | Pages de prestataires : 6 sur 8 (75 %), 1 annuaire avec prix, 1 spectacle public | /prestations/blind-test-quiz | Page de prestation | **ALIGNÉ** (mais preuves absentes) | « blind test toulouse » : 12,5 |
| dj mariage toulouse | Sites de DJ spécialisés mariage : 9 sur 10 (90 %), annuaire mariages.net en 1re position | /evenements/mariage (et /prestations/dj, qui vise aussi « DJ mariage » dans son title) | Page de prestation axée « jeux + DJ » | **MOYEN** sur l'angle, avec cannibalisation entre deux pages | 57 |
| animation karaoké toulouse | Intention partagée : prestataires 5 sur 9 (55 %), lieux où chanter (listes de bars, karaoké box) 4 sur 9 (45 %) | /prestations/karaoke | Page de prestation | **ALIGNÉ** sur la moitié prestataires, l'autre moitié n'est pas servie | non mesurée |
| team building quiz toulouse | Listes d'idées et guides 5 sur 9 (55 %), fiches de plateforme ou de salle avec prix par personne 4 sur 9 (45 %), animateurs 0 sur 9 | /evenements/entreprise | Page de prestation | **ÉLEVÉ** (une page de prestation face à une SERP de comparaison et de réservation) | non mesurée (« team building occitanie » : 30) |
| animateur anniversaire toulouse | Pages de prestataires 6 sur 9, dont 4 pour enfants (Kidays, Monsieur Ballons ×2, Les Fripouilles), 2 annuaires | /evenements/anniversaire | Page de prestation pour adultes | **MOYEN** (public différent sur près de la moitié de la SERP) | « animation d'anniversaires gers » : 26 |

### Détail des SERP observées

**1. animateur blind test toulouse** : Nanobox (blind test entreprise, et une page blind test mariage), So Events 31 (animateur solo), Evenementiel Toulouse.com (agence), Dee Tez (DJ animateur), Événementiel pour tous (annuaire de 16 prestataires du 31, prix « Dès 300 € » à « Dès 1 300 € » sur la plupart des fiches), 3T Café-Théâtre (spectacle), Team Cohésion (agence de team building).
Ce que les concurrents montrent : So Events 31 affiche des avis Google, les logos de bars toulousains, « plus de 10 ans » et « plus de 300 événements ». Nanobox donne 3 durées (sprint de 30 min, session d'environ 1 h, fil rouge), une plage de participants (de 10 à plus de 1 000), des clients nommés (Sopra Steria, ISAE-SUPAERO, Crédit Agricole…) et un témoignage d'une responsable RH.
La page du site : bien construite (types d'événements, 4 formats, déroulé, FAQ, quiz de démo) mais sans aucun nom de bar, aucun avis, aucune photo et aucune durée.

**2. dj mariage toulouse** : mariages.net, liste de 80 DJ de Haute-Garonne, chaque fiche avec « À partir de » et une note. Dydy Fantasy y figure à la 15e place de la page : 5,0 (1 avis), « à partir de 800 € ». Les 10 premiers ont entre 2 et 127 avis et des prix de 850 € à 1 600 €. Viennent ensuite Platines et Cocktails, DJ Big Brothers (forfaits à 1 250 € et 1 450 €, « 5/5 sur Mariages.net · 32 avis », badge Wedding Awards, bouton « Vérifier la disponibilité de ma date »), Thomas Boglio, DJM Events, Lionel Rigal, DJ Otava, L'Heureux Mix, Starlight DJ (« 20 ans »), Passion Zyk (3 forfaits nommés).
La page du site : le H1 dit « Animateur & DJ mariage », mais le contenu parle surtout des jeux (quiz des mariés, blind test, Challenge Photo). Le DJ tient en une ligne (« Soirée DJ »). Rien sur la cérémonie, le vin d'honneur, l'ouverture de bal, l'heure de fin, le prix, les avis de mariés ou des photos.

**3. animation karaoké toulouse** : Toulouse Secret et Le Guide Toulouse (les meilleures adresses pour chanter), The Four Monkeys (bar), Karnage Club (karaoké box), Kriis B / dj-toulouse.fr (« plus de 28 000 chansons », environ 8 photos de soirées, FAQ sur l'acompte et l'annulation), Sonovolante (« À partir de 477 € », liste de communes), Karanim (« plus de 40 000 titres »), By Anim, Événement France (annuaire).
La page du site : bons formats (libre, duos, battles, Blind'Quiz + Karaoké) mais pas de taille de catalogue, pas de photo et pas de dates de soirées ouvertes à tous, alors que l'agenda du site en contient.

**4. team building quiz toulouse** : Quiz Room (salle : 25 € à 62 € HT par personne, 1 h 15 à 2 h 15, 3 à 18 joueurs par session, réservation en ligne, logos L'Oréal, EDF…), Funbooker ×3 (plateforme : prix par personne « dès 12 € », filtres « Les moins chers », « Grands groupes », « Sur le lieu de mon événement »), Autreman (« 22 idées »), blog Funbooker, Citeamup (guide), Karnage Club (« Top 12 »), Newton Offices (« 10 idées »).
La page du site : une page de prestation dont le title met en avant « animateur micro ». Elle n'indique ni prix ou budget, ni durée, ni nombre de participants. Or son atout correspond exactement à un filtre de Funbooker : il vient sur le lieu de l'événement, sans limite de taille de salle.

**5. animateur anniversaire toulouse** : Kidays (enfants de 4 à 12 ans, « À partir de 256 € », 4,9/5 sur 760 avis Google, réservation en 2 minutes), Monsieur Ballons ×2, Les Fripouilles (enfants), Je veux un artiste (annuaire, ex. DJ « à partir de 880 € »), ZeBigTeuf ×2 (DJ anniversaire), So Events 31, Événementiel pour tous (annuaire de DJ animateurs).
La page du site : vise les adultes (« 30 ans, 40 ans, 50 ans » dans l'introduction) mais le mot « adulte » n'apparaît ni dans le title ni dans le H1.

---

## Ce qui fonctionne

- **Une page par intention**, avec un H1 qui contient la prestation et « Toulouse » (blind test, karaoké, mariage, entreprise, anniversaire). Le type de page est le bon pour 3 requêtes sur 5.
- **Contenu visible sans JavaScript** : le HTML pré-rendu et le rendu Chromium sont quasi identiques (14 mots d'écart, ceux de la bulle d'agenda). Google voit tout le contenu.
- **Appel à l'action clair** : « Demander mon devis » dans l'en-tête, dans le hero et en fin de page, avec « Réponse sous 24 h · Devis tout compris ». Le formulaire est court et contient la date et le lieu, et /contact propose aussi le téléphone et WhatsApp.
- **FAQ utile** : zone d'intervention, matériel fourni, 200 personnes et plus, « réservez tôt » pour les mariages, soirée surprise, intervention à domicile.
- **Des atouts que personne n'a dans les SERP** : l'appli Dydy Quiz (les téléphones des invités servent de buzzers), le combiné quiz + karaoké + DJ dans la même soirée, un agenda public qui prouve une activité régulière, et le quiz jouable sur la page blind test.
- **La page Bars & restaurants** est celle qui sert le mieux son persona : résidences, bars nommés, 12 à 15 soirées par mois.
- **Les preuves existent déjà** : 4,9/5 avec plus de 70 avis Google, 11 logos clients et des chiffres réels sur l'accueil, ainsi qu'un profil mariages.net avec 12 photos et 3 vidéos. Elles ne sont simplement pas sur les pages où arrivent les visiteurs.

---

## Constats et corrections

### CRITIQUE

#### C1 — Aucune preuve (photo, vidéo, avis, référence) sur les pages de prestation, alors que la SERP en est remplie
- **Preuve** : le rendu Chromium des 6 pages ciblées (blind test, karaoké, DJ, mariage, entreprise, anniversaire) donne 4 images par page : logo ×2 et mascotte ×2. Aucune balise `<video>`, aucun avis, aucune note. La note « 4,9/5 · +70 avis Google » et le bandeau de 11 logos n'existent que sur l'accueil. Dans les SERP, au contraire : DJ Big Brothers affiche « 5/5 · 32 avis » et un badge Wedding Awards dès le haut de page, So Events 31 des avis Google et des logos de bars toulousains, Kidays « 4,9/5 · 760 avis », Nanobox des clients nommés et un témoignage RH, Kriis B environ 8 photos de soirées karaoké, et l'annuaire mariages.net une note sur chaque fiche.
- **Correction** (contenu à fournir par Dydy, rien à inventer) :
  1. Sous le hero de chaque page, reprendre « 4,9/5 · +70 avis Google » avec un lien vers les avis.
  2. Citer mot pour mot 1 à 3 avis Google choisis par segment : l'avis du mariage sur /evenements/mariage, des avis de soirées en bar sur bars, blind test et karaoké, un avis d'anniversaire s'il en existe un.
  3. Ajouter 3 à 6 photos réelles du segment et un extrait vidéo. Les 12 photos et 3 vidéos déjà en ligne sur mariages.net sont un bon point de départ pour la page Mariage.
  4. Afficher les logos pertinents : Décathlon sur Entreprise, les bars résidents sur Bars, Blind test et Karaoké.
  5. Reprendre la bande de chiffres de l'accueil (12 à 15 soirées par mois, 150+ soirées, 200+ invités).
  Les composants `testimonial` et `gallery` de `ServicePage` existent déjà dans la branche `design/accueil-v3`. Le travail porte donc surtout sur le contenu.
- **Vérification** : relancer `render_page.py --mode always` sur chaque page et compter au moins 3 images non décoratives et 1 avis. Dans GA4, suivre par page les clics sur « Demander mon devis » et sur `tel:` avant et après. Dans Search Console, suivre le CTR des 6 pages.

### HAUTE

#### H1 — « team building quiz toulouse » : décalage de type de page (ÉLEVÉ)
- **Preuve** : sur 9 résultats, 0 page d'animateur. On trouve 5 listes d'idées ou guides (Autreman « 22 idées », Karnage « Top 12 », Newton Offices « 10 idées », Citeamup, blog Funbooker) et 4 fiches de salle ou de plateforme avec prix par personne (Quiz Room 25 € HT, Rival Quiz 25 € HT, catégorie Funbooker « dès 12 € »). Funbooker apparaît 3 fois. La page /evenements/entreprise est une page de prestation sans durée, sans nombre de participants et sans budget, et son title met en avant « animateur micro » plutôt que « quiz ».
- **Correction** :
  1. **Créer une fiche Funbooker** (quiz team building chez le client), puisque la plateforme occupe 3 places du top 9 et propose le filtre « Sur le lieu de mon événement ». C'est le chemin le plus court pour apparaître sur cette requête.
  2. Sur /evenements/entreprise, ajouter un bloc « Quiz team building : en pratique » avec les valeurs réelles de Dydy : durée d'une session, taille des équipes, nombre de participants (200 et plus déjà animés), matériel apporté, délai de réservation, devis HT.
  3. Ajouter un encadré comparatif honnête, sans citer de concurrent : « Salle de quiz ou animateur dans vos locaux ? ». Critères : déplacement des équipes, nombre de joueurs, questions sur votre entreprise, enchaînement avec la soirée (blind test, karaoké, DJ).
  4. Une fois la période de mesure de 4 à 8 semaines passée, faire apparaître « quiz » dans le title (par exemple « Team building quiz & animation d'entreprise à Toulouse »).
- **Vérification** : fiche Funbooker visible dans la catégorie « Quiz & Blind test » à Toulouse. Dans Search Console, suivre impressions et position des requêtes contenant « team building » sur /evenements/entreprise.

#### H2 — « dj mariage toulouse » : angle jeux au lieu de DJ, deux pages en concurrence, et preuves très en dessous des concurrents
- **Preuve** : 9 résultats sur 10 sont des DJ spécialisés mariage qui détaillent forfaits, horaires et avis. mariages.net est en 1re position, et Dydy Fantasy y apparaît 15e de la page avec 1 avis, contre 2 à 127 pour les 10 premiers. Sur le site, deux pages visent la même requête : /prestations/dj (« DJ mariage et soirée à Toulouse & Gers ») et /evenements/mariage (« Animateur & DJ mariage à Toulouse »). Search Console place le site en position 57 sur « dj mariage toulouse ». La page Mariage consacre une seule ligne au DJ (« Soirée DJ ») et ne parle ni de la cérémonie, ni du vin d'honneur, ni de l'ouverture de bal, ni de l'heure de fin. Le bouton secondaire « Voir l'agenda » renvoie vers des soirées en bar.
- **Correction** :
  1. Faire de /evenements/mariage la seule page « DJ mariage ». Après la période de mesure, retirer « mariage » du title de /prestations/dj et y ajouter un lien « DJ mariage » vers /evenements/mariage.
  2. Ajouter à la page Mariage une section « Le DJ de votre mariage » à partir des faits réels : vin d'honneur (DJ, animation micro ou jeux brise-glace), playlist construite avec les mariés (incontournables et interdits), lumières, lyres et machine à fumée, rencontre préalable en personne ou en visio, repérage du lieu. L'heure de fin et la durée sont à confirmer par Dydy.
  3. Remplacer « Voir l'agenda » par « Vérifier ma date », qui mène à /contact avec le type Mariage présélectionné. Le champ date existe déjà.
  4. Demander un avis Google **et** mariages.net au couple déjà marié et aux 3 couples de cette saison. Le classement interne de l'annuaire, qui occupe la 1re place de Google, dépend de ces avis.
  5. Être réaliste : avec un seul mariage réalisé, « dj mariage toulouse » est la requête la plus disputée. La différence se joue sur « animateur + DJ » : quiz des mariés et Challenge Photo en fil rouge, ce qu'aucun des 10 résultats ne propose. « animateur mariage toulouse » et « animation mariage blind test » sont des cibles plus accessibles.
- **Vérification** : dans Search Console, filtrer la page /evenements/mariage et suivre les requêtes « mariage » (position, impressions), et vérifier qu'une seule page apparaît pour « dj mariage ». Suivre le nombre d'avis et la place sur la liste mariages.net Haute-Garonne.

#### H3 — Budget, durée et taille de groupe absents, alors que la SERP les affiche partout
- **Preuve** : prix « à partir de » sur chaque fiche mariages.net, avec filtres par tranche de prix. Événementiel pour tous : « Dès 300 € » à « Dès 1 300 € ». Sonovolante « À partir de 477 € », Kidays « À partir de 256 € », Quiz Room 25 € HT par personne, DJ Big Brothers 1 250 € et 1 450 €. Les durées et nombres de participants apparaissent chez Quiz Room, Nanobox et Funbooker. Le site n'indique aucun montant, aucune durée et aucun nombre de joueurs par format. En revanche, le profil mariages.net de Dydy affiche « Tarif à partir de 800 € » : un couple qui compare les deux voit une information différente.
- **Correction** (le choix actuel est de ne pas publier de prix, à trancher par Dydy) :
  - Option A : reprendre sur la page Mariage le « à partir de 800 € » déjà public sur mariages.net, pour la cohérence.
  - Option B, sans prix : ajouter un bloc « Ce qui fait varier le devis » (durée, nombre d'invités, distance, formats combinés, matériel), garder « devis tout compris sous 24 h » et ajouter un champ budget facultatif dans le formulaire.
  - Dans tous les cas, donner les durées types et le nombre de joueurs pour chaque format (blind test, quiz, karaoké), avec les valeurs réelles fournies par Dydy.
- **Vérification** : dans GA4, comparer sur 4 semaines avant et après le taux de demandes de devis par page (envoi Formspree réussi). Dans les messages reçus, vérifier si les demandes contiennent plus souvent date, nombre d'invités et format.

### MOYENNE

#### M1 — « animateur anniversaire toulouse » : SERP à moitié « enfants », page pour adultes non explicite
- **Preuve** : 4 résultats sur 9 visent les enfants (Kidays 4 à 12 ans, Monsieur Ballons ×2, Les Fripouilles). Le title « Animation anniversaire à Toulouse & Gers » et le H1 « Animation anniversaire & soirée privée à Toulouse » ne disent pas « adulte ». Un parent qui clique repart aussitôt, et un adulte n'est pas rassuré.
- **Correction** : après la période de mesure, écrire « adulte » dans le title et le H1 (par exemple « Animation anniversaire adulte & soirée privée à Toulouse »), et ajouter une phrase claire dans l'introduction. Si Dydy anime aussi des anniversaires d'enfants, le dire ; sinon, ne rien ajouter (à lui demander).
- **Vérification** : dans Search Console, suivre le CTR de la page sur les requêtes « anniversaire ». Dans GA4, suivre le taux d'engagement de la page.

#### M2 — « animation karaoké toulouse » : la moitié « où chanter » n'est pas servie, alors que l'agenda existe
- **Preuve** : 4 résultats sur 9 répondent à « où chanter » (Toulouse Secret, Le Guide Toulouse, The Four Monkeys, Karnage Club). Le site organise justement des soirées Blind'Quiz + Karaoké ouvertes à tous (la bulle affiche « 25 nov · Le Biergarten By Saint-Orens »), mais la page Karaoké ne fait que renvoyer vers /#agenda. Les concurrents prestataires donnent aussi la taille de leur catalogue (28 000 à 40 000 titres), absente du site.
- **Correction** : ajouter sur /prestations/karaoke, et de la même façon sur /prestations/blind-test-quiz, un bloc « Prochaines soirées karaoké ouvertes à tous » qui lit `events.js` et filtre sur le type. Indiquer la taille réelle du catalogue si Dydy la connaît.
- **Vérification** : rendu de la page avec au moins une date visible. Dans Search Console, suivre les requêtes « karaoké » + « toulouse », « soirée », « bar » sur cette page.

#### M3 — Parcours d'action identique pour tous les visiteurs
- **Preuve** : le CTA secondaire « Voir l'agenda » (vers /#agenda) est le même sur les 8 pages, y compris Mariage, Entreprise et Anniversaire. Le téléphone n'apparaît qu'en pied de page sur les pages de prestation. Les liens « Demander mon devis » ne présélectionnent pas le type d'événement. Le menu « Type d'événement » du formulaire n'a pas d'option « DJ ». « Le nombre approximatif de participants » est demandé dans le texte, mais il n'y a pas de champ pour le saisir.
- **Correction** : un CTA secondaire adapté à chaque page (Mariage : « Vérifier ma date » ; Entreprise : « Échanger en visio » ou « Appeler » ; Anniversaire et Bars : « Appeler » ou WhatsApp). Un bouton téléphone dans l'en-tête sur mobile. Des liens `/contact?type=…`, que `ContactForm` sait déjà lire dans la branche v3. Ajouter l'option « DJ » et un champ « Nombre de participants ».
- **Vérification** : dans GA4, suivre les clics `tel:` et WhatsApp par page, et le taux de formulaires envoyés avec le type déjà rempli.

#### M4 — Promesse « buzzers » contraire aux faits, et pages trop semblables
- **Preuve** : la page blind test en ligne annonce « Buzzers ou téléphone » dans le hero et « répondent sur leur téléphone ou avec des buzzers » dans le déroulé. Or les buzzers sont les téléphones des invités (Dydy Quiz), pas des boîtiers physiques. Un client peut donc s'attendre à du matériel qui ne viendra pas. Par ailleurs, d'une page à l'autre, 24 % (blind test) à 49 % (karaoké) du contenu principal est identique (comparaison par séquences de 5 mots), à cause des blocs « De votre idée au jour J » et « Ce que je peux apporter ».
- **Correction** : mettre en ligne la formulation « buzzers = téléphones » déjà corrigée dans la branche v3. Adapter le bloc « Ce que je peux apporter » à chaque page : listes de chansons et écran de paroles pour le karaoké, lumières et lyres pour le DJ, Challenge Photo pour le mariage.
- **Vérification** : recherche de « buzzers » dans le HTML en ligne. Mesurer de nouveau la part de texte commun, avec un objectif sous 25 % par page.

### BASSE

#### B1 — Profil mariages.net incohérent avec la fiche Google
- **Preuve** : le profil mariages.net affiche l'adresse postale complète (numéro et rue à Fonsorbes), alors que la fiche Google est en zone desservie avec adresse masquée et que le JSON-LD ne contient pas de rue.
- **Correction** : n'afficher que « Fonsorbes (31470) » sur mariages.net si la plateforme le permet, et aligner la description (zone : Toulouse, Haute-Garonne, Gers, Tarn).
- **Vérification** : relire le profil public.

#### B2 — Chiffres à remettre à jour
- **Preuve** : le site en ligne dit « 3 bars où je suis animateur résident » (accueil, Bars, meta de Qui suis-je), et la FAQ de la page Bars cite Le Cul de Bouteille mais pas le Biergarten by Saint-Orens. C'est pourtant là que se tient la prochaine soirée annoncée sur toutes les pages. D'après les infos du 24/11, les résidences sont 4, Biergarten compris.
- **Correction** : faire confirmer le chiffre par Dydy, puis mettre à jour `LedStats`, la page Bars et la page Qui suis-je.

#### B3 — `priceRange: "€"` dans le JSON-LD `LocalBusiness`
- **Preuve** : « € » signale une offre bon marché, ce qui ne colle pas avec « à partir de 800 € » sur mariages.net.
- **Correction** : retirer la propriété, ou la mettre en accord avec la décision prise en H3.
- **Vérification** : Rich Results Test et Schema Markup Validator.

#### B4 — Peu de signes de fraîcheur, et partage sans visuel
- **Preuve** : aucune date ni aucune « dernière soirée animée » sur les pages, et la date détectée par htmldate est le générique 2026-01-01. L'`og:image` de toutes les pages est le logo, alors que les mariés et les RH se partagent souvent le lien par WhatsApp ou par mail.
- **Correction** : un bloc « Dernières soirées » (date, lieu, format) alimenté par l'agenda passé, et une `og:image` 1200×630 tirée d'une vraie photo (déjà dans la liste des tâches à faire).

---

## Récits utilisateurs (tirés des signaux de la SERP)

1. **Futurs mariés (phase de décision)** : « Nous voulons savoir si notre date est libre et combien coûte un DJ animateur, parce que les dates partent vite, mais rien sur la page ne nous donne de prix ni d'avis de mariés. »
   *Signaux : filtres de prix et « À partir de » sur chaque fiche mariages.net (1re position), bouton « Vérifier la disponibilité de ma date » de DJ Big Brothers, forfaits nommés chez Passion Zyk.*
2. **RH ou office manager (découverte, puis comparaison)** : « Je veux comparer des formats de quiz en équipe (prix par personne, durée, nombre de joueurs), parce que je dois présenter un budget, mais la page ne donne aucun chiffre. »
   *Signaux : 5 listes « X idées de team building », filtres Funbooker « Les moins chers », « Grands groupes », « Sur le lieu de mon événement », Quiz Room 25 € HT et 1 h 15.*
3. **Gérant de bar (comparaison)** : « Je veux la preuve que ces soirées remplissent des bars comme le mien, parce qu'un soir vide me coûte cher, mais je ne vois ni photo de salle pleine ni avis d'un patron de bar. »
   *Signaux : logos de bars toulousains et avis Google chez So Events 31, « Dès X € » sur l'annuaire Événementiel pour tous.*
4. **Particulier qui prépare un 40 ans (découverte)** : « Je veux vérifier que l'animateur fait des soirées pour adultes, chez moi ou en salle, parce que je ne veux pas d'un clown pour enfants, mais la SERP mélange les deux et le titre de la page ne tranche pas. »
   *Signaux : Kidays, Monsieur Ballons et Les Fripouilles (enfants) à côté de ZeBigTeuf et So Events 31 (adultes).*
5. **Amateur de karaoké (découverte)** : « Je veux savoir où et quand chanter près de Toulouse ce week-end, mais la page Karaoké ne parle que de prestations privées. »
   *Signaux : Toulouse Secret, Le Guide Toulouse, The Four Monkeys, Karnage Club.*

---

## Scores par persona (du plus faible au plus fort)

| Persona | Page évaluée | Pertinence | Clarté | Confiance | Action | Total | Verdict |
|---|---|---|---|---|---|---|---|
| Parent (anniversaire d'enfant) | /evenements/anniversaire | 4 | 6 | 5 | 5 | 20/100 | Hors cible (à clarifier) |
| Amateur de karaoké « où chanter » | /prestations/karaoke | 8 | 8 | 8 | 10 | 34/100 | Hors cible (opportunité) |
| Futurs mariés | /evenements/mariage | 17 | 14 | 5 | 14 | 50/100 | À retravailler |
| RH / office manager | /evenements/entreprise | 15 | 11 | 10 | 15 | 51/100 | À retravailler |
| Particulier (anniversaire adulte) | /evenements/anniversaire | 19 | 15 | 6 | 16 | 56/100 | À retravailler |
| Gérant de bar | /evenements/bars-restaurants (+ blind test) | 22 | 17 | 14 | 17 | 70/100 | Bon |

Les deux premiers personas sont secondaires : il s'agit d'éviter le mauvais clic (parent) ou de capter un public avec l'agenda (karaoké). Les quatre personas commerciaux pèsent le plus lourd.

- **Futurs mariés (50)** — Point faible principal : la confiance (5/25). Aucun avis de mariés, aucune photo de mariage, aucun lien vers mariages.net, et rien sur le prix ou la disponibilité.
  Corrections : section « Ils se sont mariés avec Dydy » (l'avis Google du mariage cité mot pour mot + note mariages.net), 3 à 6 photos de mariage, CTA « Vérifier ma date », section « Le DJ de votre mariage » (voir H2), cohérence du prix avec mariages.net (voir H3).
- **RH (51)** — Point faible principal : la clarté (11/25). Pas de durée, pas de taille de groupe, pas de budget, aucune information pour présenter le projet en interne.
  Corrections : bloc « Quiz team building : en pratique », logo Décathlon à côté de la mention VitalSport, encadré « Salle de quiz ou animateur dans vos locaux ? », CTA « Échanger en visio », mention du devis HT.
- **Particulier, anniversaire adulte (56)** — Point faible principal : la confiance (6/25).
  Corrections : « adulte » dans le H1, un avis d'anniversaire (s'il en existe un), photos de soirée en salle des fêtes ou à domicile, téléphone ou WhatsApp en CTA secondaire.
- **Gérant de bar (70)** — Point faible principal : la confiance (14/25). Les bars sont nommés, mais il n'y a ni avis de patron de bar, ni photo de salle pleine, et l'agenda n'est pas intégré à la page.
  Corrections : avis Google d'un bar résident, photos de soirées en bar, bloc « Prochaines soirées dans mes bars » (lu dans `events.js`), et une indication de format ou de durée d'une soirée type.

**Problème commun à toutes les pages** : la confiance est la dimension la plus faible pour chaque persona (5 à 14 sur 25). C'est le constat C1 : les preuves sont sur l'accueil, pas sur les pages où arrivent les visiteurs.

---

## Comment vérifier (après mise en ligne)

1. **Rendu** : `claude-seo run render_page.py <url> --mode always --json` sur les 6 pages. Contrôler la présence d'au moins 3 images non décoratives, d'au moins 1 avis cité, du bloc pratique (durée et participants) et l'absence du mot « buzzers ».
2. **Search Console** (après la période de mesure de 4 à 8 semaines) : position et CTR de « blind test toulouse » (12,5 au 17/11, le plus proche de la 1re page), « dj mariage toulouse » (57), et des requêtes « team building », « karaoké » et « anniversaire » sur les pages concernées. Vérifier aussi qu'une seule page ressort pour « dj mariage ».
3. **GA4** : suivre comme événements les clics `tel:` et WhatsApp et l'envoi du formulaire réussi, ventilés par page d'arrivée. Comparer 4 semaines avant et après.
4. **Annuaires** : nombre d'avis et place sur la liste mariages.net « DJ mariage Haute-Garonne » (aujourd'hui 15e de la page 1, 1 avis), et mise en ligne de la fiche Funbooker.
5. **SERP réelle** : en navigation privée, sur mobile, depuis Toulouse, sur google.fr, relever pour les 5 requêtes le pack local, les « Autres questions posées », les annonces et l'aperçu IA, que cette analyse n'a pas pu voir (voir Limites).

---

## Limites

- **SERP approchée** : l'outil de recherche utilisé n'est pas Google.fr (moteur basé aux États-Unis, sans affichage des éléments de SERP), et l'accès direct à google.fr renvoie vers la page de consentement. Le **pack local (Google Maps), les « Autres questions posées », les annonces, les recherches associées et l'aperçu IA n'ont pas pu être observés**, et l'ordre des résultats est indicatif. Pour des requêtes « + toulouse », le pack local est probable : il faut le vérifier à la main (point 5 ci-dessus).
- 8 à 10 résultats analysés par requête (extraits), et 12 pages concurrentes visitées. ZeBigTeuf était inaccessible (erreur de certificat).
- Positions Search Console tirées de l'export du 17/11/2026, non actualisé. Pas d'accès à la fiche Google Business Profile (catégories, photos, avis), à GA4, à des cartes de clics ni aux Core Web Vitals mesurés sur le terrain.
- Le haut de page a été évalué d'après l'ordre du DOM, sans capture d'écran.
- Seul le site en ligne a été analysé. La branche `design/accueil-v3` (non publiée) change déjà la mise en scène et la formulation des « buzzers ».
- Aucun prix, chiffre ou référence n'a été ajouté. Les seuls montants cités pour Dydy Fantasy (800 €) viennent de son profil mariages.net public. Les durées, la taille du catalogue et le nombre de joueurs sont à fournir par Dydy.

Pour aller plus loin : `/seo content` (E-E-A-T et preuves), `/seo local` (fiche Google et pack local), `/seo schema` (données structurées). Un rapport PDF peut être généré avec `/seo google report`.

---

## Données structurées pour audit-data.json (catégorie « Search Experience »)

```json
{
  "category": "Search Experience",
  "sxo_gap_score": 49,
  "dimensions": {"page_type": 9, "content_depth": 8, "ux_signals": 10, "schema": 10, "media": 2, "authority": 4, "freshness": 6},
  "queries": [
    {"query": "animateur blind test toulouse", "serp_dominant": "Service (prestataires)", "consensus": 0.75, "target": "/prestations/blind-test-quiz", "mismatch": "ALIGNED"},
    {"query": "dj mariage toulouse", "serp_dominant": "Service (DJ spécialistes mariage) + annuaire mariages.net #1", "consensus": 0.90, "target": "/evenements/mariage", "mismatch": "MEDIUM"},
    {"query": "animation karaoké toulouse", "serp_dominant": "Service 55% / lieux où chanter 45%", "consensus": 0.55, "target": "/prestations/karaoke", "mismatch": "ALIGNED"},
    {"query": "team building quiz toulouse", "serp_dominant": "Comparaison/listes 55% + fiches plateforme/salle avec prix 45%", "consensus": 0.55, "target": "/evenements/entreprise", "mismatch": "HIGH"},
    {"query": "animateur anniversaire toulouse", "serp_dominant": "Service, dont 44% enfants", "consensus": 0.67, "target": "/evenements/anniversaire", "mismatch": "MEDIUM"}
  ],
  "findings": [
    {"id": "SXO-C1", "severity": "critical", "title": "Aucune preuve (photo, vidéo, avis, référence) sur les pages de prestation", "pages": ["/prestations/blind-test-quiz", "/prestations/karaoke", "/prestations/dj", "/evenements/mariage", "/evenements/entreprise", "/evenements/anniversaire"]},
    {"id": "SXO-H1", "severity": "high", "title": "team building quiz toulouse : SERP plateformes/listes, page de prestation sans données pratiques", "pages": ["/evenements/entreprise"]},
    {"id": "SXO-H2", "severity": "high", "title": "dj mariage toulouse : angle jeux, cannibalisation /prestations/dj, 1 avis mariages.net", "pages": ["/evenements/mariage", "/prestations/dj"]},
    {"id": "SXO-H3", "severity": "high", "title": "Budget, durée, taille de groupe absents ; 800 € affiché sur mariages.net mais pas sur le site", "pages": ["*"]},
    {"id": "SXO-M1", "severity": "medium", "title": "Anniversaire : SERP à moitié enfants, « adulte » absent du title/H1", "pages": ["/evenements/anniversaire"]},
    {"id": "SXO-M2", "severity": "medium", "title": "Karaoké : intention « où chanter » non servie malgré l'agenda public", "pages": ["/prestations/karaoke", "/prestations/blind-test-quiz"]},
    {"id": "SXO-M3", "severity": "medium", "title": "CTA secondaire générique, téléphone absent de l'en-tête, formulaire sans DJ ni participants", "pages": ["*", "/contact"]},
    {"id": "SXO-M4", "severity": "medium", "title": "Promesse « buzzers » contraire aux faits ; 24 à 49 % de texte commun", "pages": ["/prestations/blind-test-quiz", "*"]},
    {"id": "SXO-B1", "severity": "low", "title": "Adresse complète sur mariages.net vs fiche Google en zone desservie", "pages": []},
    {"id": "SXO-B2", "severity": "low", "title": "« 3 bars résidents » à confirmer (4 avec le Biergarten)", "pages": ["/", "/evenements/bars-restaurants", "/qui-suis-je"]},
    {"id": "SXO-B3", "severity": "low", "title": "priceRange « € » dans le JSON-LD LocalBusiness", "pages": ["*"]},
    {"id": "SXO-B4", "severity": "low", "title": "Pas de signes de fraîcheur ; og:image = logo", "pages": ["*"]}
  ],
  "personas": [
    {"name": "Parent (anniversaire enfant)", "score": 20},
    {"name": "Amateur de karaoké", "score": 34},
    {"name": "Futurs mariés", "score": 50},
    {"name": "RH / office manager", "score": 51},
    {"name": "Particulier (anniversaire adulte)", "score": 56},
    {"name": "Gérant de bar", "score": 70}
  ]
}
```
