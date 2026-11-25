# Audit qualité des contenus (E-E-A-T) après la refonte : https://dydyfantasy.fr

Date : 25/11/2026, après-midi (après la mise en ligne). Périmètre : site **en ligne** uniquement, 17 adresses de `crawl.json` (15 pages indexables + /privacy et /mentions-legales en noindex). HTML pré-rendu récupéré page par page (`render_page.py --mode never`, sans JavaScript), fichiers JavaScript de l'accueil et agenda `/events/events.js` en ligne. Le dépôt local n'a pas été lu.
Comparaison avec le rapport de ce matin : `audits/dydyfantasy.fr-audit/findings/content.md` (Contenu 62, On-Page 76). Aucun chiffre inventé ; les faits « selon le propriétaire » viennent des notes du projet.

Décisions du propriétaire **non remises en cause** dans ce rapport : pas de prix, pas de délai de réservation ni de durée chiffrée, nom de scène uniquement (nom réel dans les mentions légales), anniversaires adultes uniquement, titles gelés jusqu'à mi-janvier 2027, séparation des textes DJ / Mariage après mi-janvier.

## Scores

| Indicateur | Ce matin | Après refonte |
|---|---|---|
| **Qualité des contenus (global)** | 62 | **73 / 100** |
| **On-Page** (titles, descriptions, H1/H2, liens internes) | 76 | **81 / 100** |
| E-E-A-T pondéré | 55 | 69 / 100 |
| Prêt pour les citations IA | 55 | 63 / 100 |

