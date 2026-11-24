import { useState } from "react";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mon approche, « Le résultat » : écran de fin de partie avec score étoilé.
// results = ["…", …] ; « Rejouer » relance l’animation des étoiles.
export default function ScoreScreen({ results }) {
	const [round, setRound] = useState(0);
	return (
		<ScrollReveal className="mt-10" variant="zoom">
			<div className="score-screen mx-auto max-w-3xl rounded-3xl px-6 py-10 text-center md:px-12">
				<p aria-hidden="true" className="text-xs font-bold uppercase tracking-[0.45em] text-white/60">
					Fin de partie
				</p>
				<p aria-hidden="true" className="score-title mt-2 text-4xl font-extrabold md:text-6xl">
					SCORE FINAL
				</p>
				<p key={round} className="score-stars mt-4 text-4xl md:text-5xl" role="img" aria-label="5 étoiles sur 5">
					{Array.from({ length: 5 }, (_, i) => (
						<span key={i} aria-hidden="true" style={{ "--i": i }}>
							★
						</span>
					))}
				</p>
				<ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
					{results.map((r, i) => (
						<li key={r} className="score-line flex items-center justify-between gap-4 rounded-xl px-4 py-3 font-semibold">
							<span>{r}</span>
							<span aria-hidden="true" className="shrink-0 font-mono text-sm text-[#7cff6b]">
								+{(i + 1) * 100}
							</span>
						</li>
					))}
				</ul>
				<button type="button" onClick={() => setRound((n) => n + 1)} className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[var(--cyan)] underline underline-offset-4">
					▶ Rejouer
				</button>
			</div>
		</ScrollReveal>
	);
}
