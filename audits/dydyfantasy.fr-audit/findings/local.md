# Audit SEO local - dydyfantasy.fr (25/11/2026)

**Score SEO local : 64 / 100** (entreprise à zone desservie, SAB)

| Dimension | Poids | Note | Commentaire |
|---|---|---|---|
| Signaux GBP | 25 % | 14/25 | Non vérifiable directement (catégories, posts, photos) ; aucun lien vers la fiche ni lien « laisser un avis » sur le site |
| Avis et réputation | 20 % | 14/20 | 4,9 et plus de 70 avis affichés ; pas de balisage (choix correct) ; pas de lien pour déposer un avis |
| SEO local on-page | 20 % | 15/20 | « Toulouse » dans presque tous les titres/H1, pages par type d'événement, Gers cité ; pas de pages villes ; Tarn absent des titres |
| NAP et citations | 15 % | 7/15 | NAP du site cohérent ; présence en annuaires non vérifiable publiquement |
| Schéma local | 10 % | 8/10 | LocalBusiness propre, areaServed présent ; sous-type générique |
| Liens et autorité locale | 10 % | 6/10 | Références clients réelles avec villes ; liens et mentions externes non vérifiés |

Note : la proximité (environ 55 % de la variance du classement local) n'est pas modifiable. Pour un SAB basé à Fonsorbes, le pack local est surtout atteignable près de Fonsorbes et pour les recherches sans ville précise.

## Ce qui fonctionne

- **NAP identique sur 6 pages testées en direct** (accueil, contact, qui-suis-je, mariage, bars-restaurants, DJ) : nom « Dydy Fantasy », téléphone affiché `06 95 95 33 56`, lien `tel:+33695953356`, identique au `telephone` du JSON-LD. Le `06 00 00 00 00` de la page contact est seulement le texte indicatif du champ du formulaire.
- **Aucune adresse de rue** : le JSON-LD ne contient que `addressLocality: Fonsorbes`, `postalCode: 31470`, `addressRegion`, `addressCountry` (pas de `streetAddress`), conforme à un SAB. Le visible dit « Basé à Fonsorbes · Toulouse, Haute-Garonne, Gers, Tarn » (pied de page) et « dans un rayon de 50 km autour de Toulouse » (contact).
- **JSON-LD LocalBusiness** (`@id` stable `/#entreprise`, `url`, `logo`, `telephone`, `geo`, `sameAs` Facebook et Instagram, `areaServed` = GeoCircle 50 km autour de Toulouse + City Toulouse + Haute-Garonne + Gers + Tarn), présent sur les 16 pages crawlées, avec `Service` + `BreadcrumbList` sur les pages de prestation et d'événement.
- **Titres locaux** : « Toulouse » dans le title de 14 pages sur 16 ; DJ, anniversaire et mariage ajoutent « Gers » ; H1 locaux sur la plupart des pages.
- **Une page par intention** : 4 prestations (blind test/quiz, karaoké, DJ, sur mesure) et 4 événements (mariage, entreprise, anniversaire, bars/restaurants). Les pages de service dédiées sont le facteur n°1 du SEO local organique.
- **Références réelles avec villes** (accueil) : Décathlon (Escalquens), La Ville en Rose et Le Cosy (Colomiers), Taverne Heidelberg (Blagnac), Le Cul de Bouteille (Aussonne), Le BBT et Chez Granny (Cornebarrieu), L'entrepotes (Gratentour), La Table Ronde (Saint-Lieux-lès-Lavaur, 81), Lias (32), Giroussens (81). Cela donne des signaux de lieux réels sans pages dupliquées.
- Pas de faux avis balisés, pas d'adresse inventée ; `robots.txt` OK, sitemap de 15 URL.

## Constats

### Critique
Aucun.

### Haute

