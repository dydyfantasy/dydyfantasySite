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
		icon: HeartIcon,
		color: "var(--pink)",
		image: null,
		text: "Blind test et quiz pour animer le repas, karaoké et DJ pour faire danser vos invités jusqu’au bout de la nuit.",
		href: "/evenements/mariage",
		cta: "Parler de mon mariage",
	},
	{
		title: "Entreprise & team building",
		icon: BriefcaseIcon,
		color: "var(--cyan)",
		image: null,
		text: "Team building, séminaire, soirée d’entreprise ou journée événement : quiz en équipes, animation micro et speaker, puis DJ pour la soirée dansante.",
		href: "/evenements/entreprise",
		cta: "Organiser mon événement pro",
	},
	{
		title: "Anniversaire & soirée privée",
		icon: CakeIcon,
		color: "var(--gold)",
		image: null,
		text: "Un quiz ou un blind test sur mesure, du karaoké et un DJ pour faire danser : une soirée dont tout le monde se souviendra.",
		href: "/evenements/anniversaire",
		cta: "Préparer ma soirée",
	},
	{
		title: "Bars & restaurants",
		icon: BuildingStorefrontIcon,
		color: "#7cff6b",
		image: null,
		text: "Des soirées blind test et karaoké régulières qui remplissent votre établissement, comme à La Ville en Rose ou à la Taverne Heidelberg.",
		href: "/evenements/bars-restaurants",
		cta: "Programmer une soirée",
	},
];

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

				<ul className="mt-10 grid gap-5 sm:grid-cols-2">
					{EVENTS.map((e, i) => (
						<ScrollReveal as="li" key={e.title} delay={i * 90}>
							<Link
								to={e.href}
								style={{ "--c": e.color }}
								className="neon-card neon-card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
								{/* Emplacement photo (vide pour l’instant) */}
								<div className="event-visual relative flex aspect-[16/7] items-center justify-center">
									{e.image ? (
										<img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover" />
									) : (
										<e.icon aria-hidden="true" className="h-14 w-14 text-[var(--c)] opacity-80" />
									)}
								</div>
								<div className="flex flex-1 flex-col p-6">
									<h3 className="text-xl font-extrabold">{e.title}</h3>
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
