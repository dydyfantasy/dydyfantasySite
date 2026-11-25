import { useEffect, useRef, useState } from "react";

// Vidéo d’ambiance en boucle, muette (ex. Dydy Quiz sur l’accueil).
// - Rien n’est téléchargé avant l’arrivée sur la section (preload="none") ;
// - lecture quand elle est visible, pause quand on la quitte (batterie, data mobile) ;
// - `mobile` (facultatif) : version portrait 9:16 pour les écrans de moins de 768 px.
//   Le choix se fait dans le navigateur ; seule la version affichée est téléchargée
//   (image d’attente comprise : aucune avant ce choix, pour ne pas charger les deux) ;
// - si le visiteur limite les animations : pas de lecture automatique, boutons de lecture à la place.
const MOBILE_QUERY = "(max-width: 767px)";

// `aspect` : classes de format (par défaut 16:9, ou 9:16 → 16:9 si version mobile)
export default function LoopVideo({ video, mobile, label, aspect, className = "" }) {
	const ref = useRef(null);
	const visible = useRef(false);
	const [manual, setManual] = useState(false);
	// null = pas encore choisi (HTML pré-rendu), puis "desktop" ou "mobile"
	const [variant, setVariant] = useState(null);

	useEffect(() => {
		if (!mobile) {
			setVariant("desktop");
			return;
		}
		const mq = window.matchMedia(MOBILE_QUERY);
		const update = () => setVariant(mq.matches ? "mobile" : "desktop");
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, [mobile]);

	// Nouvelle version choisie : le navigateur doit relire les <source>
	useEffect(() => {
		const el = ref.current;
		// (seulement si elle est déjà à l’écran : sinon load() lancerait le téléchargement trop tôt)
		if (!variant || !el || !visible.current) return;
		el.load();
		el.play().catch(() => {});
	}, [variant]);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setManual(true);
			return;
		}
		el.muted = true;
		const io = new IntersectionObserver(
			([entry]) => {
				visible.current = entry.isIntersecting;
				if (entry.isIntersecting) el.play().catch(() => {});
				else el.pause();
			},
			{ threshold: 0.35 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	const current = variant === "mobile" ? mobile : video;
	const portrait = Boolean(mobile);

	return (
		<video
			ref={ref}
			muted
			loop
			playsInline
			preload="none"
			// Sans version mobile, l’image d’attente est connue dès la génération du HTML (pas de cadre noir) ;
			// avec une version mobile, elle attend le choix du navigateur (pour ne pas charger les deux).
			poster={variant ? current.poster : mobile ? undefined : video.poster}
			controls={manual}
			aria-label={label}
			className={`block w-full bg-black object-cover ${
				aspect ?? (portrait ? "aspect-[9/16] md:aspect-video" : "aspect-video")
			} ${className}`}>
			{variant &&
				current.sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
		</video>
	);
}
