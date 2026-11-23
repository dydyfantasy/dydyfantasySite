import { useEffect, useRef, useState } from "react";
import {
	ClockIcon,
	LockClosedIcon,
	MapPinIcon,
	ArrowTopRightOnSquareIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEvents } from "../../hooks/useEvents";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const VISIBLE_COUNT = 4;

function getLocalDate(dateString) {
	const [year, month, day] = dateString.split("-").map(Number);
	return new Date(year, month - 1, day);
}

function dateParts(dateString) {
	const d = getLocalDate(dateString);
	return {
		weekday: d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", ""),
		day: d.toLocaleDateString("fr-FR", { day: "2-digit" }),
		month: d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", ""),
		long: d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }),
	};
}

function mapsUrl(event) {
	if (event.mapsUrl) return event.mapsUrl;
	const query = encodeURIComponent(event.address || `${event.place}, ${event.city}`);
	return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function mapsEmbedUrl(event) {
	if (event.mapEmbedUrl) return event.mapEmbedUrl;
	const query = encodeURIComponent(event.address || `${event.place}, ${event.city}`);
	return `https://www.google.com/maps?q=${query}&output=embed`;
}

// Carte du lieu de la prochaine date, chargée seulement à l’approche (loading="lazy")
function NextEventMap({ event }) {
	if (!event.publicEvent || (!event.address && !event.place)) return null;
	return (
		<div className="neon-card mt-4 overflow-hidden rounded-3xl" style={{ "--c": "var(--cyan)" }}>
			<iframe
				title={`Carte : ${event.place}, ${event.city}`}
				src={mapsEmbedUrl(event)}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="block h-56 w-full border-0 md:h-64"
			/>
		</div>
	);
}

function NewBadge() {
	return (
		<span className="rounded-full bg-[var(--gold)] px-2.5 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-wider text-[var(--ink)]">
			Nouveau
		</span>
	);
}

// Prochaine date : grande carte (affiche si disponible, sinon date lumineuse)
function NextEvent({ event }) {
	const p = dateParts(event.date);

	return (
		<article className="neon-card grid overflow-hidden rounded-3xl sm:grid-cols-2" style={{ "--c": "var(--pink)" }}>
			<div className="relative flex min-h-[14rem] items-center justify-center bg-black/40">
				{event.poster ? (
					<img
						src={event.poster}
						alt={`Affiche : ${event.title} à ${event.place}`}
						loading="lazy"
						className="h-full max-h-[26rem] w-full object-contain"
					/>
				) : (
					<div className="text-center">
						<p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">{p.weekday}</p>
						<p className="glow-cyan text-8xl font-extrabold leading-none">{p.day}</p>
						<p className="mt-1 text-xl font-bold uppercase tracking-widest text-[var(--pink)]">{p.month}</p>
					</div>
				)}
			</div>

			<div className="flex flex-col justify-center gap-4 p-6">
				<div className="flex flex-wrap items-center gap-2">
					<span className="inline-flex items-center gap-2 rounded-full border border-[var(--pink)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--pink)]">
						{/* Petit égaliseur : la musique tourne déjà */}
						<span aria-hidden="true" className="equalizer">
							<span />
							<span />
							<span />
							<span />
						</span>
						Prochaine date
					</span>
					{event.isNew && <NewBadge />}
				</div>
				<h3 className="text-2xl font-extrabold leading-tight">{event.title}</h3>
				<ul className="space-y-2 text-white/85">
					<li className="flex items-center gap-2 capitalize">
						<ClockIcon className="h-5 w-5 text-[var(--cyan)]" />
						{p.long} · {event.hour}
					</li>
					<li className="flex items-center gap-2">
						<MapPinIcon className="h-5 w-5 text-[var(--cyan)]" />
						{event.place} — {event.city}
					</li>
				</ul>
				{event.description && <p className="text-white/70">{event.description}</p>}
				{event.publicEvent ? (
					<a
						href={mapsUrl(event)}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-outline-neon inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--cyan)] px-5 py-2.5 font-semibold text-[var(--cyan)]">
						Itinéraire
						<ArrowTopRightOnSquareIcon className="h-4 w-4" />
					</a>
				) : (
					<p className="flex items-center gap-2 text-sm text-white/60">
						<LockClosedIcon className="h-4 w-4" />
						Événement privé
					</p>
				)}
			</div>
		</article>
	);
}

// Ligne du tableau d’affichage
function EventRow({ event, delay = 0, onOpen }) {
	const p = dateParts(event.date);

	return (
		<ScrollReveal as="li" variant="right" delay={delay}>
			<button
				type="button"
				onClick={() => onOpen(event)}
				aria-haspopup="dialog"
				className="board-row grid w-full grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 text-left">
				<div className="text-center leading-none">
					<p className="text-[0.7rem] font-bold uppercase tracking-widest text-white/65">{p.weekday}</p>
					<p className="glow-cyan text-3xl font-extrabold">{p.day}</p>
					<p className="text-xs font-bold uppercase tracking-widest text-[var(--pink)]">{p.month}</p>
				</div>
				<div className="min-w-0">
					<p className="flex flex-wrap items-center gap-2 font-bold">
						<span className="truncate">{event.title}</span>
						{event.isNew && <NewBadge />}
					</p>
					<p className="mt-0.5 truncate text-sm text-white/65">
						{event.place} — {event.city} · {event.hour}
					</p>
				</div>
				<div className="text-sm text-white/65">
					{event.publicEvent ? (
						<span className="flex items-center gap-1.5 text-[var(--cyan)]">
							<span className="hidden sm:inline">Détails</span>
							<ChevronRightIcon className="h-5 w-5" />
						</span>
					) : (
						<span className="flex items-center gap-1.5">
							<LockClosedIcon className="h-4 w-4" />
							<span className="hidden sm:inline">Privé</span>
						</span>
					)}
				</div>
			</button>
		</ScrollReveal>
	);
}

