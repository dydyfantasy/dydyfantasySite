import Prestations from "../components/Prestations";
import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
function NosPrestations() {
	return (
		<div className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/prestations"
				title="Dydy Fantasy – Animateur & Prestations d’Événements à Toulouse"
				description="Dydy Fantasy propose des animations et événements à Toulouse : blind tests, quiz, soirées, mariages et événements privés sur mesure."
			/>
			<Prestations />
		</div>
	);
}

export default NosPrestations;
