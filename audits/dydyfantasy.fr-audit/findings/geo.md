# Audit GEO : visibilité dans les moteurs de réponse IA (dydyfantasy.fr)

Date : 25/11/2026. Périmètre : site en ligne uniquement (15 pages du sitemap + /privacy). Sources : `crawl.json` et `homepage-render.json`, nouvelles récupérations des 15 pages (HTML brut, sans exécution JS), tests d'en-têtes et de user-agents, recherches publiques sur la marque.

## Score « Prêt pour la recherche IA » : 57 / 100

| Dimension | Poids | Note /100 | Points |
|---|---|---|---|
| Citabilité des passages | 25 % | 55 | 13,8 |
| Lisibilité structurelle | 20 % | 70 | 14,0 |
| Contenu multimédia | 15 % | 30 | 4,5 |
| Autorité et signaux de marque | 20 % | 35 | 7,0 |
| Accessibilité technique | 20 % | 88 | 17,6 |
| **Total** | | | **≈ 57** |

En résumé : la technique est très bonne. Ce qui manque, ce sont des réponses précises (prix, durée), des preuves que les robots IA peuvent lire (avis, photos, agenda) et une présence de la marque en dehors du site.

### Scores par plateforme (estimations, pas des mesures)

| Plateforme | Note | Raison principale |
|---|---|---|
| Google AI Overviews / AI Mode | 60 | Googlebot exécute le JS et la fiche Google Business Profile (70+ avis) compte beaucoup pour les réponses locales. En revanche, aucun prix et peu de preuves dans le HTML. |
| ChatGPT Search | 45 | S'appuie sur OAI-SearchBot et sur l'index Bing (non vérifié). Les avis et l'agenda restent invisibles sans JS et la marque est peu présente ailleurs. |
| Perplexity | 45 | Mêmes limites. Perplexity cite volontiers des pages avec chiffres et prix, qui manquent ici. |
| Bing Copilot | 45 | Dépend de l'index Bing. Aucune vérification Bing Webmaster visible et pas de `lastmod` dans le sitemap. |

## Accès des robots IA

robots.txt : `User-agent: * / Allow: /` + `Sitemap:`. Aucun en-tête `X-Robots-Tag`, aucune balise `noindex`/`nosnippet`/`max-snippet` (sauf `/privacy` en noindex, ce qui est normal). Chaque user-agent ci-dessous a été testé sur `/prestations/blind-test-quiz` : réponse 200 et HTML identique (57 448 octets).

| Robot | Ce qu'il contrôle | Statut |
|---|---|---|
| OAI-SearchBot | Citations dans ChatGPT Search | Autorisé (200) |
| ChatGPT-User | Visites déclenchées par un utilisateur de ChatGPT | Autorisé (200) |
| GPTBot | Entraînement des modèles OpenAI (pas ChatGPT Search) | Autorisé (200) |
| Claude-SearchBot | Citations dans la recherche de Claude | Autorisé (200) |
| ClaudeBot | Entraînement des modèles Anthropic (pas la recherche) | Autorisé (200) |
| PerplexityBot / Perplexity-User | Index Perplexity / visites à la demande | Autorisé (200) |
| Googlebot | Recherche Google, y compris AI Overviews et AI Mode | Autorisé (200) |
| Google-Extended (jeton robots.txt) | Entraînement et ancrage de Gemini/Vertex. N'a aucun effet sur l'inclusion dans AI Overviews. | Autorisé (via `*`) |
| bingbot | Index Bing, utilisé par Copilot et en partie par ChatGPT | Autorisé (200) |
| Applebot / Applebot-Extended | Siri, Spotlight et Safari / entraînement Apple Intelligence uniquement | Autorisé |
| CCBot, cohere-ai | Entraînement (Common Crawl, Cohere) | Autorisé |

Ce réglage convient à un site qui cherche de la visibilité. Rien n'est à bloquer. Bloquer les robots d'entraînement (GPTBot, ClaudeBot, Google-Extended, CCBot) reste un choix possible et n'a aucun effet sur les citations en recherche.

- **llms.txt** : absent (404, de même que `/llms-full.txt` et `/.well-known/llms.txt`). Ce fichier est facultatif et **ignoré par Google Search** : ce n'est pas un levier de classement.
- **RSL 1.0 / licence** : absent (facultatif).

