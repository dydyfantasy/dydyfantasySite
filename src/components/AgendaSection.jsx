import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	CalendarDaysIcon,
	ClockIcon,
	MapPinIcon,
	SparklesIcon,
	ArrowRightIcon,
	LockClosedIcon,
	MegaphoneIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { events } from "../data/events";

function getLocalDate(dateString) {
	const [year, month, day] = dateString.split("-").map(Number);
	return new Date(year, month - 1, day);
}

function getDateParts(dateString) {
	const date = getLocalDate(dateString);

	return {
		day: date.toLocaleDateString("fr-FR", { day: "2-digit" }),
		month: date.toLocaleDateString("fr-FR", { month: "short" }),
	};
}

function formatDate(dateString) {
	return getLocalDate(dateString).toLocaleDateString("fr-FR", {
		weekday: "long",
		day: "numeric",
		month: "long",
	});
}

function getMapsSearchUrl(event) {
	if (event.mapsUrl) return event.mapsUrl;

	const query = encodeURIComponent(
		event.address || `${event.place}, ${event.city}`,
	);

	return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function getMapsEmbedUrl(event) {
	if (event.mapEmbedUrl) return event.mapEmbedUrl;

	const query = encodeURIComponent(
		event.address || `${event.place}, ${event.city}`,
	);

	return `https://www.google.com/maps?q=${query}&output=embed`;
}

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 35,
		scale: 0.97,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.55,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

function NewBadge({ large = false }) {
	return (
		<div
			className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 font-black uppercase text-white shadow-[0_0_24px_rgba(236,72,153,0.55)] ${
				large
					? "px-4 py-2 text-xs tracking-[0.18em]"
					: "px-3 py-1 text-[10px] tracking-[0.14em]"
			}`}>
			<MegaphoneIcon className={large ? "h-4 w-4" : "h-3 w-3"} />
			Nouveau
		</div>
	);
}

function DateBox({ date, small = false }) {
	const parts = getDateParts(date);

	return (
		<div
			className={`flex shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-center ${
				small ? "h-16 w-16" : "h-28 w-28 rounded-3xl"
			}`}>
			<p className="text-xs font-black uppercase text-pink-200">
				{parts.month}
			</p>

			<p
				className={
					small
						? "text-xl font-black text-white"
						: "text-4xl font-black text-white"
				}>
				{parts.day}
			</p>
		</div>
	);
}

function SmallEventCard({ event }) {
	const eventDateParts = getDateParts(event.date);

	return (
		<motion.article
			variants={itemVariants}
			className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.075]">
			<div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 opacity-80" />

			{event.isNew && (
				<div className="absolute right-4 top-4 z-20">
					<NewBadge />
				</div>
			)}

			<div className="flex gap-4 pr-20">
				<div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-center">
					<p className="text-xs font-black uppercase text-pink-200">
						{eventDateParts.month}
					</p>
					<p className="text-xl font-black text-white">{eventDateParts.day}</p>
				</div>

				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-start justify-between gap-2">
						<p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
							{event.type}
						</p>

						{!event.publicEvent && (
							<span className="rounded-full border border-yellow-300/20 bg-yellow-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-100">
								Privé
							</span>
						)}
					</div>

					<h3 className="mt-2 text-xl font-black leading-tight text-white">
						{event.title}
					</h3>

					{event.description && (
						<p className="mt-2 text-sm leading-relaxed text-gray-400">
							{event.description}
						</p>
					)}

					<div className="mt-3 space-y-1 text-sm text-gray-300">
						<p>
							{formatDate(event.date)} · {event.hour}
						</p>
						<p>
							{event.place} — {event.city}
						</p>
					</div>
				</div>
			</div>
		</motion.article>
	);
}

function PosterEventCard({ event }) {
	return (
		<motion.article
			variants={itemVariants}
			className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/[0.075]">
			<div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

			{event.isNew && (
				<div className="absolute right-4 top-4 z-30">
					<NewBadge />
				</div>
			)}

			<div className="relative overflow-hidden bg-black/30">
				<img
					src={event.poster}
					alt={`Affiche ${event.title}`}
					className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
				/>

				<div className="absolute bottom-3 left-3 z-20 rounded-2xl border border-white/10 bg-black/65 px-3 py-2 backdrop-blur">
					<p className="text-xs font-black uppercase tracking-[0.18em] text-pink-200">
						{getDateParts(event.date).month}
					</p>
					<p className="text-2xl font-black text-white">
						{getDateParts(event.date).day}
					</p>
				</div>
			</div>

			<div className="p-5">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
						{event.type}
					</p>

					{!event.publicEvent && (
						<span className="rounded-full border border-yellow-300/20 bg-yellow-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-100">
							Privé
						</span>
					)}
				</div>

				<h3 className="mt-3 text-xl font-black leading-tight text-white">
					{event.title}
				</h3>

				{event.description && (
					<p className="mt-3 max-h-20 overflow-hidden text-sm leading-relaxed text-gray-400">
						{event.description}
					</p>
				)}

				<div className="mt-4 space-y-1 text-sm text-gray-300">
					<p>
						{formatDate(event.date)} · {event.hour}
					</p>
					<p>
						{event.place} — {event.city}
					</p>
				</div>
			</div>
		</motion.article>
	);
}

function NextEventMap({ event }) {
	if (!event.publicEvent || (!event.address && !event.place)) return null;

	return (
		<div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-4">
			<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
						S’y rendre
					</p>
					<h4 className="mt-1 text-lg font-black text-white">{event.place}</h4>
					<p className="mt-1 text-sm text-gray-400">{event.city}</p>
				</div>

				<a
					href={getMapsSearchUrl(event)}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-gray-950 transition hover:bg-pink-100">
					Itinéraire
					<ArrowRightIcon className="h-4 w-4" />
				</a>
			</div>

			<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
				<iframe
					title={`Carte ${event.place}`}
					src={getMapsEmbedUrl(event)}
					className="h-44 w-full border-0"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	);
}

const AgendaSection = () => {
	const [showAllEvents, setShowAllEvents] = useState(false);

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const upcomingEvents = events
		.filter((event) => getLocalDate(event.date) >= today)
		.sort((a, b) => getLocalDate(a.date) - getLocalDate(b.date));

	const nextEvent = upcomingEvents[0];
	const visibleEvents = upcomingEvents.slice(1, 5);
	const hiddenEvents = upcomingEvents.slice(5);

	const hiddenEventsWithPoster = hiddenEvents.filter((event) => event.poster);
	const hiddenEventsWithoutPoster = hiddenEvents.filter(
		(event) => !event.poster,
	);

	if (!nextEvent) {
		return (
			<section
				id="agenda"
				className="relative scroll-mt-24 overflow-hidden bg-gray-900 px-4 py-16 text-white">
				<div className="relative z-10 mx-auto max-w-7xl text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
						<CalendarDaysIcon className="h-4 w-4" />
						Agenda
					</div>

					<h2 className="text-3xl font-black tracking-tight md:text-4xl">
						Les prochaines dates arrivent bientôt
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Les nouveaux événements Dydy Fantasy seront ajoutés prochainement.
					</p>
				</div>
			</section>
		);
	}

	return (
		<section
			id="agenda"
			className="relative overflow-hidden bg-gray-900 px-4 py-16 text-white">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

			<div className="pointer-events-none absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[-120px] bottom-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

			<div className="pointer-events-none absolute inset-0 opacity-[0.06]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1.5px)",
						backgroundSize: "22px 22px",
					}}
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
					className="mb-10 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
						<CalendarDaysIcon className="h-4 w-4" />
						Agenda
					</div>

					<h2 className="text-3xl font-black tracking-tight md:text-4xl">
						Mes prochaines prestations
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Retrouvez les prochaines soirées animées par Dydy Fantasy : blind
						tests, karaokés, quiz musicaux, événements privés et animations sur
						mesure.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
					<motion.article
						initial={{ opacity: 0, x: -45, scale: 0.97, filter: "blur(8px)" }}
						whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="group relative self-start overflow-hidden rounded-[2rem] border border-pink-300/25 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-xl md:p-6">
						<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

						{nextEvent.isNew && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
								whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
								viewport={{ once: false }}
								transition={{
									duration: 0.45,
									delay: 0.25,
									type: "spring",
									stiffness: 240,
									damping: 14,
								}}
								className="absolute right-4 top-5 z-30">
								<NewBadge large />
							</motion.div>
						)}

						<div className="relative z-10">
							<div
								className={`mb-5 flex flex-wrap items-center justify-between gap-3 ${
									nextEvent.isNew ? "md:pr-28" : ""
								}`}>
								<span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-pink-200">
									<SparklesIcon className="h-4 w-4" />
									Prochain événement
								</span>

								{!nextEvent.publicEvent && (
									<span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-100">
										<LockClosedIcon className="h-4 w-4" />
										Privé
									</span>
								)}
							</div>

							<div
								className={`grid grid-cols-1 gap-5 ${
									nextEvent.poster
										? "md:grid-cols-[200px_1fr]"
										: "md:grid-cols-[auto_1fr]"
								} md:items-start`}>
								{nextEvent.poster ? (
									<div className="relative mx-auto w-full max-w-[220px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl md:mx-0">
										<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

										<img
											src={nextEvent.poster}
											alt={`Affiche ${nextEvent.title}`}
											className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
											loading="lazy"
										/>

										<div className="absolute bottom-3 left-3 z-20 rounded-2xl border border-white/10 bg-black/65 px-3 py-2 text-left backdrop-blur">
											<p className="text-xs font-black uppercase tracking-[0.18em] text-pink-200">
												{getDateParts(nextEvent.date).month}
											</p>
											<p className="text-2xl font-black text-white">
												{getDateParts(nextEvent.date).day}
											</p>
										</div>
									</div>
								) : (
									<DateBox date={nextEvent.date} />
								)}

								<div>
									<p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
										{nextEvent.type}
									</p>

									<h3 className="mt-2 text-3xl font-black leading-tight text-white md:text-4xl">
										{nextEvent.title}
									</h3>

									{nextEvent.description && (
										<p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
											{nextEvent.description}
										</p>
									)}

									<div className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-300">
										<p className="flex items-center gap-2">
											<CalendarDaysIcon className="h-5 w-5 shrink-0 text-pink-300" />
											{formatDate(nextEvent.date)}
										</p>

										<p className="flex items-center gap-2">
											<ClockIcon className="h-5 w-5 shrink-0 text-purple-300" />
											{nextEvent.hour}
										</p>

										<p className="flex items-center gap-2">
											<MapPinIcon className="h-5 w-5 shrink-0 text-blue-300" />
											{nextEvent.place} — {nextEvent.city}
										</p>
									</div>

									<a
										href="/contact"
										className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-5 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.65)]">
										Réserver une animation
										<ArrowRightIcon className="h-4 w-4" />
									</a>
								</div>
							</div>

							<NextEventMap event={nextEvent} />
						</div>
					</motion.article>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						className="space-y-4">
						{visibleEvents.map((event) => (
							<SmallEventCard key={event.id} event={event} />
						))}
					</motion.div>
				</div>

				{hiddenEvents.length > 0 && (
					<div className="mt-8 text-center">
						<button
							type="button"
							onClick={() => setShowAllEvents((current) => !current)}
							className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white/75 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/30 hover:bg-pink-500/10 hover:text-white">
							{showAllEvents ? (
								<>
									Réduire l’agenda
									<ChevronUpIcon className="h-4 w-4" />
								</>
							) : (
								<>
									Afficher les autres événements
									<ChevronDownIcon className="h-4 w-4" />
								</>
							)}
						</button>
					</div>
				)}

				<AnimatePresence>
					{showAllEvents && hiddenEvents.length > 0 && (
						<motion.div
							initial={{ opacity: 0, height: 0, y: 20 }}
							animate={{ opacity: 1, height: "auto", y: 0 }}
							exit={{ opacity: 0, height: 0, y: 20 }}
							transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
							className="overflow-hidden">
							<div className="mt-10">
								{hiddenEventsWithPoster.length > 0 && (
									<>
										<h3 className="mb-6 text-center text-2xl font-black text-white">
											Les autres affiches à venir
										</h3>

										<motion.div
											variants={containerVariants}
											initial="hidden"
											animate="visible"
											className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
											{hiddenEventsWithPoster.map((event) => (
												<PosterEventCard key={event.id} event={event} />
											))}
										</motion.div>
									</>
								)}

								{hiddenEventsWithoutPoster.length > 0 && (
									<div className="mt-8">
										<h3 className="mb-5 text-center text-xl font-black text-white">
											Autres dates confirmées
										</h3>

										<motion.div
											variants={containerVariants}
											initial="hidden"
											animate="visible"
											className="grid grid-cols-1 gap-4 lg:grid-cols-2">
											{hiddenEventsWithoutPoster.map((event) => (
												<SmallEventCard key={event.id} event={event} />
											))}
										</motion.div>
									</div>
								)}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default AgendaSection;
