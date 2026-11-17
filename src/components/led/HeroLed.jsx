import { CalendarDaysIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
import Card from "../Card";
import scene640 from "../../assets/hero/hero-scene-640.webp";
import scene1024 from "../../assets/hero/hero-scene-1024.webp";
import scene1536 from "../../assets/hero/hero-scene-1536.webp";
// Provisoire : logo complet en attendant le logo « DYDY FANTASY » seul
import logo from "/dydy_fantasy_logo-v3.webp";

// Cartes du quiz : identiques à l'ancien Hero (composant Card d'origine).
// Les liens pointeront vers /prestations/... quand ces pages existeront.
const cards = [
	{ letter: "A", color: "red", front: "Quiz / Blind Test", href: "/prestations" },
	{ letter: "B", color: "green", front: "Karaoké", href: "/prestations" },
	{ letter: "C", color: "blue", front: "Soirée DJ", href: "/prestations" },
	{ letter: "D", color: "yellow", front: "Évènement sur mesure", href: "/prestations" },
];

function ScenePhoto({ className = "" }) {
	return (
		<img
			src={scene1536}
			srcSet={`${scene640} 640w, ${scene1024} 1024w, ${scene1536} 1536w`}
			sizes="(min-width: 768px) 55vw, 100vw"
			width="1536"
			height="1149"
			alt="Dydy Fantasy de dos, veste à paillettes, aux platines face à une salle des fêtes pleine pendant une soirée blind test et karaoké"
			fetchPriority="high"
			decoding="async"
			className={className}
		/>
	);
}

// Hero de l'accueil : logo, photo de scène façon écran LED, quiz « Vous recherchez ? ».
// Visible dès le HTML pré-rendu (pas d'animation d'apparition sur le titre) pour un LCP rapide.
export default function HeroLed() {
	return (
		<section className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			{/* ---- Photo « écran LED » (ordinateur : colonne droite fondue) ---- */}
			<div
				aria-hidden="true"
				className="absolute inset-y-0 right-0 -z-20 hidden w-[55%] md:block md:[mask-image:linear-gradient(90deg,transparent_0%,black_30%)]">
				<ScenePhoto className="h-full w-full object-cover object-[8%_65%] saturate-[1.25]" />
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

			<div className="mx-auto max-w-6xl px-4 pb-14 pt-8 md:pb-16 md:pt-12">
				<div className="md:max-w-[52%]">
					{/* Logo + titre SEO (le H1 est le texte, le logo une image) */}
					<img
						src={logo}
						alt="Dydy Fantasy"
						width="1782"
						height="396"
						className="h-auto w-full max-w-[34rem]"
					/>
					<h1 className="mt-4 text-xl font-semibold text-white/90 md:text-2xl">
						Blind test, quiz, karaoké & DJ à Toulouse
					</h1>
					<p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
						Des animations interactives et sur mesure, pour que vos invités ne
						soient pas seulement spectateurs.
					</p>

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

					{/* ---- Quiz : bloc et cartes d'origine ---- */}
					<div className="mt-7 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 md:px-6">
						<p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-pink-300">
							Question 01 / 01
						</p>
						<h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
							Quel type d’animation recherchez-vous ?
						</h2>
						<p className="mt-1 text-sm text-gray-300">
							Sélectionnez une réponse pour découvrir l'expérience.
						</p>
					</div>

					<div className="relative z-20 mt-4 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
						{cards.map((card) => (
							<div key={card.letter} className="relative min-w-0 hover:z-30">
								<Card {...card} />
							</div>
						))}
					</div>

					{/* Appels à l'action */}
					<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
		</section>
	);
}
