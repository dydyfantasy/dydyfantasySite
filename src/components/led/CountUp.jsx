import { useEffect, useRef, useState } from "react";

// Chiffre qui « défile » jusqu’à sa valeur quand il arrive à l’écran (façon tableau des scores).
// - Le HTML pré-rendu contient la VRAIE valeur (Google et les lecteurs d’écran la lisent).
// - L’animation ne part que si le chiffre est encore sous l’écran au chargement (pas de saut visible).
// - Tous les nombres du texte sont animés : « 12 à 15 », « 150+ », « 200+ »…
const DURATION = 1400;

function format(value, progress) {
	return value.replace(/\d+/g, (n) => String(Math.round(Number(n) * progress)));
}

export default function CountUp({ value, className = "" }) {
	const ref = useRef(null);
	const [progress, setProgress] = useState(1);

	useEffect(() => {
		const el = ref.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		// Déjà visible au chargement : on laisse la valeur finale
		if (el.getBoundingClientRect().top < window.innerHeight) return;

		setProgress(0);
		let frame = 0;
		const io = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				io.disconnect();
				const start = performance.now();
				const tick = (now) => {
					const t = Math.min(1, (now - start) / DURATION);
					setProgress(1 - Math.pow(1 - t, 3)); // départ rapide, fin en douceur
					if (t < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.6 },
		);
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<span ref={ref} className={className}>
			{format(value, progress)}
		</span>
	);
}
