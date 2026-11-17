// Lumières de scène diffuses derrière toute la page d'accueil :
// taches colorées qui dérivent lentement + faisceaux de projecteur qui se balancent.
// Purement décoratif (aria-hidden). Positions en % de la hauteur de la page.

const SPOTS = [
	// top, left, taille, couleur, durée, dérive x/y
	{ top: "14%", left: "8%", size: "52rem", color: "var(--pink)", d: "18s", x: "6vw", y: "3vh" },
	{ top: "22%", left: "88%", size: "46rem", color: "var(--cyan)", d: "22s", x: "-7vw", y: "4vh" },
	{ top: "36%", left: "55%", size: "40rem", color: "#8b5cf6", d: "20s", x: "5vw", y: "-4vh" },
	{ top: "50%", left: "5%", size: "48rem", color: "var(--cyan)", d: "24s", x: "8vw", y: "2vh" },
	{ top: "62%", left: "92%", size: "50rem", color: "var(--gold)", d: "19s", x: "-6vw", y: "-3vh" },
	{ top: "76%", left: "30%", size: "44rem", color: "var(--pink)", d: "21s", x: "7vw", y: "3vh" },
	{ top: "90%", left: "75%", size: "46rem", color: "#8b5cf6", d: "23s", x: "-5vw", y: "-2vh" },
];

const BEAMS = [
	{ top: "11%", left: "78%", color: "var(--cyan)", d: "11s" },
	{ top: "44%", left: "18%", color: "var(--pink)", d: "13s" },
	{ top: "70%", left: "70%", color: "var(--gold)", d: "12s" },
];

export default function StageLights() {
	return (
		<div aria-hidden="true" className="stage-lights">
			{SPOTS.map((s, i) => (
				<span
					key={`spot-${i}`}
					className="spot"
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
					style={{ top: b.top, left: b.left, "--c": b.color, "--d": b.d }}
				/>
			))}
		</div>
	);
}
