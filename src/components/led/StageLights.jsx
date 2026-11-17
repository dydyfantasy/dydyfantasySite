// Lumières de scène diffuses derrière toute la page d'accueil :
// taches colorées qui dérivent lentement + faisceaux de projecteur qui se balancent.
// Purement décoratif (aria-hidden). Positions en % de la hauteur de la page.
// mobileOff : lumière masquée sur mobile (version allégée, moins de mémoire graphique).
// Faisceaux : leur base est hors de l'écran (left < 0 ou > 100 %), seule la lumière traverse.

const SPOTS = [
	// top, left, taille, couleur, durée, dérive x/y
	{ top: "14%", left: "8%", size: "52rem", color: "var(--pink)", d: "18s", x: "6vw", y: "3vh" },
	{ top: "22%", left: "88%", size: "46rem", color: "var(--cyan)", d: "22s", x: "-7vw", y: "4vh" },
	{ top: "36%", left: "55%", size: "40rem", color: "#8b5cf6", d: "20s", x: "5vw", y: "-4vh", mobileOff: true },
	{ top: "50%", left: "5%", size: "48rem", color: "var(--cyan)", d: "24s", x: "8vw", y: "2vh" },
	{ top: "62%", left: "92%", size: "50rem", color: "var(--gold)", d: "19s", x: "-6vw", y: "-3vh", mobileOff: true },
	{ top: "76%", left: "30%", size: "44rem", color: "var(--pink)", d: "21s", x: "7vw", y: "3vh" },
	{ top: "90%", left: "75%", size: "46rem", color: "#8b5cf6", d: "23s", x: "-5vw", y: "-2vh", mobileOff: true },
];

const BEAMS = [
	// angle : direction du faisceau (180 = vers le bas, 135 = bas-droite, 225 = bas-gauche)
	{ top: "10%", left: "106%", angle: 228, color: "var(--cyan)", d: "11s" },
	{ top: "40%", left: "-6%", angle: 132, color: "var(--pink)", d: "13s", mobileOff: true },
	{ top: "66%", left: "106%", angle: 225, color: "var(--gold)", d: "12s", mobileOff: true },
];

export default function StageLights() {
	return (
		<div aria-hidden="true" className="stage-lights">
			{SPOTS.map((s, i) => (
				<span
					key={`spot-${i}`}
					className="spot"
					data-mobile-off={s.mobileOff || undefined}
					style={{
						top: s.top,
						left: s.left,
						"--s": s.size,
						"--c": s.color,
						"--d": s.d,
						"--x": s.x,
						"--y": s.y,
					}}
				/>
			))}
			{BEAMS.map((b, i) => (
				<span
					key={`beam-${i}`}
					className="beam"
					data-mobile-off={b.mobileOff || undefined}
					style={{ top: b.top, left: b.left, "--a": `${b.angle}deg`, "--c": b.color, "--d": b.d }}
				/>
			))}
		</div>
	);
}
