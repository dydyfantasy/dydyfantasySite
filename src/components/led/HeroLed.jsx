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

// Même contenu que l'ancien Hero ; les liens pointeront vers /prestations/...
// quand ces pages existeront.
const ANSWERS = [
	{
		letter: "A",
		label: "Quiz / Blind test",
		color: "#ff4d6d",
		text: "Une animation façon game show : vos invités jouent depuis leur téléphone ou avec des buzzers. Manches thématiques, classements en direct et ambiance au micro.",
		href: "/prestations",
	},
	{
		letter: "B",
		label: "Karaoké",
		color: "#7cff6b",
		text: "Micros ouverts, duos, battles et chansons cultes : une animation conviviale où tout le monde peut participer.",
		href: "/prestations",
	},
	{
		letter: "C",
		label: "Soirée DJ",
		color: "#19d3f0",
		text: "Une programmation musicale adaptée à votre public et aux temps forts de l'événement, pour faire monter l'énergie au bon moment.",
		href: "/prestations",
	},
	{
		letter: "D",
		label: "Sur mesure",
		color: "#ffc93c",
		text: "Je construis une animation adaptée à votre lieu, votre public et vos envies : jeux, soirée à thème ou combinaison de plusieurs formats.",
		href: "/prestations",
	},
];

const TICKER = [
	"Blind test",
	"Quiz",
	"Karaoké",
	"DJ",
	"Soirées sur mesure",
	"Toulouse",
	"Haute-Garonne",
	"Gers",
];

function ScenePhoto({ className = "" }) {
	return (
		<img
			src={scene1536}
			srcSet={`${scene640} 640w, ${scene1024} 1024w, ${scene1536} 1536w`}
			sizes="(min-width: 768px) 60vw, 100vw"
			width="1536"
			height="1149"
			alt="Dydy Fantasy de dos, veste à paillettes, aux platines face à une salle des fêtes pleine pendant une soirée blind test et karaoké"
			fetchPriority="high"
			decoding="async"
			className={className}
		/>
	);
}

