import { useEffect } from "react";
import { useLocation } from "react-router";

// Met en pause les animations CSS des blocs hors de l’écran (sections, bandes LED, lumières de scène)
// et les relance quand ils reviennent : même rendu à l’œil, mais le téléphone ne calcule plus
// des dizaines d’animations invisibles (fluidité, batterie). Classe .anim-off : voir led.css.
const SELECTOR = ".led section, .led-strip, .stage-lights > span";

export default function PauseOffscreen() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (!("IntersectionObserver" in window)) return;
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) e.target.classList.toggle("anim-off", !e.isIntersecting);
			},
			{ rootMargin: "150px 0px" },
		);
		const targets = document.querySelectorAll(SELECTOR);
		targets.forEach((el) => io.observe(el));
		return () => {
			io.disconnect();
			targets.forEach((el) => el.classList.remove("anim-off"));
		};
	}, [pathname]);

	return null;
}
