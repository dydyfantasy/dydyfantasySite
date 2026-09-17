import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	CalendarDaysIcon,
	ClockIcon,
	MapPinIcon,
	XMarkIcon,
	ArrowRightIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";

const events = window.DYDY_EVENTS || [];

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
		weekday: "short",
		day: "numeric",
		month: "short",
	});
}

const FloatingNextEvent = () => {
	const [isVisible, setIsVisible] = useState(true);

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const nextEvent = events
		.filter((event) => getLocalDate(event.date) >= today)
		.sort((a, b) => getLocalDate(a.date) - getLocalDate(b.date))[0];

	if (!nextEvent) return null;

	const dateParts = getDateParts(nextEvent.date);

	return (
		<AnimatePresence>
			{isVisible && (
				<>
					{/* Version mobile : petite icône compacte */}
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.9 }}
						transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
						className="fixed bottom-5 left-5 z-40 md:hidden">
						<div className="relative">
							<button
								type="button"
								onClick={() => setIsVisible(false)}
								aria-label="Fermer le prochain événement"
								className="absolute -right-2 -top-2 z-20 rounded-full border border-white/10 bg-gray-950 p-1 text-white/70 shadow-lg transition hover:bg-white/10 hover:text-white">
								<XMarkIcon className="h-3.5 w-3.5" />
							</button>

							<a
								href="/#agenda"
								aria-label="Voir le prochain événement"
								className="group flex h-16 w-16 flex-col items-center justify-center rounded-full border border-pink-300/30 bg-gray-950/95 text-white shadow-[0_0_30px_rgba(236,72,153,0.45)] backdrop-blur-xl transition hover:scale-105">
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20" />

								<div className="relative z-10 flex flex-col items-center leading-none">
									<CalendarDaysIcon className="mb-0.5 h-5 w-5 text-pink-200" />

									<span className="text-[10px] font-black uppercase text-pink-200">
										{dateParts.month}
									</span>

									<span className="text-lg font-black text-white">
										{dateParts.day}
									</span>
								</div>

								{nextEvent.isNew && (
									<span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-pink-500 shadow-[0_0_14px_rgba(236,72,153,0.9)]" />
								)}
							</a>
						</div>
					</motion.div>

					{/* Version desktop : card complète */}
					<motion.div
						initial={{
							opacity: 0,
							y: 30,
							scale: 0.95,
							filter: "blur(8px)",
						}}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							filter: "blur(0px)",
						}}
						exit={{
							opacity: 0,
							y: 20,
							scale: 0.95,
							filter: "blur(8px)",
						}}
						transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
						className="fixed bottom-28 right-6 z-40 hidden w-[360px] overflow-hidden rounded-3xl border border-pink-300/25 bg-gray-950/90 text-white shadow-[0_0_40px_rgba(236,72,153,0.35)] backdrop-blur-xl md:block">
						<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

						<div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-pink-500/25 blur-3xl" />
						<div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

						<button
							type="button"
							onClick={() => setIsVisible(false)}
							aria-label="Fermer le prochain événement"
							className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-black/35 p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white">
							<XMarkIcon className="h-4 w-4" />
						</button>

						<a href="/#agenda" className="relative z-10 block p-4 pr-11">
							<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-pink-200">
								<SparklesIcon className="h-3.5 w-3.5" />
								Prochain événement
							</div>

							<div className="flex gap-3">
								{nextEvent.poster ? (
									<img
										src={nextEvent.poster}
										alt={`Affiche ${nextEvent.title}`}
										className="h-24 w-20 shrink-0 rounded-2xl border border-white/10 object-cover"
										loading="lazy"
									/>
								) : (
									<div className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-center">
										<p className="text-xs font-black uppercase text-pink-200">
											{dateParts.month}
										</p>
										<p className="text-2xl font-black text-white">
											{dateParts.day}
										</p>
									</div>
								)}

								<div className="min-w-0 flex-1">
									<p className="text-xs font-black uppercase tracking-[0.16em] text-white/45">
										{nextEvent.type}
									</p>

									<h3 className="mt-1 line-clamp-2 text-base font-black leading-tight text-white">
										{nextEvent.title}
									</h3>

									<div className="mt-2 space-y-1 text-xs text-gray-300">
										<p className="flex items-center gap-1.5">
											<CalendarDaysIcon className="h-4 w-4 shrink-0 text-pink-300" />
											{formatDate(nextEvent.date)}
										</p>

										<p className="flex items-center gap-1.5">
											<ClockIcon className="h-4 w-4 shrink-0 text-purple-300" />
											{nextEvent.hour}
										</p>

										<p className="flex items-center gap-1.5">
											<MapPinIcon className="h-4 w-4 shrink-0 text-blue-300" />
											<span className="truncate">
												{nextEvent.place} — {nextEvent.city}
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-pink-200">
								Voir l’agenda
								<ArrowRightIcon className="h-4 w-4" />
							</div>
						</a>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default FloatingNextEvent;
