# Audit GEO après la mise en ligne de la refonte : visibilité dans les moteurs de réponse IA (dydyfantasy.fr)

Date : 25/11/2026 (après-midi), après la mise en ligne du commit `33bc3a4`.
Périmètre : les 15 pages du sitemap, plus /privacy et /mentions-legales.
Sources :
- `crawl.json` ;
- nouvelle récupération du HTML brut des 15 pages, sans exécution du JS, avec le user-agent OAI-SearchBot ;
- tests des user-agents PerplexityBot, Claude-SearchBot, bingbot et Googlebot sur /evenements/mariage ;
- robots.txt, sitemap.xml et en-têtes HTTP.

Je n'ai pas refait les recherches de marque hors du site (elles avaient été bloquées ce matin). Leurs conclusions sont reprises du rapport précédent : `audits/dydyfantasy.fr-audit/findings/geo.md`.

## Score « Prêt pour la recherche IA » : 66 / 100 (ce matin : 57)

| Dimension | Poids | Avant | Après | Points | Ce qui a changé |
|---|---|---|---|---|---|
| Citabilité des passages | 25 % | 55 | 63 | 15,8 | Avis cités mot pour mot, bloc « En pratique » avec des faits précis, phrase qui définit l'entité sur l'accueil, FAQ bars qui nomme les 4 établissements |
| Lisibilité structurelle | 20 % | 70 | 76 | 15,2 | Titres de section propres à chaque page, bloc « En pratique » en H2 + 4 H3 |
| Contenu multimédia | 15 % | 30 | 55 | 8,3 | Photo réelle sur chaque page prestation et événement, galerie de 25+ photos avec lieu dans le texte alternatif, `VideoObject` sur /dydy-quiz, `og:image` photo |
| Autorité et signaux de marque | 20 % | 35 | 45 | 9,0 | Avis signés (prénom + initiale), lien vers la fiche Google, fiche Google dans `sameAs`, lien Mariages.net, mentions légales. Rien de nouveau hors du site. |
| Accessibilité technique | 20 % | 88 | 91 | 18,2 | `lastmod` dans le sitemap. L'agenda reste chargé par JS et Bing n'est toujours pas vérifié. |
| **Total** | | **57** | **≈ 66** | | |

Le score progresse de 9 points. Le site lui-même est maintenant solide. Ce qui limite encore le score se trouve surtout **hors du site** (YouTube, liens entrants, index Bing) et dans la **brièveté des réponses de FAQ**.

### Scores par plateforme (estimations, pas des mesures)

| Plateforme | Avant | Après | Raison |
|---|---|---|---|
| Google AI Overviews / AI Mode | 60 | 67 | Avis et note 4,9 dans le HTML, fiche Google reliée (`sameAs` + liens), photos réelles. Pour les requêtes locales, la fiche Google reste le premier signal. |
| ChatGPT Search | 45 | 52 | Les preuves sont maintenant lisibles sans JS. La présence dans l'index Bing et les mentions hors du site restent inconnues ou faibles. |
| Perplexity | 45 | 53 | Passages factuels plus nombreux (rayon de 50 km, matériel, 4 bars nommés, avis). Toujours pas de chiffre de prix, ce qui est un choix assumé. |
| Bing Copilot | 45 | 50 | `lastmod` ajouté, mais aucune vérification Bing Webmaster visible et pas d'IndexNow. |

## Accès des robots IA (inchangé, conforme)

- **robots.txt** : `User-agent: * / Allow: /` + `Sitemap:`. Les 15 pages renvoient 200 à OAI-SearchBot. PerplexityBot, Claude-SearchBot, bingbot et Googlebot reçoivent aussi 200.
- **Directives** : aucun `X-Robots-Tag`. Seules /privacy et /mentions-legales sont en `noindex`, ce qui est cohérent.
- **Robots de recherche** (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, bingbot, Applebot) : autorisés.
- **Robots d'entraînement** (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, cohere-ai) : autorisés via `*`.
  - Les bloquer n'aurait aucun effet sur les citations : Google-Extended ne joue pas sur AI Overviews (ce sont les règles de Googlebot qui comptent) et Applebot-Extended ne joue pas sur Siri ou Spotlight.
  - Rien à changer.
