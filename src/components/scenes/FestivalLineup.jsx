import { Link } from "react-router";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mes prestations : les formats en affiche de festival (line-up), la tête d’affiche en premier.
// formats = [{ to, label, color, icon, text, tags }]
export default function FestivalLineup({ formats }) {
	return (
		<ScrollReveal className="mt-10">
			<div className="lineup-poster relative overflow-hidden rounded-3xl px-5 py-10 text-center md:px-12 md:py-14">
				<span aria-hidden="true" className="lineup-rays" />
				<p aria-hidden="true" className="relative text-xs font-bold uppercase tracking-[0.45em] text-white/70">
					Dydy Fantasy présente
				</p>
				<p aria-hidden="true" className="lineup-word relative mt-2 text-5xl font-extrabold md:text-7xl">
					LINE-UP
				</p>
				<ul className="relative mt-10 space-y-10">
					{formats.map((f, i) => (
						<li key={f.to} style={{ "--c": f.color }}>
							<Link to={f.to} className="group inline-block">
								<h3 className={`lineup-name font-extrabold uppercase ${i === 0 ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"}`}>
									{f.label}
								</h3>
							</Link>
							<p className="mx-auto mt-3 max-w-2xl text-white/80">{f.text}</p>
							<ul className="mt-3 flex flex-wrap justify-center gap-2">
								{f.tags.map((t) => (
									<li key={t} className="lineup-tag rounded-full px-3 py-1 text-xs font-semibold">
										{t}
									</li>
								))}
							</ul>
							{i < formats.length - 1 && (
								<span aria-hidden="true" className="mt-8 block text-xl text-[var(--gold)]">
									✦ ✦ ✦
								</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</ScrollReveal>
	);
}
