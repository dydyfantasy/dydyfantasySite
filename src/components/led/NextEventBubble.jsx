import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEvents } from "../../hooks/useEvents";

function getLocalDate(dateString) {
	const [year, month, day] = dateString.split("-").map(Number);
	return new Date(year, month - 1, day);
}

// Bulle flottante « prochaine soirée », sur toutes les pages (lit public/events/events.js).
// Compacte : pastille date + texte court, lien vers l'agenda, fermable.
export default function NextEventBubble() {
	const events = useEvents();
	const [closed, setClosed] = useState(false);

	if (!events || closed) return null;

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const next = events
		.filter((e) => e.publicEvent && getLocalDate(e.date) >= today)
		.sort((a, b) => getLocalDate(a.date) - getLocalDate(b.date))[0];
	if (!next) return null;

	const d = getLocalDate(next.date);
	const day = d.toLocaleDateString("fr-FR", { day: "2-digit" });
	const month = d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "");
	const weekday = d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");

	return (
		<div className="led next-bubble fixed bottom-4 left-4 z-50 w-[19rem] max-w-[calc(100vw-2rem)] rounded-2xl">
			<a
				href="/#agenda"
				className="flex items-center gap-3 rounded-2xl py-2 pl-2 pr-10 text-white"
				aria-label={`Prochaine soirée : ${next.title}, ${weekday} ${day} ${month} à ${next.hour}, ${next.place}. Voir l'agenda`}>
				<span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[var(--pink)] leading-none text-white">
					<span className="text-lg font-extrabold">{day}</span>
					<span className="text-[0.6rem] font-bold uppercase">{month}</span>
				</span>
				<span className="min-w-0 leading-tight">
					<span className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--cyan)]">
						<span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
						Prochaine soirée
					</span>
					<span className="block truncate text-sm font-bold">{next.title}</span>
					<span className="block truncate text-xs text-white/65">
						{weekday} · {next.hour} · {next.place}
					</span>
				</span>
			</a>
			<button
				type="button"
				onClick={() => setClosed(true)}
				aria-label="Masquer la prochaine soirée"
				className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white">
				<XMarkIcon className="h-4 w-4" />
			</button>
		</div>
	);
}