- **llms.txt** : absent (404). Il est facultatif et **sans effet sur Google**. Ce n'est pas une priorité.
- **RSL** : absent (facultatif).

## Avant → après : constats de ce matin

| Constat de ce matin | Statut | Preuve dans le HTML en ligne |
|---|---|---|
| H2 Avis invisibles sans JS | **Corrigé en grande partie** | Un avis Google cité mot pour mot (`<blockquote>`, prénom + initiale) sur Blind test, Karaoké, DJ, Sur mesure, Mariage, Entreprise et Bars. « 4,9 /5 · plus de 70 avis Google » sous chaque hero. Liens « Voir tous les avis » et « Laisser un avis » vers `g.page`. Pas de balisage `Review` sur ses propres avis (bon choix). |
| H3 / M5 `sameAs` et JSON-LD | **Corrigé en partie** | `sameAs` = Facebook, Instagram et `https://g.page/r/CdpLaKDiVThEEBM`. `@type` `EntertainmentBusiness`. `areaServed` liste 20 villes. Lien Mariages.net présent sur /evenements/mariage, mais **absent de `sameAs`**. Ni `hasMap`, ni `knowsAbout`. |
| M1 Aucune phrase de définition | **Corrigé** | Accueil : « Mais c'est qui Dydy Fantasy ? Animateur et DJ basé à Fonsorbes, à l'ouest de Toulouse. Résident dans 4 bars… ». /qui-suis-je ouvre aussi sur une définition (le H1 reste une accroche). |
| M3 Aucune photo réelle, pas de `VideoObject` | **Corrigé en grande partie** | Une photo réelle par page de prestation ou d'événement. /galerie : 28 images. `VideoObject` sur /dydy-quiz (nom, `uploadDate` 2026-11-25, durée PT1M5S, `contentUrl`, `thumbnailUrl`). `og:image` = photo `partage-dydy-fantasy.jpg`. |
| M4 « 3 bars » au lieu de 4 | **Corrigé** | « 4 bars » sur l'accueil et /qui-suis-je (meta comprise). La FAQ bars nomme les 4 établissements. |
| M6 Sitemap sans `lastmod` | **Corrigé en partie** | `lastmod` 2026-11-25 sur les 15 URL. Toujours aucune balise `msvalidate.01` (la vérification Bing peut passer par DNS ou par fichier : à confirmer). |
| B4 `og:image` = logo | **Corrigé en partie** | L'image de partage est une photo, mais la même sur toutes les pages. |
| H1 Pas de prix | **Choix du propriétaire, respecté** | Le bloc « En pratique » répond déjà à « que comprend le devis » : déplacement offert dans un rayon de 50 km, matériel fourni, devis gratuit tout compris, réponse sous 24 h. |
| M2 Agenda invisible sans JS | **Inchangé** | Le HTML ne contient que le titre « Prochaines soirées… ». C'est une conséquence assumée de la contrainte « modifiable sans recompiler ». |

## Constats restants

### Haute

**R1. Marque peu présente hors du site** (repris de ce matin, non revérifié)
- Constats de ce matin : aucune chaîne YouTube, domaine absent de Common Crawl (très peu de liens entrants), risque de confusion avec d'autres « Dydy ».
- Le site est désormais bien relié à la fiche Google. La prochaine marge de progression est hors du site.
- Correction :
  - publier la vidéo « C'est quoi Dydy Quiz ? » et quelques extraits sur une chaîne YouTube « Dydy Fantasy », puis ajouter cette chaîne à `sameAs` ;
  - obtenir des liens nominatifs des 4 bars résidents et des comités des fêtes ;
  - utiliser partout la même formule : « Dydy Fantasy, animateur et DJ à Toulouse ».
- Effort : continu.

### Moyenne