// Hero de l'accueil : mur LED + quiz « Vous recherchez ? ».
// Tout est visible dès le HTML pré-rendu (pas d'animation d'apparition) pour un LCP rapide.
export default function HeroLed() {
	const [selected, setSelected] = useState(null);
	const answer = ANSWERS.find((a) => a.letter === selected);

	return (
		<section className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			{/* ---- Photo « mur LED » (ordinateur : colonne droite fondue) ---- */}
			<div
				aria-hidden="true"
				className="absolute inset-y-0 right-0 -z-20 hidden w-[62%] md:block md:[mask-image:linear-gradient(90deg,transparent_0%,black_30%)]">
				<ScenePhoto className="h-full w-full object-cover object-[0%_65%] saturate-[1.25]" />
				<div className="led-pixels absolute inset-0" />
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(5_4_10/0.55),transparent_30%,transparent_70%,rgb(5_4_10/0.85))]" />
				<div className="absolute inset-x-0 top-0 h-1/4 overflow-hidden">
					<div className="led-scan h-full w-full" />
				</div>
			</div>

			{/* Lumières d'ambiance (dégradés fixes, pas de flou) */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_10%_20%,rgb(25_211_240/0.18),transparent_45%),radial-gradient(ellipse_at_30%_95%,rgb(255_47_174/0.22),transparent_50%)]"
			/>
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="light-beam h-full w-[200%] -translate-x-1/4" />
			</div>

			<div className="mx-auto max-w-6xl px-4 pb-24 pt-8 md:pb-28 md:pt-12">
				<div className="max-w-[40rem]">
					{/* En direct */}
					<p className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
						<span className="eq flex h-3.5 items-end gap-[2px]" aria-hidden="true">
							<span className="h-full" />
							<span className="h-full" />
							<span className="h-full" />
							<span className="h-full" />
						</span>
						Animateur · Toulouse ouest
					</p>

					<h1 className="mt-5">
						<span className="flex flex-wrap items-baseline gap-x-4 leading-none">
							<span className="font-led led-glow-cyan text-[clamp(3.2rem,12vw,6.2rem)] tracking-tight">
								DYDY
							</span>
							<span className="font-brush neon-pink -rotate-3 text-[clamp(2.8rem,10vw,5.2rem)]">
								Fantasy
							</span>
						</span>
						<span className="mt-3 block text-lg font-semibold text-white/85 md:text-xl">
							Blind test, quiz, karaoké & DJ à Toulouse
						</span>
					</h1>

					{/* Photo sur mobile : écran LED encadré */}
					<div className="led-border mt-5 md:hidden">
						<div className="relative aspect-[2/1] overflow-hidden rounded-[1.15rem]">
							<ScenePhoto className="h-full w-full object-cover object-[16%_68%] saturate-[1.25]" />
							<div aria-hidden="true" className="led-pixels absolute inset-0" />
							<div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/3 overflow-hidden">
								<div className="led-scan h-full w-full" />
							</div>
						</div>
					</div>

					{/* ---- Quiz ---- */}
					<div className="led-border mt-7">
						<div className="rounded-[1.15rem] bg-[var(--ink-2)] p-4 md:p-5">
							<h2 className="text-xl font-bold leading-snug md:text-2xl">
								Quel type d’animation{" "}
								<span className="text-[var(--cyan)]">recherchez-vous&nbsp;?</span>
							</h2>

							<div className="mt-4 grid grid-cols-2 gap-3">
								{ANSWERS.map((a) => (
									<button
										key={a.letter}
										type="button"
										aria-pressed={selected === a.letter}
										onClick={() => setSelected(a.letter)}
										style={{ "--c": a.color }}
										className="led-tile flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold md:text-base">
										<span className="tile-letter font-led text-3xl leading-none md:text-4xl">
											{a.letter}
										</span>
										<span className="leading-tight">{a.label}</span>
									</button>
								))}
							</div>

							<div className="mt-4 min-h-[5.5rem] text-sm leading-relaxed md:text-[0.95rem]" aria-live="polite">
								{answer ? (
									<div key={answer.letter} className="answer-pop">
										<p className="text-white/85">{answer.text}</p>
										<Link
											to={answer.href}
											className="mt-2 inline-flex items-center gap-1.5 font-semibold text-[var(--cyan)] hover:text-white">
											Découvrir {answer.label.toLowerCase()}
											<ArrowRightIcon className="h-4 w-4" />
										</Link>
									</div>
								) : (
									<p className="pt-2 text-white/60">
										⚡ Choisissez une réponse pour découvrir l’expérience.
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Appels à l'action */}
					<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
						<a
							href="/contact"
							className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
							<SparklesIcon className="h-5 w-5" />
							Demander un devis
						</a>
						<a
							href="#agenda"
							className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
							<CalendarDaysIcon className="h-5 w-5" />
							Voir l'agenda
						</a>
						<a
							href="#avis"
							className="inline-flex items-center justify-center gap-1.5 px-2 py-2 text-sm font-semibold text-white/80 hover:text-white">
							<span className="flex text-[var(--gold)]" aria-hidden="true">
								{[0, 1, 2, 3, 4].map((i) => (
									<StarIcon key={i} className="h-4 w-4" />
								))}
							</span>
							72 avis · 5/5
						</a>
					</div>
				</div>
			</div>

			{/* ---- Bandeau façon enseigne LED ---- */}
			<div className="absolute inset-x-0 bottom-0 border-y border-white/10 bg-black/70 py-2.5">
				<div className="led-ticker" aria-hidden="true">
					{[0, 1].map((copy) => (
						<div key={copy} className="flex shrink-0">
							{TICKER.map((item, i) => (
								<span
									key={`${copy}-${item}`}
									className={`font-led flex items-center gap-5 px-5 text-lg uppercase md:text-xl ${
										i % 2 === 0 ? "led-glow-cyan" : "neon-pink"
									}`}>
									{item}
									<span className="text-white/40">•</span>
								</span>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
