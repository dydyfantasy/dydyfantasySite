import { useState } from "react";
import { Link } from "react-router";
import {
	ArrowRightIcon,
	CalendarDaysIcon,
	SparklesIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import scene640 from "../../assets/hero/hero-scene-640.webp";
import scene1024 from "../../assets/hero/hero-scene-1024.webp";
import scene1536 from "../../assets/hero/hero-scene-1536.webp";
import quizIcon from "../../assets/icons/quiz.webp";
import karaokeIcon from "../../assets/icons/karaoke.webp";
import djIcon from "../../assets/icons/dj.webp";
import feteIcon from "../../assets/icons/fete.webp";
// Provisoire : logo complet en attendant le logo « DYDY FANTASY » seul
import logo from "/dydy_fantasy_logo-v3.webp";

// Les 4 réponses du quiz (textes repris des cartes d'origine).
// Les liens pointeront vers /prestations/... quand ces pages existeront.
const ANSWERS = [
	{
		letter: "A",
		label: "Quiz / Blind test",
		color: "#ff4d6d",
		icon: quizIcon,
		text: "Une animation façon game show : vos invités participent en direct depuis leur téléphone ou avec des buzzers. Manches thématiques, scores en temps réel et ambiance garantie.",
		href: "/prestations",
	},
	{
		letter: "B",
		label: "Karaoké",
		color: "#3ddc84",
		icon: karaokeIcon,
		text: "Relances micro, duos, battles et playlists thématiques : des moments drôles et fédérateurs où tout le monde participe.",
		href: "/prestations",
	},
	{
		letter: "C",
		label: "Soirée DJ",
		color: "#19d3f0",
		icon: djIcon,
		text: "Une sélection musicale adaptée à votre public, pensée pour accompagner les temps forts et faire monter l'ambiance au bon moment.",
		href: "/prestations",
	},
	{
		letter: "D",
		label: "Sur mesure",
		color: "#ffc93c",
		icon: feteIcon,
		text: "Loto revisité, murder party, escape game, jeux d'équipe ou soirée à thème : le format est personnalisé selon votre lieu, votre public et votre objectif.",
		href: "/prestations",
	},
];

function ScenePhoto({ className = "" }) {
	return (
		<img
			src={scene1536}
			srcSet={`${scene640} 640w, ${scene1024} 1024w, ${scene1536} 1536w`}
			sizes="100vw"
			width="1536"
			height="1149"
			alt="Dydy Fantasy de dos, veste à paillettes, aux platines face à une salle des fêtes pleine pendant une soirée blind test et karaoké"
			fetchPriority="high"
			decoding="async"
			className={className}
		/>
	);
}

// Hero de l'accueil : photo pleine largeur (Dydy à gauche), texte et quiz à droite
// sur la zone du public. Visible dès le HTML pré-rendu pour un LCP rapide.
export default function HeroLed() {
	const [selected, setSelected] = useState(null);
	const answer = ANSWERS.find((a) => a.letter === selected);

	return (
		<section className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			{/* ---- Photo : en haut sur mobile, pleine largeur en fond sur ordinateur ---- */}
			<div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:-z-20 md:aspect-auto">
				<ScenePhoto className="h-full w-full object-cover object-[22%_70%] saturate-[1.2] md:object-[0%_62%]" />
				{/* Mobile : fondu vers le bas ; ordinateur : assombrissement vers la droite */}
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-[linear-gradient(180deg,rgb(5_4_10/0.25)_0%,transparent_30%,transparent_60%,var(--ink)_100%)] md:bg-[linear-gradient(90deg,transparent_0%,transparent_30%,rgb(5_4_10/0.75)_50%,rgb(5_4_10/0.92)_65%)]"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgb(5_4_10/0.5)_0%,transparent_22%,transparent_75%,rgb(5_4_10/0.9)_100%)] md:block"
				/>
			</div>

			{/* Lumières d'ambiance (dégradés fixes, pas de flou) */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgb(25_211_240/0.16),transparent_45%),radial-gradient(ellipse_at_70%_100%,rgb(255_47_174/0.18),transparent_50%)]"
			/>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="light-beam h-full w-[200%] -translate-x-1/4" />
			</div>

			<div className="mx-auto max-w-6xl px-4 pb-12 md:flex md:min-h-[min(88svh,820px)] md:items-center md:py-14">
				<div className="-mt-6 md:mt-0 md:ml-auto md:w-[50%] lg:w-[46%]">
					{/* Logo + titre SEO (le H1 est le texte, le logo une image) */}
					<img
						src={logo}
						alt="Dydy Fantasy"
						width="1782"
						height="396"
						className="relative h-auto w-full max-w-[30rem]"
					/>
					<h1 className="mt-3 text-xl font-semibold text-white md:text-2xl">
						Blind test, quiz, karaoké & DJ à Toulouse
					</h1>
					<p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
						Des animations interactives et sur mesure, pour que vos invités ne
						soient pas seulement spectateurs.
					</p>

					{/* ---- Quiz ---- */}
					<h2 className="mt-7 text-lg font-bold md:text-xl">
						Quel type d’animation{" "}
						<span className="text-[var(--cyan)]">recherchez-vous&nbsp;?</span>
					</h2>

					<div className="mt-3 grid grid-cols-2 gap-2.5">
						{ANSWERS.map((a) => (
							<button
								key={a.letter}
								type="button"
								aria-pressed={selected === a.letter}
								onClick={() => setSelected(a.letter)}
								style={{ "--c": a.color }}
								className="answer-btn flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-3 text-left text-sm font-semibold md:text-[0.95rem]">
								<span className="answer-letter flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
									{a.letter}
								</span>
								<img src={a.icon} alt="" width="56" height="56" className="h-6 w-6 shrink-0 object-contain" />
								<span className="truncate">{a.label}</span>
							</button>
						))}
					</div>

					<div className="mt-3 min-h-[5.5rem] text-sm leading-relaxed" aria-live="polite">
						{answer ? (
							<div key={answer.letter} className="answer-pop">
								<p className="text-white/85">{answer.text}</p>
								<Link
									to={answer.href}
									className="mt-1.5 inline-flex items-center gap-1.5 font-semibold text-[var(--cyan)] hover:text-white">
									Découvrir
									<ArrowRightIcon className="h-4 w-4" />
								</Link>
							</div>
						) : (
							<p className="pt-1 text-white/55">
								Choisissez une réponse pour découvrir l’expérience.
							</p>
						)}
					</div>

					{/* Appels à l'action */}
					<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
						<a
							href="/contact"
							className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3 font-bold text-white">
							<SparklesIcon className="h-5 w-5" />
							Demander un devis
						</a>
						<a
							href="#agenda"
							className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
							<CalendarDaysIcon className="h-5 w-5" />
							Voir l'agenda
						</a>
					</div>
					<a
						href="#avis"
						className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 hover:text-white">
						<span className="flex text-[var(--gold)]" aria-hidden="true">
							{[0, 1, 2, 3, 4].map((i) => (
								<StarIcon key={i} className="h-4 w-4" />
							))}
						</span>
						72 avis Google · 5/5
					</a>
				</div>
			</div>
		</section>
	);
}
