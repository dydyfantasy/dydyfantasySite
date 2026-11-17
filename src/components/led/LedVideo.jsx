import { Link } from "react-router";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/solid";
import videoPresentation from "../../assets/C'est qui dydy fantasy.webm";
import imagePresentation from "../../assets/C'est qui dydy fantasy image.webp";
import SectionTitle from "./SectionTitle";

// Vidéo de présentation dans un cadre « téléphone néon ».
// preload="none" : la vidéo (26 Mo) n'est téléchargée qu'au clic sur lecture.
export default function LedVideo() {
	return (
		<section aria-labelledby="video-titre" className="px-4 py-20">
			<div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_22rem]">
				<div>
					<SectionTitle id="video-titre" label="Présentation" title="Mais c'est qui" accent="Dydy Fantasy ?">
						Découvrez mon univers, ma façon d'animer et l'ambiance que je mets en place pour
						transformer vos soirées en vrais moments interactifs.
					</SectionTitle>
					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<Link
							to="/qui-suis-je"
							className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--cyan)] px-6 py-3 font-semibold text-[var(--cyan)]">
							En savoir plus sur moi
							<ArrowRightIcon className="h-4 w-4" />
						</Link>
						<a
							href="/contact"
							className="btn-neon inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--pink)] px-6 py-3 font-bold text-white">
							<SparklesIcon className="h-5 w-5" />
							Discuter de mon événement
						</a>
					</div>
				</div>

				<div className="phone-frame mx-auto w-full max-w-[20rem] rounded-[2.2rem] p-2">
					<video
						src={videoPresentation}
						controls
						preload="none"
						playsInline
						poster={imagePresentation}
						aria-label="Présentation de Dydy Fantasy, animateur événementiel à Toulouse"
						className="aspect-[9/16] w-full rounded-[1.8rem] bg-black object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
