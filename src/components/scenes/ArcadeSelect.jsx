import { Link } from "react-router";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// « Mes animations » façon écran de sélection de borne d’arcade : chaque carte mène à sa page.
// items = [{ icon, color, title, text, to }]
export default function ArcadeSelect({ items }) {
	return (
		<div className="arcade mt-10 rounded-3xl p-4 md:p-8">
			<p aria-hidden="true" className="arcade-title text-center text-sm font-extrabold uppercase tracking-[0.4em]">
				Choisissez votre jeu
			</p>
			<ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((s, i) => (
					<ScrollReveal as="li" key={s.title} delay={i * 90}>
						<Link to={s.to} style={{ "--c": s.color }} className="arcade-card group flex h-full flex-col p-5">
							<span className="flex items-center justify-between text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-[var(--c)]">
								<span>Jeu {i + 1}</span>
								<span aria-hidden="true">★★★</span>
							</span>
							<span className="arcade-screen mt-3 flex aspect-[4/3] items-center justify-center rounded-lg">
								<s.icon aria-hidden="true" className="h-12 w-12 text-[var(--c)]" />
							</span>
							<h3 className="mt-4 text-lg font-extrabold">{s.title}</h3>
							<p className="mt-2 flex-1 text-sm text-white/75">{s.text}</p>
							<span className="press-start mt-4 text-center text-xs font-extrabold uppercase tracking-[0.3em] text-[var(--c)]">
								▶ Press start
							</span>
						</Link>
					</ScrollReveal>
				))}
			</ul>
		</div>
	);
}
