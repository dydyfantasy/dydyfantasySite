import Card from "./Card";
import NeonArcadeText from "./NeonArcadeText";
import dydyImage from "../assets/dydy_fantasy_degrade.webp";
import {
	CalendarDaysIcon,
	ChevronDownIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

// Une seule source de contenu : les descriptions sont désormais lues par Card.
// Pour le moment, les cartes dirigent vers /prestations ; adapter les URLs
// lorsque les pages /blind-test, /karaoke, /dj... existeront.
const cards = [
	{
		letter: "A",
		color: "red",
		front: "Quiz / Blind Test",
		back: "Une animation façon game show : vos invités jouent depuis leur téléphone ou avec des buzzers. Manches thématiques, classements en direct et ambiance au micro.",
		href: "/prestations",
	},
	{
		letter: "B",
		color: "green",
		front: "Karaoké",
		back: "Micros ouverts, duos, battles et chansons cultes : une animation conviviale où tout le monde peut participer.",
		href: "/prestations",
	},
	{
		letter: "C",
		color: "blue",
		front: "Soirée DJ",
		back: "Une programmation musicale adaptée à votre public et aux temps forts de l'événement, pour faire monter l'énergie au bon moment.",
		href: "/prestations",
	},
	{
		letter: "D",
		color: "yellow",
		front: "Évènement sur mesure",
		back: "Je construis une animation adaptée à votre lieu, votre public et vos envies : jeux, soirée à thème ou combinaison de plusieurs formats.",
		href: "/prestations",
	},
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
	},
};

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 px-4 pb-16 pt-14 text-white md:pt-20">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.24),transparent_35%)]"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"
			/>
			<motion.img
				src={dydyImage}
				alt=""
				aria-hidden="true"
				fetchPriority="high"
				className="pointer-events-none absolute left-1/2 top-[45%] -z-10 w-[320px] -translate-x-1/2 -translate-y-1/2 opacity-20 sm:w-[460px] md:w-[620px]"
				initial={{ opacity: 0, scale: 0.92 }}
				animate={{ opacity: 0.2, scale: 1 }}
				transition={{ duration: 0.8 }}
			/>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
				<motion.div variants={itemVariants} className="w-full">
					<h1 className="mx-auto flex max-w-5xl flex-col items-center gap-4">
						<NeonArcadeText text="DYDY FANTASY" />
						<span className="text-base font-bold tracking-tight text-white md:text-xl">
							Blind test, quiz, karaoké et DJ à Toulouse
						</span>
					</h1>
					<p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-lg">
						Des animations interactives et sur mesure, pour que vos invités ne
						soient pas seulement spectateurs.
					</p>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="mt-8 w-full max-w-4xl rounded-2xl border border-white/10 bg-black/30 px-4 py-5 shadow-xl backdrop-blur-md md:mt-10 md:px-8">
					<p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-pink-300">
						Question 01 / 01
					</p>
					<h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
						Quel type d’animation recherchez-vous ?
					</h2>
					<p className="mt-2 text-sm text-gray-300">
						Sélectionnez une réponse pour découvrir l'expérience.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					className="relative z-20 mt-6 grid w-full max-w-5xl grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:gap-5">
					{cards.map((card) => (
						<motion.div
							key={card.letter}
							variants={itemVariants}
							className="relative min-w-0 hover:z-30">
							<Card {...card} />
						</motion.div>
					))}
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a
						href="/contact"
						className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 text-base font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.6)]">
						<SparklesIcon className="h-5 w-5" />
						Demander un devis
					</a>
					<a
						href="#agenda"
						className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
						<CalendarDaysIcon className="h-5 w-5" />
						Voir l'agenda
					</a>
				</motion.div>

				<motion.a
					variants={itemVariants}
					href="#agenda"
					aria-label="Descendre vers l'agenda"
					className="mt-8 hidden items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 md:inline-flex">
					Défiler <ChevronDownIcon className="h-4 w-4" />
				</motion.a>
			</motion.div>
		</section>
	);
}
