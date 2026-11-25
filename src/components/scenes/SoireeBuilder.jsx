import { useState } from "react";
import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ScrollReveal from "../led/ScrollReveal";
import "../../css/pages-fun.css";

// Mes prestations : « Composez votre soirée ». Le visiteur choisit son événement et ses animations,
// puis le bouton ouvre le formulaire de contact déjà pré-rempli (/contact?type=…&message=…).
const EVENTS = [
	{ label: "Mariage", emoji: "💍", type: "Mariage" },
	{ label: "Entreprise", emoji: "💼", type: "Événement entreprise" },
	{ label: "Anniversaire", emoji: "🎂", type: "Anniversaire" },
	{ label: "Bar / restaurant", emoji: "🍻", type: "Bar / restaurant" },
	{ label: "Autre", emoji: "✨", type: "Animation sur mesure" },
];
const ANIMATIONS = [
	{ label: "Blind test", emoji: "🎵" },
	{ label: "Quiz", emoji: "🏆" },
	{ label: "Karaoké", emoji: "🎤" },
	{ label: "DJ", emoji: "🎧" },
	{ label: "Challenge Photo", emoji: "📸" },
	{ label: "Sur mesure", emoji: "🎲" },
];

export default function SoireeBuilder() {
	const [event, setEvent] = useState(null);
	const [picked, setPicked] = useState([]);
	const toggle = (label) => setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));
	const ev = EVENTS.find((e) => e.label === event);
	const message = `Bonjour, je prépare ${ev ? `un événement « ${ev.label} »` : "un événement"}${
		picked.length ? ` et je suis intéressé(e) par : ${picked.join(", ")}` : ""
	}. `;
	const href = `/contact?${new URLSearchParams({ ...(ev ? { type: ev.type } : {}), message }).toString()}`;

	return (
		<ScrollReveal className="mt-10">
			<div className="builder grid gap-8 rounded-3xl p-6 md:p-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
				<div>
					<p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--cyan)]">1. Votre événement</p>
					<div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Votre événement">
						{EVENTS.map((e) => (
							<button
								key={e.label}
								type="button"
								aria-pressed={event === e.label}
								onClick={() => setEvent(e.label)}
								className="builder-chip rounded-full px-4 py-2 font-semibold">
								{e.emoji} {e.label}
							</button>
						))}
					</div>
					<p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[var(--pink)]">2. Vos animations</p>
					<div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Vos animations">
						{ANIMATIONS.map((a) => (
							<button
								key={a.label}
								type="button"
								aria-pressed={picked.includes(a.label)}
								onClick={() => toggle(a.label)}
								className="builder-chip is-multi rounded-full px-4 py-2 font-semibold">
								{a.emoji} {a.label}
							</button>
						))}
					</div>
				</div>

				<div className="builder-summary flex flex-col rounded-2xl p-6">
					<p className="text-xs font-bold uppercase tracking-[0.25em] text-white/55">Votre soirée</p>
					<p className="mt-3 text-2xl font-extrabold" aria-live="polite">
						{ev ? `${ev.emoji} ${ev.label}` : "À composer…"}
					</p>
					<ul className="mt-3 flex min-h-[2.5rem] flex-wrap gap-2">
						{picked.map((p) => (
							<li key={p} className="builder-pill rounded-full px-3 py-1 text-sm font-bold">
								{ANIMATIONS.find((a) => a.label === p)?.emoji} {p}
							</li>
						))}
					</ul>
					<Link to={href} className="btn-neon mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-5 py-3.5 font-bold text-white">
						Demander mon devis
						<ArrowRightIcon className="h-5 w-5" />
					</Link>
					<p className="mt-3 text-center text-xs text-white/55">Le formulaire sera pré-rempli · réponse sous 24 h</p>
				</div>
			</div>
		</ScrollReveal>
	);
}
