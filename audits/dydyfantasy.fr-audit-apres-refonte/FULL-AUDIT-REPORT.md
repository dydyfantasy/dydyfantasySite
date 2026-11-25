# Audit SEO complet — dydyfantasy.fr après la refonte

**Date :** 25/11/2026, après la mise en ligne de la v3 (commit `33bc3a4`) · **Comparaison :** audit du matin (`../dydyfantasy.fr-audit/`, site d'avant)
**Limites :** pas de Search Console/CrUX/PageSpeed (quota sans clé) : performance estimée ; recherches Google (SERP) et annuaires repris du matin.

## Note de santé SEO : 72 → **82 / 100**

| Catégorie | Poids | Matin | Après | Détail |
|---|---|---|---|---|
| SEO technique | 22 % | 80 | **91** | [technical.md](findings/technical.md) |
| Qualité des contenus | 23 % | 62 | **73** | [content.md](findings/content.md) |
| On-page | 20 % | 76 | **81** | [content.md](findings/content.md) |
| Données structurées | 10 % | 68 | **79** | [schema.md](findings/schema.md) |
| Performance (estimée) | 10 % | 84 | **90** | [performance.md](findings/performance.md) |
| Prêt pour la recherche IA | 10 % | 65 | **72** | GEO 66 (80 %) + agents 96 (20 %) |
| Images | 5 % | 66 | **88** | [performance.md](findings/performance.md) |

Hors calcul : SEO local 64 → **78**, expérience de recherche (SXO) 49 → **69**, sitemap 90 → **96**, agents 96 → 96, liens entrants non notés (inchangé).
Comparaison drift (15 pages, avant/après mise en ligne) : **0 changement critique** ; titles, H1, canonicals et indexabilité inchangés.

## Corrections apportées aux rapports des agents
- `performance.md` suppose qu'OVH n'a pas HTTP/2 : faux, Lighthouse a mesuré `h2` sur toutes les requêtes (25/11). Les ~43 petits fichiers JS ne posent pas de problème.
- Le préchargement du grand logo de l'accueil est voulu : il est visible dès l'arrivée.
- La note « 4,9 · plus de 70 avis » n'est pas « écrite en dur sur 10 pages » : elle vient d'une source unique (`src/data/avis.js`).

## Ce qui reste (synthèse)
**Corrections rapides côté site (sans décision à prendre) :**
1. Image d'attente des extraits vidéo absente du HTML pré-rendu (cadres noirs sans JavaScript et avant chargement) — accueil et « L'ambiance, en vrai ».
2. Bandeau des références écrit deux fois dans le HTML (copie servant à la boucle) : ~220 mots dupliqués par page.
3. « Décathlon » → la marque s'écrit « Decathlon ».
4. Données structurées : bloc `WebSite`, adresse Facebook avec `www`, Mariages.net dans `sameAs`.
5. Champ anti-spam du formulaire sans libellé (`aria-hidden`).

**À valider avec le propriétaire (textes) :**
6. Zone d'intervention formulée de 3 façons (« 50 km autour de Fonsorbes », « autour de Toulouse », « partout en Occitanie »).
7. FAQ courtes : enrichir avec des faits déjà validés (déplacement offert 50 km, 200+ invités) ; question « Comment est établi le devis ? » sans montant.
8. Entreprise : infos pratiques plus précises (taille de groupe, formats) — sans durée ni prix (décision du propriétaire).
9. Bloc « En pratique » identique sur 7 pages : à garder (infos réelles) mais pourrait recevoir une ligne propre à chaque page.

**Hors site (propriétaire) :**
10. Agenda : aucune date après le 28/11 — ajouter les dates de décembre.
11. Fiche Google : publier Lavaur et Giroussens ; avis réguliers (lien après chaque soirée) ; un avis d'anniversaire.
12. Bing Webmaster Tools (alimente ChatGPT/Copilot), Pages Jaunes, Apple Business Connect, Mariages.net (avis).
13. Présence de marque hors site : YouTube (extraits de soirées), liens depuis les bars clients.

**Mi-janvier 2027 (après la période de mesure) :** titles (Anniversaire « adulte », DJ sans « mariage », Tarn), séparation DJ / Mariage, comparaison Search Console.
