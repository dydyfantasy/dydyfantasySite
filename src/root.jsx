import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import LedHeader from "./components/led/LedHeader.jsx";
import LedFooter from "./components/led/LedFooter.jsx";
import NextEventBubble from "./components/led/NextEventBubble.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/800.css";
import "./index.css";
import "./css/led.css";

const GA_ID = "G-3ZFS6P50ML";

// Fiche entreprise unique pour Google (doit rester cohérente avec la fiche Google Business Profile :
// zone desservie, adresse masquée -> ville seulement). Les pages de prestation y renvoient via "@id".
// À affiner : liste exacte des villes de la zone desservie de la fiche Google.
const localBusinessJsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"@id": "https://dydyfantasy.fr/#entreprise",
	name: "Dydy Fantasy",
	url: "https://dydyfantasy.fr/",
	image: "https://dydyfantasy.fr/dydy_fantasy_logo-v3.webp",
	logo: "https://dydyfantasy.fr/icon-512.png",
	description:
		"Animateur et DJ à Toulouse : blind tests, quiz interactifs, karaokés et animations sur mesure pour mariages, entreprises, anniversaires, bars et restaurants.",
	telephone: "+33695953356",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Fonsorbes",
		postalCode: "31470",
		addressRegion: "Occitanie",
		addressCountry: "FR",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 43.5356,
		longitude: 1.2317,
	},
	areaServed: [
		{
			"@type": "GeoCircle",
			geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.6047, longitude: 1.4442 },
			geoRadius: 50000,
		},
		{ "@type": "City", name: "Toulouse" },
		{ "@type": "AdministrativeArea", name: "Haute-Garonne" },
		{ "@type": "AdministrativeArea", name: "Gers" },
		{ "@type": "AdministrativeArea", name: "Tarn" },
	],
	sameAs: ["https://facebook.com/profile.php?id=61578462940099", "https://www.instagram.com/dydy_fantasy"],
	priceRange: "€",
};

// Squelette HTML commun à toutes les pages (remplace l’ancien index.html)
export function Layout({ children }) {
	return (
		<html lang="fr">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* title, description, canonical et Open Graph : fournis par chaque page via <Seo /> */}
				<link rel="icon" href="/favicon.ico" sizes="48x48" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#1e293b" />
				<Meta />
				<Links />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessJsonLd),
					}}
				/>

				{/* Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
					}}
				/>
			</head>
			<body>
				{children}
				<ScrollRestoration />
				{/* Agenda : modifiable sur le serveur sans recompiler le site */}
				<script src="/events/events.js" />
				<Scripts />
			</body>
		</html>
	);
}

// Affiché pendant le chargement du JavaScript tant que les pages ne sont pas
// pré-rendues (étape 4) : fond de la couleur du site, comme avant.
export function HydrateFallback() {
	return <div className="min-h-screen bg-[#05040a]" />;
}

// Ce qui entoure chaque page (remplace l’ancien App.jsx)
export default function Root() {
	return (
		<>
			<LedHeader />
			<main>
				{/* La page correspondant à l’adresse s’affiche ici */}
				<Outlet />
			</main>
			<LedFooter />

			<ScrollToHash />
			<NextEventBubble />
		</>
	);
}
