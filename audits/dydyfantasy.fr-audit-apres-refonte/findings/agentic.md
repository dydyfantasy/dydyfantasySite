# Audit agent readiness - dydyfantasy.fr (25/11/2026, après refonte)

## Scores
- Agent-UX (heuristique, /contact, complet) : **96/100 -> 96/100** (inchangé). Accueil : 100. /mentions-legales : 100.
- Lighthouse Agentic Browsing : **indisponible** (PSI HTTP 429, mobile et desktop). Pas de conversion en note.
- Les deux mesures sont distinctes.

## Comparaison
- Contenu sans JavaScript : 772 -> 858 mots (accueil), pass.
- robots.txt 200, groupe `*` autorisant tout ; vrais 404 : inchangés.
- /contact : 355 nœuds, 42 interactifs, 0 sans nom. Les nouvelles options (DJ, Anniversaire, Animation micro / speaker) sont dans le select existant : aucune régression.
- /mentions-legales : accessible, 100/100.

## Politique d'accès (robots.txt, groupe `*`)
- Entraînement IA : autorisé par défaut (aucun groupe nommé).
- Recherche : autorisé.
- Agents déclenchés par l'utilisateur : non bloqués (Claude-User respecte robots.txt ; les autres l'ignorent souvent).
- Content-Signal : absent (brouillon, vérifié le 2026-09-23).

## Constats
Critique / haute / moyenne : aucun.

Basse :
1. Champ piège Formspree `_gotcha` sans libellé (-4). Voulu, sans impact. Facultatif : `aria-hidden="true"`.
2. Lighthouse non mesuré : clé API Google nécessaire pour la fraction X/N.
3. Politique IA non déclarée : choix éditorial, non contraignant.

Expérimental, absence sans défaut (opportunités, pas de gain promis) : llms.txt (404), Markdown, WebMCP (brouillon W3C), ai-catalog.json (brouillon), `/.well-known`. Inutile pour un site vitrine local : à ignorer.

Rien de lié aux liens vers la fiche Google : aucun problème détecté.
