import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

// Logos déposés dans src/assets/clients/ : réduits à 48 et 96 px (écrans haute densité)
// et convertis en WebP à la compilation, quel que soit le poids du fichier d’origine.
const LOGO_SETS = import.meta.glob("../../assets/clients/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "48;96", format: "webp", quality: "80", as: "srcset" },
	import: "default",
});
const LOGO_SRCS = import.meta.glob("../../assets/clients/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
	eager: true,
	query: { w: "96", format: "webp", quality: "80" },
	import: "default",
});
const logoKey = (file) => `../../assets/clients/${file}`;

// Références réelles (nom + lieu, utiles au SEO local).
// logo : nom exact du fichier déposé dans src/assets/clients/.
const CLIENTS = [
	{ name: "Decathlon", type: "Événement VitalSport", location: "Escalquens (31)", logo: "Decathlon.jpg" },
	{ name: "La Ville en Rose", type: "Bar / restaurant", location: "Colomiers (31)", logo: "La ville en rose.png" },
	{ name: "Taverne Heidelberg", type: "Taverne / bar", location: "Blagnac (31)", logo: "La taverne blagnac.jpg" },
	{ name: "Le Cul de Bouteille", type: "Cave à vin / bar", location: "Aussonne (31)", logo: "Le cul de bouteille.jpg" },
	{ name: "La Table Ronde", type: "Restaurant / bar", location: "Saint-Lieux-lès-Lavaur (81)", logo: "La table ronde.webp" },
	{ name: "Le Cosy", type: "Restaurant", location: "Colomiers (31)", logo: "Cosy.jpg" },
	{ name: "Le BBT", type: "Bar", location: "Cornebarrieu (31)", logo: "Le BBT.jpg" },
	{ name: "Chez Granny", type: "Restaurant / bar", location: "Cornebarrieu (31)", logo: "Chez granny.png" },
	{ name: "L’entrepotes", type: "Restaurant / bar", location: "Gratentour (31)", logo: "lentrepote.jpg" },
	{ name: "Lias Vegas", type: "Comité des fêtes", location: "Lias (32)", logo: "liasVegas.jpg" },
	{ name: "Comité des fêtes de Giroussens", type: "Association", location: "Giroussens (81)", logo: "girousens.jpg" },
	{ name: "Biergarten by Saint-Orens", type: "Biergarten / bar", location: "Saint-Orens-de-Gameville (31)", logo: "biergarten.webp" },
	{ name: "L’Fest", type: "Comité des fêtes", location: "Labastide-Beauvoir (31)", logo: "lfest.png" },
];

const COLORS = ["var(--cyan)", "var(--pink)", "var(--gold)", "#7cff6b"];

function ClientChip({ client, color }) {
	return (
		<div className="client-chip flex shrink-0 items-center gap-3 rounded-full py-2 pl-2 pr-5" style={{ "--c": color }}>
			{client.logo && LOGO_SRCS[logoKey(client.logo)] ? (
				<img
					src={LOGO_SRCS[logoKey(client.logo)]}
					srcSet={LOGO_SETS[logoKey(client.logo)]}
					sizes="48px"
					alt={`Logo ${client.name}`}
					loading="lazy"
					width="48"
					height="48"
					className="h-12 w-12 rounded-full bg-white object-contain"
				/>
			) : (
				<span
					aria-hidden="true"
					className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-xl font-extrabold text-[#05040a]">
					{client.name.replace(/^L’/, "").charAt(0)}
				</span>
			)}
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
	// 2de copie (boucle sans trou) ajoutée seulement dans le navigateur : le HTML lu par Google
	// ne contient la liste qu’une fois (pas de texte en double sur chaque page).
	const [loop, setLoop] = useState(false);
	useEffect(() => setLoop(true), []);
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
					{loop && (
						<ul className="flex gap-4" aria-hidden="true">
							{CLIENTS.map((c, i) => (
								<li key={`copie-${c.name}${c.location}`}>
									<ClientChip client={c} color={COLORS[i % COLORS.length]} />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}