**R2. Réponses de FAQ encore courtes (15 à 50 mots, médiane d'environ 21)**
- Exemples : « Où intervenez-vous ? » (18 mots, répété sur 5 pages), « Les jeux sont-ils adaptés à tous les âges ? » (15 mots).
- Les réponses sont directes, mais elles contiennent peu de faits que les autres pages n'ont pas déjà.
- La réponse sur la zone n'en profite pas : elle ne reprend même pas « déplacement offert dans un rayon de 50 km », qui figure juste au-dessus.
- Correction : enrichir 1 ou 2 réponses par page avec des faits réels déjà connus. Exemples :
  - zone : « déplacement offert jusqu'à 50 km autour de Fonsorbes : Toulouse, Colomiers, Blagnac, Muret, L'Isle-Jourdain… » ;
  - nombre d'invités : « événements de plus de 200 invités » ;
  - outil : « appli Dydy Quiz utilisée dans plus de 150 soirées ».
- Option compatible avec « pas de prix » : une question « Comment est établi le devis ? » qui liste les critères réels (date, lieu, nombre d'invités, formats combinés), **sans aucun montant**.
- Ne pas ajouter de délai de réservation ni de durée chiffrée (choix du propriétaire).
- Effort : 1 à 2 h.

**R3. JSON-LD de l'entreprise encore incomplet**
- Manquent :
  - Mariages.net dans `sameAs` (le lien existe pourtant sur la page mariage) ;
  - `hasMap` (URL de la fiche Google) ;
  - `knowsAbout` (blind test, quiz, karaoké, DJ, animation de mariage).
- Les `Service` n'ont ni `image` ni `hasOfferCatalog` côté entreprise.
- Effet : liaison d'entité plus nette pour Google et Bing. L'effet est modeste, mais le coût est faible.
- Effort : 20 min dans `root.jsx`.

**R4. Bing (ChatGPT, Copilot) toujours non vérifié**
- Correction : importer le site depuis Search Console dans Bing Webmaster Tools, soumettre le sitemap et vérifier l'indexation des 15 URL. IndexNow est facultatif.
- Effort : 30 min, une seule fois.

**R5. Extraits vidéo peu exploitables par les robots**
- Les `<video>` des pages (karaoké, bars, etc.) n'ont ni `src`/`<source>` ni `poster` dans le HTML pré-rendu : la source est ajoutée par JS à l'approche. Seuls leur `aria-label` et les images d'aperçu sont lisibles.
- Un seul `VideoObject` sur tout le site, celui de /dydy-quiz.
- C'est acceptable pour la performance. Le vrai levier vidéo reste YouTube (R1).
- Effort : —

### Basse

- **B1. Textes alternatifs tirés des noms de fichiers**, sans accents ni majuscules : « karaoke chanteuse au micro soiree dydy fantasy », « mariage premiere danse ».
  - Ils sont lisibles mais peu naturels. Renommer les fichiers avec des accents, ou garder ainsi : faible enjeu.
- **B2. Pas d'avis cité sur /evenements/anniversaire**, ni dans le HTML de l'accueil : la section « Ils en parlent » n'affiche que la note et les liens, les textes viennent du widget JS. Un avis réel d'anniversaire, s'il existe, compléterait.
- **B3. `og:image` identique sur toutes les pages** : une photo propre à chaque page améliorerait les aperçus partagés. L'effet sur les IA est faible.
- **B4. Pas d'en-tête `Last-Modified`** sur les pages HTML (le `lastmod` du sitemap compense en partie).
- **B5. llms.txt absent** : facultatif, ignoré par Google.

## Les 5 changements les plus utiles

1. **Chaîne YouTube « Dydy Fantasy »** avec la vidéo Dydy Quiz et de courts extraits titrés lieu + ville, puis l'ajouter à `sameAs` (R1). Effort : 2 h, puis continu.
2. **Bing Webmaster Tools** : import depuis Search Console, sitemap, contrôle de l'indexation (R4). Effort : 30 min.
3. **Enrichir les réponses de FAQ** avec des faits réels déjà validés (50 km offerts, 200+ invités, 150+ soirées), plus une question « Comment est établi le devis ? » sans montant (R2). Effort : 1 à 2 h.
4. **Compléter le JSON-LD** : Mariages.net dans `sameAs`, `hasMap`, `knowsAbout` (R3). Effort : 20 min.
5. **Liens entrants nominatifs** des bars résidents et des comités des fêtes (pages Facebook des événements, sites des établissements) (R1). Effort : continu.

## Comment vérifier

- **Accès des robots** :
  - `curl -s -o /dev/null -w "%{http_code}" -A "OAI-SearchBot/1.0" https://dydyfantasy.fr/evenements/mariage` doit renvoyer 200 (de même avec PerplexityBot et Claude-SearchBot) ;
  - dans les logs bruts OVH, vérifier les passages réels de ces robots.
- **Preuves lisibles sans JS** : `curl -s https://dydyfantasy.fr/evenements/mariage | grep -c "blockquote"` doit être ≥ 1. Même chose pour « en pratique » et « 4,9 ».
- **Données structurées** : passer l'accueil, /dydy-quiz (`VideoObject`) et /evenements/mariage dans le Rich Results Test et sur validator.schema.org.
- **Bing** : outil d'inspection d'URL de Bing Webmaster Tools sur les 15 URL.
- **Citations, une fois par mois** :
  - poser les mêmes questions dans ChatGPT (recherche activée), Perplexity, Copilot et Google AI Mode, par exemple « animateur blind test Toulouse », « DJ mariage Toulouse », « karaoké bar Colomiers », « qui est Dydy Fantasy ? » ;
  - noter si dydyfantasy.fr ou la fiche Google est cité ;
  - comparer avec un premier relevé à faire dans 2 à 4 semaines, le temps que les robots repassent.
- **Search Console** : impressions et clics sur les requêtes non liées à la marque, comparés à la base de novembre 2026. Le trafic des AI Overviews y est inclus dans la recherche web.

## Limites

- Les mentions hors du site (YouTube, Reddit, presse, annuaires) n'ont pas été revérifiées : ce sont les conclusions de ce matin.
- Pas d'outil DataForSEO : les scores par plateforme sont des estimations.
- La présence dans l'index Bing est inconnue.
- Les tests de user-agent partent de mon adresse IP : un blocage par IP côté hébergeur ne peut pas être exclu.

## Données structurées (catégorie « AI Search Readiness » pour audit-data.json)

```json
{
  "category": "AI Search Readiness",
  "score": 66,
  "previous_score": 57,
  "dimensions": {"citability": 63, "structure": 76, "multimodal": 55, "authority": 45, "technical": 91},
  "platforms": {"google_aio": 67, "chatgpt": 52, "perplexity": 53, "bing_copilot": 50},
  "crawler_access": "all_allowed",
  "llms_txt": "missing",
  "rsl": "missing",
  "resolved": ["GEO-M1", "GEO-M4"],
  "partially_resolved": ["GEO-H2", "GEO-H3", "GEO-M3", "GEO-M5", "GEO-M6", "GEO-B4"],
  "owner_decision": ["GEO-H1"],
  "findings": [
    {"id": "GEO-R1", "severity": "high", "title": "Marque peu présente hors site (YouTube, liens entrants) - non revérifié"},
    {"id": "GEO-R2", "severity": "medium", "title": "Réponses FAQ courtes (médiane ~21 mots), peu de faits propres"},
    {"id": "GEO-R3", "severity": "medium", "title": "JSON-LD : Mariages.net absent de sameAs, pas de hasMap ni knowsAbout"},
    {"id": "GEO-R4", "severity": "medium", "title": "Index Bing non vérifié (ChatGPT, Copilot)"},
    {"id": "GEO-R5", "severity": "medium", "title": "Extraits vidéo sans source dans le HTML, un seul VideoObject"},
    {"id": "GEO-M2", "severity": "medium", "title": "Agenda invisible sans JS (contrainte assumée)"},
    {"id": "GEO-B1", "severity": "low", "title": "Textes alternatifs tirés des noms de fichiers, sans accents"},
    {"id": "GEO-B2", "severity": "low", "title": "Pas d'avis cité sur /evenements/anniversaire ni dans le HTML de l'accueil"},
    {"id": "GEO-B3", "severity": "low", "title": "og:image identique sur toutes les pages"},
    {"id": "GEO-B4", "severity": "low", "title": "Pas d'en-tête Last-Modified"},
    {"id": "GEO-B5", "severity": "low", "title": "llms.txt absent (facultatif, sans effet sur Google)"}
  ]
}
```
