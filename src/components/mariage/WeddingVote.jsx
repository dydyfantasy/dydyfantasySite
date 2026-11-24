import { useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ScrollReveal from "../led/ScrollReveal";

// Mini-démo d’un sondage Dydy Quiz (page Mariage) : le visiteur vote, « la salle » répond,
// les barres de résultats se remplissent et des cœurs s’envolent. Résultats fictifs (démo, annoncée).
const POLL = {
	question: "Où les mariés se sont-ils rencontrés ?",
	answers: [
		{ letter: "A", label: "En soirée", color: "#ff2fae", votes: 38 },
		{ letter: "B", label: "Au travail", color: "#ffc93c", votes: 21 },
		{ letter: "C", label: "Sur une appli", color: "#ff7ac8", votes: 27 },
		{ letter: "D", label: "Au karaoké 🎤", color: "#7cff6b", votes: 14 },
	],
};

// Cœurs projetés autour du bouton choisi (positions fixes)
const HEARTS = Array.from({ length: 10 }, (_, i) => {
	const a = (i / 10) * Math.PI * 2;
	return { x: Math.round(Math.cos(a) * 70), y: Math.round(Math.sin(a) * 45) - 30, r: (i * 37) % 60 - 30 };
});

export default function WeddingVote() {
	const [picked, setPicked] = useState(null);
	const total = POLL.answers.reduce((n, a) => n + a.votes, 0) + 1; // + le vote du visiteur

	return (
		<section aria-labelledby="sondage" className="px-4 py-16">
			<div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
				<ScrollReveal>
					<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--pink)]">À vous de jouer</p>
					<h2 id="sondage" className="mt-3 text-3xl font-extrabold md:text-4xl">
						Vos invités votent, <span className="script-accent">la salle s’enflamme</span>
					</h2>
					<p className="mt-4 text-white/75">
						Quiz des mariés, sondages, Challenge Photo : avec Dydy Quiz, mon appli maison, chaque invité joue
						depuis son téléphone et les résultats s’affichent en direct sur grand écran. Essayez !
					</p>
					<Link to="/dydy-quiz" className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--gold)] underline underline-offset-4">
						Découvrir Dydy Quiz
						<ArrowRightIcon className="h-4 w-4" />
					</Link>
				</ScrollReveal>

				<ScrollReveal variant="right">
					<div className="vote-card neon-card rounded-3xl p-5 md:p-7" style={{ "--c": "var(--gold)" }}>
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
							<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
							Sondage en direct · démo
						</p>
						<p className="mt-3 text-xl font-extrabold md:text-2xl">{POLL.question}</p>
						<div className="mt-5 space-y-3">
							{POLL.answers.map((a) => {
								const votes = a.votes + (picked === a.letter ? 1 : 0);
								const pct = Math.round((votes / total) * 100);
								return (
									<button
										key={a.letter}
										type="button"
										aria-pressed={picked === a.letter}
										disabled={picked !== null}
										onClick={() => setPicked(a.letter)}
										style={{ "--c": a.color, "--p": picked ? pct / 100 : 0 }}
										className={`vote-btn relative flex w-full items-center gap-3 overflow-hidden rounded-2xl p-2.5 text-left font-extrabold ${
											picked === a.letter ? "is-picked" : ""
										}`}>
										<span aria-hidden="true" className="vote-fill" />
										<span className="vote-letter relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">{a.letter}</span>
										<span className="relative flex-1">{a.label}</span>
										{picked && <span className="relative text-sm tabular-nums">{pct} %</span>}
										{picked === a.letter && (
											<span aria-hidden="true" className="vote-hearts">
												{HEARTS.map((h, i) => (
													<i key={i} style={{ "--x": `${h.x}px`, "--y": `${h.y}px`, "--r": `${h.r}deg`, "--i": i }}>
														♥
													</i>
												))}
											</span>
										)}
									</button>
								);
							})}
						</div>
						<p className="mt-4 min-h-[1.5rem] text-sm font-semibold" aria-live="polite">
							{picked ? (
								<span className="text-[var(--gold)]">Merci pour votre vote ! Le jour J, c’est toute la salle qui répond 🥂</span>
							) : (
								<span className="text-white/65">Touchez une réponse pour voter.</span>
							)}
						</p>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