// Fiche d’un événement : <dialog> natif (accessible, Échap pour fermer).
// La carte n’est chargée qu’à l’ouverture : aucun coût tant qu’on ne clique pas.
function EventDialog({ event, onClose }) {
	const ref = useRef(null);

	useEffect(() => {
		const dialog = ref.current;
		if (event && dialog && !dialog.open) dialog.showModal();
	}, [event]);

	if (!event) return null;
	const p = dateParts(event.date);

	return (
		<dialog
			ref={ref}
			onClose={onClose}
			onClick={(e) => e.target === ref.current && ref.current.close()}
			aria-labelledby="event-dialog-title"
			className="event-dialog m-auto max-h-[90svh] w-[min(40rem,calc(100vw-2rem))] overflow-y-auto rounded-3xl p-0 text-white">
			<div className="relative">
				<button
					type="button"
					onClick={() => ref.current.close()}
					aria-label="Fermer"
					className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80">
					<XMarkIcon className="h-6 w-6" />
				</button>
				{event.poster && (
					<img src={event.poster} alt={`Affiche : ${event.title}`} className="max-h-[22rem] w-full bg-black object-contain" />
				)}
				<div className="space-y-4 p-6">
					<div className="flex flex-wrap items-center gap-2">
						<span className="rounded-full border border-[var(--pink)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--pink)]">
							{event.type || "Soirée"}
						</span>
						{event.isNew && <NewBadge />}
					</div>
					<h3 id="event-dialog-title" className="pr-10 text-2xl font-extrabold leading-tight">
						{event.title}
					</h3>
					<ul className="space-y-2 text-white/85">
						<li className="flex items-center gap-2 capitalize">
							<ClockIcon className="h-5 w-5 text-[var(--cyan)]" />
							{p.long} · {event.hour}
						</li>
						<li className="flex items-center gap-2">
							<MapPinIcon className="h-5 w-5 text-[var(--cyan)]" />
							{event.place} — {event.address || event.city}
						</li>
					</ul>
					{event.description && <p className="text-white/75">{event.description}</p>}
					{event.publicEvent ? (
						<>
							<iframe
								title={`Carte : ${event.place}, ${event.city}`}
								src={mapsEmbedUrl(event)}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="block h-56 w-full rounded-2xl border-0"
							/>
							<a
								href={mapsUrl(event)}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-outline-neon inline-flex items-center gap-2 rounded-xl border border-[var(--cyan)] px-5 py-2.5 font-semibold text-[var(--cyan)]">
								Itinéraire
								<ArrowTopRightOnSquareIcon className="h-4 w-4" />
							</a>
						</>
					) : (
						<p className="flex items-center gap-2 text-sm text-white/60">
							<LockClosedIcon className="h-4 w-4" />
							Événement privé
						</p>
					)}
				</div>
			</div>
		</dialog>
	);
}

// Agenda lu depuis public/events/events.js (via useEvents, côté navigateur)
export default function LedAgenda() {
	const events = useEvents();
	const [showAll, setShowAll] = useState(false);
	const [opened, setOpened] = useState(null); // événement affiché dans la fiche

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const upcoming = (events || [])
		.filter((e) => getLocalDate(e.date) >= today)
		.sort((a, b) => getLocalDate(a.date) - getLocalDate(b.date));
	const [next, ...others] = upcoming;
	const shown = showAll ? others : others.slice(0, VISIBLE_COUNT);

	return (
		<section id="agenda" aria-labelledby="agenda-titre" className="scroll-mt-24 px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<SectionTitle id="agenda-titre" label="Agenda" title="Prochaines soirées blind test & karaoké" accent="autour de Toulouse">
					Les soirées quiz, blind test et karaoké ouvertes à tous dans les bars et restaurants de la région toulousaine.
				</SectionTitle>

				<div className="mt-10 min-h-[22rem]">
					{events === null ? null : !next ? (
						<p className="neon-card rounded-3xl p-8 text-center text-white/70" style={{ "--c": "var(--cyan)" }}>
							Les prochaines dates arrivent bientôt. Suivez-moi sur Instagram pour ne rien rater !
						</p>
					) : (
						<div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
							<ScrollReveal variant="left">
								<NextEvent event={next} />
								<NextEventMap event={next} />
							</ScrollReveal>
							<div>
							{others.length > 0 && (
								<>
								<p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/65">Ensuite</p>
								<ul className="space-y-3">
									{shown.map((e, i) => (
										<EventRow key={e.id ?? `${e.date}-${e.place}`} event={e} delay={i * 80} onOpen={setOpened} />
									))}
								</ul>
								</>
							)}
							{others.length > VISIBLE_COUNT && (
								<button
									type="button"
									onClick={() => setShowAll((v) => !v)}
									className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 font-semibold text-white/85 hover:border-white/50">
									{showAll ? "Voir moins" : `Voir toutes les dates (${others.length})`}
									<ChevronDownIcon className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
								</button>
							)}
							</div>
						</div>
					)}
				</div>
			</div>
			<EventDialog event={opened} onClose={() => setOpened(null)} />
		</section>
	);
}
