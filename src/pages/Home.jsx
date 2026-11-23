import Seo from "../components/Seo";
import HeroLed from "../components/led/HeroLed";
import StageLights from "../components/led/StageLights";
import LedStats from "../components/led/LedStats";
import LedEvents from "../components/led/LedEvents";
import LedApp from "../components/led/LedApp";
import LedAgenda from "../components/led/LedAgenda";
import LedClients from "../components/led/LedClients";
import LedReviews from "../components/led/LedReviews";
import LedAbout from "../components/led/LedAbout";
import LedFinal from "../components/led/LedFinal";
import LedDivider from "../components/led/LedDivider";
import LedGalerie from "../components/led/LedGalerie";

function Home() {
	return (
		<div className="led fun relative isolate overflow-hidden bg-[var(--ink)] text-white">
			<StageLights />
			<Seo
				path="/"
				title="Animateur blind test, quiz, karaoké & DJ à Toulouse | Dydy Fantasy"
				description="Animateur à Toulouse : blind test, quiz, karaoké et DJ pour mariages, anniversaires, entreprises et bars. Plus de 70 avis Google. Demandez votre devis."
				ogTitle="Dydy Fantasy | Animation événementielle à Toulouse"
				ogDescription="Blind tests, quiz interactifs, karaokés et animations sur mesure pour vos événements à Toulouse et en Occitanie."
			/>

			<HeroLed />
			<LedStats band />

			<LedEvents />
			<LedDivider color="var(--pink)" />
			<LedApp />
			<LedDivider color="var(--cyan)" reverse />
			<LedAgenda />
			<LedClients />
			<LedDivider color="var(--gold)" />
			<LedReviews />
			<LedGalerie />
			<LedAbout />
			<LedDivider color="var(--pink)" reverse />
			<LedFinal bubble="À vous de jouer ! 🎤" />
		</div>
	);
}

export default Home;
