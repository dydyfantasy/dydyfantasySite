import SectionTitle from "./SectionTitle";

// Mêmes clients que TrustedBySection (références réelles uniquement)
const CLIENTS = [
	{ name: "Décathlon Escalquens", type: "Évènement VitalSport", location: "Escalquens (31)", logo: "/clients/Decathlon.jpg" },
	{ name: "La Ville en Rose", type: "Bar / restaurant", location: "Colomiers (31)", logo: "/clients/La ville en rose.png" },
	{ name: "Taverne Heidelberg", type: "Taverne / bar", logo: "/clients/La taverne blagnac.jpg" },
	{ name: "Le Cul de Bouteille", type: "Cave à vin / bar", logo: "/clients/Le cul de bouteille.jpg" },
	{ name: "La Table Ronde", type: "Restaurant / bar", logo: "/clients/La table ronde.webp" },
	{ name: "Le Cosy", type: "Restaurant", logo: "/clients/Cosy.jpg" },
	{ name: "Le BBT", type: "Bar", logo: "/clients/Le BBT.jpg" },
	{ name: "Chez Granny", type: "Restaurant / bar", logo: "/clients/Chez granny.png" },
	{ name: "L'entrepotes", type: "Restaurant / bar", logo: "/clients/lentrepote.jpg" },
	{ name: "Lias Vegas", type: "Comité des fêtes de Lias", logo: "/clients/liasVegas.jpg" },
	{ name: "Comité des Giroussens", type: "Comité des fêtes", logo: "/clients/girousens.jpg" },
];

const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"];

export default function LedClients() {
	return (
		<section aria-labelledby="clients-titre" className="px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<SectionTitle id="clients-titre" label="Références" title="Ils m'ont fait" accent="confiance">
					Bars, restaurants, comités des fêtes et entreprises de Toulouse et alentours.
				</SectionTitle>

				<ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{CLIENTS.map((c, i) => (
						<li
							key={c.name}
							style={{ "--c": COLORS[i % COLORS.length] }}
							className="neon-card neon-card-hover flex flex-col items-center rounded-2xl p-5 text-center">
							<img
								src={c.logo}
								alt={`Logo ${c.name}`}
								loading="lazy"
								width="96"
								height="96"
								className="h-20 w-20 rounded-full bg-white object-contain ring-2 ring-[var(--c)]"
							/>
							<p className="mt-3 font-bold leading-tight">{c.name}</p>
							<p className="mt-1 text-xs text-white/60">{c.type}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
