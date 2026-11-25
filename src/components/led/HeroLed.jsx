import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
	ArrowRightIcon,
	CalendarDaysIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import scene640 from "../../assets/hero/hero-scene-640.webp";
import scene768 from "../../assets/hero/hero-scene-768.webp";
import scene1024 from "../../assets/hero/hero-scene-1024.webp";
import scene1536 from "../../assets/hero/hero-scene-1536.webp";
import {
	MicrophoneIcon,
	MusicalNoteIcon,
	PuzzlePieceIcon,
	TrophyIcon,
} from "@heroicons/react/24/outline";
import logo480 from "../../assets/brand/logo-texte-480.webp";
import tete64 from "../../assets/brand/perso-tete-64.webp";
import tete128 from "../../assets/brand/perso-tete-128.webp";
import logo640 from "../../assets/brand/logo-texte-640.webp";
import logo960 from "../../assets/brand/logo-texte-960.webp";
import Spectrum from "./Spectrum";

const COUNTDOWN = 10;

// Les 4 réponses du quiz (textes repris des cartes d’origine).
// Les liens pointeront vers /prestations/... quand ces pages existeront.
const ANSWERS = [
	{
		letter: "A",
		label: "Quiz / Blind test",
		color: "#ff4d6d",
		icon: TrophyIcon,
		cta: "Découvrir le blind test",
		href: "/prestations/blind-test-quiz",
		text: "Une animation façon game show : vos invités participent en direct depuis leur téléphone, qui devient leur buzzer grâce à Dydy Quiz, mon appli maison. Manches thématiques, scores en temps réel et ambiance garantie.",
	},
	{
		letter: "B",
		label: "Karaoké",
		color: "#3ddc84",
		icon: MicrophoneIcon,
		cta: "Découvrir le karaoké",
		href: "/prestations/karaoke",
		text: "Relances micro, duos, battles et playlists thématiques : des moments drôles et fédérateurs où tout le monde participe.",
	},
	{
		letter: "C",
		label: "Soirée DJ",
		color: "#19d3f0",
		icon: MusicalNoteIcon,
		cta: "Découvrir la soirée DJ",
		href: "/prestations/dj",
		text: "Une sélection musicale adaptée à votre public, pensée pour accompagner les temps forts et faire monter l’ambiance au bon moment.",
	},
	{
		letter: "D",
		label: "Sur mesure",
		color: "#ffc93c",
		icon: PuzzlePieceIcon,
		cta: "Découvrir le sur-mesure",
		href: "/prestations/sur-mesure",
		text: "Loto revisité, murder party, escape game, jeux d’équipe ou soirée à thème : le format est personnalisé selon votre lieu, votre public et votre objectif.",
	},
];

// Confettis de la « bonne réponse » : 18 particules projetées en cercle (calcul fait une fois).
const PARTICLES = Array.from({ length: 18 }, (_, i) => {
	const angle = (i / 18) * Math.PI * 2 + (i % 2 ? 0.2 : -0.1);
	const dist = 70 + (i % 3) * 28;
	return {
		x: Math.round(Math.cos(angle) * dist),
		y: Math.round(Math.sin(angle) * dist * 0.75) - 20,
		r: (i * 47) % 360,
		white: i % 3 === 0,
		gold: i % 5 === 0,
	};
});

function ScenePhoto({ className = "" }) {
	return (
		<img
			src={scene1536}
			srcSet={`${scene640} 640w, ${scene768} 768w, ${scene1024} 1024w, ${scene1536} 1536w`}
			// Mobile : on annonce 87vw au lieu de 100vw pour qu’un écran haute densité (x3) prenne
			// la version 1024 (162 Ko) plutôt que 1536 (314 Ko) : différence invisible, image principale plus rapide.
			sizes="(max-width: 767px) 87vw, 100vw"
			width="1536"
			height="1149"
			alt="Dydy Fantasy de dos, veste à paillettes, aux platines face à une salle des fêtes pleine pendant une soirée blind test et karaoké"
			fetchPriority="high"
			decoding="async"
			className={className}
		/>
	);
}

