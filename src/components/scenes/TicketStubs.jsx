import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mes prestations, « Pour qui ? » : un billet par type d’événement, talon détachable compris.
// items = [{ to, title, label, color, icon, text }]
export default function TicketStubs({ items }) {
	return (
		<ul className="mt-10 grid gap-6 md:grid-cols-2">
			{items.map((a, i) => (
				<ScrollReveal as="li" key={a.to} delay={(i % 2) * 90}>
					<Link to={a.to} style={{ "--c": a.color }} className="ticket group flex h-full">
						<div aria-hidden="true" className="ticket-stub flex w-14 shrink-0 items-center justify-center">
							<span className="ticket-stub-text text-[0.65rem] font-extrabold uppercase tracking-[0.3em]">Admit one · N°{i + 1}</span>
						</div>
						<div className="flex flex-1 flex-col p-5">
							<div className="flex items-center gap-3">
								<a.icon aria-hidden="true" className="h-8 w-8 shrink-0 text-[var(--c)]" />
								<h3 className="text-lg font-extrabold">{a.title ?? a.label}</h3>
							</div>
							<p className="mt-2 flex-1 text-white/75">{a.text}</p>
							<span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--c)]">
								Voir la soirée
								<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</span>
						</div>
					</Link>
				</ScrollReveal>
			))}
		</ul>
	);
}
