import Prestations from "../components/Prestations";
import { Helmet } from "react-helmet";
function NosPrestations() {
	return (
		<>
			<Helmet>
				<title>
					Dydy Fantasy – Animateur & Prestations d’Événements à Toulouse
				</title>
				<meta
					name="description"
					content="Dydy Fantasy propose des animations et événements à Toulouse : blind tests, quiz, soirées, mariages et événements privés sur mesure."
				/>
				<link rel="canonical" href="https://www.dydyfantasy.fr/prestations" />
			</Helmet>
			<Prestations />
		</>
	);
}

export default NosPrestations;
