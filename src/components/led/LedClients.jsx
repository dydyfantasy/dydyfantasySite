import SectionTitle from "./SectionTitle";

// Références réelles (nom + lieu, utiles au SEO local).
const CLIENTS = [
	{ name: "Décathlon", type: "Événement VitalSport", location: "Escalquens (31)", logo: "/clients/Decathlon.jpg" },
	{ name: "La Ville en Rose", type: "Bar / restaurant", location: "Colomiers (31)", logo: "/clients/La ville en rose.png" },
	{ name: "Taverne Heidelberg", type: "Taverne / bar", location: "Blagnac (31)", logo: "/clients/La taverne blagnac.jpg" },
	{ name: "Le Cul de Bouteille", type: "Cave à vin / bar", location: "Aussonne (31)", logo: "/clients/Le cul de bouteille.jpg" },
	{ name: "La Table Ronde", type: "Restaurant / bar", location: "Saint-Lieux-lès-Lavaur (81)", logo: "/clients/La table ronde.webp" },
	{ name: "Le Cosy", type: "Restaurant", location: "Colomiers (31)", logo: "/clients/Cosy.jpg" },
	{ name: "Le BBT", type: "Bar", location: "Cornebarrieu (31)", logo: "/clients/Le BBT.jpg" },
	{ name: "Chez Granny", type: "Restaurant / bar", location: "Cornebarrieu (31)", logo: "/clients/Chez granny.png" },
	{ name: "L’entrepotes", type: "Restaurant / bar", location: "Gratentour (31)", logo: "/clients/lentrepote.jpg" },
	{ name: "Lias Vegas", type: "Comité des fêtes", location: "Lias (32)", logo: "/clients/liasVegas.jpg" },
	{ name: "Comité des fêtes de Giroussens", type: "Association", location: "Giroussens (81)", logo: "/clients/girousens.jpg" },
];

const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"];

function ClientChip({ client, color }) {
	return (
		<div className="client-chip flex shrink-0 items-center gap-3 rounded-full py-2 pl-2 pr-5" style={{ "--c": color }}>
			<img
				src={client.logo}
				alt={`Logo ${client.name}`}
				loading="lazy"
				width="48"
				height="48"
				className="h-12 w-12 rounded-full bg-white object-contain"
			/>
			<div className="leading-tight">
				<p className="font-bold">{client.name}</p>
				<p className="text-xs text-white/60">
					{client.type} · {client.location}
				</p>
			</div>
		</div>
	);
}

// Bande défilante en boucle : la 1re copie est lue par Google et les lecteurs d’écran,
// la 2de (aria-hidden) sert seulement à boucler sans trou. Pause au survol.
export default function LedClients() {
	return (
		<section aria-labelledby="clients-titre" className="py-20">
			<div className="mx-auto max-w-6xl px-4">
				<SectionTitle id="clients-titre" label="Références" title="Ils m’ont fait" accent="confiance">
					Bars, restaurants, comités des fêtes et entreprises à Toulouse, en Haute-Garonne, dans le Gers
					et dans le Tarn.
				</SectionTitle>
			</div>

			<div className="clients-marquee mt-10 overflow-hidden">
				<div className="clients-track flex w-max gap-4">
					<ul className="flex gap-4">
						{CLIENTS.map((c, i) => (
							<li key={c.name + c.location}>
								<ClientChip client={c} color={COLORS[i % COLORS.length]} />
							</li>
						))}
					</ul>
					<ul className="flex gap-4" aria-hidden="true">
						{CLIENTS.map((c, i) => (
							<li key={`copie-${c.name}${c.location}`}>
								<ClientChip client={c} color={COLORS[i % COLORS.length]} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
