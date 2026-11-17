import Prestations from "../components/Prestations";
import Seo from "../components/Seo";
function NosPrestations() {
	return (
		<>
			<Seo
				path="/prestations"
				title="Dydy Fantasy – Animateur & Prestations d’Événements à Toulouse"
				description="Dydy Fantasy propose des animations et événements à Toulouse : blind tests, quiz, soirées, mariages et événements privés sur mesure."
			/>
			<Prestations />
		</>
	);
}

export default NosPrestations;
