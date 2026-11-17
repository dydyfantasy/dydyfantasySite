import Seo from "../components/Seo";
import Presentation from "../components/Presentation";

function QuiSuisje() {
	return (
		<>
			<Seo
				path="/qui-suis-je"
				title="Dydy Fantasy | Qui suis-je ? Animateur événementiel à Toulouse"
				description="Découvrez Dydy Fantasy, animateur événementiel à Toulouse spécialisé en blind tests, quiz interactifs, karaokés et animations sur mesure pour soirées privées, bars, restaurants et événements professionnels."
				ogTitle="Dydy Fantasy | Animateur événementiel à Toulouse"
				ogDescription="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
			/>

			<Presentation />
		</>
	);
}

export default QuiSuisje;
