import ScrollReveal from "./ScrollReveal";

// Chiffres réels donnés par Dydy (novembre 2026) — à mettre à jour avec l'activité.
const STATS = [
	{ value: "12 à 15", label: "soirées par mois", color: "var(--pink)" },
	{ value: "+150", label: "soirées animées", color: "var(--cyan)" },
	{ value: "200+", label: "invités sur un même événement", color: "var(--gold)" },
	{ value: "3", label: "bars où je suis animateur résident", color: "#7cff6b" },
];

export default function LedStats({ withStrength = true }) {
	return (
		<section aria-label="Dydy Fantasy en chiffres" className="px-4 py-12">
			<div className="mx-auto max-w-6xl">
				<ul className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
					{STATS.map((s, i) => (
						<ScrollReveal as="li" key={s.label} variant="zoom" delay={i * 90} style={{ "--c": s.color }}>
							<p className="stat-value text-4xl font-extrabold md:text-5xl">{s.value}</p>
							<p className="mt-1 text-sm text-white/70 md:text-base">{s.label}</p>
						</ScrollReveal>
					))}
				</ul>
				{withStrength && (
					<ScrollReveal className="mx-auto mt-8 max-w-3xl text-center text-lg text-white/85">
						Quiz, blind test, karaoké et DJ <strong className="text-white">dans la même soirée</strong> : un
						seul interlocuteur, du premier jeu à la dernière danse.
					</ScrollReveal>
				)}
			</div>
		</section>
	);
}
