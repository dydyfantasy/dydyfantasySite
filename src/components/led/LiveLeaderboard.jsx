import { useEffect, useRef, useState } from "react";

// Aperçu animé du classement Dydy Quiz sur grand écran (en attendant les vraies captures).
// - Équipes FICTIVES, présentées comme un aperçu (légende sous l’écran).
// - Rempli seulement dans le navigateur : ces noms d’équipes ne finissent pas dans le HTML lu par Google.
// - Les points ne tombent que quand l’écran est visible (aucun calcul sinon),
//   et rien ne bouge si l’utilisateur limite les animations.
// - Mouvements en transform uniquement (rangs qui s’échangent, barres de score).
const TEAMS = [
	{ name: "Les Mariés", emoji: "💍", color: "var(--pink)", score: 1250 },
	{ name: "Table 7", emoji: "🍾", color: "var(--cyan)", score: 1180 },
	{ name: "Team Karaoké", emoji: "🎤", color: "var(--gold)", score: 1040 },
	{ name: "Les Collègues", emoji: "💼", color: "#7cff6b", score: 920 },
	{ name: "Les Cousins", emoji: "🎉", color: "#8b5cf6", score: 860 },
];
const START = TEAMS.map((t) => t.score);
const GAINS = [100, 150, 200, 250, 300];
const TICK = 1900;
const MAX = 3200; // au-delà, la partie recommence
const ROW = 3.1; // hauteur d’une ligne, en rem

function rankingOf(scores) {
	return scores.map((score, i) => ({ score, i })).sort((a, b) => b.score - a.score);
}

// Une équipe marque : celles de derrière marquent plus souvent, ce qui crée des dépassements
function nextRound(scores) {
	if (Math.max(...scores) > MAX) return { scores: START, last: null };
	const order = rankingOf(scores);
	const total = (order.length * (order.length + 1)) / 2;
	let pick = Math.random() * total;
	let team = order[order.length - 1].i;
	for (let rank = 0; rank < order.length; rank++) {
		pick -= rank + 1;
		if (pick <= 0) {
			team = order[rank].i;
			break;
		}
	}
	const gain = GAINS[Math.floor(Math.random() * GAINS.length)];
	return {
		scores: scores.map((s, i) => (i === team ? s + gain : s)),
		last: { team, gain, id: Date.now() },
	};
}

export default function LiveLeaderboard() {
	const ref = useRef(null);
	const scoresRef = useRef(START);
	const [mounted, setMounted] = useState(false);
	const [scores, setScores] = useState(START);
	const [last, setLast] = useState(null);

	useEffect(() => {
		setMounted(true);
		const el = ref.current;
		if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let timer = 0;
		const play = () => {
			const round = nextRound(scoresRef.current);
			scoresRef.current = round.scores;
			setScores(round.scores);
			setLast(round.last);
		};
		const io = new IntersectionObserver(([entry]) => {
			window.clearInterval(timer);
			if (entry.isIntersecting) timer = window.setInterval(play, TICK);
		});
		io.observe(el);
		return () => {
			io.disconnect();
			window.clearInterval(timer);
		};
	}, []);

	const ranking = rankingOf(scores);
	const rankOf = new Map(ranking.map((r, rank) => [r.i, rank]));
	const top = ranking[0].score;

	return (
		<figure className="w-full">
			<div ref={ref} aria-hidden="true" className="big-screen rounded-2xl p-[3px]">
				<div className="screen-inner rounded-[0.9rem] px-4 pb-5 pt-4 md:px-6">
					<div className="flex items-center justify-between gap-3">
						<p className="text-sm font-extrabold md:text-base">
							Dydy <span className="text-[var(--pink)]">Quiz</span>
							<span className="ml-2 font-semibold text-white/50">· Classement</span>
						</p>
						<p className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--pink)]">
							<span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--pink)]" />
							En direct
						</p>
					</div>

					<ol className="relative mt-4" style={{ height: `${TEAMS.length * ROW}rem` }}>
						{TEAMS.map((t, i) => {
							const rank = rankOf.get(i);
							const score = scores[i];
							return (
								<li
									key={t.name}
									className="lb-row absolute inset-x-0 top-0 flex h-[2.7rem] items-center gap-3 rounded-xl px-3"
									style={{ "--c": t.color, transform: `translateY(${rank * ROW}rem)` }}>
									<span className="lb-rank flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-extrabold">
										{rank + 1}
									</span>
									<span className="min-w-0 flex-1">
										<span className="block truncate text-sm font-bold">{mounted ? `${t.emoji} ${t.name}` : " "}</span>
										<span className="mt-1 block h-1 overflow-hidden rounded-full bg-white/10">
											<span className="lb-bar block h-full rounded-full" style={{ transform: `scaleX(${score / top})` }} />
										</span>
									</span>
									<span className="relative w-14 text-right text-sm font-extrabold tabular-nums">
										{mounted ? score : ""}
										{last?.team === i && (
											<span key={last.id} className="lb-gain absolute -top-3.5 right-0 rounded-full px-1.5 text-[0.65rem] font-extrabold">
												+{last.gain}
											</span>
										)}
									</span>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
			<figcaption className="mt-4 text-center text-sm text-white/55">
				Aperçu : vos invités jouent sur leur téléphone, le classement s’affiche en direct sur grand écran.
			</figcaption>
		</figure>
	);
}
