import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEvents } from "../../hooks/useEvents";

function getLocalDate(dateString) {
	const [year, month, day] = dateString.split("-").map(Number);
	return new Date(year, month - 1, day);
}

// Bulle flottante « prochaine soirée », sur toutes les pages (lit public/events/events.js).
// Compacte : pastille date + texte court, lien vers l’agenda, fermable.
export default function NextEventBubble() {
	const events = useEvents();
	const [closed, setClosed] = useState(false);
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	const [pastHero, setPastHero] = useState(false);

	// Accueil : la bulle n’apparaît qu’une fois le hero dépassé (sur mobile, elle recouvrait le quiz)
	useEffect(() => {
		if (!isHome) return;
		const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isHome]);

	// Masquée sur la page Contact (elle recouvrirait le formulaire sur mobile)
	if (!events || closed || pathname === "/contact" || (isHome && !pastHero)) return null;

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
		<div className="led next-bubble answer-pop fixed bottom-4 right-4 z-50 w-[19rem] max-w-[calc(100vw-2rem)] rounded-2xl md:bottom-6 md:right-6 md:w-[25rem]">
			<a
				href="/#agenda"
				className="flex items-center gap-3 rounded-2xl py-2 pl-2 pr-10 text-white md:gap-4 md:py-3 md:pl-3"
				aria-label={`Prochaine soirée : ${next.title}, ${weekday} ${day} ${month} à ${next.hour}, ${next.place}. Voir l’agenda`}>
				<span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[var(--pink)] leading-none text-[var(--ink)] md:h-16 md:w-16">
					<span className="text-lg font-extrabold md:text-2xl">{day}</span>
					<span className="text-[0.6rem] font-bold uppercase md:text-xs">{month}</span>
				</span>
				<span className="min-w-0 leading-tight">
					<span className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--cyan)]">
						<span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--cyan)]" />
						Prochaine soirée
					</span>
					<span className="block truncate text-sm font-bold md:text-base">{next.title}</span>
					<span className="block truncate text-xs text-white/65 md:text-sm">
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
