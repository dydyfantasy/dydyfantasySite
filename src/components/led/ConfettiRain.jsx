// Pluie de confettis dorés et roses (haut de la page Mariage) : petits rectangles qui tombent
// doucement derrière le contenu. Décoratif (aria-hidden), transform uniquement, positions fixes
// (identiques au pré-rendu), coupé si le visiteur limite les animations, en pause hors écran.
const COLORS = ["#ffc93c", "#ff2fae", "#fff3d1", "#ffc93c", "#ff7ac8"];
const COUNT = 26;

const PIECES = Array.from({ length: COUNT }, (_, i) => {
	const r = (n) => ((i * 9301 + n * 49297) % 233280) / 233280; // pseudo-aléatoire stable
	return {
		left: `${(i * 37 + 11) % 100}%`,
		size: `${6 + Math.round(r(1) * 6)}px`,
		color: COLORS[i % COLORS.length],
		duration: `${8 + r(2) * 7}s`,
		delay: `${-r(3) * 15}s`,
		drift: `${Math.round((r(4) - 0.5) * 120)}px`,
		spin: `${Math.round(360 + r(5) * 540)}deg`,
	};
});

export default function ConfettiRain() {
	return (
		<div aria-hidden="true" className="confetti-rain">
			{PIECES.map((p, i) => (
				<i
					key={i}
					style={{
						left: p.left,
						"--w": p.size,
						"--c": p.color,
						"--d": p.duration,
						"--delay": p.delay,
						"--x": p.drift,
						"--r": p.spin,
					}}
				/>
			))}
		</div>
	);
}
