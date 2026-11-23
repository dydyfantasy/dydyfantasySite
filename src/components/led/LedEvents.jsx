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
// Photos : renseigner `image` (import depuis src/assets) quand elles seront prêtes ;
// sans image, la tuile affiche un fond coloré avec l’icône.
// Liens : vers les pages « Vos événements ».
const EVENTS = [
	{
		title: "Mariage",
		word: "Mariage",
		icon: HeartIcon,
		color: "var(--pink)",
		image: null,
		text: "Blind test et quiz pour animer le repas, karaoké et DJ pour faire danser vos invités jusqu’au bout de la nuit.",
		href: "/evenements/mariage",
		cta: "Parler de mon mariage",
	},
	{
		title: "Entreprise & team building",
		word: "Entreprise",
		icon: BriefcaseIcon,
		color: "var(--cyan)",
		image: null,
		text: "Team building, séminaire, soirée d’entreprise ou journée événement : quiz en équipes, animation micro et speaker, puis DJ pour la soirée dansante.",
		href: "/evenements/entreprise",
		cta: "Organiser mon événement pro",
	},
	{
		title: "Anniversaire & soirée privée",
		word: "Anniversaire",
		icon: CakeIcon,
		color: "var(--gold)",
		image: null,
		text: "Un quiz ou un blind test sur mesure, du karaoké et un DJ pour faire danser : une soirée dont tout le monde se souviendra.",
		href: "/evenements/anniversaire",
		cta: "Préparer ma soirée",
	},
	{
		title: "Bars & restaurants",
		word: "Bars",
		icon: BuildingStorefrontIcon,
		color: "#7cff6b",
		image: null,
		text: "Des soirées blind test et karaoké régulières qui remplissent votre établissement, comme à La Ville en Rose ou à la Taverne Heidelberg.",
		href: "/evenements/bars-restaurants",
		cta: "Programmer une soirée",
	},
];

// Place de chaque tuile dans la grille sur grand écran (même ordre que EVENTS)
const LAYOUT = ["lg:row-span-2", "lg:col-span-2", "", ""];

// Inclinaison 3D qui suit la souris (ordinateur uniquement ; rien au toucher)
function tilt(event) {
	if (event.pointerType !== "mouse") return;
	const card = event.currentTarget;
	const r = card.getBoundingClientRect();
	const x = (event.clientX - r.left) / r.width - 0.5;
	const y = (event.clientY - r.top) / r.height - 0.5;
	card.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
	card.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
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
					et à votre lieu, en Haute-Garonne, dans le Gers et le Tarn.
				</SectionTitle>

				{/* Grille « bento » : le mariage en grande tuile, l’entreprise en tuile large */}
				<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{EVENTS.map((e, i) => (
						<ScrollReveal as="li" key={e.title} delay={i * 90} className={LAYOUT[i]}>
							<Link
								to={e.href}
								style={{ "--c": e.color }}
								onPointerMove={tilt}
								onPointerLeave={untilt}
								className="flyer-card group flex h-full flex-col overflow-hidden rounded-3xl">
								{/* Flyer : mot géant en filigrane, projecteur qui balaie, icône en enseigne néon (photo plus tard) */}
								<div
									data-word={e.word}
									className={`event-stage flyer-word relative flex h-44 items-center justify-center overflow-hidden md:h-52 ${i === 0 ? "lg:h-auto lg:flex-1" : ""}`}
									style={{ "--sway-delay": `${i * -1.7}s` }}>
									{e.image ? (
										<img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover" />
									) : (
										<>
											<span aria-hidden="true" className="stage-cone" />
											<span aria-hidden="true" className="stage-floor" />
											<e.icon aria-hidden="true" className="neon-icon relative h-20 w-20 md:h-24 md:w-24" />
										</>
									)}
								</div>
								<div className={`flex flex-col p-6 ${i === 0 ? "" : "flex-1"}`}>
									<h3 className="text-2xl font-extrabold leading-tight">{e.title}</h3>
									<p className="mt-2 flex-1 text-white/75">{e.text}</p>
									<span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-[var(--c)]">
										{e.cta}
										<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</span>
								</div>
							</Link>
						</ScrollReveal>
					))}
				</ul>
			</div>
		</section>
	);
}
