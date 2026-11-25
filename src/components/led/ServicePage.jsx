import { Link } from "react-router";
import {
	ArrowRightIcon,
	ChevronDownIcon,
	MicrophoneIcon,
	SpeakerWaveIcon,
	DevicePhoneMobileIcon,
	CameraIcon,
	PhotoIcon,
	TruckIcon,
	ClockIcon,
	DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Seo from "../Seo";
import StageLights from "./StageLights";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import LedFinal from "./LedFinal";
import LedClients from "./LedClients";
import { AREA_SERVED } from "../../data/zone";
import GoogleRating from "./GoogleRating";
import { GOOGLE } from "../../data/avis";
import Spectrum from "./Spectrum";
import PeekingMascot from "./PeekingMascot";
import LedDivider from "./LedDivider";
import ConfettiRain from "./ConfettiRain";
import Testimonial from "./Testimonial";
import GalleryClips from "./GalleryClips";
import { clipsFor, clipsMatching, CATEGORY_LABELS } from "../../data/galerie";
import { STEPS } from "../../data/steps";

const SITE = "https://dydyfantasy.fr";
const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"];

// Étapes communes : src/data/steps.js (surchargeables via `steps`)
const DEFAULT_STEPS = STEPS;

// Ce que la prestation peut inclure (repris du site actuel)
const DEFAULT_INCLUDED = [
	{ icon: MicrophoneIcon, title: "Animation au micro", text: "Rythme, relances, explications et ambiance tout au long de la prestation." },
	{ icon: SpeakerWaveIcon, title: "Matériel complet fourni", text: "Sono, lumières, machine à fumée, écran et vidéoprojecteur : j’apporte toujours tout. Devis tout compris, sans mauvaise surprise." },
	{ icon: DevicePhoneMobileIcon, title: "Application Dydy Quiz", text: "Mon appli maison : un QR code, et les joueurs participent depuis leur téléphone.", to: "/dydy-quiz" },
	{ icon: CameraIcon, title: "Contenus réseaux", text: "Selon la soirée, quelques photos ou vidéos réutilisables pour votre communication." },
];

// Photo du haut de page : `photo` = { src, srcSet, alt } (ex. photoFor("mariage")), sinon emplacement vide.
// Image principale de la page : chargée en priorité (pas de lazy loading).
// `sign` : enseigne néon calligraphiée posée sur la photo (décorative), ex. « Vive les mariés ».
function PhotoSlot({ photo, color = "var(--pink)", sign }) {
	return (
		<div className="relative">
		<div className="photo-frame neon-card overflow-hidden rounded-3xl" style={{ "--c": color }}>
			{photo ? (
				<img
					src={photo.src}
					srcSet={photo.srcSet}
					sizes="(min-width: 1024px) 560px, calc(100vw - 2rem)"
					alt={photo.alt}
					width="1200"
					height="800"
					fetchPriority="high"
					decoding="async"
					className="aspect-[3/2] w-full object-cover"
				/>
			) : (
				<div aria-hidden="true" className="event-visual flex aspect-[3/2] items-center justify-center">
					<PhotoIcon className="h-14 w-14 text-[var(--c)] opacity-70" />
				</div>
			)}
		</div>
		{sign && (
			<span aria-hidden="true" className="neon-sign">
				{sign}
			</span>
		)}
		</div>
	);
}

const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);

// « En pratique » : infos communes à toutes les prestations (réelles, validées par Dydy le 25/11/2026).
// Pas de prix (« sur devis ») ni de délai de réservation : ça dépend de chaque événement.
const PRATIQUE = [
	{ icon: TruckIcon, title: "Déplacement offert", text: "Sans frais dans un rayon de 50 km autour de Fonsorbes : Toulouse, Colomiers, Blagnac, Muret, L’Isle-Jourdain…" },
	{ icon: SpeakerWaveIcon, title: "Matériel fourni", text: "Sono, lumières, lyres, machine à fumée, écran et vidéoprojecteur : j’apporte et j’installe tout." },
	{ icon: ClockIcon, title: "Une durée à votre mesure", text: "Elle s’adapte à votre événement : on la cale ensemble selon votre programme." },
	{ icon: DocumentTextIcon, title: "Devis gratuit, tout compris", text: "Sans mauvaise surprise, avec une réponse sous 24 h." },
];

/**
 * Modèle de page de prestation / d’événement (même structure SEO partout).
 * Contenu passé en props ; les sections vides ne s’affichent pas.
 */