**H1. Aucun lien du site vers la fiche Google ni vers le dépôt d'avis.**
- Preuve : sur l'accueil, contact et qui-suis-je, aucun lien `g.page`, `maps.app`, `google.com/maps` ni `writereview` dans le HTML ; seuls Facebook et Instagram sont en `sameAs`. Le widget Featurable est chargé côté navigateur et n'est pas dans le HTML statique.
- Impact : le site n'est pas relié explicitement à la fiche ; pas de moyen simple de récolter de nouveaux avis, alors que le rythme des avis compte pour le classement.
- Correction : (1) copier le lien d'avis depuis GBP (« Demander des avis ») et l'ajouter près du bloc « Plus de 70 avis Google » (bouton « Laisser un avis ») et dans le pied de page ; (2) ajouter l'URL de la fiche dans `sameAs` du JSON-LD ; (3) envoyer ce lien (QR code ou SMS) après chaque soirée, en particulier aux organisateurs de mariage et d'entreprise.
- Vérification : `curl -s https://dydyfantasy.fr/ | grep -i "g.page\|maps"` ; compteur d'avis GBP sur 30 jours.

**H2. Zone du site et zone de la fiche GBP à aligner (non vérifiable ici).**
- Preuve : `areaServed` = Toulouse + 3 départements entiers + cercle de 50 km. La liste de villes de la fiche n'est pas consultable publiquement : non vérifiée. Le Tarn n'apparaît dans aucun title/H1 (seulement dans le texte et les références : La Table Ronde, Giroussens).
- Impact : GBP limite le nombre de zones ; un site plus large que la fiche brouille le signal, et un département entier est moins précis que des villes nommées.
- Correction : comparer les deux listes ; conserver Gers/Tarn dans le site seulement si ces clients existent réellement (c'est le cas d'après les références), et remplacer ou compléter les `AdministrativeArea` par des `City` nommées identiques à la fiche.
- Vérification : GBP > Modifier le profil > Zones desservies, comparé à `areaServed` ; Schema Markup Validator.

### Moyenne

**M1. Pages villes : pas en masse ; une ou deux pages ciblées seulement si le contenu est réel.**
- Preuve : aucune page par ville dans le sitemap ; les villes n'apparaissent qu'en références.
- Recommandation : ne pas produire de pages « Animateur quiz à Colomiers / Muret / Blagnac » par simple remplacement du nom de ville (doorway pages, contenu quasi dupliqué). Une page ville ne se justifie que si elle apporte du contenu propre et vrai : soirées réellement animées sur place, établissement réel, photos, avis cités, questions locales. Candidats crédibles d'après vos références : Colomiers (2 clients), Cornebarrieu (2 clients), Blagnac. Test : si on remplace le nom de la ville et que la page reste valable pour une autre, elle ne doit pas exister. Alternative sans risque : un bloc « Où j'interviens » sur les pages prestations et événements, avec les lieux réels.
- Vérification : Search Console, requêtes « animateur/quiz/karaoké + ville » avec impressions, avant de créer.

