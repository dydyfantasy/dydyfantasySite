import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

// Chiffres réels donnés par Dydy (novembre 2026) — à mettre à jour avec l'activité.
const STATS = [
	{ value: "12 à 15", label: "soirées par mois", color: "var(--pink)" },
	{ value: "150+", label: "soirées animées", color: "var(--cyan)" },
	{ value: "200+", label: "invités sur un même événement", color: "var(--gold)" },
	{ value: "3", label: "bars où je suis animateur résident", color: "#7cff6b" },
];

// scoreboard : version « tableau des scores » de l’accueil (panneau LED, chiffres qui défilent)
export default function LedStats({ withStrength = true, scoreboard = false }) {
	return (
		<section aria-label="Dydy Fantasy en chiffres" className="px-4 py-12">
			<div className="mx-auto max-w-6xl">
				<div className={scoreboard ? "scoreboard rounded-3xl px-4 pb-8 pt-5 md:px-8" : ""}>
					{scoreboard && (
						<p aria-hidden="true" className="mb-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
							<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" />
							Tableau des scores
						</p>
					)}
					<ul className={`grid grid-cols-2 gap-6 text-center md:grid-cols-4 ${scoreboard ? "scoreboard-grid" : ""}`}>
						{STATS.map((s, i) => (
							<ScrollReveal as="li" key={s.label} variant="zoom" delay={i * 90} style={{ "--c": s.color }}>
								<p className="stat-value text-4xl font-extrabold tabular-nums md:text-5xl">
									{scoreboard ? <CountUp value={s.value} /> : s.value}
								</p>
								<p className="mt-1 text-sm text-white/70 md:text-base">{s.label}</p>
							</ScrollReveal>
						))}
					</ul>
				</div>
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
