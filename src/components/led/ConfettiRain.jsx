// Pluie de cœurs et de pétales (haut de la page Mariage), façon sortie de mairie.
// Décoratif (aria-hidden), transform uniquement, positions fixes (identiques au pré-rendu),
// coupé si le visiteur limite les animations, en pause hors écran.
const COLORS = ["#ffc93c", "#ff7ac8", "#fff3d1", "#ff2fae", "#ffd98a"];
const COUNT = 26;

const PIECES = Array.from({ length: COUNT }, (_, i) => {
	const r = (n) => ((i * 9301 + n * 49297) % 233280) / 233280; // pseudo-aléatoire stable
	return {
		shape: i % 3 === 0 ? "heart" : "petal",
		left: `${(i * 37 + 11) % 100}%`,
		size: `${7 + Math.round(r(1) * 6)}px`,
		color: COLORS[i % COLORS.length],
		duration: `${9 + r(2) * 8}s`,
		delay: `${-r(3) * 17}s`,
		drift: `${Math.round((r(4) - 0.5) * 140)}px`,
		spin: `${Math.round(200 + r(5) * 400)}deg`,
	};
});

export default function ConfettiRain() {
	return (
		<div aria-hidden="true" className="confetti-rain">
			{PIECES.map((p, i) => (
				<i
					key={i}
					className={p.shape}
					style={{
						left: p.left,
						"--w": p.size,
						"--c": p.color,
						"--d": p.duration,
						"--delay": p.delay,
						"--x": p.drift,
						"--r": p.spin,
					}}>
					{p.shape === "heart" ? "♥" : null}
				</i>
			))}
		</div>
	);
}
