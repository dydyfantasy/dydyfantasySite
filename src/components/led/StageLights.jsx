// Lumières de scène diffuses derrière toute la page d'accueil :
// taches colorées qui dérivent lentement + traînées de lumière diagonales (rayons dans la fumée).
// Purement décoratif (aria-hidden). Positions en % de la hauteur de la page.
// mobileOff : lumière masquée sur mobile (version allégée, moins de mémoire graphique).
// Traînées : bandes fondues à toutes leurs extrémités (pas de point de départ ni de fin nette).

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

const STREAKS = [
	// rotate : inclinaison de la traînée
	{ top: "18%", left: "60%", rotate: "-24deg", color: "var(--cyan)", d: "16s" },
	{ top: "46%", left: "35%", rotate: "20deg", color: "var(--pink)", d: "19s", mobileOff: true },
	{ top: "72%", left: "65%", rotate: "-18deg", color: "var(--gold)", d: "17s", mobileOff: true },
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
			{STREAKS.map((b, i) => (
				<span
					key={`streak-${i}`}
					className="streak"
					data-mobile-off={b.mobileOff || undefined}
					style={{ top: b.top, left: b.left, "--r": b.rotate, "--c": b.color, "--d": b.d }}
				/>
			))}
		</div>
	);
}
