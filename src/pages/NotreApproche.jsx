import Seo from "../components/Seo";
import StageLights from "../components/led/StageLights";
import OurApproach from "../components/OurApproach";

function NotreApproche() {
	return (
		<div className="led relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/mon-approche"
				title="Dydy Fantasy | Mon approche pour animer vos événements à Toulouse"
				description="Découvrez l’approche Dydy Fantasy à Toulouse : écoute, personnalisation, préparation et animation interactive pour vos soirées, blind tests, quiz, karaokés et événements sur mesure."
				ogTitle="Dydy Fantasy | Mon approche d’animation événementielle"
				ogDescription="Une méthode simple, claire et personnalisée pour créer une animation interactive, conviviale et adaptée à votre public."
			/>

			<OurApproach />
		</div>
	);
}

export default NotreApproche;