Détail E-E-A-T (pondérations internes de l'outil, pas de Google : Google dit seulement que la confiance compte le plus) :

| Facteur | Poids | Avant | Après | Ce qui a changé |
|---|---|---|---|---|
| Expérience | 20 % | 55 | 68 | Vraie photo en haut de 7 pages sur 8 (pas sur Blind test), galerie de 26 photos classées par lieu, extraits de vraies soirées sur 7 pages, avis qui racontent des soirées réelles (Labastide-Beauvoir, bal du collège, mariage). Reste : vidéos vides dans le HTML, aucune étude de cas |
| Expertise | 25 % | 60 | 65 | Bloc « En pratique » concret (sono, lumières, lyres, machine à fumée, écran, vidéoprojecteur), « plus de 90 000 chansons », sections propres à chaque prestation. Reste : déroulé en 4 étapes encore commun |
| Autorité | 25 % | 50 | 65 | Fiche Google reliée sur toutes les pages (`g.page/r/CdpLaKDiVThEEBM`), 1 avis cité mot pour mot sur 7 pages, lien Mariages.net sur /evenements/mariage, 13 références (dont Biergarten et L'Fest) sur 9 pages |
| Confiance | 30 % | 55 | 75 | Mentions légales complètes (éditeur, SIRET, adresse, hébergeur OVH, données du formulaire, cookies), Google Analytics retiré (rien dans le HTML ni dans les 43 fichiers JS : la mention « aucun cookie de mesure d'audience » est exacte), « 4 bars » et « téléphone-buzzer » corrigés partout. Reste : centre du rayon de 50 km variable, « partout en Occitanie » à côté de « 50 km », note 4,9 non vérifiée ici |

Calcul : 0,20×68 + 0,25×65 + 0,25×65 + 0,30×75 = 68,6, arrondi à 69.

---

## 1. Tableau avant → après des constats de ce matin

| Id | Constat de ce matin | État en ligne cet après-midi | Preuve |
|---|---|---|---|
| C1 | Pas de mentions légales ni de politique de confidentialité ; Analytics sans consentement | **Corrigé** | /mentions-legales répond 200, liée depuis le pied de page des 17 pages ; SIRET 991 546 730 00011, hébergeur OVH, section « 5. Cookies et services tiers ». Aucune trace de `gtag`, `googletagmanager` ou `G-3ZFS6P50ML` dans le HTML ni dans le JavaScript |
| H1 | « 3 bars » contredit par l'agenda | **Corrigé** | « 3 bars » : 0 résultat. « 4 bars » sur /, /qui-suis-je (texte + meta description), /evenements/bars-restaurants (hero). FAQ bars : les 4 bars résidents, puis « J'anime aussi des soirées ponctuelles ailleurs, par exemple au Cul de Bouteille à Aussonne » |
| H2 | « Buzzers » inexacts | **Corrigé** | Meta description Blind test : « Jeu sur téléphone, devis sous 24 h ». Textes : « son téléphone, qui devient son buzzer », « buzzers sur téléphone », « le téléphone de chaque invité transformé en buzzer ». Restent « Essayez les buzzers ! » (démo interactive, acceptable) et « faire chanter, buzzer et challenger » (verbe, acceptable) |
| H3 | Aucune vraie photo sur les pages prestation ; galerie de 3 photos ; « Dydy Quiz en action » vide | **Largement corrigé** | Photo en haut de page sur DJ, Karaoké, Sur mesure, Mariage, Entreprise, Anniversaire, Bars (texte alternatif de la scène). **Blind test : toujours aucune photo réelle** (logo et mascotte seulement). Galerie : 26 photos. Section vide de /dydy-quiz retirée |
| H4 | Avis invisibles dans le HTML, pas de lien vers la fiche | **Corrigé sur 7 pages, reste l'accueil** | Avis cité mot pour mot dans le HTML de Blind test, Karaoké, DJ, Sur mesure, Mariage, Entreprise, Bars (« Vie Culturelle · Avis Google », « La Ville en Rose · Avis Google »…). Lien vers la fiche sur 10 pages, « Laisser un avis » sur toutes. **Accueil, section « Ils en parlent » : toujours aucun avis dans le HTML** (« 4,9 Plus de 70 avis Google Voir tous les avis Laisser un avis ») |
| H5 | 48 à 61 % de texte propre sur 7 des 8 pages | **Amélioré, mais masqué par le bandeau des références** | Voir 2.1 : texte propre 53 à 72 % (page entière), **71 à 85 %** hors bandeau des références |
| M1 | Deux pages visent « DJ mariage Toulouse » | **Inchangé (gelé volontairement)** | Titles identiques à ce matin. Le lien dans le texte de /prestations/dj vers /evenements/mariage n'existe toujours pas (seulement menu, « À découvrir aussi » et pied de page) |
| M2 | Title bars proche de Blind test | **Inchangé (gelé)** | H1 bars toujours sans « Toulouse » : « Soirées blind test, karaoké & DJ pour bars et restaurants » |
| M3 | 5 H2 sur 7 identiques sur les pages prestation | **Corrigé en grande partie** | « De votre idée au jour J », « Ce que je peux apporter », « Vos questions » ont disparu au profit de « Votre karaoké, de l'idée au jour J », « Ce que comprend votre mariage », « Vos questions sur le DJ », « Votre blind test, en pratique ». Restent identiques sur 8 pages : « Ils m'ont fait confiance », « À découvrir aussi », « Prêt à faire vibrer votre événement ? » (et « L'ambiance, en vrai » sur 7) |
| M4 | Aucune étude de cas ; Biergarten et L'Fest absents | **Partiel** | Biergarten by Saint-Orens et L'Fest (Labastide-Beauvoir) dans les références. Pas encore d'encadré « Soirée réalisée » |
| M5 | Galerie maigre, reliée seulement par le pied de page | **Amélioré** | 26 photos ; 6 liens vers /galerie (dont `/galerie?categorie=…`) sur chaque page prestation, 8 sur l'accueil. Restent : aucune vidéo dans le HTML de /galerie alors que le title dit « photos et vidéos », pas de légende, intro de 2 phrases (88 mots dans le contenu principal) |
| M6 | Agenda absent du HTML ; agenda vide après le 28/11 | **Inchangé** | HTML de l'accueil : titre + une phrase. `events.js` en ligne : dernière date **2026-11-28** |
| B1 | Centre du rayon de 50 km variable | **Inchangé, et plus visible** | Voir 2.3 |
| B2 | Descriptions qui répètent le title | **Inchangé (gelé)** | `metadata_template.py` : `description-echoes-title` sur /prestations/sur-mesure et /mon-approche |
| B3 | H1 vagues | Inchangé | /prestations, /contact |
| B4 | Textes alternatifs sans accents, issus des noms de fichiers | **Inchangé, étendu aux nouvelles photos** | « dj dydy fantasy aux platines jeux de lumiere », « mariage premiere danse », « Soiree speciale blind test labastide beauvoir – Dydy Fantasy », « Fete comite lias » |
| B5 | /contact sans e-mail | Partiel | Note Google et lien « Laisser un avis » ajoutés ; e-mail seulement dans les mentions légales |
| B6 | Phrases générales sur /mon-approche et /prestations | Inchangé | |
| B7 | /privacy parle d'Android ; « Décathlon » avec accent | **Inchangé** | /privacy : « système Android ». « Décathlon » : références sur 9 pages, texte alternatif « Logo Décathlon », meta description /evenements/entreprise, FAQ entreprise |

Bilan : 4 constats graves sur 6 corrigés (C1, H1, H2, H4 sauf accueil), H3 et H5 nettement améliorés, M3 et M5 en bonne partie ; ce qui reste dépend surtout du gel des titles (M1, M2, B2) ou de contenus à fournir (études de cas, agenda de décembre).

---

## 2. Constats restants ou nouveaux, classés

### HAUTE

**R1. Les extraits vidéo de « L'ambiance, en vrai » sont des cadres noirs pour les robots** (nouveau)
Preuve : sur les 7 pages prestation/événement, chaque tuile est `<video muted loop playsInline preload="none" aria-label="Danse soiree entreprise colomiers – Dydy Fantasy">` **sans `src`, sans `<source>` et sans `poster`** dans le HTML pré-rendu (source ajoutée dans le navigateur). Même chose pour les 7 vidéos de l'accueil. Sans JavaScript, la section se lit « Des extraits de vraies soirées : soirées DJ. Voir la galerie Entreprises Mariages Soirées Bars & restaurants ».
Pourquoi : c'est la meilleure preuve d'expérience ajoutée par la refonte, mais Google Images et les robots IA, qui n'exécutent pas tous le JavaScript, ne voient ni l'image ni la vidéo. Seul le texte du lien (`aria-label`) passe.
Correction : mettre l'image d'aperçu en `poster` dans le HTML pré-rendu (elle existe déjà dans `src/assets/galerie-apercus/`), et/ou une `<img>` de l'aperçu avec un texte alternatif décrivant la scène, en gardant le chargement différé de la vidéo. Ajouter sous chaque tuile une légende factuelle courte (type de soirée, lieu, ville).
Vérification : `curl -s https://dydyfantasy.fr/prestations/dj | grep -o '<video[^>]*poster="[^"]*"' | wc -l` doit renvoyer 4 ; Search Console > Inspection de l'URL > Tester l'URL en direct > Capture : les tuiles affichent une image.

**R2. Agenda : vide après le 28/11 et absent du HTML** (reste M6, devient urgent)
Preuve : `https://dydyfantasy.fr/events/events.js` : 12 dates du 05/11 au **28/11/2026**, aucune en décembre. Les boutons « Voir l'agenda » (8 pages prestation, vers `/#agenda`) mèneront à un agenda vide dans 3 jours. L'accueil n'a dans le HTML que « Prochaines soirées blind test & karaoké autour de Toulouse » + une phrase.
Correction : publier les dates de décembre dans `events.js` (remplacement du seul fichier sur le serveur, sans recompiler) avant le 28/11. Ajouter sous le titre de l'agenda une phrase fixe nommant les 4 bars résidents (déjà écrite mot pour mot dans la FAQ de /evenements/bars-restaurants).
Vérification : ouvrir l'accueil le 29/11 : au moins une soirée affichée ; `curl -s https://dydyfantasy.fr/ | grep -c Biergarten` hors bandeau des références.

**R3. Accueil : aucun avis dans le HTML de « Ils en parlent »** (reste H4)
Preuve : seule section d'avis sans citation ; HTML : « Ils en parlent 4,9 Plus de 70 avis Google Voir tous les avis Laisser un avis ». Le widget se charge dans le navigateur.
Correction : citer 2 ou 3 avis courts mot pour mot dans le HTML (les avis déjà validés pour les autres pages, ou d'autres), avec « Avis Google » et le lien vers la fiche, widget en plus si souhaité.
Vérification : rechercher une phrase de l'avis dans `curl -s https://dydyfantasy.fr/`.

### MOYENNE

**2.1 / R4. Le bandeau des références pèse ~220 mots, en double, sur 9 pages** (nouveau)
Mesure (séquences de 6 mots absentes des 7 autres pages, texte du `<main>`) :

| Page | Mots | Texte propre, page entière | Texte propre hors bandeau | Ce matin |
|---|---|---|---|---|
| /prestations/blind-test-quiz | 1 081 | 67 % | 82 % | 73 % |
| /prestations/karaoke | 920 | 57 % | 72 % | 48 % |
| /prestations/dj | 930 | 59 % | 75 % | 54 % |
| /prestations/sur-mesure | 1 037 | 63 % | 78 % | 52 % |
| /evenements/mariage | 1 277 | 72 % | 85 % | 61 % |
| /evenements/entreprise | 951 | 63 % | 79 % | 57 % |
| /evenements/anniversaire | 779 | 53 % | 71 % | 51 % |
| /evenements/bars-restaurants | 988 | 63 % | 79 % | 52 % |

(La mesure de ce matin n'est pas strictement identique, les écarts de quelques points sont à lire avec prudence.)
Le texte rédactionnel est désormais bien propre à chaque page (71 à 85 %, au-dessus de l'objectif de 65-70 %). Ce qui tire le chiffre vers le bas : le bandeau « Ils m'ont fait confiance » (13 références avec type et ville, environ 110 mots) est écrit **deux fois** dans le HTML pour le défilement (`<ul aria-hidden="true">` en copie, avec les mêmes textes alternatifs), puis le bloc « En pratique » (78 mots identiques), le déroulé en 4 étapes (« On échange / On construit ensemble / On valide les détails / Je m'occupe de tout ») et la FAQ « Où intervenez-vous ? » (4 pages).
Pourquoi : un bloc répété comme un pied de page n'est pas pénalisant en soi, Google le reconnaît comme du gabarit. Mais la copie cachée double ce gabarit et dilue le texte utile de chaque page, et Blind test a perdu des points de texte propre.
Correction : garder une seule copie du bandeau dans le HTML et créer la copie de défilement dans le navigateur (ou en CSS), ou mettre `alt=""` et aucun texte dans la copie cachée. Remplacer la FAQ « Où intervenez-vous ? » sur Blind test, Karaoké, Sur mesure et Anniversaire par une question propre à la page (la zone est déjà dans « En pratique »).
Vérification : relancer la mesure ; `grep -o 'alt="Logo La Ville en Rose"' | wc -l` = 1 par page.

**R5. Zone d'intervention : trois formulations sur la même page** (reste B1, aggravé par « En pratique »)
Preuve, sur /prestations/dj : « Sans frais dans un rayon de 50 km autour de **Fonsorbes** » (En pratique) puis « j'interviens à Toulouse et **partout en Occitanie** : Haute-Garonne, Gers, Tarn… » (FAQ). Ailleurs : « rayon de 50 km autour de **Toulouse** » (/contact, H2 de /prestations, meta description /prestations), « environ 50 km » (/qui-suis-je), « partout en Occitanie » (FAQ de 6 pages, /evenements/entreprise, /evenements/mariage).
Ce n'est pas faux (déplacement offert jusqu'à 50 km, possible au-delà), mais un client ne sait pas si Albi ou Auch sont couverts ni à quel prix, et le centre change.
Correction : une phrase unique partout, par exemple « Basé à Fonsorbes, déplacement offert dans un rayon de 50 km (Toulouse, Colomiers, Blagnac, Muret, L'Isle-Jourdain…) ; au-delà, en Haute-Garonne, dans le Gers et le Tarn, sur devis. » et aligner /contact et /prestations sur « autour de Fonsorbes » (le H2 et la meta description de /prestations attendront la fin du gel si on les considère comme du balisage gelé). Aligner la fiche Google et le JSON-LD (`GeoCircle` centré sur Toulouse).
Vérification : rechercher « autour de Toulouse » et « partout en Occitanie » dans le HTML en ligne.

**R6. Note « 4,9/5 · plus de 70 avis Google » écrite en dur sur 10 pages** (reste 1.3, étendu)
Preuve : hero des 8 pages prestation/événement, accueil (hero, « Ils en parlent », meta description), /contact. Lien vers la fiche : présent, c'est le progrès principal.
Non vérifié dans cet audit (fiche non consultée). Les notes du projet du 17/11 parlaient de 72 avis 5 étoiles ; si la fiche affiche 5,0 ou un autre nombre, l'écart est visible d'un clic maintenant que le lien existe.
Correction : relever la note et le nombre exacts sur la fiche, les garder dans une seule constante du code et la mettre à jour (par exemple chaque mois, ajouter la tâche dans `GUIDE.md`).
Vérification : comparer avec la fiche Google le jour de chaque mise en ligne.

**R7. /galerie : photos sans légende, aucune vidéo dans le HTML** (reste M5)
Preuve : 26 photos (textes alternatifs du type « Karaoke bar bbt cornebarrieu – Dydy Fantasy »), filtres « Tout / Bars & restaurants / Entreprises / Mariages / Soirées », 0 balise `<video>`, contenu principal de 88 mots. Le title promet « Galerie photos et vidéos ».
Correction : légende visible sous chaque photo (type de soirée, lieu, ville), une phrase d'introduction par catégorie, vidéos avec `poster` dans le HTML (voir R1).
Vérification : `curl -s https://dydyfantasy.fr/galerie | grep -c '<video'` > 0 ; Search Console > Performances > type « Image ».

**R8. /prestations/blind-test-quiz, page la plus stratégique, sans photo réelle** (reste H3)
Preuve : images = logo, mascotte, logos clients ; la scène « pupitres à buzzer » remplace la photo du hero. Les 26 photos de la galerie contiennent pourtant « Quiz bar taverne blagnac », « Blind test bar taverne blagnac », « Soiree speciale blind test labastide beauvoir ».
Correction : ajouter une de ces photos dans la page (par exemple en tête de « Un blind test pour chaque événement » ou à côté de l'avis de Labastide-Beauvoir), avec un texte alternatif descriptif accentué.
Vérification : au moins une `<img>` hors logo/mascotte dans le HTML de la page.

**R9. Aucune étude de cas** (reste M4)
Les avis cités jouent en partie ce rôle (Labastide-Beauvoir, bal du collège, mariage). Il manque toujours un encadré « Soirée réalisée » factuel (lieu, date, format, public, ce qui a été fait), par exemple Decathlon VitalSport sur /evenements/entreprise, à faire valider par le propriétaire.

**R10. /evenements/anniversaire, page la plus faible** (nouveau constat relatif)
Preuve : 779 mots dans le `<main>` (581 hors bandeau), texte propre le plus bas (53 % / 71 %), seule page sans avis cité (choix du propriétaire, non remis en cause) et **sans section « L'ambiance, en vrai »** (0 vidéo), FAQ « Où intervenez-vous ? » générique.
Correction : ajouter les extraits vidéo ou 2 photos d'anniversaires adultes s'il en existe, et remplacer la FAQ de zone par une question propre (ex. salle louée ou domicile, surprise à organiser).

### BASSE

- **B-a. H2 identiques sur 8 pages** : « Ils m'ont fait confiance », « À découvrir aussi », « Prêt à faire vibrer votre événement ? » ; sur /evenements/entreprise, deux H2 voisins : « Ils m'ont fait confiance, et ils reviennent » (avis) puis « Ils m'ont fait confiance » (références). Renommer le second en « Mes références » ou en faire un paragraphe.
- **B-b. H3 en double dans le HTML sur /prestations/karaoke** : `<h3><span>Karaoké libre</span><span aria-hidden="true" …>Karaoké libre</span></h3>` (4 titres), lu « Karaoké libre Karaoké libre » par les robots. Afficher l'effet de remplissage en CSS (`::after` avec `content: attr(data-text)`) plutôt qu'en texte doublé.
- **B-c. « Décathlon » → « Decathlon »** : bandeau des références (9 pages), texte alternatif du logo, meta description et FAQ de /evenements/entreprise (la meta description attendra la fin du gel si on la considère gelée).
- **B-d. Textes alternatifs sans accents** sur les nouvelles photos de hero et la galerie (B4). Le nom du fichier sert de texte alternatif : renommer avec accents et une scène précise.
- **B-e. /privacy** : « système Android » toujours présent.
- **B-f. Information** (pas une correction demandée) : deux avis cités mot pour mot contiennent le prénom réel (« Dylan nous a animé… », « Nous recommandons Dylan – DYDY Fantasy »). C'est cohérent avec les mentions légales ; à garder ou non selon le choix du propriétaire, sans toucher au texte de l'avis.
- **B-g. Metadata** : `metadata_template.py` sur 15 pages : `site_risk: low`, `templated_ratio: 0.0`, `shared_cta_phrases: {}`. Alertes secondaires inchangées : `description-echoes-title` (/prestations/sur-mesure, /mon-approche, gelées) ; `brand-suffix-in-description` (/dydy-quiz, /galerie) = fausses alertes, la phrase est naturelle.

---

## 3. Ce qui fonctionne (nouveau ou confirmé)

- Faits cohérents entre pages : « 4 bars », « 12 à 15 soirées par mois », « 150+ soirées », « 200+ invités », téléphone = buzzer.
- Mentions légales sérieuses et exactes par rapport à ce que fait le site (pas d'Analytics, services tiers listés : Featurable, OpenStreetMap, Nominatim).
- Titres de section qui nomment la prestation (« Ce que comprend votre karaoké », « Vos questions sur l'animation de mariage ») : meilleure lisibilité pour Google et pour un passage cité seul.
- Avis cités mot pour mot avec leur source, liens « Voir tous les avis » et « Laisser un avis », lien Mariages.net : preuves vérifiables par un visiteur.
- Maillage vers la galerie par catégorie depuis chaque page prestation.
- Pas de formule creuse ni de structure répétitive typique de texte généré dans les nouveaux textes lus (« En pratique », avis, titres).

---

## 4. Prêt pour les citations IA (55 → 63 / 100)

- **Progrès** : avis et références dans le HTML, sections qui nomment la prestation, bloc « En pratique » factuel facile à citer (« Sans frais dans un rayon de 50 km autour de Fonsorbes… Sono, lumières, lyres, machine à fumée, écran et vidéoprojecteur »).
- **Reste** : vidéos et agenda invisibles sans JavaScript (R1, R2), toujours pas de phrase de définition « Dydy Fantasy est… » dans le contenu principal (l'accueil dit « Animateur et DJ basé à Fonsorbes, à l'ouest de Toulouse. Résident dans 4 bars… », sans sujet nommé), formulations de zone contradictoires (R5) qu'un moteur IA peut reprendre telles quelles.
- **Passage à ajouter** (faits déjà présents sur le site) sous « Mais c'est qui Dydy Fantasy ? » : « Dydy Fantasy est un animateur événementiel et DJ basé à Fonsorbes, à l'ouest de Toulouse, résident toute l'année dans 4 bars de la région. Il anime blind tests, quiz, karaokés et soirées DJ pour les mariages, les entreprises, les anniversaires, les bars et les restaurants. »
- **Vérification** : poser « animateur blind test Toulouse » et « DJ karaoké Fonsorbes » à Perplexity / ChatGPT avec recherche, noter la source citée ; recommencer mi-janvier 2027, en même temps que la mesure Search Console.

---

## 5. Comment vérifier (récapitulatif)

| Point | Méthode |
|---|---|
| Chiffres | `curl -s <page> | grep -c "3 bars"` = 0 sur toutes les pages (fait : 0) |
| Vidéos visibles sans JS (R1) | `grep -o '<video[^>]*poster=' ` sur chaque page prestation ; Inspection de l'URL > Tester l'URL en direct > Capture |
| Agenda (R2) | ouvrir l'accueil le 29/11 ; `events.js` contient des dates de décembre |
| Avis accueil (R3) | une phrase d'avis présente dans le HTML de l'accueil |
| Texte propre (R4) | relancer la mesure de séquences de 6 mots ; 1 seule occurrence de chaque logo par page |
| Zone (R5) | 0 résultat pour « 50 km autour de Toulouse » et « partout en Occitanie » ; formule unique |
| Note Google (R6) | comparer avec la fiche Google à chaque mise en ligne |
| Effet global | Search Console, mi-janvier 2027 : impressions et position des 8 pages prestation/événement par rapport à la période de référence (17/11) ; Pages : aucune en « Explorée, actuellement non indexée » |

## 6. Non vérifié

- Note et nombre d'avis réels sur la fiche Google.
- Rendu par Googlebot (pas d'Inspection de l'URL depuis cet audit).
- Contenu des vidéos (non visionnées) ; nature exacte de la photo « anniversaire dydy fantasy micro mascotte ».
- Lisibilité non recalculée : les textes rédactionnels déjà mesurés ce matin (Kandel-Moles 67-73) ont peu changé.

---

## 7. Données structurées pour audit-data.json (catégorie « Content Quality »)

```json
{
  "category": "Content Quality",
  "audit": "apres-refonte-2026-11-25",
  "score": 73,
  "previous_score": 62,
  "subscores": {"on_page": 81, "eeat": 69, "experience": 68, "expertise": 65, "authoritativeness": 65, "trustworthiness": 75, "ai_citation_readiness": 63},
  "previous_subscores": {"on_page": 76, "eeat": 55, "experience": 55, "expertise": 60, "authoritativeness": 50, "trustworthiness": 55, "ai_citation_readiness": 55},
  "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}, "secondary_flags": {"description_echoes_title": ["/prestations/sur-mesure", "/mon-approche"], "brand_suffix_in_description_false_positive": ["/dydy-quiz", "/galerie"]}},
  "resolved": ["C1", "H1", "H2", "M3 (partiel)", "H4 (sauf accueil)", "H3 (sauf blind test)", "M5 (liens)"],
  "findings": [
    {"id": "R1", "severity": "high", "title": "Extraits vidéo sans src ni poster dans le HTML pré-rendu", "urls": ["/", "/prestations/*", "/evenements/* (sauf anniversaire)"]},
    {"id": "R2", "severity": "high", "title": "Agenda vide après le 28/11 et absent du HTML", "urls": ["/", "/events/events.js"]},
    {"id": "R3", "severity": "high", "title": "Aucun avis cité dans le HTML de l'accueil", "urls": ["/"]},
    {"id": "R4", "severity": "medium", "title": "Bandeau des références en double dans le HTML ; FAQ zone répétée ; texte propre 53-72 % (71-85 % hors bandeau)", "urls": ["/prestations/*", "/evenements/*"]},
    {"id": "R5", "severity": "medium", "title": "Zone : 50 km autour de Fonsorbes / de Toulouse / partout en Occitanie", "urls": ["/prestations/*", "/evenements/*", "/contact", "/prestations", "/qui-suis-je"]},
    {"id": "R6", "severity": "medium", "title": "Note 4,9 / +70 avis écrite en dur sur 10 pages, non vérifiée", "urls": ["/", "/contact", "/prestations/*", "/evenements/*"]},
    {"id": "R7", "severity": "medium", "title": "Galerie sans légendes ni vidéo dans le HTML", "urls": ["/galerie"]},
    {"id": "R8", "severity": "medium", "title": "Page blind test sans photo réelle", "urls": ["/prestations/blind-test-quiz"]},
    {"id": "R9", "severity": "medium", "title": "Aucune étude de cas", "urls": ["/evenements/entreprise", "/evenements/bars-restaurants"]},
    {"id": "R10", "severity": "medium", "title": "Page anniversaire la plus faible (pas de vidéos, texte propre le plus bas)", "urls": ["/evenements/anniversaire"]},
    {"id": "M1-M2-B2", "severity": "medium", "title": "Titles et descriptions gelés jusqu'à mi-janvier 2027 ; lien DJ → mariage dans le texte toujours absent", "urls": ["/prestations/dj", "/evenements/bars-restaurants", "/prestations/sur-mesure", "/mon-approche"]},
    {"id": "B-a..g", "severity": "low", "title": "H2 génériques, H3 doublés karaoké, Décathlon, alt sans accents, /privacy Android", "urls": ["several"]}
  ]
}
```
