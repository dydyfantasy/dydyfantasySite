# Audit qualité des contenus (E-E-A-T) : https://dydyfantasy.fr

Date : 25/11/2026. Périmètre : site **en ligne** uniquement (15 pages indexables + /privacy en noindex), HTML pré-rendu récupéré page par page (`render_page.py --mode never`), agenda en ligne `/events/events.js`, données de `crawl.json`. Le dépôt local (branche `design/accueil-v3`) n'a pas été pris en compte.
Sources des faits « réels » : ce que dit le site, l'agenda en ligne, et les informations déjà données par le propriétaire dans les notes du projet (signalées « selon le propriétaire »). Aucun chiffre n'a été inventé.

## Scores

| Indicateur | Score |
|---|---|
| **Qualité des contenus (global)** | **62 / 100** |
| **On-Page** (titles, descriptions, H1/H2, liens internes) | **76 / 100** |
| E-E-A-T pondéré | 55 / 100 |
| Prêt pour les citations IA | 55 / 100 |

Détail E-E-A-T (pondérations internes de l'outil, pas de Google : Google dit seulement que la confiance compte le plus) :

| Facteur | Poids | Score | En bref |
|---|---|---|---|
| Expérience | 20 % | 55 | Vraies références nommées, agenda réel, photo de scène et vidéo sur /qui-suis-je ; mais **aucune vraie photo** sur les 8 pages prestation/événement, galerie de 3 photos, aucune étude de cas |
| Expertise | 25 % | 60 | Formats détaillés et précis, appli développée par lui, FAQ concrètes ; peu de preuves du savoir-faire (déroulés réels, chiffres par type d'événement) |
| Autorité | 25 % | 50 | 11 clients nommés avec ville, Decathlon VitalSport ; avis Google annoncés mais ni visibles dans le HTML ni reliés à la fiche Google, aucune source externe |
| Confiance | 30 % | 55 | Téléphone partout, ville de base, « devis tout compris », « réponse sous 24 h » ; mais **chiffres contradictoires**, mention « buzzers » inexacte, **pas de mentions légales** ni de politique de confidentialité du site |

Calcul : 0,20×55 + 0,25×60 + 0,25×50 + 0,30×55 = 55.

---

## 1. Relevé des chiffres et affirmations incohérents (priorité)

### 1.1 Nombre de bars où il est résident : « 3 » sur le site, 4 dans l'agenda en ligne (Haute)

| URL | Emplacement | Extrait exact |
|---|---|---|
| https://dydyfantasy.fr/ | bandeau de chiffres (hero) | « 3 bars où je suis animateur résident » |
| https://dydyfantasy.fr/qui-suis-je | bandeau de chiffres | « 3 bars où je suis animateur résident » |
| https://dydyfantasy.fr/qui-suis-je | **meta description** | « Résident dans 3 bars, plus de 150 soirées animées. » |
| https://dydyfantasy.fr/evenements/bars-restaurants | intro du hero | « je suis animateur résident dans 3 bars autour de Toulouse, avec 12 à 15 soirées par mois. » |
| https://dydyfantasy.fr/evenements/bars-restaurants | FAQ « Dans quels établissements animez-vous déjà ? » | « Je suis animateur résident dans 3 bars autour de Toulouse, et j'anime notamment à La Ville en Rose à Colomiers, la Taverne Heidelberg à Blagnac, Le Cul de Bouteille à Aussonne et La Table Ronde dans le Tarn. » (on dit 3, puis on cite 4 lieux) |
| https://dydyfantasy.fr/events/events.js (agenda de l'accueil) | soirées de novembre 2026 | Soirées qui reviennent dans **4 bars** : La Ville en Rose (5 dates), Le Biergarten By Saint-Orens (2), La Taverne Heidelberg (2), La Table Ronde (2), plus 1 soirée Salle Gruvel à Labastide-Beauvoir |
| https://dydyfantasy.fr/ | « Ils m'ont fait confiance » | Le Biergarten n'apparaît pas dans les 11 références, alors qu'il est dans l'agenda |

Selon le propriétaire (24/11/2026), il est résident toute l'année dans **4 bars** : La Ville en Rose (Colomiers), Taverne Heidelberg (Blagnac), La Table Ronde (Saint-Lieux-lès-Lavaur, 81) et Biergarten by Saint-Orens. Le Cul de Bouteille est un client, pas un bar où il est résident.

**Correction** (après accord du propriétaire) : remplacer « 3 bars » par « 4 bars » aux 5 endroits ci-dessus (accueil, /qui-suis-je contenu + meta description, /evenements/bars-restaurants hero + FAQ). Dans la FAQ, citer exactement les 4 bars où il est résident, puis « et aussi Le Cul de Bouteille à Aussonne ». Ajouter le Biergarten (et le Comité des fêtes de Labastide-Beauvoir / L'Fest, confirmé par le propriétaire) aux références de l'accueil quand les logos sont disponibles.
**Vérification** : après mise en ligne, rechercher « 3 bars » dans le HTML des pages en ligne (0 résultat attendu) et « 4 bars » (5 résultats). Dans Search Console, l'extrait de /qui-suis-je change après la nouvelle exploration (Inspection de l'URL > Demander une indexation).

### 1.2 « Buzzers » : le site parle de vrais buzzers, la FAQ dit que tout passe par le téléphone (Haute)

| URL | Extrait |
|---|---|
| /prestations/blind-test-quiz (**meta description**) | « Buzzers, scores en direct, devis rapide. » |
| /prestations/blind-test-quiz (hero) | « Buzzers ou téléphone, manches thématiques, scores en direct » |
| /prestations/blind-test-quiz (étape 03) | « Les joueurs répondent sur leur téléphone ou avec des buzzers » |
| /prestations/blind-test-quiz (FAQ) | « Comment les joueurs répondent-ils ? Depuis leur téléphone, en scannant un QR code : c'est Dydy Quiz » |
| /qui-suis-je | « quiz en direct, scores, buzzers, écrans » ; « micro, buzzers, scores » ; « faire chanter, buzzer et challenger » |
| /mon-approche | « des scores, des buzzers, des écrans et des supports personnalisés » |

Selon le propriétaire, les « buzzers » sont les téléphones des invités (Dydy Quiz), il n'y a **pas de vrais buzzers**. Un client peut donc s'attendre à du matériel qui n'existe pas : c'est un problème de confiance (exactitude des faits, au cœur des consignes Google aux évaluateurs).
**Correction** : remplacer par « depuis leur téléphone (Dydy Quiz) », « buzzer depuis son téléphone » ou « buzzer sur téléphone ». Exemple de meta description : « …soirées façon jeu télé pour bars, mariages, entreprises et anniversaires. Réponses sur téléphone, scores en direct, devis rapide. » (à faire après la période de mesure, voir 3.1).
**Vérification** : rechercher « buzzer » dans le HTML en ligne : 0 résultat, ou uniquement une formulation du type « buzzer sur téléphone ».

### 1.3 Avis Google : « 4,9/5 · +70 avis », impossible à vérifier depuis le site (Haute, voir aussi 2.4)

| URL | Extrait |
|---|---|
| https://dydyfantasy.fr/ (hero) | « 4,9/5 · +70 avis Google » (lien vers #avis) |
| https://dydyfantasy.fr/ (section « Ils en parlent ») | « 4,9 » / « Plus de 70 avis Google » |
| https://dydyfantasy.fr/ (meta description) | « Plus de 70 avis Google. » |

Ces chiffres n'apparaissent que sur l'accueil (aucune autre page ne cite un nombre d'avis, donc pas de contradiction entre pages). Mais selon le propriétaire (17/11/2026), il avait **72 avis 5 étoiles**. Si tous les avis sont à 5 étoiles, la note affichée par Google est 5,0 et non 4,9. **À vérifier sur la fiche Google** (non consultée dans cet audit). Les chiffres sont écrits en dur, ils vieilliront.
**Correction** : afficher la note et le nombre exacts relevés sur la fiche, avec un lien « Voir les avis sur Google » vers la fiche (aucun lien vers la fiche Google n'existe sur le site).

### 1.4 Nombre de soirées : cohérent, avec une précision à confirmer (Basse)

| URL | Extrait |
|---|---|
| / et /qui-suis-je (bandeau) | « 12 à 15 soirées par mois » ; « 150+ soirées animées » |
| /qui-suis-je (meta description) | « plus de 150 soirées animées » |
| /evenements/bars-restaurants | « avec 12 à 15 soirées par mois » |
| / (bloc Dydy Quiz), /dydy-quiz (hero + meta description) | « Utilisée dans plus de 150 soirées » |

Cohérent entre les pages, et l'agenda (12 soirées publiques en novembre) confirme « 12 à 15 par mois ». Seul point : « Dydy Quiz utilisée dans plus de 150 soirées » = le même chiffre que le total des soirées, ce qui laisse entendre que l'appli sert à **chaque** soirée (y compris DJ seul ou l'animation micro chez Decathlon). **À confirmer avec le propriétaire.** Si ce n'est pas le cas, écrire le chiffre réel ou « utilisée dans la plupart de mes soirées ». Par ailleurs, 12 à 15 soirées par mois depuis environ 1,5 an (selon le propriétaire) dépasse probablement 150 : demander le total à jour.

### 1.5 Capacité d'accueil : même idée, formulée différemment (Basse)

/ et /qui-suis-je : « 200+ invités sur un même événement » ; /prestations/blind-test-quiz FAQ : « événements de 200 personnes et plus » ; /evenements/mariage FAQ : « J'ai déjà animé des événements de 200 invités, et je peux aller au-delà ». Pas de contradiction. Harmoniser sur « 200+ » (le propriétaire préfère éviter « 200 invités » seul, qui peut se lire comme un plafond).

### 1.6 Zone d'intervention : le centre du rayon change selon la page (Basse)

/prestations (H2) : « J'interviens dans un rayon de 50 km autour de **Toulouse** » ; /contact : « Basé à Fonsorbes, dans un rayon de 50 km autour de **Toulouse** » ; /qui-suis-je : « Basé à Fonsorbes… je me déplace dans un rayon d'environ 50 km » (sous-entendu autour de Fonsorbes). Le JSON-LD `GeoCircle` est centré sur Toulouse (43.6047, 1.4442). Choisir une formule unique (ex. « basé à Fonsorbes, j'interviens dans un rayon d'environ 50 km autour de Toulouse ») et la reprendre partout, fiche Google comprise.

### 1.7 Années d'expérience : aucune mention (pas d'incohérence)

Aucune page n'indique depuis combien de temps il anime. Il n'y a donc pas de contradiction. L'ajout est facultatif ; le volume (150+ soirées, 12 à 15 par mois) est une preuve plus forte.

### 1.8 Autres petites incohérences (Basse)

- /privacy (noindex) : « traitées automatiquement par le système Android » alors que /dydy-quiz dit « Aucune application à installer » (appli web via QR code). Selon le propriétaire, l'appli Android est ancienne : mettre la page à jour.
- « Décathlon » avec accent (/, /evenements/entreprise, texte alternatif du logo). La marque s'écrit « Decathlon », sans accent.

---

## 2. Ce qui fonctionne

- **Metadata uniques, pas de modèle répété** : `metadata_template.py` sur les 15 pages : `site_risk: low`, `templated_ratio: 0.0`, `shared_cta_phrases: {}`. Titles de 43 à 60 caractères (accueil 66, gardé volontairement), descriptions de 135 à 160 caractères, ville présente dans tous les titles de prestation.
- **Un seul H1 par page**, fil d'Ariane et bloc « À découvrir aussi » (8 liens) sur les 8 pages prestation/événement, Dydy Quiz relié depuis 12 pages, /qui-suis-je et /mon-approche depuis 13 pages.
- **Formats précis et propres à l'activité** : « Blind'Quiz + Karaoké », quiz des mariés entre deux plats, Challenge Photo, Match Machine, loto revisité, murder party. Ce ne sont pas des phrases génériques.
- **Vraies références nommées avec la ville** : 11 clients sur l'accueil (bars, comités des fêtes du 31, 32 et 81), Decathlon VitalSport dans la meta description et la FAQ de /evenements/entreprise.
- **FAQ présentes dans le HTML** (`<details>`), avec des réponses directes : matériel, zone, personnalisation, combinaisons.
- **Appels à l'action clairs et réguliers** : « Demander mon devis » dans l'en-tête, en haut et en bas de chaque page, « Réponse sous 24 h · Devis tout compris », téléphone dans le pied de page, WhatsApp sur /contact.
- **Lisibilité** : 14 à 17 mots par phrase, indice Kandel-Moles (Flesch adapté au français) de 67 à 73 sur les pages prestation (lecture standard à facile). Ton à la première personne, vivant. `content_quality.py` ne relève **aucune** formule creuse ni tournure typique de texte généré (filler 0, ai_pattern 0).

---

## 3. Constats classés

### CRITIQUE

**C1. Pas de mentions légales ni de politique de confidentialité pour le site** (confiance + obligation légale)
Preuve : aucune page ni lien « mentions légales », aucun SIRET ni hébergeur sur les 16 pages. Le seul lien du pied de page est « Confidentialité de l'application Dydy Quiz » (/privacy, noindex, consacrée à l'appli). Google Analytics (G-3ZFS6P50ML) se charge au bout de 1,5 s sans bandeau de consentement, et le formulaire /contact envoie les données à Formspree avec une seule ligne d'information.
Pourquoi : les consignes Google aux évaluateurs demandent de savoir clairement qui est responsable du site. En France, un site professionnel doit avoir des mentions légales (loi LCEN), et la CNIL demande un consentement pour Analytics. Ce n'est pas un critère de classement direct, mais c'est la base de la confiance.
Correction : créer /mentions-legales (responsable, statut, SIRET, contact, hébergeur OVH) et une politique de confidentialité du site (formulaire, Formspree, Analytics), reliées depuis le pied de page de toutes les pages ; ajouter un consentement pour Analytics ou un outil exempté de consentement. **Infos à demander au propriétaire** : statut juridique, SIRET, nom à afficher (il signe « Dydy », sans prénom : une mention légale exige pourtant une identité), e-mail officiel. À faire valider (cet audit n'est pas un avis juridique).
Vérification : les pages répondent 200, sont dans `sitemap.xml` et apparaissent dans le pied de page des 16 pages (rechercher « mentions-legales » dans le HTML en ligne).

### HAUTE

**H1. « 3 bars » contredit par l'agenda en ligne** : voir 1.1.

**H2. « Buzzers » inexacts** : voir 1.2.

**H3. Aucune vraie photo sur les 8 pages prestation/événement ; galerie très maigre** (Expérience)
Preuve : sur /prestations/dj, /evenements/mariage (et les 6 autres pages construites sur le même modèle), les seules images sont le logo et la mascotte (« La mascotte Dydy Fantasy, micro à la main »). /galerie : 3 photos (« Dydy fantasy animateur toulouse – Dydy Fantasy », « Dydy fantasy micro – Dydy Fantasy », « Soiree blind test karaoke salle des fetes – Dydy Fantasy »), **aucune vidéo** alors que le title et la description promettent « Galerie photos et vidéos ». /dydy-quiz : la section H2 « Dydy Quiz en action » contient 3 cadres vides (icônes seules).
Correction : au moins 2 vraies photos par page prestation/événement (DJ aux platines, salle qui joue, mariage sans visages si besoin), avec un texte alternatif qui décrit la scène et le lieu. Galerie : photos et vidéos classées par type d'événement, chacune avec une légende factuelle (type de soirée, lieu, ville, mois). Remplir « Dydy Quiz en action » avec les captures, ou masquer la section tant qu'elle est vide.
Vérification : sur chaque page prestation, au moins 2 images dont le texte alternatif n'est ni le logo ni la mascotte ; Search Console > Performances > type de recherche « Image » : impressions qui apparaissent sur ces URL.

**H4. Avis clients invisibles dans le HTML, sans lien vers la source**
Preuve : sur l'accueil, la section « Ils en parlent » ne contient dans le HTML que « 4,9 / Plus de 70 avis Google » ; les avis se chargent dans le navigateur (widget). Aucun avis cité sur les pages mariage, entreprise ou bars. Aucun lien vers la fiche Google ni vers Mariages.net (selon le propriétaire, il y a 1 avis Google laissé après un mariage et un profil Mariages.net).
Pourquoi : la plupart des robots des moteurs IA n'exécutent pas le JavaScript, et Googlebot n'affiche peut-être pas un widget chargé seulement au défilement. La preuve sociale la plus forte du site n'est donc pas visible pour eux.
Correction : citer mot pour mot 1 à 3 avis réels dans le HTML de chaque page concernée (prénom, type d'événement, mois), avec un lien « Voir tous les avis sur Google ». Mettre l'avis du mariage sur /evenements/mariage. Garder le widget en plus si on le souhaite.
Vérification : le texte de l'avis apparaît dans le HTML en ligne (sans JavaScript) ; Search Console > Inspection de l'URL > Tester l'URL en direct > HTML affiché.

**H5. Environ la moitié du texte est commune aux 8 pages prestation/événement**
Mesure (séquences de 6 mots qu'on ne trouve sur aucune des 7 autres pages) : karaoké **48 %** de texte propre, anniversaire 51 %, bars 52 %, sur-mesure 52 %, DJ 54 %, entreprise 57 %, mariage 61 %, blind-test 73 %.
Blocs répétés : la frise « De votre idée au jour J » (4 étapes, mot pour mot) sur 7 pages ; « Ce que je peux apporter » (micro, matériel, Dydy Quiz, contenus réseaux) sur 8 pages ; la FAQ « Où intervenez-vous ? » presque identique sur 5 pages ; la conclusion « Prêt à faire vibrer votre événement ? » partout. Sur **/prestations/karaoke** et **/prestations/dj**, le bloc « Application Dydy Quiz : un QR code, et les joueurs participent depuis leur téléphone » ne correspond pas au sujet de la page.
Correction (sans réécrire les textes validés) : remplacer la frise générique par un déroulé propre à chaque page (ex. DJ : rendez-vous préparatoire, liste des incontournables et interdits, vin d'honneur, ouverture du bal, montée en puissance) ; adapter « Ce que je peux apporter » (karaoké : écran des paroles, micros, file d'attente ; DJ : platines, lumières, machine à fumée ; retirer Dydy Quiz là où il ne sert pas) ; ajouter 1 ou 2 questions FAQ vraiment propres à la page à la place de « Où intervenez-vous ? ». Objectif : au moins 65 à 70 % de texte propre par page.
Vérification : relancer la même mesure de séquences de 6 mots ; Search Console > Pages : aucune de ces URL en « Explorée, actuellement non indexée ».

### MOYENNE

**M1. Deux pages visent « DJ mariage Toulouse »**
Preuve : /prestations/dj, title « DJ mariage et soirée à Toulouse & Gers » ; /evenements/mariage, title et H1 « Animateur & DJ mariage à Toulouse ». Selon les données Search Console du projet (17/11), « dj mariage toulouse » est en position 57.
Correction : laisser /evenements/mariage porter « DJ mariage Toulouse » ; sur /prestations/dj, garder « DJ Toulouse / Gers » (« dj gers » : 179 impressions, position 20,9) et viser soirées, anniversaires et entreprises, puis ajouter dans le texte un lien « DJ pour votre mariage à Toulouse » vers /evenements/mariage. Les titles ont été modifiés entre le 18 et le 23/11 : **attendre la fin de la période de mesure (mi-janvier 2027)** avant de toucher au title ; le lien interne peut être ajouté tout de suite.
Vérification : Search Console > Performances > requête contenant « dj mariage » > onglet Pages : une seule URL doit recevoir les impressions, comparer avec la position 57 de départ.

**M2. Recoupement blind test / bars : risque faible, mais à clarifier**
/prestations/blind-test-quiz (« Animation blind test & quiz à Toulouse ») vise les particuliers et les entreprises ; /evenements/bars-restaurants (« Blind test & karaoké pour bars à Toulouse ») vise les gérants de bar. Les intentions sont différentes, mais le title des bars commence par les mêmes mots. Correction (après la période de mesure) : faire commencer le title et le H1 par « Animation de bar et restaurant à Toulouse : blind test & karaoké », et ajouter « Toulouse » au H1 actuel (« Soirées blind test & karaoké pour bars et restaurants »). Karaoké et bars : pas de recoupement gênant.

**M3. 5 des 7 H2 sont identiques sur les 8 pages prestation**
« De votre idée au jour J », « Ce que je peux apporter », « Vos questions », « À découvrir aussi », « Prêt à faire vibrer votre événement ? ». Ce sont des titres qui ne décrivent rien. Correction : y mettre la prestation et, quand c'est naturel, le lieu, ex. « Comment se prépare votre DJ de mariage », « Questions fréquentes sur l'animation karaoké », « Le matériel fourni pour votre team building ». Sur l'accueil, le H2 « Ils en parlent » ne contient aucun avis dans le HTML (voir H4), et le H2 « Quel type d'animation recherchez-vous ? » sert seulement de titre au mini-quiz.

**M4. Aucune étude de cas**
Decathlon VitalSport tient en une ligne (FAQ /evenements/entreprise). Le Biergarten et L'Fest / Comité des fêtes de Labastide-Beauvoir (environ 200 personnes, selon le propriétaire ; la soirée du 07/11 est dans l'agenda) n'apparaissent pas dans les références. Correction : 2 ou 3 encadrés « Soirée réalisée » (lieu, ville, date, format, public, ce qui a été fait, une photo) sur /evenements/entreprise (Decathlon : animation micro sur une journée avec démonstrations), /evenements/bars-restaurants (soirées récurrentes) et /prestations/sur-mesure (soirée Love Game / Match Machine à La Ville en Rose, visible dans l'agenda). Chaque fait doit être validé par le propriétaire.
Vérification : relecture par le propriétaire ; suivre dans Search Console les requêtes « animateur micro toulouse » (point de départ : position 11,1) et « team building toulouse ».

**M5. /galerie (171 mots, 64 dans le contenu principal) : le nombre de mots n'est pas le problème**
Une galerie sert de preuve en images, pas à répondre à une recherche en texte. Sa faiblesse, ce sont ses 3 photos sans légende et sans vidéo (voir H3). De plus, aucune page ne la relie dans le texte : on n'y arrive que par le pied de page. Correction : l'enrichir (voir H3), ajouter 2 ou 3 phrases d'introduction par catégorie, et la relier depuis les pages événement (« Voir les photos de mariages »). Ne pas la passer en noindex : un manque de contenu se corrige en ajoutant du contenu.
Vérification : au moins 4 liens dans le texte d'autres pages ; impressions images dans Search Console.

**M6. Agenda et avis absents du HTML pré-rendu**
L'agenda (12 soirées réelles en novembre, la meilleure preuve que l'activité est récente et réelle) ne se remplit que dans le navigateur. Le HTML de l'accueil ne contient que « Prochaines soirées blind test & karaoké autour de Toulouse » suivi d'une phrase. Correction sans perdre la mise à jour sans recompilation : ajouter dans le HTML un texte fixe « Chaque mois, j'anime à La Ville en Rose (Colomiers), à la Taverne Heidelberg (Blagnac), au Biergarten (Saint-Orens) et à La Table Ronde (Saint-Lieux-lès-Lavaur) » (ces lieux changent rarement), et laisser les dates en JavaScript. L'agenda en ligne s'arrête au 28/11/2026 : publier les dates de décembre avant cette date.
Vérification : rechercher « Biergarten » dans le HTML de l'accueil sans JavaScript.

### BASSE

- **B1.** Rayon de 50 km : un seul centre partout (voir 1.6).
- **B2.** Meta description qui répète le début du title : /prestations/sur-mesure (« Animation sur mesure à Toulouse : … ») et /mon-approche (« Mon approche de l'animation à Toulouse : … »). Commencer par l'information nouvelle (à faire après la période de mesure). Les alertes « nom de marque dans la description » sur /dydy-quiz et /galerie sont de fausses alertes : la phrase est naturelle, rien à faire.
- **B3.** H1 vagues ou longs : /prestations (« Des animations interactives pour faire vivre une vraie ambiance à Toulouse. ») gagnerait à nommer les prestations ; /contact a un H1 de 11 mots. Les H1 de /qui-suis-je et /mon-approche sont des slogans, ce qui est acceptable pour ces pages.
- **B4.** Textes alternatifs générés à partir des noms de fichiers, sans accents et peu descriptifs : « Soiree blind test karaoke salle des fetes – Dydy Fantasy », « Dydy Fantasy en soirée : presentation », « Dydy Fantasy en soirée : dydy fantasy ». Le nom du fichier sert de texte alternatif : renommer les fichiers avec des accents et une vraie description de la scène.
- **B5.** /contact (289 mots) : **ce n'est pas un vrai problème**, car la page répond à son intention (formulaire, téléphone, WhatsApp, zone, délai de réponse). Améliorations : afficher un e-mail (contact@dydyfantasy.fr n'apparaît que sur /privacy, en noindex ; à confirmer avec le propriétaire), un avis court près du formulaire, et une phrase « ce qui se passe après l'envoi ».
- **B6.** Phrases générales et peu informatives sur /mon-approche et /prestations (« Un souvenir positif pour les invités », « Une animation fluide, claire et adaptée » ; densité d'information de 0,19 à 0,20 contre 0,35 à 0,45 sur les pages événement). Les illustrer par un exemple concret de soirée.
- **B7.** /privacy parle d'Android ; orthographe « Décathlon » (voir 1.8).

---

## 4. Prêt pour les citations IA (55 / 100)

- **Points forts** : FAQ sous forme de questions et réponses dans le HTML, chiffres en liste, phrases courtes, `robots.txt` ouvert à tous les robots.
- **Points faibles** : presque tout est écrit avec « je » sans nommer l'entreprise, donc un passage cité seul ne dit pas de qui il parle ; les avis et l'agenda ne sont pas dans le HTML ; aucune phrase de définition de l'entreprise dans le contenu principal (seulement la phrase du pied de page) ; pas de `llms.txt` (404 : facultatif, son effet n'est pas prouvé).
- **Passages autonomes à ajouter**, construits uniquement avec des faits déjà présents sur le site :
  - Accueil ou /qui-suis-je : « Dydy Fantasy est un animateur événementiel et DJ basé à Fonsorbes (Haute-Garonne), à l'ouest de Toulouse. Il anime des blind tests, des quiz, des karaokés et des soirées DJ pour les mariages, les entreprises, les anniversaires, les bars et les restaurants, à Toulouse, en Haute-Garonne, dans le Gers et dans le Tarn. »
  - /dydy-quiz : « Dydy Quiz est l'application développée par Dydy Fantasy pour ses animations : les invités scannent un QR code et jouent depuis leur téléphone, sans rien installer, avec les scores en direct sur grand écran. »
  - /evenements/entreprise : « Dydy Fantasy a assuré l'animation micro et la présentation des démonstrations d'une journée VitalSport chez Decathlon à Escalquens (31). »
- **Vérification** : poser la question « animateur blind test Toulouse » à un moteur IA (Perplexity, ChatGPT avec recherche) et noter si Dydy Fantasy est cité et quelle page sert de source ; recommencer 4 à 6 semaines après la mise en ligne.

---

## 5. Non vérifié / à demander au propriétaire

Non vérifié dans cet audit :
- Note et nombre réels d'avis sur la fiche Google (fiche non consultée, widget chargé dans le navigateur).
- Si Googlebot voit l'agenda et les avis (pas de test avec l'Inspection de l'URL de Search Console).
- Contenu de la vidéo de /qui-suis-je (non visionnée).
- Contenu des menus déroulants « Prestations / Événements » de l'en-tête : ce sont des boutons, leurs liens ne sont pas dans le HTML pré-rendu (le pied de page relie bien toutes les pages).
- Données Search Console : seul l'état de référence du 17/11/2026 des notes du projet a été utilisé, pas de nouvel export.
- La lisibilité est calculée de façon approximative (les listes sans ponctuation faussent un peu le découpage en phrases).

Questions à poser au propriétaire :
1. Résident dans combien de bars, et lesquels exactement ? (les notes du 24/11 disent 4 : Ville en Rose, Heidelberg, Table Ronde, Biergarten)
2. Utilisez-vous de vrais buzzers ou uniquement les téléphones ?
3. Note et nombre d'avis Google exacts aujourd'hui, et lien vers la fiche.
4. Dydy Quiz est-elle utilisée à **chaque** soirée (« plus de 150 soirées ») ?
5. Nombre total de soirées à jour.
6. Statut juridique, SIRET et e-mail à afficher (pour les mentions légales).
7. Photos et vidéos utilisables par type d'événement, et autorisation de citer 1 à 3 avis mot pour mot par page.
8. Logos et accord pour afficher le Biergarten et L'Fest / Comité des fêtes de Labastide-Beauvoir.

---

## 6. Données structurées pour audit-data.json (catégorie « Content Quality »)

```json
{
  "category": "Content Quality",
  "score": 62,
  "subscores": {"on_page": 76, "eeat": 55, "experience": 55, "expertise": 60, "authoritativeness": 50, "trustworthiness": 55, "ai_citation_readiness": 55},
  "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}, "secondary_flags": {"description_echoes_title": ["/prestations/sur-mesure", "/mon-approche"], "brand_suffix_in_description_false_positive": ["/dydy-quiz", "/galerie"]}},
  "findings": [
    {"id": "C1", "severity": "critical", "title": "Pas de mentions légales ni de politique de confidentialité du site ; Analytics sans consentement", "urls": ["all"]},
    {"id": "H1", "severity": "high", "title": "« 3 bars » contredit par l'agenda en ligne (4 bars récurrents)", "urls": ["/", "/qui-suis-je", "/evenements/bars-restaurants"]},
    {"id": "H2", "severity": "high", "title": "Mention de buzzers alors que les joueurs répondent sur téléphone", "urls": ["/prestations/blind-test-quiz", "/qui-suis-je", "/mon-approche"]},
    {"id": "H3", "severity": "high", "title": "Aucune vraie photo sur les 8 pages prestation/événement ; galerie de 3 photos sans vidéo ; section Dydy Quiz en action vide", "urls": ["/prestations/*", "/evenements/*", "/galerie", "/dydy-quiz"]},
    {"id": "H4", "severity": "high", "title": "Avis absents du HTML, aucun lien vers la fiche Google", "urls": ["/", "/evenements/mariage", "/evenements/entreprise"]},
    {"id": "H5", "severity": "high", "title": "48 à 61 % de texte propre sur 7 des 8 pages prestation/événement", "urls": ["/prestations/*", "/evenements/*"]},
    {"id": "M1", "severity": "medium", "title": "Deux pages visent DJ mariage Toulouse", "urls": ["/prestations/dj", "/evenements/mariage"]},
    {"id": "M2", "severity": "medium", "title": "Title de la page bars proche de celui de la page blind test", "urls": ["/evenements/bars-restaurants", "/prestations/blind-test-quiz"]},
    {"id": "M3", "severity": "medium", "title": "5 H2 sur 7 identiques sur les pages prestation", "urls": ["/prestations/*", "/evenements/*"]},
    {"id": "M4", "severity": "medium", "title": "Aucune étude de cas ; références Biergarten et L'Fest absentes", "urls": ["/", "/evenements/entreprise", "/evenements/bars-restaurants"]},
    {"id": "M5", "severity": "medium", "title": "Galerie maigre et reliée seulement depuis le pied de page", "urls": ["/galerie"]},
    {"id": "M6", "severity": "medium", "title": "Agenda absent du HTML pré-rendu ; agenda vide après le 28/11", "urls": ["/"]},
    {"id": "B1-B7", "severity": "low", "title": "Rayon 50 km, descriptions qui répètent le title, H1 vagues, textes alternatifs, e-mail absent sur /contact, phrases générales, Android et Décathlon", "urls": ["several"]}
  ]
}
```
