import Card from "./Card";
import dydyImage from "../assets/dydy_fantasy_degrade.webp";
import NeonArcadeText from "./NeonArcadeText";
import {
	SparklesIcon,
	CalendarDaysIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const cards = [
	{
		color: "red",
		letter: "A",
		front: "Un Quiz / Blind Test",
		back: "Faites participer votre public grâce à une animation originale où chacun devient acteur. Idéal pour briser la glace et créer une ambiance inoubliable lors de vos soirées, mariages ou événements d’entreprise à Toulouse. Accessible via téléphone ou buzzers, sans limite de participants.",
	},
	{
		color: "green",
		letter: "B",
		front: "Un Karaoké",
		back: "Une animation conviviale et fédératrice pour faire chanter vos invités, créer des moments drôles et lancer une ambiance festive.",
	},
	{
		color: "blue",
		letter: "C",
		front: "Un DJ",
		back: "Une ambiance musicale adaptée à votre public, avec une sélection pensée pour faire monter l’énergie au bon moment.",
	},
	{
		color: "yellow",
		letter: "D",
		front: "Un Évènement sur mesure",
		back: "Une prestation personnalisée selon votre lieu, votre public, vos objectifs et le style d’ambiance recherché.",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.14,
			delayChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 55,
		scale: 0.97,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.75,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

const Hero = () => {
	return (
		<section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 px-4 pt-20 pb-14 text-white md:pt-24 md:pb-16 lg:pt-10 lg:pb-14">
			{" "}
			{/* Fond lumineux */}
			<div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.24),transparent_35%)]" />
			{/* Grille légère façon arcade */}
			<div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
			{/* Halo central animé */}
			<motion.div
				aria-hidden="true"
				className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-3xl"
				animate={{
					scale: [1, 1.12, 1],
					opacity: [0.4, 0.7, 0.4],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			{/* Image de fond Dydy */}
			<motion.img
				src={dydyImage}
				alt=""
				aria-hidden="true"
				fetchPriority="high"
				className="pointer-events-none absolute left-1/2 top-[48%] -z-10 w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[1px] sm:w-[460px] md:w-[620px]"
				initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
				animate={{ opacity: 0.22, scale: 1, rotate: 0 }}
				transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
			/>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="flex w-full flex-col items-center text-center">
					{/* Titre principal néon */}
					<motion.div variants={itemVariants}>
						<NeonArcadeText text="DYDY FANTASY" />
					</motion.div>

					<h1 className="sr-only">
						Dydy Fantasy, animateur événementiel à Toulouse
					</h1>

					{/* Accroche */}
					<motion.div
						variants={itemVariants}
						className="mt-5 max-w-4xl space-y-2">
						<p className="text-lg font-semibold leading-relaxed text-white md:text-2xl">
							Bien plus qu’un animateur à Toulouse et ses environs.
						</p>

						<p className="text-base leading-relaxed text-gray-300 md:text-xl">
							Des animations interactives, musicales et sur mesure pour vos
							soirées, mariages, bars, restaurants et événements privés.
						</p>
					</motion.div>

					{/* Question */}
					<motion.h2
						variants={itemVariants}
						className="mt-8 text-2xl font-black tracking-tight text-white md:text-4xl">
						Vous recherchez ?
					</motion.h2>

					{/* Cartes */}
					<motion.div
						variants={containerVariants}
						className="relative z-20 mt-8 grid w-full max-w-5xl grid-cols-1 gap-5 overflow-visible sm:grid-cols-2 lg:gap-6">
						{cards.map((card) => (
							<motion.div
								key={card.letter}
								variants={itemVariants}
								className="relative z-10 min-w-0 hover:z-50">
								<Card
									color={card.color}
									front={card.front}
									back={card.back}
									letter={card.letter}
								/>
							</motion.div>
						))}
					</motion.div>

					{/* Boutons */}
					<motion.div
						variants={itemVariants}
						className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="/contact"
							className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 text-lg font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.75)]">
							<SparklesIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
							Demander un devis
						</a>

						<a
							href="#agenda"
							className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-3 text-lg font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
							<CalendarDaysIcon className="h-5 w-5" />
							Voir l’agenda
						</a>
					</motion.div>
				</motion.div>
			</div>
			{/* Indicateur scroll */}
			<motion.a
				href="#agenda"
				aria-label="Descendre vers l’agenda"
				className="absolute bottom-0 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-gray-300 md:flex"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 7, 0] }}
				transition={{
					opacity: { delay: 1.2, duration: 0.6 },
					y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
				}}>
				Scroll
				<ChevronDownIcon className="h-5 w-5" />
			</motion.a>
		</section>
	);
};

export default Hero;
