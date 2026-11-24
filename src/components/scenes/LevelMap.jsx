import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mon approche : la méthode en carte de niveaux de jeu vidéo. Chaque étape = un niveau,
// les mots-clés = les objets récupérés, un tampon « Validé » à l’arrivée.
// steps = [{ icon, title, subtitle, text, tags }]
const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b", "#8b5cf6", "#ff4d6d"];

export default function LevelMap({ steps }) {
	return (
		<ol className="level-map relative mt-14 space-y-12 md:space-y-16">
			{steps.map((step, i) => {
				const right = i % 2 === 1;
				return (
					<ScrollReveal
						as="li"
						key={step.title}
						variant={right ? "right" : "left"}
						className={`level relative pl-20 md:w-1/2 md:pl-0 ${right ? "md:ml-auto md:pl-16" : "md:pr-16"}`}
						style={{ "--c": COLORS[i % COLORS.length] }}>
						<span aria-hidden="true" className={`level-node ${right ? "is-right" : "is-left"}`}>
							<span className="text-[0.6rem] font-bold uppercase tracking-widest opacity-80">Niv.</span>
							<span className="text-xl font-extrabold leading-none">{i + 1}</span>
						</span>
						<div className="level-card relative rounded-2xl p-5 md:p-6">
							<span aria-hidden="true" className="level-stamp">Validé ✓</span>
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--c)]">
								Niveau {i + 1} · {step.subtitle}
							</p>
							<h3 className="mt-1 flex items-center gap-2 text-2xl font-extrabold">
								<step.icon aria-hidden="true" className="h-6 w-6 text-[var(--c)]" />
								{step.title}
							</h3>
							<p className="mt-2 text-white/80">{step.text}</p>
							<p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/45">Objets récupérés</p>
							<ul className="mt-2 flex flex-wrap gap-2">
								{step.tags.map((t) => (
									<li key={t} className="level-item rounded-lg px-2.5 py-1 text-xs font-semibold">
										{t}
									</li>
								))}
							</ul>
						</div>
					</ScrollReveal>
				);
			})}
		</ol>
	);
}
