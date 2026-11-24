import { useState } from "react";
import SectionTitle from "../led/SectionTitle";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/scenes.css";

// Page Blind test : les publics en pupitres de candidats (buzzer à presser),
// les formats en tableau des manches façon plateau de jeu télé.
function Podium({ p }) {
	const [buzzed, setBuzzed] = useState(false);
	const buzz = () => {
		setBuzzed(true);
		window.setTimeout(() => setBuzzed(false), 900);
	};
	return (
		<div className="podium" style={{ "--c": p.color }}>
			<button type="button" onClick={buzz} aria-label={`Buzzer : ${p.title}`} className={`buzzer ${buzzed ? "is-buzzed" : ""}`}>
				<span aria-hidden="true" className="buzzer-cap" />
				{buzzed && (
					<span aria-hidden="true" className="buzz-pop">
						BZZZ !
					</span>
				)}
			</button>
			<div className="podium-desk">
				<p.icon aria-hidden="true" className="mx-auto h-7 w-7 text-[var(--c)]" />
				<h3 className="podium-name mt-2 text-lg font-extrabold leading-tight">{p.title}</h3>
				<p className="mt-2 text-sm text-white/75">{p.text}</p>
			</div>
		</div>
	);
}

export default function BlindTestScene({ points, pointsTitle, formats, formatsTitle }) {
	return (
		<>
			<section aria-labelledby="points" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent} center>
						{pointsTitle?.text} Essayez les buzzers !
					</SectionTitle>
					<ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{points.map((p, i) => (
							<ScrollReveal as="li" key={p.title} delay={i * 90}>
								<Podium p={p} />
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			<section aria-labelledby="formats" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent} center>
						{formatsTitle?.text}
					</SectionTitle>
					<ul className="game-board mt-12 grid gap-4 rounded-3xl p-4 sm:grid-cols-2 md:p-6">
						{formats.map((f, i) => (
							<ScrollReveal as="li" key={f.title} delay={i * 90} variant="zoom">
								<div className="board-tile h-full rounded-2xl p-6" style={{ "--c": f.color }}>
									<p className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.25em] text-[var(--c)]">
										Manche {String(i + 1).padStart(2, "0")}
										<f.icon aria-hidden="true" className="h-7 w-7" />
									</p>
									<h3 className="mt-3 text-2xl font-extrabold">{f.title}</h3>
									<p className="mt-2 text-white/75">{f.text}</p>
								</div>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
