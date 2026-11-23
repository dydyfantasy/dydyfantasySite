import { useEffect, useRef, useState } from "react";

// Vidéo d’ambiance en boucle, muette (ex. Dydy Quiz sur l’accueil).
// - Rien n’est téléchargé avant l’arrivée sur la section (preload="none") ;
// - lecture quand elle est visible, pause quand on la quitte (batterie, data mobile) ;
// - si le visiteur limite les animations : pas de lecture automatique, boutons de lecture à la place.
export default function LoopVideo({ video, label, className = "" }) {
	const ref = useRef(null);
	const [manual, setManual] = useState(false);

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
				if (entry.isIntersecting) el.play().catch(() => {});
				else el.pause();
			},
			{ threshold: 0.35 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<video
			ref={ref}
			muted
			loop
			playsInline
			preload="none"
			poster={video.poster}
			controls={manual}
			aria-label={label}
			className={`block aspect-video w-full bg-black object-cover ${className}`}>
			{video.sources.map((s) => (
				<source key={s.src} src={s.src} type={s.type} />
			))}
		</video>
	);
}
