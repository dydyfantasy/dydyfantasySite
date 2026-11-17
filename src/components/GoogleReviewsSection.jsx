import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import { motion } from "motion/react";
import {
	StarIcon,
	ChatBubbleBottomCenterTextIcon,
	SparklesIcon,
} from "@heroicons/react/24/solid";

const GoogleReviewsSection = () => {
	return (
		<section className="relative overflow-hidden bg-gray-900 px-4 py-16 text-white">
			{/* Séparation douce */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

			{/* Fond décoratif discret */}
			<div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

			<div className="relative z-10 mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
					className="mb-10 text-center">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-200">
						<StarIcon className="h-4 w-4" />
						Avis clients
					</div>

					<h2 className="text-3xl font-black tracking-tight md:text-4xl">
						Ils ont aimé mes animations
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
						Des soirées interactives, une ambiance conviviale et des moments
						marquants pour les invités comme pour les organisateurs.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 45, scale: 0.98 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: false, amount: 0.15 }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl md:p-6">
					<div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500" />

					<div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
							<StarIcon className="mx-auto h-7 w-7 text-yellow-300" />

							<p className="mt-2 text-sm font-bold text-white">
								Expérience client
							</p>

							<p className="mt-1 text-xs text-gray-400">
								Des animations pensées pour faire participer tout le monde.
							</p>
						</div>

						<div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
							<ChatBubbleBottomCenterTextIcon className="mx-auto h-7 w-7 text-pink-300" />

							<p className="mt-2 text-sm font-bold text-white">
								Retours authentiques
							</p>

							<p className="mt-1 text-xs text-gray-400">
								Des avis issus des prestations et événements que j’ai animés.
							</p>
						</div>

						<div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
							<SparklesIcon className="mx-auto h-7 w-7 text-purple-300" />

							<p className="mt-2 text-sm font-bold text-white">
								Ambiance sur mesure
							</p>

							<p className="mt-1 text-xs text-gray-400">
								Blind tests, quiz, karaokés et animations adaptés à chaque
								public.
							</p>
						</div>
					</div>

					<div className="w-full overflow-hidden rounded-2xl">
						<ReactGoogleReviews
							layout="carousel"
							featurableId="07455073-608e-491d-94e1-433314951082"
							theme="dark"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default GoogleReviewsSection;
