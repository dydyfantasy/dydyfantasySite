import { useState } from "react";
import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/scenes.css";

// Page Anniversaire : un gâteau dont on souffle les bougies (confettis à la fin),
// les points en étiquettes cadeaux, les formats en cartes d’anniversaire.
const CANDLES = 5;
const TAG_TILTS = ["-3deg", "2.5deg", "-2deg", "3deg"];
const CARD_TILTS = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg"];
const CONFETTI = Array.from({ length: 22 }, (_, i) => {
	const a = (i / 22) * Math.PI * 2;
	const d = 90 + (i % 3) * 35;
	return { x: Math.round(Math.cos(a) * d), y: Math.round(Math.sin(a) * d * 0.7) - 40, r: (i * 53) % 360, c: ["#ffc93c", "#ff2fae", "#19d3f0", "#7cff6b"][i % 4] };
});

function Cake() {
	const [out, setOut] = useState(() => Array(CANDLES).fill(false));
	const done = out.every(Boolean);
	const blow = (i) => setOut((o) => o.map((v, j) => (j === i ? true : v)));

	return (
		<div className="flex flex-col items-center">
			<div className="cake relative">
				<div className="cake-candles flex justify-center gap-4 md:gap-6">
					{out.map((isOut, i) => (
						<button
							key={i}
							type="button"
							onClick={() => blow(i)}
							disabled={isOut}
							aria-label={isOut ? `Bougie ${i + 1} soufflée` : `Souffler la bougie ${i + 1}`}
							className={`candle ${isOut ? "is-out" : ""}`}
							style={{ "--i": i }}>
							<span aria-hidden="true" className="flame" />
							<span aria-hidden="true" className="smoke" />
						</button>
					))}
				</div>
				<div aria-hidden="true" className="cake-tier cake-top" />
				<div aria-hidden="true" className="cake-tier cake-bottom" />
				<div aria-hidden="true" className="cake-plate" />
				{done && (
					<span aria-hidden="true" className="cake-burst">
						{CONFETTI.map((p, i) => (
							<i key={i} style={{ "--x": `${p.x}px`, "--y": `${p.y}px`, "--r": `${p.r}deg`, background: p.c }} />
						))}
					</span>
				)}
			</div>
			<p className="mt-8 min-h-[3.5rem] text-center text-lg font-extrabold" aria-live="polite">
				{done ? (
					<>
						🎉 Joyeux anniversaire ! <span className="text-[var(--gold)]">Le cadeau, c’est la soirée.</span>
						<button type="button" onClick={() => setOut(Array(CANDLES).fill(false))} className="ml-3 text-sm font-semibold text-[var(--cyan)] underline underline-offset-4">
							Rallumer
						</button>
					</>
				) : (
					<span className="text-white/70">Faites un vœu… et touchez chaque bougie pour la souffler 🎂</span>
				)}
			</p>
		</div>
	);
}

export default function AnniversaireScene({ points, pointsTitle, formats, formatsTitle }) {
	return (
		<>
			<section aria-labelledby="bougies" className="px-4 py-16">
				<div className="mx-auto max-w-4xl text-center">
					<ScrollReveal>
						<p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">À vous de jouer</p>
						<h2 id="bougies" className="mt-3 text-3xl font-extrabold md:text-5xl">
							Soufflez <span className="text-[var(--gold)]">les bougies</span>
						</h2>
					</ScrollReveal>
					<ScrollReveal className="mt-14" variant="zoom">
						<Cake />
					</ScrollReveal>
				</div>
			</section>

			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center />
					<ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{points.map((p, i) => (
							<ScrollReveal as="li" key={p.title} delay={i * 90}>
								<div className="gift-tag" style={{ "--c": p.color, "--tilt": TAG_TILTS[i % 4] }}>
									<span aria-hidden="true" className="gift-hole" />
									<p.icon aria-hidden="true" className="h-7 w-7 text-[#8a3b12]" />
									<h3 className="mt-2 text-lg font-extrabold leading-tight">{p.title}</h3>
									<p className="mt-2 text-sm">{p.text}</p>
								</div>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent} center />
					<ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{formats.map((f, i) => (
							<ScrollReveal as="li" key={f.title} delay={(i % 3) * 90}>
								<figure className="bday-card" style={{ "--tilt": CARD_TILTS[i % 5], "--c": ["#ffc93c", "#ff2fae", "#19d3f0", "#7cff6b", "#8b5cf6"][i % 5] }}>
									<div aria-hidden="true" className="bday-card-front">
										<span className="bday-card-badge">
											<f.icon className="h-9 w-9" />
										</span>
									</div>
									<figcaption className="bday-card-inside">
										<h3 className="text-lg font-extrabold">{f.title}</h3>
										<p className="mt-1 text-sm">{f.text}</p>
									</figcaption>
								</figure>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
