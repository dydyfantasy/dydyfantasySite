// Spectre audio qui pulse (barres d’égaliseur cyan → violet → rose), purement décoratif.
// Chaque barre a sa propre vitesse, son décalage et sa hauteur max : valeurs fixes calculées
// une fois (même rendu dans le HTML pré-rendu et dans le navigateur).
// Animation en transform (scaleY) uniquement ; moins de barres sur mobile (CSS).
// L’affichage (flex / hidden) se règle avec les classes Tailwind passées en className.
const COUNT = 48;

const BARS = Array.from({ length: COUNT }, (_, i) => {
	const t = i / (COUNT - 1);
	// cyan → violet sur la 1re moitié, violet → rose sur la 2de
	const color =
		t < 0.5
			? `color-mix(in oklab, #8b5cf6 ${Math.round(t * 200)}%, var(--cyan))`
			: `color-mix(in oklab, var(--pink) ${Math.round((t - 0.5) * 200)}%, #8b5cf6)`;
	return {
		color,
		d: (0.55 + ((i * 37) % 11) / 14).toFixed(2),
		delay: (-((i * 53) % 17) / 10).toFixed(1),
		h: (0.45 + ((i * 29) % 13) / 24).toFixed(2),
	};
});

export default function Spectrum({ className = "" }) {
	return (
		<div aria-hidden="true" className={`spectrum pointer-events-none items-end gap-[3px] ${className}`}>
			{BARS.map((b, i) => (
				<span
					key={i}
					style={{ background: b.color, "--d": `${b.d}s`, "--delay": `${b.delay}s`, "--h": b.h }}
				/>
			))}
		</div>
	);
}