**M2. Avis : affichage correct, balisage à ne pas ajouter, rythme à entretenir.**
- Preuve : aucun `aggregateRating` ni `Review` dans le HTML (contrôle sur les pages testées). C'est le bon choix : Google ne donne pas d'étoiles aux avis qu'une entreprise place sur son propre `LocalBusiness` (avis autoévalués), et reprendre les avis Google en balisage est risqué. Ne pas ajouter `aggregateRating`.
- Autorisé : afficher le widget Google, citer mot pour mot des avis réels (déjà fait sur Mariage), répondre aux avis. À éviter : trier pour n'afficher que les 5 étoiles en faisant croire à l'exhaustivité, acheter ou échanger des avis.
- À surveiller : « Plus de 70 avis Google » est écrit en dur (description de l'accueil et bloc visible) : à tenir à jour. Écart de contenu : « 3 bars résidents » sur le site alors que votre profil de référence indique 4 : à vérifier.
- Non vérifiable ici : taux de réponse aux avis et vélocité (voir GBP).

**M3. Annuaires et citations : présence non vérifiable publiquement.**
- Preuve : les recherches publiques tentées (Bing, DuckDuckGo) n'ont renvoyé que des résultats sans rapport ou une page anti-robot. **Aucune conclusion possible** : je n'affirme ni présence ni absence.
- À contrôler manuellement (recherche « Dydy Fantasy » et du numéro entre guillemets), puis à créer si absent, avec le même nom, le même téléphone et la même zone, sans adresse de rue : Pages Jaunes (et Mappy, même éditeur), Bing Places et Apple Business Connect (gratuits), Mariages.net et Zankyou (cible mariage), annuaires de prestataires de mariage et d'animateurs/DJ selon vos cibles, Facebook (page déjà présente) et Instagram, annuaires de la CCI et de la mairie de Fonsorbes, plus Facebook Events / plateformes d'agenda pour les soirées publiques. Les fiches Société.com / Pappers existent d'office via le SIRET : y vérifier le nom et la commune.
- Les annuaires généralistes de « Tier 1 » (Yelp, BBB) pèsent peu en France ; priorité à Pages Jaunes et aux annuaires mariage.
- Vérification : tableau nom / téléphone / zone par annuaire ; recherche du numéro entre guillemets.

**M4. Schéma : sous-type et détails.**
- Preuve : `@type: LocalBusiness` ; `priceRange` est un seul symbole ; `geo` à 4 décimales (43.5356 ; 1.2317).
- Correction : `["LocalBusiness","EntertainmentBusiness"]` (sous-type plus précis pour DJ/animation) ; `geo` à 5 décimales du centre de la commune, sans viser un domicile ; `openingHoursSpecification` non nécessaire pour un SAB sur rendez-vous.
- Vérification : Schema Markup Validator sur l'accueil.

### Basse

- **B1.** Le schéma complet est répété sur les 16 pages dont `/privacy` (politique de l'appli) : acceptable.
- **B2.** Aucun e-mail visible (contact par formulaire et téléphone) : cohérent, mais prévoir une adresse pro pour les inscriptions en annuaires.
- **B3.** `sameAs` Facebook en `profile.php?id=...` : utiliser une URL propre si elle existe.
- **B4.** Pas de page dédiée Gers/Tarn : les mentions dans le texte suffisent à ce stade.

## Recommandations GBP (à vérifier par le propriétaire, non vérifiables ici)

- **Catégorie principale** (facteur n°1) : choisir celle qui correspond à la recherche visée parmi les catégories proposées par GBP en France (animation/DJ/organisation de soirées) ; la mauvaise catégorie est le facteur négatif n°1. Catégories secondaires : seulement celles de vraies prestations (karaoké, etc.).
- **Zone desservie** : même liste que `areaServed`, adresse masquée (déjà le cas), nom exact « Dydy Fantasy » sans mots-clés ajoutés.
- **Services** : une entrée par prestation (blind test, quiz, karaoké, DJ, sur mesure), mêmes intitulés que les pages du site.
- **Posts** : publication régulière (soirée de la semaine, agenda issu de `events.js`, photo de soirée).
- **Photos et vidéos** : photos de soirées, vidéos courtes, ajout régulier.
- **Questions-réponses** : amorcer les questions fréquentes (zone, matériel fourni, délai de réponse 24 h).
- **Avis** : lien court (H1), réponse à tous les avis, rythme régulier.
- **Site web** : `https://dydyfantasy.fr/` (domaine sans www) ; lien de devis vers `/contact`.

## Comment vérifier

1. NAP : `curl -s https://dydyfantasy.fr/<page>` et recherche de `tel:` et du JSON-LD ; recherche Google du numéro.
2. Schéma : Rich Results Test et validator.schema.org.
3. GBP : Performances (appels, requêtes) et liste de zones.
4. Annuaires : recherche manuelle, tableau de suivi.
5. Pages villes : Search Console avant toute création.
6. Pack local : contrôle manuel depuis Toulouse, Colomiers et Fonsorbes (résultats variables selon l'emplacement).

## Limites

Pas d'accès à l'API GBP ni à DataForSEO. Non évalués : catégories GBP, posts, photos, réponses aux avis, vélocité des avis, classement dans le pack local, présence en annuaires (recherches publiques inexploitables). Le nombre exact d'avis et la liste des villes de la fiche n'ont pas été confirmés indépendamment. Aucune donnée inventée.
