import { Link } from "react-router";
import {
	HeartIcon,
	BriefcaseIcon,
	CakeIcon,
	BuildingStorefrontIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

// « Pour quel événement ? » : répond à « est-ce qu’il fait MON type d’événement ? »
// et prépare les futures pages « Vos événements » (/evenements/mariage, etc.).
// Liens : vers les pages « Vos événements ».
//
// Photos SANS CODE (src/assets/evenements/, voir src/data/evenementsPhotos.js).
// Sans photo, la tuile garde son flyer coloré avec l’icône néon.
import { tileFor } from "../../data/evenementsPhotos";

const EVENTS = [
	{
		title: "Mariage",
		slug: "mariage",
		word: "Mariage",
		icon: HeartIcon,
		color: "var(--pink)",
		text: "Quiz sur les mariés pendant le repas, Challenge Photo entre les tables, puis karaoké et DJ jusqu’au bout de la nuit.",
		href: "/evenements/mariage",
		cta: "Parler de mon mariage",
	},
	{
		title: "Entreprise & team building",
		slug: "entreprise",
		word: "Entreprise",
		icon: BriefcaseIcon,
		color: "var(--cyan)",
		text: "Team building, séminaire, soirée d’entreprise ou journée événement : quiz en équipes, animation micro et speaker, puis DJ pour la soirée dansante.",
		href: "/evenements/entreprise",
		cta: "Organiser mon événement pro",
	},
	{
		title: "Anniversaire & soirée privée",
		slug: "anniversaire",
		word: "Anniversaire",
		icon: CakeIcon,
		color: "var(--gold)",
		text: "Un quiz sur la personne fêtée, du karaoké et un DJ : le cadeau, c’est la soirée.",
		href: "/evenements/anniversaire",
		cta: "Préparer ma soirée",
	},
	{
		title: "Bars & restaurants",
		slug: "bars",
		word: "Bars",
		icon: BuildingStorefrontIcon,
		color: "#7cff6b",
		text: "Des soirées blind test et karaoké régulières qui remplissent votre établissement, comme à La Ville en Rose ou à la Taverne Heidelberg.",
		href: "/evenements/bars-restaurants",
		cta: "Programmer une soirée",
	},
];

// Place de chaque tuile dans la grille (même ordre que EVENTS) : toutes les photos sont en paysage.
// Mariage = grande tuile en vedette ; sur tablette, les bars prennent aussi toute la largeur
// (pas de tuile orpheline). Les tuiles pleine largeur passent en « photo à gauche, texte à droite ».
const LAYOUT = ["sm:col-span-2 lg:col-span-3", "", "", "sm:col-span-2 lg:col-span-1"];
const SIDE_BY_SIDE = [
	"md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]",
	"",
	"",
	"md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:flex",
];

// Inclinaison 3D qui suit la souris (ordinateur uniquement ; rien au toucher).
// Amplitude réduite sur les tuiles larges pour que les bords ne bougent pas trop.
function tilt(event) {
	if (event.pointerType !== "mouse") return;
	const card = event.currentTarget;
	const r = card.getBoundingClientRect();
	const amp = Math.min(10, 4000 / r.width);
	const x = (event.clientX - r.left) / r.width - 0.5;
	const y = (event.clientY - r.top) / r.height - 0.5;
	card.style.setProperty("--ry", `${(x * amp).toFixed(2)}deg`);
	card.style.setProperty("--rx", `${(-y * amp).toFixed(2)}deg`);
}

function untilt(event) {
	event.currentTarget.style.setProperty("--rx", "0deg");
	event.currentTarget.style.setProperty("--ry", "0deg");
}

export default function LedEvents() {
	return (
		<section aria-labelledby="evenements-titre" className="px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<SectionTitle
					id="evenements-titre"
					label="Vos événements"
					title="Une animation pour chaque événement"
					accent="à Toulouse">
					Mariage, entreprise, anniversaire ou soirée dans votre bar : je m’adapte à votre public
					et à votre lieu, autour de Toulouse et partout en Occitanie : Haute-Garonne, Gers, Tarn.
				</SectionTitle>

				<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{EVENTS.map((e, i) => {
						const photo = tileFor(e.slug);
						const featured = i === 0;
						return (
							<ScrollReveal as="li" key={e.title} delay={i * 90} className={LAYOUT[i]}>
								<Link
									to={e.href}
									style={{ "--c": e.color }}
									onPointerMove={tilt}
									onPointerLeave={untilt}
									className={`flyer-card group flex h-full flex-col overflow-hidden rounded-3xl ${SIDE_BY_SIDE[i]}`}>
									{/* Scène en paysage (3:2) : la photo, ou le projecteur + l’icône en enseigne néon */}
									<div
										className="event-stage relative flex aspect-[3/2] items-center justify-center overflow-hidden"
										style={{ "--sway-delay": `${i * -1.7}s` }}>
										{photo ? (
											<>
												<img
													src={photo.src}
													srcSet={photo.srcSet}
													sizes={featured ? "(min-width: 768px) 60vw, calc(100vw - 2rem)" : "(min-width: 1024px) 33vw, (min-width: 640px) 60vw, calc(100vw - 2rem)"}
													alt={photo.alt}
													loading="lazy"
													decoding="async"
													className="flyer-photo absolute inset-0 h-full w-full object-cover"
												/>
												<span aria-hidden="true" className="flyer-tint absolute inset-0" />
											</>
										) : (
											<>
												<span aria-hidden="true" className="stage-cone" />
												<span aria-hidden="true" className="stage-floor" />
												<e.icon
													aria-hidden="true"
													className={`neon-icon relative h-20 w-20 md:h-24 md:w-24 ${featured ? "lg:h-36 lg:w-36" : ""}`}
												/>
											</>
										)}
									</div>
									{/* Texte, avec le mot géant en filigrane derrière (la photo reste nette) */}
									<div
										data-word={e.word}
										className={`flyer-word relative flex flex-1 flex-col overflow-hidden p-6 ${
											featured ? "md:justify-center md:p-8 lg:p-10" : i === 3 ? "md:justify-center lg:justify-start" : ""
										}`}>
										<h3 className={`text-2xl font-extrabold leading-tight ${featured ? "lg:text-4xl" : ""}`}>{e.title}</h3>
										<p className={`mt-2 flex-1 text-white/75 ${featured ? "md:flex-none lg:text-lg" : i === 3 ? "md:flex-none lg:flex-1" : ""}`}>{e.text}</p>
										<span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-[var(--c)]">
											{e.cta}
											<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</span>
									</div>
								</Link>
							</ScrollReveal>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
