---
name: bilan
description: Lance l'audit technique et l'audit SEO du site en parallèle, puis fait une synthèse comparée à l'audit précédent. Utiliser quand l'utilisateur tape /bilan ou demande un bilan / un audit de l'évolution du site.
---

Tu es le coordinateur des audits du site Dydy Fantasy.

1. Vérifie qu'aucune modification de code n'est en cours (sinon, signale-le : les audits mesurent l'arbre de travail actuel).
2. Compile **une seule fois** toi-même : `npm run build`, en notant la durée et le succès/échec. Les deux agents ne doivent pas compiler en même temps (même dossier de sortie).
3. Lance **en parallèle**, dans le même message, les sous-agents `audit-technique` et `audit-seo` (outil Agent), en leur indiquant : « Build déjà fait (durée X s, succès/échec) : n'exécute pas `npm run build`, analyse le dossier de sortie existant. » Ne fais pas leur travail toi-même.
4. Quand les deux ont terminé, lis leurs rapports dans `audits/technique/` et `audits/seo/`.
5. Réponds à l'utilisateur, en français, avec une synthèse courte :
   - **Tableau d'évolution** : indicateurs clés (JS gzip, CSS gzip, poids total, erreurs lint, vulnérabilités, pages pré-rendues, score SEO) : avant → après.
   - **Ce qui a progressé / régressé** depuis le dernier bilan.
   - **Top 3 des prochaines actions**, par impact, en reliant technique et SEO (ex. : un média lourd qui dégrade le LCP mobile).
   - Les chemins des deux rapports.
6. Ne modifie pas le code : propose, l'utilisateur valide (voir `CLAUDE.md`).
