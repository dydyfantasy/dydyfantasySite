import { CalendarDaysIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
import scene640 from "../../assets/hero/hero-scene-640.webp";
import scene1024 from "../../assets/hero/hero-scene-1024.webp";
import scene1536 from "../../assets/hero/hero-scene-1536.webp";

const MARQUEE_ITEMS = [
	"Blind test",
	"Quiz",
	"Karaoké",
	"DJ",
	"Soirées sur mesure",
	"Toulouse",
	"Haute-Garonne",
	"Gers",
];

// Hero de l'accueil : la scène vue depuis la place de Dydy.
// Visible dès le HTML pré-rendu (aucune animation d'apparition) pour un LCP rapide.
export default function HeroScene() {
	return (
		<section className="plateau relative isolate overflow-hidden bg-[var(--ink)] text-white">
			{/* Version « soirée » : voile sombre + teinte cyan/rose */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgb(8_7_13/0.96)_0%,rgb(8_7_13/0.85)_38%,rgb(8_7_13/0.2)_68%,rgb(8_7_13/0.92)_100%)] md:bg-[linear-gradient(180deg,rgb(8_7_13/0.6)_0%,transparent_25%,transparent_70%,rgb(8_7_13/0.9)_100%)]"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_85%,rgb(255_47_174/0.30),transparent_55%),radial-gradient(ellipse_at_85%_15%,rgb(25_211_240/0.25),transparent_50%)] mix-blend-screen"
			/>
			{/* Faisceau de projecteur */}
			<div
				aria-hidden="true"
				className="absolute -top-24 left-1/2 -z-10 h-[140%] w-[70%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_160deg,rgb(255_255_255/0.10)_175deg,rgb(255_255_255/0.16)_180deg,rgb(255_255_255/0.10)_185deg,transparent_200deg)]"
			/>
			<div aria-hidden="true" className="sequins absolute inset-0 -z-10 opacity-[0.12]" />

			<div className="relative mx-auto flex min-h-[86svh] max-w-6xl flex-col px-4 pb-28 pt-10 md:static md:pt-14">
				{/* Sticker d'intro */}
				<p className="sticker font-display inline-flex w-fit -rotate-2 items-center gap-2 bg-[var(--gold)] px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--ink)] md:text-sm">
					<SparklesIcon className="h-4 w-4" />
					Animateur événementiel · Toulouse ouest
				</p>

				<h1 className="mt-6 max-w-4xl leading-[0.9]">
					<span className="logo-dydy font-display block text-[clamp(3.4rem,13vw,8.5rem)]">
						DYDY
					</span>
					<span className="logo-fantasy font-brush -mt-2 block text-[clamp(3rem,12vw,7.5rem)] md:-mt-4 md:ml-24">
						Fantasy
					</span>
					<span className="hard-shadow-pink mt-6 inline-block border-[3px] border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-base font-black uppercase leading-tight text-[var(--ink)] md:text-xl">
						Blind test, quiz, karaoké & DJ à Toulouse
					</span>
				</h1>

				{/* Photo de scène : cadre « autocollant » dans le flux sur mobile,
				    colonne droite fondue en arrière-plan sur ordinateur */}
				<div className="relative mt-7 aspect-[16/11] -rotate-1 overflow-hidden border-[3px] border-[var(--ink)] shadow-[6px_6px_0_var(--cyan)] md:absolute md:inset-0 md:left-[38%] md:-z-30 md:mt-0 md:aspect-auto md:rotate-0 md:overflow-visible md:border-0 md:shadow-none md:[mask-image:linear-gradient(90deg,transparent_0%,black_24%)]">
					<img
						src={scene1536}
						srcSet={`${scene640} 640w, ${scene1024} 1024w, ${scene1536} 1536w`}
						sizes="(min-width: 768px) 62vw, 100vw"
						width="1536"
						height="1149"
						alt="Dydy Fantasy de dos, veste à paillettes, aux platines face à une salle des fêtes pleine pendant une soirée blind test et karaoké"
						fetchPriority="high"
						decoding="async"
						className="h-full w-full object-cover object-[18%_72%] md:object-[0%_65%]"
					/>
				</div>

				<p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-white/90 md:text-lg">
					Ici, vos invités ne regardent pas la soirée :{" "}
					<span className="text-[var(--cyan)]">ils la jouent.</span> Buzzers,
					micros ouverts, classements en direct et ambiance au maximum.
				</p>

				<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
					<a
						href="/contact"
						className="hard-shadow-cyan font-display inline-flex items-center justify-center gap-2 border-[3px] border-[var(--ink)] bg-[var(--pink)] px-6 py-3.5 text-base uppercase tracking-wide text-white transition-transform duration-150 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none">
						<SparklesIcon className="h-5 w-5" />
						Demander un devis
					</a>
					<a
						href="#agenda"
						className="hard-shadow-pink font-display inline-flex items-center justify-center gap-2 border-[3px] border-[var(--ink)] bg-white px-6 py-3.5 text-base uppercase tracking-wide text-[var(--ink)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none">
						<CalendarDaysIcon className="h-5 w-5" />
						Voir l'agenda
					</a>
				</div>

				{/* Preuve sociale (données réelles : 72 avis 5 étoiles) */}
				<a
					href="#avis"
					className="sticker mt-8 inline-flex w-fit rotate-2 items-center gap-2 bg-white px-4 py-2 text-[var(--ink)] transition-transform hover:rotate-0">
					<span className="flex text-[var(--gold)]" aria-hidden="true">
						{[0, 1, 2, 3, 4].map((i) => (
							<StarIcon key={i} className="h-5 w-5 drop-shadow-[1px_1px_0_#08070d]" />
						))}
					</span>
					<span className="font-display text-sm uppercase">72 avis Google · 5/5</span>
				</a>
			</div>

			{/* Bandeau défilant façon générique télé */}
			<div className="absolute inset-x-0 bottom-4 -rotate-1 border-y-[3px] border-[var(--ink)] bg-[var(--pink)] py-2.5">
				<div className="marquee-track" aria-hidden="true">
					{[0, 1].map((copy) => (
						<div key={copy} className="flex shrink-0">
							{MARQUEE_ITEMS.map((item) => (
								<span
									key={`${copy}-${item}`}
									className="font-display flex items-center gap-4 px-4 text-sm uppercase tracking-wider text-[var(--ink)] md:text-base">
									{item}
									<span className="text-white">★</span>
								</span>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
