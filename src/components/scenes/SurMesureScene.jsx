import { useState } from "react";
import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/scenes.css";

// Page Sur mesure : une roue des idées à faire tourner (elle désigne une carte),
// les idées en cartes à jouer, les publics en jetons de casino.
const SUITS = ["♠", "♥", "♦", "♣"];
const WHEEL = ["#ffc93c", "#ff2fae", "#19d3f0", "#7cff6b", "#8b5cf6", "#ff7a3d"];
const CHIPS = ["var(--pink)", "var(--cyan)", "var(--gold)", "#7cff6b"];

function Wheel({ ideas, onPick }) {
	const [turn, setTurn] = useState(0); // rotation cumulée (degrés)
	const [spinning, setSpinning] = useState(false);
	const n = ideas.length;
	const slice = 360 / n;
	const gradient = `conic-gradient(${ideas.map((_, i) => `${WHEEL[i % WHEEL.length]} ${i * slice}deg ${(i + 1) * slice}deg`).join(", ")})`;

	const spin = () => {
		if (spinning) return;
		const pick = Math.floor(Math.random() * n);
		// La part « pick » s’arrête sous le pointeur (en haut) : centre de la part à 0°
		const target = 360 - (pick * slice + slice / 2);
		const base = turn - (turn % 360);
		const next = base + 360 * 5 + target;
		setSpinning(true);
		onPick(null);
		setTurn(next);
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		window.setTimeout(() => {
			setSpinning(false);
			onPick(pick);
		}, reduce ? 50 : 3200);
	};

	return (
		<div className="flex flex-col items-center">
			<div className="wheel-wrap relative">
				<span aria-hidden="true" className="wheel-pointer" />
				<div aria-hidden="true" className="wheel" style={{ background: gradient, transform: `rotate(${turn}deg)` }}>
					{ideas.map((idea, i) => (
						<span key={idea.title} className="wheel-label" style={{ transform: `rotate(${i * slice + slice / 2}deg)` }}>
							<span>{idea.title.split(" & ")[0]}</span>
						</span>
					))}
				</div>
				<span aria-hidden="true" className="wheel-hub" />
			</div>
			<button type="button" onClick={spin} disabled={spinning} className="btn-neon mt-8 rounded-xl bg-[var(--gold)] px-7 py-3.5 text-lg font-extrabold text-[#05040a]">
				{spinning ? "Ça tourne…" : "🎰 Tourner la roue"}
			</button>
		</div>
	);
}

export default function SurMesureScene({ points, pointsTitle, formats, formatsTitle }) {
	const [picked, setPicked] = useState(null);
	return (
		<>
			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent} center>
						{formatsTitle?.text} Pas d’idée ? Laissez faire la roue !
					</SectionTitle>
					<ScrollReveal className="mt-12">
						<Wheel ideas={formats} onPick={setPicked} />
					</ScrollReveal>
					<p className="mt-6 min-h-[2rem] text-center text-xl font-extrabold" aria-live="polite">
						{picked !== null && (
							<>
								🎯 Et pourquoi pas… <span className="text-[var(--gold)]">{formats[picked].title}</span> ?
							</>
						)}
					</p>
					<ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{formats.map((f, i) => (
							<ScrollReveal as="li" key={f.title} delay={(i % 3) * 90}>
								<div className={`play-card h-full rounded-2xl p-6 ${picked === i ? "is-picked" : ""}`} data-suit={SUITS[i % 4]}>
									<span aria-hidden="true" className={`card-suit ${i % 4 === 1 || i % 4 === 2 ? "is-red" : ""}`}>
										{SUITS[i % 4]}
									</span>
									<h3 className="mt-3 text-xl font-extrabold">{f.title}</h3>
									<p className="mt-2 text-sm">{f.text}</p>
								</div>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center />
					<ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{points.map((p, i) => (
							<ScrollReveal as="li" key={p.title} delay={i * 90} className="text-center">
								<span aria-hidden="true" className="chip" style={{ "--c": CHIPS[i % 4] }}>
									<p.icon className="h-9 w-9" />
								</span>
								<h3 className="mt-5 text-lg font-extrabold">{p.title}</h3>
								<p className="mt-2 text-sm text-white/75">{p.text}</p>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
