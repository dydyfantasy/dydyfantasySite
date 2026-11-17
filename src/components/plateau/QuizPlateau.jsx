import { useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// Même contenu que l'ancien Hero : seules la mise en scène et l'interaction changent.
// Les liens pointeront vers /prestations/... quand ces pages existeront.
const ANSWERS = [
	{
		letter: "A",
		label: "Quiz / Blind test",
		color: "bg-[#ff4d4d]",
		text: "Une animation façon game show : vos invités jouent depuis leur téléphone ou avec des buzzers. Manches thématiques, classements en direct et ambiance au micro.",
		href: "/prestations",
	},
	{
		letter: "B",
		label: "Karaoké",
		color: "bg-[#3ddc84]",
		text: "Micros ouverts, duos, battles et chansons cultes : une animation conviviale où tout le monde peut participer.",
		href: "/prestations",
	},
	{
		letter: "C",
		label: "Soirée DJ",
		color: "bg-[var(--cyan)]",
		text: "Une programmation musicale adaptée à votre public et aux temps forts de l'événement, pour faire monter l'énergie au bon moment.",
		href: "/prestations",
	},
	{
		letter: "D",
		label: "Événement sur mesure",
		color: "bg-[var(--gold)]",
		text: "Je construis une animation adaptée à votre lieu, votre public et vos envies : jeux, soirée à thème ou combinaison de plusieurs formats.",
		href: "/prestations",
	},
];

export default function QuizPlateau() {
	const [selected, setSelected] = useState(null);
	const answer = ANSWERS.find((a) => a.letter === selected);

	return (
		<section
			aria-labelledby="quiz-titre"
			className="plateau relative overflow-hidden bg-[var(--ink)] px-4 pb-20 pt-14 text-white">
			<div aria-hidden="true" className="sequins absolute inset-0 opacity-[0.07]" />

			<div className="relative mx-auto max-w-5xl">
				{/* Écran de jeu */}
				<div className="hard-shadow-pink border-[3px] border-[var(--cyan)] bg-[var(--ink-2)]">
					<div className="flex items-center justify-between border-b-[3px] border-[var(--cyan)] px-4 py-2">
						<span className="font-display text-xs uppercase tracking-[0.25em] text-[var(--cyan)] md:text-sm">
							Question 01
						</span>
						<span className="font-display flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--pink)] md:text-sm">
							<span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--pink)]" />
							En direct
						</span>
					</div>

					<div className="px-4 py-6 text-center md:px-10 md:py-8">
						<h2
							id="quiz-titre"
							className="font-display text-2xl uppercase leading-tight md:text-4xl">
							Quel type d’animation{" "}
							<span className="font-brush normal-case text-[var(--pink)]">
								recherchez-vous ?
							</span>
						</h2>

						<div className="mx-auto mt-5 h-2.5 max-w-md overflow-hidden border-2 border-[var(--ink)] bg-black/40">
							<div className="timer-bar h-full bg-gradient-to-r from-[var(--gold)] via-[var(--pink)] to-[var(--cyan)]" />
						</div>

						{/* Zone de réponse */}
						<div className="mx-auto mt-6 min-h-[7.5rem] max-w-2xl" aria-live="polite">
							{answer ? (
								<div key={answer.letter} className="answer-pop">
									<p className="font-display text-sm uppercase tracking-widest text-[var(--gold)]">
										Bonne réponse ! {answer.letter} · {answer.label}
									</p>
									<p className="mt-2 text-base leading-relaxed text-white/90 md:text-lg">
										{answer.text}
									</p>
									<Link
										to={answer.href}
										className="font-display mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-[var(--cyan)] underline decoration-[3px] underline-offset-4 hover:text-white">
										Découvrir la prestation
										<ArrowRightIcon className="h-4 w-4" />
									</Link>
								</div>
							) : (
								<p className="pt-6 text-base text-white/70">
									Appuyez sur un buzzer pour découvrir l’expérience.
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Buzzers */}
				<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
					{ANSWERS.map((a, i) => (
						<button
							key={a.letter}
							type="button"
							aria-pressed={selected === a.letter}
							onClick={() => setSelected(a.letter)}
							className={`buzzer group flex items-center gap-4 p-3 text-left ${
								i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
							} ${selected === a.letter ? "bg-[var(--pink)] text-white" : "bg-[var(--paper)] text-[var(--ink)]"}`}>
							<span
								className={`${a.color} font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-[var(--ink)] text-2xl text-[var(--ink)]`}>
								{a.letter}
							</span>
							<span className="font-display text-lg uppercase leading-tight md:text-xl">
								{a.label}
							</span>
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
