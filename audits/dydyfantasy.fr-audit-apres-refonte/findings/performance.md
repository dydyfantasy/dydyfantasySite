# Audit Performance et Images après refonte : https://dydyfantasy.fr (25/11/2026, après-midi)

## Méthode et limites
- PageSpeed Insights : **429 de nouveau** (quota sans clé), donc ni Lighthouse ni CrUX. Pas de Lighthouse local installé.
- Tout est **mesuré en labo (curl, poids réels des fichiers en ligne, analyse du HTML pré-rendu) ou estimé**. Aucun LCP/INP/CLS n'est mesuré. HTTP/2 non vérifiable (libcurl local sans HTTP/2) : curl a négocié HTTP/1.1.
- Pages : `/`, `/prestations/karaoke`, `/evenements/mariage`, `/dydy-quiz`, `/galerie`.

## Scores estimés (avant -> après)
| Domaine | Matin | Maintenant | Pourquoi |
|---|---|---|---|
| Performance | 84 | **90** | JS -40 %, hero -32 %, events.js différé, GA retiré, préchargement mascotte retiré |
| Images | 66 | **88** | Logos clients 544 Ko -> 20 Ko, galerie avec width/height, tuiles 3:2 |

## Mesures avant -> après
| Mesure | Matin | Maintenant |
|---|---|---|
| TTFB (5 pages) | 0,10 à 0,13 s | 0,10 à 0,14 s (inchangé, excellent) |
| Hero accueil 640 / 1024 / 1536 | 71 / 162 / 314 Ko | **50 / 107 / 200 Ko** (-30 à -37 %) |
| Logos clients (8 fichiers affichés) | 544 Ko (JPG/PNG jusqu'à 172 Ko) | **20 Ko** (WebP, 0,6 à 4,4 Ko chacun) |
| JS modulepreload (accueil, gzip) | ~160 Ko JS+CSS ; 67+44 Ko entry | **94 Ko JS** + 17 Ko CSS (43 fichiers) |
| CSS racine gzip | 10,6 Ko | 15,9 Ko (+5 Ko : styles scènes/pages ; à surveiller) |
| Préchargements d'images accueil | 5 (logos, hero, tête mascotte) | **3** (logo 480, hero, logo hero) |
| `events.js` | script synchrone bloquant | `defer` : OK (reste `no-store`, voulu) |
| Google Analytics | injecté après load | **absent** |
| Galerie `width`/`height` | manquants | **présents** (0 image sans dimensions) |
| Hero mariage / karaoké (LCP image) | n/a | 800 w : 54 / 42 Ko ; 1200 w : 102 / 77 Ko, préchargés avec srcset |
| Leaflet / OSM | n/a | absent du HTML de `/` (chargé à l'approche) : OK |
| Vidéos | 0 dans le DOM | `preload="none"` partout, 7 sur `/`, 3 sur `/dydy-quiz` |

## Core Web Vitals (estimations, non mesurées)
| Page | LCP probable | INP | CLS | Statut |
|---|---|---|---|---|
| `/` mobile | hero 640-1024 (50-107 Ko), ~1,6 à 2,3 s en 4G simulée | bon | faible | Pass probable (marge améliorée) |
| `/` ordinateur | hero 200 Ko, ~1,0 à 1,5 s | bon | faible | Pass |
| `/prestations/karaoke`, `/evenements/mariage` | photo 3:2 préchargée (42-102 Ko), ~1,3 à 2,0 s | bon | faible | Pass probable |
| `/dydy-quiz` | texte H1 / poster, < 2 s | bon (3 vidéos à la demande) | faible | Pass probable |
| `/galerie` | texte ou 1re photo lazy | bon | faible (dimensions ajoutées) | Pass probable |

## Constats restants (par priorité)
### Moyenne
1. **Doublon de préchargement du logo** : `logo-texte-480` (en-tête) est préchargé, puis le logo du hero en srcset 480/640/960 aussi (jusqu'à ~70 Ko sur desktop), en concurrence avec le hero. Garder uniquement le preload du hero, ou mettre `fetchPriority="low"` sur le logo. Vérifier : onglet Réseau, le hero démarre en premier.
2. **43 à 44 modulepreload par page** (dont ~22 mini-chunks d'icônes de 0,4 à 1,2 Ko). Sans HTTP/2 confirmé chez OVH, c'est autant d'allers-retours. Regrouper les icônes (`manualChunks`) ; vérifier HTTP/2 dans l'onglet Réseau de Chrome (colonne Protocole = h2). Cible < 15 requêtes JS.
3. **Polices Sora non préchargées** (3 graisses ~44 Ko, découvertes après le CSS) : risque de décalage de texte au swap. Précharger 400 et 800 (`crossorigin`), `size-adjust` sur la police de repli.
4. **Vidéos des tuiles de l'accueil sans `poster`** dans le HTML (7 `<video>` ; seule la vidéo de présentation en a un). Si l'image d'attente n'est pas posée côté client, la tuile reste noire. Vérifier visuellement sur téléphone. Les mp4 ne sont pas téléchargés avant affichage (bon).

### Basse
5. 4 images de tuiles « Vos événements » sans `width`/`height` sur l'accueil, lazy ; risque CLS faible car le conteneur flyer a un ratio. Ajouter les dimensions par sécurité.
6. Hero 1536 encore à 200 Ko : AVIF viserait ~120 Ko (gain desktop seulement).
7. HTML `max-age=0` sans ETag/Last-Modified visible (pas de 304 aux visites répétées).
8. CSS racine +5 Ko gzip depuis ce matin ; surveiller si les styles de scènes ne devraient pas être chargés par page.
9. Pas de consentement à gérer côté analytics tant que GA est absent ; si un outil de mesure est ajouté, le charger après le load.

## Comment vérifier
- PSI avec clé API (`/seo google setup`) sur les 5 pages, mobile et ordinateur, puis CrUX Vis (cruxvis.withgoogle.com) : avec le trafic local, l'origine peut manquer de données ; attendre 28 jours pour les effets de la mise en ligne.
- Chrome DevTools > Performance (throttling 4x CPU + Fast 4G) : lire LCP et ses 4 sous-parties, CLS, et interagir pour l'INP.
- Poids : `curl -sI` sur les fichiers `/assets/hero-scene-*.webp` et logos (valeurs ci-dessus) ; Réseau > Protocole pour h2.
- Test réel sur un téléphone moyen de gamme pour les vidéos de tuiles et la carte de l'agenda.