export default function ServicePage({
	path,
	seo, // { title, description, ogTitle }
	breadcrumb, // [{ name, to }] sans l’accueil ni la page courante
	name, // nom court de la page (fil d’Ariane, schema)
	title, // contenu JSX du H1
	intro,
	aside, // élément affiché à droite du hero (sinon emplacement photo)
	photo, // { src, srcSet, alt } : photo du haut de page (src/data/evenementsPhotos.js)
	color = "var(--pink)",
	points = [], // { icon, color, title, text } — « Pour qui » / « Ce que je propose »
	pointsTitle,
	formats = [], // { icon, color, title, text }
	formatsTitle,
	steps = DEFAULT_STEPS,
	included = DEFAULT_INCLUDED,
	related = [], // { to, label }
	faq = [], // { q, a }
	schemaType = "Service",
	photoSign, // enseigne néon sur la photo du haut (ex. "Vive les mariés")
	theme, // ambiance propre à la page : "mariage" (or champagne + confettis), voir led.css
	testimonial, // avis client cité (voir Testimonial.jsx), affiché après les formats
	clients = true, // bandeau des références clients (preuves), après l’avis ; false pour le masquer
	subject, // sujet de la page pour des titres de section uniques : { votre: "votre karaoké", sur: "le karaoké", pluriel? }
	body, // mise en scène propre à la page, à la place des sections « points » et « formats »
	scene: Scene, // composant de mise en scène (src/components/scenes/) qui reçoit points/formats et leurs titres
	gallery, // extraits vidéo de la galerie : une catégorie (ex. "bars") ou { words: ["karaoke"], label: "karaokés" }
	//          = vidéos dont le nom de fichier contient l’un des mots (voir data/galerie.js)
}) {
	const subj = subject ?? { votre: "votre événement", sur: "l’animation" };
	const byWords = Boolean(gallery) && typeof gallery === "object";
	const clips = !gallery ? [] : byWords ? clipsMatching(gallery.words, 4) : clipsFor(gallery, 4);
	const galleryLabel = byWords ? gallery.label : (CATEGORY_LABELS[gallery] ?? gallery ?? "").toLowerCase();
	const galleryLink = byWords ? "/galerie" : `/galerie?categorie=${gallery}`;
	// Étapes communes (identiques sur toutes les pages) : version courte + lien vers « Mon approche »,
	// pour que chaque page garde surtout du contenu qui lui est propre (SEO). Étapes propres : frise complète.
	const compactSteps = steps === DEFAULT_STEPS;
	const url = SITE + path;
	const crumbs = [{ name: "Accueil", to: "/" }, ...breadcrumb, { name, to: path }];
	const jsonLd = [
		{
			"@context": "https://schema.org",
			"@type": schemaType,
			name: seo.title.split(" | ")[0],
			serviceType: name,
			url,
			description: seo.description,
			provider: { "@id": `${SITE}/#entreprise` },
			areaServed: AREA_SERVED,
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: SITE + c.to })),
		},
	];

	return (
		<div className={`led fun relative isolate overflow-hidden bg-[var(--ink)] text-white ${theme ? `theme-${theme}` : ""}`}>
			<Seo path={path} title={seo.title} description={seo.description} ogTitle={seo.ogTitle} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<StageLights />

			{/* ---- Hero ---- */}
			<section className="relative px-4 pb-16 pt-8 md:pt-12">
				<Spectrum className="absolute inset-x-0 bottom-0 -z-10 flex h-20 opacity-50 md:h-28" />
				{theme === "mariage" && <ConfettiRain />}
				<div className="mx-auto max-w-6xl">
					<nav aria-label="Fil d’Ariane" className="text-sm text-white/65">
						<ol className="flex flex-wrap items-center gap-1.5">
							{crumbs.map((c, i) => (
								<li key={c.to} className="flex items-center gap-1.5">
									{i > 0 && <span aria-hidden="true">/</span>}
									{i < crumbs.length - 1 ? (
										<Link to={c.to} className="hover:text-white">{c.name}</Link>
									) : (
										<span aria-current="page" className="text-white/85">{c.name}</span>
									)}
								</li>
							))}
						</ol>
					</nav>

					<div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
						<div>
							<h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
							<p className="mt-5 text-lg leading-relaxed text-white/80">{intro}</p>
							<div className="mt-7 flex flex-col gap-3 sm:flex-row">
								<Link to="/contact" className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3.5 font-bold text-white">
									Demander mon devis
									<ArrowRightIcon className="h-5 w-5" />
								</Link>
								<a href="/#agenda" className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3.5 font-semibold text-[var(--cyan)]">
									Voir l’agenda
								</a>
							</div>
							<GoogleRating className="mt-4" />
						</div>
						{aside ?? <PhotoSlot photo={photo} color={color} sign={photoSign} />}
					</div>
				</div>
			</section>

			{body ?? (Scene && <Scene points={points} pointsTitle={pointsTitle} formats={formats} formatsTitle={formatsTitle} />)}

			{/* ---- Points : liste aérée ---- */}
			{!body && !Scene && points.length > 0 && (
				<section aria-labelledby="points" className="px-4 py-16">
					<div className="mx-auto max-w-6xl">
						<SectionTitle id="points" label={pointsTitle?.label} title={pointsTitle?.title} accent={pointsTitle?.accent}>
							{pointsTitle?.text}
						</SectionTitle>
						<ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
							{points.map((item, i) => (
								<ScrollReveal as="li" key={item.title} delay={(i % 2) * 90} className="flex gap-4 border-t border-white/10 py-6" style={{ "--c": item.color ?? COLORS[i % 4] }}>
									<item.icon aria-hidden="true" className="neon-icon h-8 w-8 shrink-0" />
									<div>
										<h3 className="text-lg font-extrabold">{item.title}</h3>
										<p className="mt-1 text-white/75">{item.text}</p>
									</div>
								</ScrollReveal>
							))}
						</ul>
					</div>
				</section>
			)}

			{/* ---- Formats : titre collant + lignes numérotées ---- */}
			{!body && !Scene && formats.length > 0 && (
				<section aria-labelledby="formats" className="px-4 py-16">
					<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
						<div className="lg:sticky lg:top-28 lg:self-start">
							<SectionTitle id="formats" label={formatsTitle?.label} title={formatsTitle?.title} accent={formatsTitle?.accent}>
								{formatsTitle?.text}
							</SectionTitle>
						</div>
						<ol>
							{formats.map((item, i) => (
								<ScrollReveal as="li" variant="right" key={item.title} delay={i * 80} className="flex gap-5 border-b border-white/10 py-6 first:pt-0" style={{ "--c": item.color ?? COLORS[i % 4] }}>
									<span className="w-10 shrink-0 text-3xl font-extrabold text-[var(--c)]">0{i + 1}</span>
									<div>
										<h3 className="flex items-center gap-2 text-xl font-extrabold">
											{item.icon && <item.icon aria-hidden="true" className="neon-icon h-6 w-6" />}
											{item.title}
										</h3>
										<p className="mt-2 text-white/75">{item.text}</p>
									</div>
								</ScrollReveal>
							))}
						</ol>
					</div>
				</section>
			)}

			{testimonial && <Testimonial testimonial={testimonial} />}

			{/* ---- Références clients : mêmes logos que sur l’accueil (preuve sur chaque page) ---- */}
			{clients && <LedClients />}

			{/* ---- En images : extraits de vraies soirées de la galerie ---- */}
			{clips.length > 0 && (
				<section aria-labelledby="en-images" className="px-4 py-16">
					<div className="mx-auto max-w-6xl">
						<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
							<SectionTitle id="en-images" label="En images" title="L’ambiance," accent="en vrai">
								Des extraits de vraies soirées : {galleryLabel}.
							</SectionTitle>
							<Link
								to={galleryLink}
								className="btn-outline-neon inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
								Voir la galerie
								<ArrowRightIcon className="h-4 w-4" />
							</Link>
						</div>
						<div className="mt-10">
							<GalleryClips clips={clips} className={`grid grid-cols-2 gap-3 md:gap-4 ${clips.length > 2 ? "md:grid-cols-4" : ""}`} />
						</div>
					</div>
				</section>
			)}

			<LedDivider color="var(--pink)" />

			{/* ---- Déroulé : version courte (étapes communes) ou frise (étapes propres à la page) ---- */}
			{compactSteps ? (
				<section aria-labelledby="deroule" className="px-4 py-16">
					<div className="mx-auto max-w-6xl">
						<SectionTitle id="deroule" label="Comment ça se passe" title={`${cap(subj.votre)}, de l’idée au`} accent="jour J" />
						<ol className="mt-8 flex flex-wrap items-center gap-3">
							{steps.map((s, i) => (
								<li key={s.title} className="flex items-center gap-3" style={{ "--c": COLORS[i % 4] }}>
									<span className="neon-card inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold">
										<s.icon aria-hidden="true" className="h-5 w-5 text-[var(--c)]" />
										{s.title}
									</span>
									{i < steps.length - 1 && <ArrowRightIcon aria-hidden="true" className="h-4 w-4 text-white/40" />}
								</li>
							))}
						</ol>
						<Link to="/mon-approche" className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--cyan)] underline underline-offset-4">
							Ma façon de travailler, étape par étape
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
					</div>
				</section>
			) : (
			<section aria-labelledby="deroule" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="deroule" label="Comment ça se passe" title={`${cap(subj.votre)}, de l’idée au`} accent="jour J" />
					<ol className="timeline relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
						{steps.map((s, i) => (
							<ScrollReveal as="li" key={s.title} delay={i * 100} className="relative pl-16 md:pl-0 md:pt-16" style={{ "--c": COLORS[i % 4] }}>
								<span className="timeline-dot absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full">
									<s.icon aria-hidden="true" className="h-6 w-6 text-[var(--c)]" />
								</span>
								<p className="text-sm font-bold uppercase tracking-widest text-[var(--c)]">Étape 0{i + 1}</p>
								<h3 className="mt-1 text-lg font-extrabold">{s.title}</h3>
								<p className="mt-1 text-white/75">{s.text}</p>
							</ScrollReveal>
						))}
					</ol>
				</div>
			</section>
			)}

			{/* ---- Inclus ---- */}
			{included.length > 0 && (
				<section aria-labelledby="inclus" className="px-4 py-16">
					<div className="mx-auto max-w-6xl">
						<SectionTitle id="inclus" label="Inclus" title={subj.pluriel ? "Ce que comprennent" : "Ce que comprend"} accent={subj.votre} />
						<ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
							{included.map((item, i) => (
								<ScrollReveal as="li" key={item.title} delay={(i % 2) * 90} className="flex gap-4 border-t border-white/10 py-6" style={{ "--c": COLORS[i % 4] }}>
									<item.icon aria-hidden="true" className="neon-icon h-7 w-7 shrink-0" />
									<div>
										<h3 className="font-extrabold">
											{item.to ? (
												<Link to={item.to} className="underline decoration-[var(--c)] underline-offset-4 hover:text-[var(--c)]">
													{item.title}
												</Link>
											) : (
												item.title
											)}
										</h3>
										<p className="mt-1 text-white/75">{item.text}</p>
									</div>
								</ScrollReveal>
							))}
						</ul>
					</div>
				</section>
			)}

			{/* ---- En pratique : infos communes (déplacement, matériel, durée, devis) ---- */}
			<section aria-labelledby="pratique" className="px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<SectionTitle id="pratique" label="En pratique" title={`${cap(subj.votre)},`} accent="en pratique" />
					<ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{PRATIQUE.map((item, i) => (
							<ScrollReveal as="li" key={item.title} delay={(i % 4) * 80} className="neon-card rounded-2xl p-5" style={{ "--c": COLORS[i % 4] }}>
								<item.icon aria-hidden="true" className="neon-icon h-7 w-7" />
								<h3 className="mt-3 font-extrabold">{item.title}</h3>
								<p className="mt-1 text-sm text-white/75">{item.text}</p>
							</ScrollReveal>
						))}
					</ul>
				</div>
			</section>

			<LedDivider color="var(--cyan)" reverse />

			{/* ---- FAQ ---- */}
			{faq.length > 0 && (
				<section aria-labelledby="faq" className="relative px-4 py-16">
				<PeekingMascot text="Une question ? Je vous réponds sous 24 h !" className="top-10" />
					<div className="mx-auto max-w-3xl">
						<SectionTitle id="faq" label="FAQ" title="Vos questions sur" accent={subj.sur} />
						<div className="mt-8 space-y-3">
							{faq.map((f) => (
								<details key={f.q} className="neon-card group rounded-2xl" style={{ "--c": "var(--cyan)" }}>
									<summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold">
										{f.q}
										<ChevronDownIcon className="h-5 w-5 shrink-0 text-[var(--cyan)] transition-transform group-open:rotate-180" />
									</summary>
									<p className="px-5 pb-5 text-white/75">{f.a}</p>
								</details>
							))}
						</div>
					</div>
				</section>
			)}

			{/* ---- Maillage : à découvrir aussi ---- */}
			{related.length > 0 && (
				<section aria-labelledby="related" className="px-4 py-10">
					<div className="mx-auto max-w-6xl">
						<h2 id="related" className="text-sm font-bold uppercase tracking-[0.25em] text-white/65">À découvrir aussi</h2>
						<ul className="mt-4 flex flex-wrap gap-3">
							{related.map((r, i) => (
								<li key={r.to}>
									<Link to={r.to} style={{ "--c": COLORS[i % 4] }} className="social-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold">
										{r.label}
										<ArrowRightIcon className="h-4 w-4" />
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>
			)}

			<LedFinal />
		</div>
	);
}
