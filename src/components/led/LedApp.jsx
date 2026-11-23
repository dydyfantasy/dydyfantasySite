import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { QrCodeIcon, PlayCircleIcon, TrophyIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import LiveLeaderboard from "./LiveLeaderboard";
import LoopVideo from "./LoopVideo";
import { getVideo } from "./videoAssets";

// Vidéo de 15 s déposée dans src/assets/videos/dydy-quiz-accueil.mp4 : remplace l’aperçu animé
const VIDEO = getVideo("dydy-quiz-accueil");
// Version portrait (téléphone), facultative : dydy-quiz-accueil-mobile.mp4
const VIDEO_MOBILE = getVideo("dydy-quiz-accueil-mobile");

const STEPS = [
	{ icon: QrCodeIcon, color: "var(--cyan)", title: "Un QR code", text: "Chacun scanne avec son téléphone, rien à installer." },
	{ icon: PlayCircleIcon, color: "var(--pink)", title: "On joue", text: "Quiz, blind test, sondages, défis photo…" },
	{ icon: TrophyIcon, color: "var(--gold)", title: "Scores en direct", text: "Le classement s’affiche sur grand écran." },
];

// Section de l'accueil : l'appli Dydy Quiz, « marque de fabrique », avec lien vers sa page.
export default function LedApp() {
	return (
		<section aria-labelledby="app-titre" className="px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<SectionTitle id="app-titre" label="Ma marque de fabrique" title="Dydy Quiz," accent="toute la salle joue">
						L’appli que j’ai développée pour faire jouer vos invités depuis leur téléphone : quiz, blind
						test, sondages et défis photo, avec les scores en direct sur grand écran.
					</SectionTitle>
					<p className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[var(--gold)] px-4 py-2 text-sm font-bold text-[var(--gold)]">
						<ShieldCheckIcon aria-hidden="true" className="h-5 w-5" />
						Utilisée dans plus de 150 soirées
					</p>
				</div>

				{/* Les 3 étapes à gauche, l’aperçu du grand écran à droite (dessous sur mobile) */}
				<div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
					<div>
						<ol className="grid gap-4">
							{STEPS.map((s, i) => (
								<ScrollReveal as="li" key={s.title} variant="left" delay={i * 100} className="neon-card flex items-start gap-4 rounded-3xl p-5" style={{ "--c": s.color }}>
									<span className="menu-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
										<s.icon aria-hidden="true" className="h-7 w-7" />
									</span>
									<div>
										<h3 className="text-lg font-extrabold">{s.title}</h3>
										<p className="mt-1 text-white/75">{s.text}</p>
									</div>
								</ScrollReveal>
							))}
						</ol>

						<Link to="/dydy-quiz" className="btn-outline-neon mt-8 inline-flex items-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
							Découvrir Dydy Quiz
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
					</div>

					<ScrollReveal variant="right" delay={150}>
						{VIDEO ? (
							<figure>
								<div
									className={`big-screen rounded-2xl p-[3px] ${
										VIDEO_MOBILE ? "mx-auto max-w-[21rem] md:max-w-none" : ""
									}`}>
									<LoopVideo
										video={VIDEO}
										mobile={VIDEO_MOBILE}
										label="Dydy Quiz en soirée : les invités jouent sur leur téléphone, le classement s’affiche sur grand écran"
										className="rounded-[0.9rem]"
									/>
								</div>
								<figcaption className="mt-4 text-center text-sm text-white/55">
									Dydy Quiz en vrai : vos invités jouent sur leur téléphone, le classement s’affiche en direct sur grand écran.
								</figcaption>
							</figure>
						) : (
							<LiveLeaderboard />
						)}
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