// Hero de l’accueil : photo pleine largeur (Dydy à gauche), texte et quiz à droite
// sur la zone du public. Visible dès le HTML pré-rendu pour un LCP rapide.
export default function HeroLed() {
	const [selected, setSelected] = useState(null);
	const [burst, setBurst] = useState(null);
	const [seconds, setSeconds] = useState(COUNTDOWN);
	const gridRef = useRef(null);
	const answer = ANSWERS.find((a) => a.letter === selected);

	// Compte à rebours façon jeu télé (10 → 0, « Temps écoulé ! », puis ça repart) tant qu’on n’a pas répondu.
	// Le HTML pré-rendu affiche « 10 » et la barre pleine.
	useEffect(() => {
		if (selected || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => setSeconds((s) => (s <= 0 ? COUNTDOWN : s - 1)), 1000);
		return () => window.clearInterval(id);
	}, [selected]);
	const timeUp = !answer && seconds === 0;

	// Réponse choisie : confettis depuis le bouton cliqué (sauf si l’utilisateur limite les animations)
	function choose(a, event) {
		setSelected(a.letter);
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !gridRef.current) return;
		const grid = gridRef.current.getBoundingClientRect();
		const btn = event.currentTarget.getBoundingClientRect();
		setBurst({
			id: Date.now(),
			x: btn.left + btn.width / 2 - grid.left,
			y: btn.top + btn.height / 2 - grid.top,
			color: a.color,
		});
	}

	return (
		<section className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			{/* ---- Photo : en haut sur mobile, pleine largeur en fond sur ordinateur ---- */}
			<div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:-z-20 md:aspect-auto">
				<ScenePhoto className="h-full w-full object-cover object-[22%_70%] saturate-[1.2] md:object-[0%_62%]" />
				{/* Trame de pixels façon mur LED */}
				<div aria-hidden="true" className="led-pixels absolute inset-0" />
				{/* Mobile : fondu vers le bas ; ordinateur : assombrissement vers la droite */}
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-[linear-gradient(180deg,rgb(5_4_10/0.25)_0%,transparent_30%,transparent_60%,var(--ink)_100%)] md:bg-[linear-gradient(90deg,transparent_0%,transparent_30%,rgb(5_4_10/0.75)_50%,rgb(5_4_10/0.92)_65%)]"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgb(5_4_10/0.5)_0%,transparent_22%,transparent_75%,rgb(5_4_10/0.9)_100%)] md:block"
				/>
				{/* Mobile : spectre audio qui pulse en bas de la photo (au-dessus du fondu, sous le logo) */}
				<Spectrum className="absolute inset-x-0 bottom-0 flex h-16 md:hidden" />
			</div>

			{/* Lumières d’ambiance (dégradés fixes, pas de flou) */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgb(25_211_240/0.16),transparent_45%),radial-gradient(ellipse_at_70%_100%,rgb(255_47_174/0.18),transparent_50%)]"
			/>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="light-beam h-full w-[200%] -translate-x-1/4" />
			</div>
			{/* Ordinateur : spectre audio sur toute la largeur, en bas du hero */}
			<Spectrum className="absolute inset-x-0 bottom-0 -z-10 hidden h-32 md:flex" />

			<div className="mx-auto max-w-6xl px-4 pb-12 md:flex md:min-h-[min(88svh,820px)] md:items-center md:py-14">
				<div className="-mt-6 md:mt-0 md:ml-auto md:w-[50%] lg:w-[46%]">
					{/* Logo + titre SEO (le H1 est le texte, le logo une image) */}
					<img
						src={logo960}
						srcSet={`${logo480} 480w, ${logo640} 640w, ${logo960} 960w`}
						sizes="(min-width: 768px) 30rem, 85vw"
						alt="Dydy Fantasy"
						width="960"
						height="173"
						className="relative h-auto w-full max-w-[30rem]"
					/>
					<h1 className="mt-3 text-xl font-semibold text-white md:text-2xl">
						Blind test, quiz, karaoké & DJ à Toulouse
					</h1>
					<p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">
						Quiz, blind test, karaoké et DJ dans la même soirée : vos invités ne
						regardent pas la fête, ils la font.
					</p>

					{/* ---- Quiz ---- */}
					<div className="mt-8 flex items-center gap-3">
						{/* La mascotte « pose » la question */}
						<img
							src={tete64}
							srcSet={`${tete64} 1x, ${tete128} 2x`}
							alt=""
							width="64"
							height="64"
							// low : React ne la précharge plus en tête de page (sous la ligne de flottaison sur mobile)
							fetchPriority="low"
							className="h-12 w-12 rounded-full bg-[var(--ink)] ring-2 ring-[var(--pink)]"
						/>
						<p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)]">
							<span className="live-dot h-2 w-2 rounded-full bg-[var(--pink)]" aria-hidden="true" />
							Question 01 / 01
						</p>
					</div>
					<h2 className="mt-2 text-3xl font-extrabold leading-[1.05] tracking-tight md:text-4xl">
						Quel type d’animation{" "}
						<span className="quiz-question-accent text-[var(--cyan)]">recherchez-vous&nbsp;?</span>
					</h2>

					{/* Compte à rebours : chiffre + barre qui se vide, remplie de la couleur de la réponse choisie */}
					<div aria-hidden="true" className="mt-4 flex items-center gap-3">
						<span
							key={answer ? "ok" : seconds <= 3 ? `u${seconds}` : "n"}
							className={`quiz-count flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-extrabold tabular-nums ${
								!answer && seconds <= 3 ? "is-urgent" : ""
							}`}
							style={answer ? { "--c": answer.color } : undefined}>
							{answer ? "✓" : seconds}
						</span>
						<span className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
							<span
								className={`quiz-timer-fill block h-full rounded-full ${answer ? "is-done" : ""}`}
								style={{
									transform: `scaleX(${answer ? 1 : seconds / COUNTDOWN})`,
									...(answer ? { "--c": answer.color } : {}),
								}}
							/>
						</span>
					</div>

					<div
						ref={gridRef}
						className={`relative mt-4 grid grid-cols-2 gap-3 ${selected ? "" : "is-chasing"}`}>
						{ANSWERS.map((a, i) => (
							<button
								key={a.letter}
								type="button"
								aria-pressed={selected === a.letter}
								onClick={(event) => choose(a, event)}
								style={{ "--c": a.color, "--i": i }}
								className={`answer-btn answer-fill flex min-h-[4.25rem] items-center gap-3 rounded-2xl p-2.5 text-left text-sm font-extrabold uppercase tracking-wide md:p-3 md:text-base ${
									selected && selected !== a.letter ? "is-dimmed" : ""
								}`}>
								<span className="answer-letter flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold md:h-11 md:w-11">
									{a.letter}
								</span>
								<span className="leading-tight">{a.label}</span>
								<a.icon aria-hidden="true" className="answer-icon ml-auto hidden h-6 w-6 shrink-0 sm:block" />
							</button>
						))}
						{burst && (
							<span key={burst.id} aria-hidden="true" className="confetti-burst" style={{ left: burst.x, top: burst.y }}>
								{PARTICLES.map((p, i) => (
									<span
										key={i}
										className="confetti"
										style={{
											"--x": `${p.x}px`,
											"--y": `${p.y}px`,
											"--r": `${p.r}deg`,
											background: p.white ? "#fff" : p.gold ? "var(--gold)" : burst.color,
										}}
									/>
								))}
							</span>
						)}
					</div>

					<div className="mt-3 min-h-[9.5rem]">
						{/* Seul l’encart de réponse est annoncé aux lecteurs d’écran (pas le compte à rebours) */}
						<div aria-live="polite">
						{answer && (
							<div
								key={answer.letter}
								style={{ "--c": answer.color }}
								className="answer-pop answer-panel rounded-2xl p-4">
								{/* Clin d’œil : toutes les réponses sont bonnes */}
								<p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
									<span className="good-answer rounded-full px-2.5 py-0.5 text-[0.7rem] font-extrabold uppercase tracking-wider">
										✓ Bonne réponse !
									</span>
									<span className="answer-title text-sm font-bold uppercase tracking-wider">
										{answer.letter} · {answer.label}
									</span>
								</p>
								<p className="mt-1.5 text-[0.95rem] leading-relaxed text-white md:text-base">
									{answer.text}
								</p>
								<div className="mt-3 flex flex-wrap items-center gap-2.5">
									<Link
										to={answer.href}
										className="answer-cta inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold">
										{answer.cta}
										<ArrowRightIcon className="h-4 w-4" />
									</Link>
									<a
										href="/contact"
										className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:border-white/60">
										Demander mon devis
									</a>
								</div>
							</div>
						)}
						</div>
						{!answer &&
							(timeUp ? (
								<p key="time-up" className="answer-pop pt-1 text-sm font-bold text-[var(--pink)]">
									⏰ Temps écoulé… mais vous pouvez encore répondre 😉
								</p>
							) : (
								<p className="pt-1 text-sm text-white/60">
									👆 Choisissez une réponse pour découvrir l’expérience.
								</p>
							))}
					</div>

					{/* Appels à l’action */}
					<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
						<a
							href="/contact"
							className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3 font-bold text-white">
							Demander mon devis
							<ArrowRightIcon className="h-5 w-5" />
						</a>
						<a
							href="#agenda"
							className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
							<CalendarDaysIcon className="h-5 w-5" />
							Voir l’agenda
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
						4,9/5 · +70 avis Google
					</a>
				</div>
			</div>
		</section>
	);
}
