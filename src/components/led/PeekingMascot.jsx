import ScrollReveal from "./ScrollReveal";
import tete128 from "../../assets/brand/perso-tete-128.webp";

// La mascotte passe la tête par le bord droit de l’écran, avec une bulle.
// Grand écran uniquement (xl) pour ne jamais recouvrir le contenu ; décoratif (aria-hidden).
// Le parent doit être en position relative ; className règle la hauteur (ex. "top-2").
export default function PeekingMascot({ text, className = "top-2" }) {
	return (
		<ScrollReveal
			variant="right"
			aria-hidden="true"
			className={`pointer-events-none absolute right-0 hidden items-center gap-3 xl:flex ${className}`}>
			<p className="mascot-bubble bubble-right relative rounded-2xl px-4 py-2 text-sm font-extrabold">{text}</p>
			<img src={tete128} alt="" width="128" height="128" loading="lazy" className="peek-head -mr-8 h-28 w-28" />
		</ScrollReveal>
	);
}
