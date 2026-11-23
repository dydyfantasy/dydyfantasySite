import { Link } from "react-router";
import { HomeIcon, MusicalNoteIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import perso240 from "../assets/brand/perso-240.webp";
import perso440 from "../assets/brand/perso-440.webp";

const LINKS = [
	{ to: "/", label: "Retour à l’accueil", icon: HomeIcon, color: "var(--cyan)" },
	{ to: "/prestations/blind-test-quiz", label: "Voir mes prestations", icon: MusicalNoteIcon, color: "var(--gold)" },
	{ to: "/contact", label: "Demander mon devis", icon: EnvelopeIcon, color: "var(--pink)" },
];

// Page 404 (noindex) : servie par Apache pour toute adresse inconnue.
export default function NotFound() {
	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<Seo title="Page introuvable | Dydy Fantasy" noindex />
			<StageLights />

			<section className="mx-auto grid min-h-[75vh] max-w-5xl items-center gap-8 px-4 py-16 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-12">
				<div className="relative mx-auto w-fit pt-12">
					<p aria-hidden="true" className="mascot-bubble absolute left-1/2 top-0 z-10 w-max -translate-x-1/2 rounded-2xl px-4 py-2 text-sm font-extrabold">
						Elle était là il y a 5 minutes… 🙈
					</p>
					<img
						src={perso440}
						srcSet={`${perso240} 240w, ${perso440} 440w`}
						sizes="(min-width: 768px) 16rem, 11rem"
						alt="La mascotte Dydy Fantasy, perdue avec son micro"
						width="440"
						height="573"
						className="mascot-bounce mx-auto h-auto w-44 md:w-64"
					/>
				</div>

				<div className="text-center md:text-left">
					<p className="glow-cyan text-7xl font-extrabold leading-none md:text-8xl">404</p>
					<h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
						Oups, cette page a <span className="text-[var(--pink)]">quitté la soirée</span>
					</h1>
					<p className="mt-4 max-w-lg text-white/75 max-md:mx-auto">
						La page que vous cherchez n’existe pas ou a changé d’adresse. Pas de panique, la fête
						continue par ici :
					</p>
					<ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap max-md:items-center md:justify-start">
						{LINKS.map((l) => (
							<li key={l.to}>
								<Link
									to={l.to}
									style={{ "--c": l.color }}
									className="social-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold">
									<l.icon className="h-5 w-5" />
									{l.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
}
