import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import hand from "../assets/hand.ico";
import quizBlindTestIco from "../assets/quiz-blindtest.png";
import karaokeIco from "../assets/karaoke-ico.png";
import DJIco from "../assets/DJ-ico.webp";
import FeteIco from "../assets/Fete-ico.webp";

const themes = {
	red: {
		border: "border-red-400/40",
		background: "bg-red-500/10",
		glow: "bg-red-500/25",
		gradient: "from-red-500 via-pink-500 to-rose-500",
		shadow: "shadow-[0_0_32px_rgba(239,68,68,0.28)]",
	},
	green: {
		border: "border-emerald-400/40",
		background: "bg-emerald-500/10",
		glow: "bg-emerald-500/25",
		gradient: "from-emerald-400 via-lime-400 to-green-500",
		shadow: "shadow-[0_0_32px_rgba(16,185,129,0.28)]",
	},
	blue: {
		border: "border-sky-400/40",
		background: "bg-sky-500/10",
		glow: "bg-sky-500/25",
		gradient: "from-sky-400 via-blue-500 to-indigo-500",
		shadow: "shadow-[0_0_32px_rgba(59,130,246,0.28)]",
	},
	yellow: {
		border: "border-yellow-300/40",
		background: "bg-yellow-500/10",
		glow: "bg-yellow-400/25",
		gradient: "from-yellow-300 via-orange-400 to-pink-500",
		shadow: "shadow-[0_0_32px_rgba(250,204,21,0.25)]",
	},
};

const cardContent = {
	red: {
		description:
			"Une animation façon game show : vos invités participent en direct depuis leur téléphone ou avec des buzzers.\n Manches thématiques, scores en temps réel, relances micro et ambiance garantie.",
		icon: quizBlindTestIco,
	},
	green: {
		description:
			"Une animation conviviale avec gestion des passages, relances micro, duos, battles et playlists thématiques. Parfait pour créer des moments drôles et fédérateurs.",
		icon: karaokeIco,
	},
	blue: {
		description:
			"Une prestation musicale adaptée à votre public, avec une sélection pensée pour accompagner les temps forts et faire monter l’ambiance au bon moment.",
		icon: DJIco,
	},
	yellow: {
		description:
			"Loto revisité, murder party, escape game, jeux d’équipe ou soirée à thème : le format est personnalisé selon votre lieu, votre public et votre objectif.",
		icon: FeteIco,
	},
};

const Card = ({ color = "red", front, letter }) => {
	const [isActive, setIsActive] = useState(false);

	const theme = themes[color] || themes.red;
	const content = cardContent[color] || cardContent.red;

	const toggleCard = (event) => {
		if (event.target instanceof HTMLElement && event.target.closest("a")) {
			return;
		}

		setIsActive((current) => !current);
	};

	return (
		<motion.article
			tabIndex={0}
			onPointerEnter={(event) => {
				if (event.pointerType === "mouse") setIsActive(true);
			}}
			onPointerLeave={(event) => {
				if (event.pointerType === "mouse") setIsActive(false);
			}}
			onClick={toggleCard}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					setIsActive((current) => !current);
				}
			}}
			whileHover={{ y: -6 }}
			transition={{ type: "spring", stiffness: 260, damping: 22 }}
			className={`
				group relative h-[230px] w-full min-w-0 cursor-pointer overflow-hidden rounded-3xl
				border ${theme.border} ${theme.background} ${theme.shadow}
				p-5 text-white outline-none backdrop-blur-xl
				transition-all duration-300
				hover:border-white/40 hover:bg-white/[0.08]
				focus-visible:ring-2 focus-visible:ring-white/60
			`}>
			<div
				className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.gradient}`}
			/>

			<div
				className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full ${theme.glow} blur-3xl transition-all duration-500 group-hover:scale-125`}
			/>

			<div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

			<div className="relative z-10 flex h-full flex-col">
				{/* Lettre + icône */}
				<div className="flex items-start justify-between">
					<div
						className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${theme.gradient} text-xl font-black text-white shadow-lg`}>
						{letter}
					</div>

					<img
						src={content.icon}
						alt=""
						aria-hidden="true"
						className="h-12 w-12 shrink-0 object-contain opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
					/>
				</div>

				{/* Contenu animé */}
				<div className="flex flex-1 items-center justify-center px-2 text-center">
					<AnimatePresence mode="wait">
						{isActive ? (
							<motion.div
								key="description"
								initial={{
									opacity: 0,
									y: 18,
									scale: 0.97,
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
									y: -18,
									scale: 0.97,
									filter: "blur(8px)",
								}}
								transition={{ duration: 0.25 }}
								className="w-full">
								<p className="text-sm leading-relaxed text-gray-200 md:text-[15px]">
									{content.description}
								</p>
							</motion.div>
						) : (
							<motion.div
								key="title"
								initial={{
									opacity: 0,
									y: 18,
									scale: 0.97,
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
									y: -18,
									scale: 0.97,
									filter: "blur(8px)",
								}}
								transition={{ duration: 0.25 }}
								className="w-full">
								<h3 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
									{front}
								</h3>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Bas de carte */}
				<div className="flex items-center justify-between">
					<AnimatePresence mode="wait">
						{isActive ? (
							<motion.a
								key="devis"
								href="/contact"
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 8 }}
								transition={{ duration: 0.2 }}
								className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-gray-950 transition hover:bg-pink-100">
								<EnvelopeIcon className="h-4 w-4" />
								Devis
							</motion.a>
						) : (
							<motion.div
								key="discover"
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 8 }}
								transition={{ duration: 0.2 }}
								className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-white/55 transition group-hover:text-white">
								Découvrir
								<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</motion.div>
						)}
					</AnimatePresence>

					{!isActive && (
						<motion.img
							src={hand}
							alt=""
							aria-hidden="true"
							className="h-7 w-7 rotate-[-18deg] opacity-90 brightness-0 invert"
							animate={{
								y: [0, -4, 0],
								rotate: [-18, -10, -18],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					)}
				</div>
			</div>
		</motion.article>
	);
};

export default Card;