## Ce qui fonctionne

- **Tout le texte est dans le HTML pré-rendu** (`is_spa: false`) : les robots IA, qui n'exécutent en général pas le JS, lisent titres, paragraphes et FAQ.
- **Une page par intention**, chacune avec un H1 local clair : « Animation blind test & quiz à Toulouse », « Animateur & DJ mariage à Toulouse », « DJ à Toulouse et dans le Gers », « Team building & animation d'entreprise à Toulouse ». Les title et meta description sont propres à chaque page.
- **FAQ dans le HTML** (`<details>/<summary>`) sur les 8 pages prestation et événement. Les réponses sont directes.
- **Une réponse très facile à citer sur le matériel** : « Sono, lumières, machine à fumée, écran et vidéoprojecteur : j'apporte toujours tout. Devis tout compris ».
- **Une entité cohérente** : Fonsorbes (31470), téléphone, zone (Haute-Garonne, Gers, Tarn, liste de villes) identiques sur toutes les pages et dans le JSON-LD `LocalBusiness`. Les pages ont un `Service` + `BreadcrumbList` relié par `provider.@id`.
- **Des références nommées avec leur ville** (11 clients sur l'accueil, Décathlon VitalSport à Escalquens dans la FAQ entreprise) et des chiffres précis (12 à 15 soirées par mois, 150+ soirées, 200+ invités).
- **Un élément distinctif** : l'appli maison Dydy Quiz, avec sa propre page. Un concurrent ne peut pas revendiquer cet atout.
- La FAQ « Intervenez-vous dans le Gers ? » de /prestations/dj correspond à la requête « dj gers » relevée dans Search Console.

## Le site répond-il aux questions typiques ?

| Question posée à une IA | Réponse sur le site ? | Où / pourquoi |
|---|---|---|
| Combien coûte un animateur blind test à Toulouse ? | **Non** | Aucun prix, aucune fourchette, aucun facteur de prix (recherche « € / tarif / prix / budget / combien » sur les 15 pages : rien). Seulement « devis tout compris ». |
| Quel DJ pour un mariage près de Toulouse ? | **Partiel** | /evenements/mariage et /prestations/dj existent, mais sans preuve lisible (aucun avis de mariage dans le HTML, aucune photo de mariage, aucun prix). |
| Animateur karaoké / blind test pour bar à Toulouse | Oui | /evenements/bars-restaurants nomme les bars et leur ville (FAQ). |
| Où y a-t-il un blind test ou un karaoké près de Toulouse cette semaine ? | **Non pour les robots IA** | L'agenda (`events.js`) est chargé par JS : le HTML ne contient que le titre « Prochaines soirées… », sans aucune date. |
| Team building quiz / animateur micro à Toulouse | Oui | /evenements/entreprise, avec la référence Décathlon VitalSport. |
| Le matériel est-il fourni ? | Oui | Toutes les pages prestation. |
| Pour combien de personnes ? | Oui | « événements de 200 personnes et plus ». |
| Combien de temps dure une soirée ? Combien de temps à l'avance réserver ? | **Non / vague** | « Cela dépend du format », « le plus tôt possible ». |
| Animateur anniversaire à domicile ? | Oui (réponse courte) | FAQ /evenements/anniversaire. |
| Qui est Dydy Fantasy ? | **Partiel** | Aucune phrase de définition : le H1 de /qui-suis-je est « Ingénieur développeur le jour, animateur le soir. » |

## Constats

### Critique

Aucun. Aucun blocage d'accès ni contenu caché derrière le JS sur les pages de prestation.

### Haute

**H1. Aucune réponse aux questions de prix**
- Preuve : aucune occurrence de « € », « tarif », « prix », « budget » ou « coût » dans le contenu des 15 pages. Le JSON-LD donne `"priceRange":"€"`, peu informatif et qui peut se lire « bon marché ».
- Effet : pour « combien coûte un animateur / DJ mariage à Toulouse », les IA citeront des annuaires ou des concurrents qui donnent des chiffres.
- Correction (choix du propriétaire, qui ne publie pas de prix à ce jour) : ajouter dans chaque FAQ une question « Combien coûte… ? » de 60 à 120 mots qui explique les facteurs réels du prix (durée, nombre d'invités, format combiné, déplacement, matériel tout compris) et le délai de devis (24 h). Si le propriétaire l'accepte, ajouter une fourchette ou un « à partir de » réel : c'est ce qui rend le passage citable. Ne rien inventer. Effort : 1 h de rédaction.

**H2. Avis clients invisibles pour les robots IA**
- Preuve : le HTML de l'accueil contient seulement « 4,9 · Plus de 70 avis Google ». Les textes d'avis sont chargés par le widget JS (`ReviewsWidget`), et aucune page prestation ne cite d'avis.
- Correction : publier en HTML statique 3 à 6 avis réels **cités mot pour mot** (prénom ou initiale, type d'événement, mois), dont l'avis Google du mariage sur /evenements/mariage, et ajouter un lien vers la fiche Google.
- Ne pas ajouter de balisage `aggregateRating`/`Review` sur ses propres avis : Google n'affiche plus d'étoiles pour les avis « auto-publiés » de LocalBusiness/Organization.
- Effort : 1 à 2 h.

**H3. Marque peu présente hors du site, et facile à confondre**
- Preuves :
  - Aucune entrée Wikipedia FR ni Wikidata (normal pour une entreprise de cette taille ; ne pas en créer).
  - Recherche YouTube « "dydy fantasy" » : aucune chaîne ni vidéo de Dydy Fantasy. Les résultats montrent d'autres artistes (DyDy, Dydy'R, R Dydy, Didi Fantasy), d'où un risque de confusion pour les IA.
  - Domaine **absent de Common Crawl** (index 2026-30, 2026-39, 2026-43, 2026-47) : signe de très peu de liens entrants.
  - `sameAs` ne contient que Facebook et Instagram. Le profil Mariages.net (existant selon le propriétaire) et la fiche Google ne sont reliés ni dans le site ni dans le JSON-LD.
- Correction :
  - Ajouter l'URL de la fiche Google (lien Maps/CID) et celle de Mariages.net dans `sameAs` et dans le pied de page ou la page mariage.
  - Créer une chaîne YouTube avec de courts extraits réels, titrés « Dydy Fantasy, blind test & karaoké, [lieu], [ville] » (YouTube est le signal de marque le plus corrélé aux citations IA dans les études tierces).
  - Demander aux bars résidents et aux comités des fêtes de mentionner « Dydy Fantasy » avec un lien dans leurs annonces et sur leur site.
  - Créer des fiches dans les annuaires locaux et événementiels, avec exactement le même nom, la même zone et le même téléphone.
  - Utiliser partout la même formule : « Dydy Fantasy, animateur et DJ à Toulouse ».
- Effort : continu, 1 à 2 h par mois.

### Moyenne

**M1. Passages courts et génériques, aucune phrase qui définit l'entité**
- Preuve : beaucoup de réponses de FAQ font 15 à 40 mots sans fait précis. Exemples : « Le plus tôt possible : les dates de mariage partent vite », « Cela dépend du format ». Les questions sont dans des `<summary>` sous un H2 « Vos questions », pas dans des titres.
- Correction :
  - Ajouter 2 ou 3 questions réelles par page : durée habituelle d'une soirée, délai de réservation conseillé, frais de déplacement, besoin ou non d'un écran sur place.
  - Commencer chaque réponse par la réponse elle-même.
  - Ouvrir /qui-suis-je et l'accueil par une phrase de définition, par exemple : « Dydy Fantasy est un animateur et DJ basé à Fonsorbes (31), près de Toulouse, spécialisé dans les blind tests, quiz interactifs, karaokés et soirées DJ… ». Le choix de ne pas donner de prénom est respecté.
- Effort : 2 à 3 h.

**M2. L'agenda des soirées publiques est invisible sans JS**
- Preuve : `events.js` liste des soirées publiques (La Ville en Rose à Colomiers, Biergarten à Saint-Orens, Taverne Heidelberg à Blagnac…), mais le HTML n'en contient aucune.
- Correction : publier chaque soirée aussi en dehors du site (posts de la fiche Google, événements Facebook, agendas locaux), puisque l'agenda est volontairement modifiable sans recompiler. Une option technique : générer en JS un JSON-LD `Event`. Googlebot le lirait, mais pas la plupart des robots IA. À arbitrer avec la contrainte « modifiable sans rebuild ».
- Effort : moyen.

**M3. Peu de médias réels**
- Preuves :
  - Les 8 pages prestation et événement ne contiennent **aucune photo réelle** dans le HTML (seulement le logo et la mascotte).
  - /galerie n'a que 3 photos dans le HTML, avec des textes alternatifs tirés des noms de fichiers (« Dydy fantasy micro – Dydy Fantasy »).
  - Une seule vidéo (/qui-suis-je, en webm), sans `VideoObject`.
  - La section « En images » de /dydy-quiz ne contient aucun média dans le HTML.
- Correction : 1 ou 2 photos réelles par page de prestation, avec un texte alternatif descriptif (lieu, type de soirée), et un `VideoObject` pour la vidéo de présentation, également publiée sur YouTube.
- Effort : 2 h (photos fournies par le propriétaire).

**M4. Chiffres et références à mettre à jour**
- Preuve : le site affiche « 3 bars où je suis animateur résident » (accueil, /qui-suis-je, /evenements/bars-restaurants, meta description de /qui-suis-je). Or l'information la plus récente du propriétaire (24/11/2026) est « résident à l'année dans 4 bars », dont le Biergarten by Saint-Orens, qui n'apparaît pas dans « Ils m'ont fait confiance » (pas plus que le comité des fêtes de Labastide-Beauvoir), alors que l'agenda les cite.
- Effet : les IA peuvent reprendre un chiffre périmé ou repérer des contradictions.
- Correction : harmoniser les chiffres sur le site, la fiche Google et les bios Facebook/Instagram (la branche en cours l'a peut-être déjà fait : à vérifier avant la mise en ligne).
- Effort : 15 min.

**M5. JSON-LD `LocalBusiness` incomplet pour l'entité**
- Preuve :
  - `sameAs` = Facebook + Instagram seulement.
  - `areaServed` = Toulouse, 3 départements et un cercle de 50 km, mais pas la liste de villes de la fiche Google, que le CLAUDE.md demande de reprendre à l'identique.
  - Ni `knowsAbout`, ni `hasOfferCatalog`.
  - `@type` générique.
- Correction :
  - Écrire `"@type": ["LocalBusiness","EntertainmentBusiness"]`.
  - Ajouter `hasMap` et `sameAs` (fiche Google, Mariages.net).
  - Lister dans `areaServed` les mêmes villes que la fiche Google.
  - Ajouter `knowsAbout` (blind test, quiz, karaoké, DJ) et un `hasOfferCatalog` pointant vers les `Service`.
- Effort : 30 min.

**M6. Index Bing (ChatGPT, Copilot) non vérifié**
- Preuve : aucune balise `msvalidate.01` (la vérification peut toutefois passer par DNS ou par fichier), sitemap sans `<lastmod>`, pas d'IndexNow.
- Correction : importer le site dans Bing Webmaster Tools depuis Search Console, soumettre le sitemap, ajouter `lastmod`, envisager IndexNow à chaque mise en ligne.
- Effort : 30 min.

### Basse

- **B1. llms.txt absent** : facultatif, à faible coût, ignoré par Google Search. Ce n'est pas une priorité.
- **B2. FAQPage absent** : depuis 2023, Google n'affiche ce résultat enrichi que pour des sites officiels ou de santé. Les FAQ sont déjà lisibles dans le HTML. Facultatif.
- **B3. Aucune date de mise à jour** visible ni d'en-tête `Last-Modified` sur les pages HTML. Effet faible pour des pages de service.
- **B4. `og:image` = logo sur toutes les pages** : utiliser une photo de soirée propre à chaque page améliorerait les aperçus partagés.

## Les 5 changements les plus utiles

1. Publier en HTML statique des avis réels cités mot pour mot, plus le lien vers la fiche Google (H2). Effort : 1 à 2 h.
2. Ajouter une FAQ « Combien coûte… ? » sur les facteurs de prix, avec une fourchette si le propriétaire l'accepte (H1). Effort : 1 h.
3. Relier les profils externes (fiche Google, Mariages.net) dans `sameAs` et sur le site, et compléter le JSON-LD (H3, M5). Effort : 30 min.
4. Créer une chaîne YouTube et obtenir des mentions avec lien des bars et comités (H3). Effort : continu.
5. Ajouter des photos réelles et un `VideoObject` sur les pages prestation, et des questions-réponses concrètes : durée, délai, déplacement (M1, M3). Effort : 3 à 4 h.

## Comment vérifier

- **Accès des robots** : `curl -A "OAI-SearchBot/1.0" -I https://dydyfantasy.fr/` (même chose avec PerplexityBot et Claude-SearchBot) doit renvoyer 200. Dans les logs bruts OVH, vérifier les passages réels de ces robots (le test ci-dessus vient de mon adresse IP : un blocage par IP ne peut pas être exclu).
- **Citations** : une fois par mois, poser les questions du tableau ci-dessus dans ChatGPT (recherche activée), Perplexity, Copilot et Google AI Mode, puis noter dans un tableur si dydyfantasy.fr ou la fiche Google est cité.
- **Données structurées** : Rich Results Test et validator.schema.org sur l'accueil et /evenements/mariage après modification.
- **Bing** : outil d'inspection d'URL de Bing Webmaster Tools, plus les rapports de performance IA s'ils sont disponibles.
- **Search Console** : les clics et impressions des AI Overviews sont comptés avec la recherche web classique. À suivre sur les requêtes non liées à la marque, à comparer à la base de novembre 2026.

## Non vérifié (limites de cet audit)

- Mentions hors site : Bing, DuckDuckGo, Brave et Mojeek ont bloqué les requêtes automatiques ; Reddit était inaccessible ; Facebook et Instagram exigent une connexion. Les mentions dans la presse, les annuaires ou sur Reddit **n'ont pas pu être confirmées ni exclues**.
- Profil Mariages.net : la recherche publique n'a pas été concluante. Sa présence repose sur l'information du propriétaire.
- Contenu et liste de villes de la fiche Google Business Profile : non récupérés.
- Présence dans l'index Bing : inconnue.
- Pas d'outil DataForSEO : la visibilité réelle dans ChatGPT n'a pas été mesurée et les scores par plateforme sont des estimations.
- La branche `design/accueil-v3` n'est pas en ligne et n'a pas été évaluée.

## Données structurées (catégorie « AI Search Readiness » pour audit-data.json)

```json
{
  "category": "AI Search Readiness",
  "score": 57,
  "dimensions": {"citability": 55, "structure": 70, "multimodal": 30, "authority": 35, "technical": 88},
  "crawler_access": "all_allowed",
  "llms_txt": "missing",
  "rsl": "missing",
  "findings": [
    {"id": "GEO-H1", "severity": "high", "title": "Aucune réponse aux questions de prix"},
    {"id": "GEO-H2", "severity": "high", "title": "Avis clients chargés en JS, invisibles pour les robots IA"},
    {"id": "GEO-H3", "severity": "high", "title": "Marque peu présente hors site et facile à confondre (YouTube, Common Crawl, sameAs)"},
    {"id": "GEO-M1", "severity": "medium", "title": "Passages FAQ courts, aucune phrase de définition de l'entité"},
    {"id": "GEO-M2", "severity": "medium", "title": "Agenda des soirées publiques invisible sans JS"},
    {"id": "GEO-M3", "severity": "medium", "title": "Aucune photo réelle sur les pages prestation, vidéo sans VideoObject"},
    {"id": "GEO-M4", "severity": "medium", "title": "Nombre de bars résidents à mettre à jour (3 sur le site, 4 selon le propriétaire)"},
    {"id": "GEO-M5", "severity": "medium", "title": "JSON-LD LocalBusiness incomplet (sameAs, areaServed, hasMap)"},
    {"id": "GEO-M6", "severity": "medium", "title": "Index Bing non vérifié, sitemap sans lastmod"},
    {"id": "GEO-B1", "severity": "low", "title": "llms.txt absent (facultatif, ignoré par Google)"},
    {"id": "GEO-B2", "severity": "low", "title": "FAQPage absent (facultatif)"},
    {"id": "GEO-B3", "severity": "low", "title": "Aucune date de mise à jour ni Last-Modified"},
    {"id": "GEO-B4", "severity": "low", "title": "og:image identique (logo) sur toutes les pages"}
  ]
}
```
