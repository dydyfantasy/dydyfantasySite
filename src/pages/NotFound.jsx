import Seo from "../components/Seo";
import { Link } from "react-router";
import {
	HomeIcon,
	SparklesIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";

const links = [
	{ to: "/", label: "Retour à l'accueil", icon: HomeIcon },
	{ to: "/prestations", label: "Voir mes prestations", icon: SparklesIcon },
	{ to: "/contact", label: "Demander un devis", icon: EnvelopeIcon },
];

function NotFound() {
	return (
		<>
			<Seo
				title="Page introuvable | Dydy Fantasy"
				noindex
			/>

			<section className="relative min-h-[70vh] overflow-hidden bg-gray-900 px-4 py-20 text-white">
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
				<div className="pointer-events-none absolute left-[-150px] top-10 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
				<div className="pointer-events-none absolute right-[-160px] bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

				<div className="relative z-10 mx-auto max-w-3xl text-center">
					<p className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-7xl font-black text-transparent md:text-9xl">
						404
					</p>

					<h1 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
						Oups, cette page a quitté la soirée
					</h1>

					<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
						La page que vous cherchez n’existe pas ou a changé d’adresse. Pas
						de panique, la fête continue par ici :
					</p>

					<div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
						{links.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition hover:border-pink-300/40 hover:bg-white/[0.1]">
								<link.icon className="h-5 w-5 text-pink-300" />
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default NotFound;
