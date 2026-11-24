import { Link } from "react-router";
import { TrophyIcon } from "@heroicons/react/24/solid";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mon approche, « Mes engagements » : présentés comme des succès débloqués dans un jeu.
// items = [{ icon, title, text, to? }]
export default function Achievements({ items }) {
	return (
		<ul className="mt-10 grid gap-5 md:grid-cols-2">
			{items.map((p, i) => (
				<ScrollReveal as="li" key={p.title} delay={(i % 2) * 110} variant="right">
					<div className="achievement relative flex gap-4 overflow-hidden rounded-2xl p-5">
						<span aria-hidden="true" className="achievement-badge flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
							<TrophyIcon className="h-7 w-7" />
						</span>
						<div className="min-w-0">
							<p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)]">🏆 Succès débloqué</p>
							<h3 className="mt-1 flex items-center gap-2 text-lg font-extrabold">
								<p.icon aria-hidden="true" className="h-5 w-5 text-[var(--gold)]" />
								{p.to ? (
									<Link to={p.to} className="underline decoration-[var(--gold)] underline-offset-4 hover:text-[var(--gold)]">
										{p.title}
									</Link>
								) : (
									p.title
								)}
							</h3>
							<p className="mt-1 text-white/75">{p.text}</p>
						</div>
					</div>
				</ScrollReveal>
			))}
		</ul>
	);
}
