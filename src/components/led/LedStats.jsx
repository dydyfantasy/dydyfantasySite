import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

// Chiffres réels donnés par Dydy (novembre 2026) — à mettre à jour avec l'activité.
const STATS = [
	{ value: "12 à 15", label: "soirées par mois", color: "var(--pink)" },
	{ value: "150+", label: "soirées animées", color: "var(--cyan)" },
	{ value: "200+", label: "invités sur un même événement", color: "var(--gold)" },
	{ value: "4", label: "bars où je suis animateur résident", color: "#7cff6b" },
];

function Strength() {
	return (
		<ScrollReveal className="mx-auto mt-8 max-w-3xl text-center text-lg text-white/85">
			Quiz, blind test, karaoké et DJ <strong className="text-white">dans la même soirée</strong> : un seul
			interlocuteur, du premier jeu à la dernière danse.
		</ScrollReveal>
	);
}

// band : version de l’accueil, bande inclinée en dégradé rose → violet → cyan,
// chiffres géants qui défilent jusqu’à leur valeur (valeur réelle dans le HTML).
export default function LedStats({ withStrength = true, band = false }) {
	if (band) {
		return (
			<section aria-label="Dydy Fantasy en chiffres" className="py-14">
				<div className="stats-band">
					<ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 text-center md:grid-cols-4 md:py-12">
						{STATS.map((s, i) => (
							<ScrollReveal as="li" key={s.label} variant="zoom" delay={i * 90}>
								<p className="band-value text-5xl font-extrabold leading-none tracking-tight tabular-nums md:text-7xl">
									<CountUp value={s.value} />
								</p>
								<p className="mt-2 text-sm font-bold text-[#05040a] md:text-base">{s.label}</p>
							</ScrollReveal>
						))}
					</ul>
				</div>
				{withStrength && (
					<div className="px-4">
						<Strength />
					</div>
				)}
			</section>
		);
	}

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
				{withStrength && <Strength />}
			</div>
		</section>
	);
}
