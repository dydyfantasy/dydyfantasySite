import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import LiveLeaderboard from "../led/LiveLeaderboard";
import "../../css/scenes.css";

// Page Entreprise : besoins en post-it sur un paperboard, formats en « ordre du jour »
// de réunion, puis un classement d’équipes en direct (démo, équipes fictives).
const NOTES = ["#ffe066", "#ff9fd2", "#8ae9ff", "#b6ff9c"];
const TILTS = ["-3deg", "2deg", "-1.5deg", "3deg"];
const TEAMS = [
	{ name: "Service Compta", emoji: "📊", color: "var(--cyan)", score: 1220 },
	{ name: "Team Marketing", emoji: "🚀", color: "var(--pink)", score: 1160 },
	{ name: "Les RH", emoji: "🤝", color: "var(--gold)", score: 1050 },
	{ name: "Équipe IT", emoji: "💻", color: "#7cff6b", score: 940 },
	{ name: "La Direction", emoji: "👔", color: "#8b5cf6", score: 870 },
];

export default function EntrepriseScene({ points, pointsTitle, formats, formatsTitle }) {
	return (
		<>
			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center />
					<ScrollReveal className="mt-10">
						<div className="paperboard rounded-2xl p-6 md:p-10">
							<p aria-hidden="true" className="paperboard-title">Brief événement</p>
							<ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{points.map((p, i) => (
									<li key={p.title} className="postit" style={{ "--note": NOTES[i % 4], "--tilt": TILTS[i % 4] }}>
										<p.icon aria-hidden="true" className="h-7 w-7" />
										<h3 className="mt-2 text-lg font-extrabold leading-tight">{p.title}</h3>
										<p className="mt-2 text-sm">{p.text}</p>
									</li>
								))}
							</ul>
						</div>
					</ScrollReveal>
				</div>
			</section>

			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-4xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent} center />
					<ScrollReveal className="mt-10">
						<div className="slide overflow-hidden rounded-2xl">
							<div className="slide-bar flex items-center justify-between px-5 py-3 text-sm font-bold">
								<span>Séminaire · Ordre du jour</span>
								<span aria-hidden="true" className="flex gap-1.5">
									<i className="slide-dot" />
									<i className="slide-dot" />
									<i className="slide-dot" />
								</span>
							</div>
							<ol className="space-y-6 p-6 md:p-10">
								{formats.map((f, i) => (
									<li key={f.title} className="flex gap-4">
										<span aria-hidden="true" className="agenda-check" style={{ "--i": i }}>
											✓
										</span>
										<div>
											<h3 className="text-lg font-extrabold md:text-xl">
												<span className="mr-2 text-[var(--cyan)]">{String(i + 1).padStart(2, "0")}.</span>
												{f.title}
											</h3>
											<p className="mt-1.5 text-white/75">{f.text}</p>
										</div>
									</li>
								))}
							</ol>
						</div>
					</ScrollReveal>
				</div>
			</section>

			<section aria-labelledby="classement" className="px-4 py-16">
				<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
					<ScrollReveal>
						<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--pink)]">Team building</p>
						<h2 id="classement" className="mt-3 text-3xl font-extrabold md:text-4xl">
							Qui va gagner : <span className="text-[var(--cyan)]">la Compta ou le Marketing ?</span>
						</h2>
						<p className="mt-4 text-white/75">
							Avec Dydy Quiz, mon appli maison, chaque collaborateur joue depuis son smartphone : quiz en
							équipes, sondages en direct, et un classement qui s’affiche sur grand écran. Rien à installer.
						</p>
						<Link to="/dydy-quiz" className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] underline underline-offset-4">
							Découvrir Dydy Quiz
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
					</ScrollReveal>
					<ScrollReveal variant="right">
						<LiveLeaderboard teams={TEAMS} caption="Démo : vos équipes jouent sur leur téléphone, le classement s’affiche en direct." />
					</ScrollReveal>
				</div>
			</section>
		</>
	);
}
