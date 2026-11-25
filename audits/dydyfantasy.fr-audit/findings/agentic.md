# Audit agent readiness - dydyfantasy.fr (25/11/2026)

## Scores
- Agent-UX (heuristique accessibilité, page /contact, statut complet) : **96/100**
- Lighthouse Agentic Browsing : **indisponible** (PSI HTTP 429, quota journalier sans clé API, mobile et desktop). Ne pas convertir en note. Relancer avec une clé Google.
- Ces deux mesures sont distinctes.

## Ce qui fonctionne
- Contenu présent sans JavaScript (772 mots dans le HTML brut) : un agent qui ne rend pas le JS lit le site.
- robots.txt accessible (200), `User-agent: * / Allow: /`, sitemap déclaré.
- 404 réels (pas de soft-404).
- Arbre d'accessibilité : 330 nœuds, 38 éléments interactifs, 5 boutons, 26 liens, 7 repères sémantiques, 0 élément interactif sans nom, 0 faux bouton `div onclick`.
- Formulaire /contact : 8 balises `<label>`, champs nom, entreprise, email, téléphone, type d'événement (select), date, lieu, message, tous avec `id`, types adaptés (email, tel, date), bouton `type="submit"`. Utilisable par un agent.
- Menu mobile avec `aria-label="Ouvrir le menu"`, menus déroulants avec `aria-expanded` et `aria-haspopup`.

## Politique d'accès (robots.txt, groupe `*` uniquement)
- Entraînement IA (GPTBot, ClaudeBot, Google-Extended, CCBot...) : autorisé par défaut, pas de groupe nommé.
- Recherche (Googlebot, Bingbot, OAI-SearchBot, PerplexityBot...) : autorisé.
- Agents déclenchés par l'utilisateur (ChatGPT-User, Claude-User, Perplexity-User) : non bloqués ; certains ignorent robots.txt de toute façon.
- Aucune ligne Content-Signal (brouillon IETF / Cloudflare, vérifié le 2026-09-23).

## Constats

### Critique
Aucun.

### Haute
Aucun.

### Moyenne
Aucun.

### Basse
1. **Une entrée sans libellé sur /contact** : `<input name="_gotcha" class="hidden" tabindex="-1">`. C'est le piège anti-spam Formspree, masqué volontairement. Aucun impact. Correction facultative : ajouter `aria-hidden="true"` (et `autoComplete="off"` en minuscules, la sortie HTML contient `autoComplete`). Coût de 4 points sur le score, pas un défaut réel.
2. **Lighthouse non mesuré** (quota PSI). Obtenir une clé API et relancer pour la fraction X/N.
3. **Politique IA non déclarée** : décision éditoriale. Si le propriétaire veut refuser l'entraînement, ajouter un groupe nommé, par exemple `User-agent: GPTBot` / `ClaudeBot` / `Google-Extended` avec `Disallow: /`, en laissant les robots de recherche. Cela ne garantit rien : Content-Signal est une préférence que Google dit ne pas appliquer.
4. Facultatif et expérimental, **absence n'est pas un défaut** : pas de `llms.txt` (404), pas de Markdown (`Accept: text/markdown` et `/index.md` renvoient du HTML ou 404), pas de WebMCP (brouillon W3C Community Group, WebKit s'y oppose), pas d'`ai-catalog.json`, pas de `/.well-known` agent (api-catalog, agent-card : sans objet pour un site vitrine). Ne pas investir de temps ici ; aucun effet démontré sur la visibilité ou les demandes de devis.

## Comment vérifier
- `claude-seo run agent_ux_check.py https://dydyfantasy.fr/contact --json` : score et champs sans nom.
- `curl -s https://dydyfantasy.fr/contact` : chaque `<input>` visible a un `id` relié à un `<label for>`.
- `curl -s https://dydyfantasy.fr/robots.txt` pour la politique d'accès.
- `claude-seo run lighthouse_agentic.py https://dydyfantasy.fr --strategy both --json` après configuration d'une clé Google.
