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
import "./App.css";

const GA_ID = "G-3ZFS6P50ML";

const localBusinessJsonLd = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Dydy Fantasy",
	image: "https://dydyfantasy.fr/dydy_fantasy_logo.webp",
	description:
		"Animateur et organisateur d'événements à Toulouse : blind tests, quiz et animations pour soirées, bars et événements privés.",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Toulouse",
		addressRegion: "Occitanie",
		postalCode: "31000",
		addressCountry: "FR",
	},
	url: "https://dydyfantasy.fr/",
	sameAs: [
		"https://www.facebook.com/profile.php?id=61578462940099&locale=id_ID",
		"https://www.instagram.com/dydy_fantasy/",
	],
	priceRange: "€",
	geo: {
		"@type": "GeoCoordinates",
		latitude: 43.6045,
		longitude: 1.444,
	},
};

// Squelette HTML commun à toutes les pages (remplace l'ancien index.html)
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
	return <div className="min-h-screen bg-gray-900" />;
}

// Ce qui entoure chaque page (remplace l'ancien App.jsx)
export default function Root() {
	return (
		<>
			<LedHeader />
			<main>
				{/* La page correspondant à l'adresse s'affiche ici */}
				<Outlet />
			</main>
			<LedFooter />

			<ScrollToHash />
			<NextEventBubble />
		</>
	);
}
