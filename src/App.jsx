import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Quisuisje from "./pages/Qui-suis-je.jsx";
import NosPrestations from "./pages/NosPrestations.jsx";
import NotreApproche from "./pages/NotreApproche.jsx";
import Contact from "./pages/Contact.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Privacy from "./pages/Privacy.jsx";
import FloatingNextEvent from "./components/FloatingNextEvent.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";

function App() {
	return (
		<>
			<Helmet>
				<script type="application/ld+json">
					{`{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dydy Fantasy",
      "image": "https://dydyfantasy.fr/dydy_fantasy_logo.webp",
      "description": "Animateur et organisateur d'événements à Toulouse : blind tests, quiz et animations pour soirées, bars et événements privés.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toulouse",
        "addressRegion": "Occitanie",
        "postalCode": "31000",
        "addressCountry": "FR"
      },
      "url": "https://dydyfantasy.fr/",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578462940099&locale=id_ID",
        "https://www.instagram.com/dydy_fantasy/"
      ],
      "priceRange": "€",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6045,
        "longitude": 1.444
      }
    }`}
				</script>
				{/* Google Analytics */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-3ZFS6P50ML"></script>
				<script>
					{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3ZFS6P50ML');
  `}
				</script>
			</Helmet>

			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/qui-suis-je" element={<Quisuisje />} />
					<Route path="/prestations" element={<NosPrestations />} />
					<Route path="/mon-approche" element={<NotreApproche />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/privacy" element={<Privacy />} />
				</Routes>
			</main>
			<Footer />

			<ScrollToHash />
			<WhatsAppButton />
			<FloatingNextEvent />
		</>
	);
}

export default App;
