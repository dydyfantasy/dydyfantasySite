import { Link } from "react-router";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mes prestations, « Inclus » : présenté comme le rider technique d’un artiste.
// items = [{ icon, title, text, to? }]
export default function Rider({ items }) {
	return (
		<ScrollReveal className="mt-10">
			<div className="rider mx-auto max-w-4xl rounded-2xl">
				<div className="rider-head flex flex-wrap items-center justify-between gap-2 px-6 py-4">
					<span className="font-mono text-sm font-bold uppercase tracking-[0.3em]">Rider technique</span>
					<span className="font-mono text-xs text-white/55">Dydy Fantasy · tout est fourni</span>
				</div>
				<ul className="divide-y divide-white/10">
					{items.map((item, i) => (
						<li key={item.title} className="flex gap-4 px-6 py-5">
							<span aria-hidden="true" className="rider-check">✔</span>
							<div className="min-w-0">
								<h3 className="flex items-center gap-2 font-extrabold">
									<item.icon aria-hidden="true" className="h-5 w-5 text-[var(--gold)]" />
									{item.to ? (
										<Link to={item.to} className="underline decoration-[var(--gold)] underline-offset-4 hover:text-[var(--gold)]">
											{item.title}
										</Link>
									) : (
										item.title
									)}
								</h3>
								<p className="mt-1 text-white/75">{item.text}</p>
							</div>
							<span aria-hidden="true" className="ml-auto hidden shrink-0 font-mono text-xs text-white/40 sm:block">
								#{String(i + 1).padStart(2, "0")}
							</span>
						</li>
					))}
				</ul>
			</div>
		</ScrollReveal>
	);
}
