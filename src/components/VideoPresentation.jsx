import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
	PlayCircleIcon,
	SparklesIcon,
	MicrophoneIcon,
} from "@heroicons/react/24/outline";

import videoPresentation from "../assets/C'est qui dydy fantasy.webm";
import imagePresentation from "../assets/C'est qui dydy fantasy image.webp";

const VideoPresentation = () => {
	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		if (!containerRef.current || videoLoaded) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && videoRef.current && !videoLoaded) {
					videoRef.current.src = videoPresentation;
					setVideoLoaded(true);
					observer.disconnect();
				}
			},
			{
				root: null,
				threshold: 0.25,
			},
		);

		observer.observe(containerRef.current);

		return () => observer.disconnect();
	}, [videoLoaded]);

	return (
		<section
			ref={containerRef}
			className="relative overflow-hidden bg-gray-900 px-4 py-16 text-white">
			{/* Séparation douce */}
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

			{/* Fond décoratif */}
			<div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
			<div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

			<div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
				{/* Texte */}
				<motion.div
					initial={{ opacity: 0, x: -45, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="text-center lg:text-left">
					<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-200">
						<SparklesIcon className="h-4 w-4" />
						Présentation
					</div>

					<h2 className="text-3xl font-black tracking-tight md:text-4xl">
						Mais c’est qui Dydy Fantasy ?
					</h2>

					<p className="mt-5 text-sm leading-relaxed text-gray-300 md:text-base">
						Découvrez mon univers, ma façon d’animer et l’ambiance que je mets
						en place pour transformer vos soirées en vrais moments interactifs.
					</p>

					<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
						<div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
							<div className="flex items-center justify-center gap-3 lg:justify-start">
								<MicrophoneIcon className="h-6 w-6 text-pink-300" />
								<p className="text-sm font-bold text-white">
									Animation micro, relances et interaction public
								</p>
							</div>
						</div>

						<div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
							<div className="flex items-center justify-center gap-3 lg:justify-start">
								<PlayCircleIcon className="h-6 w-6 text-blue-300" />
								<p className="text-sm font-bold text-white">
									Une présentation rapide avant de réserver
								</p>
							</div>
						</div>
					</div>

					<a
						href="/contact"
						className="mt-7 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-3 text-sm font-black text-white shadow-[0_0_28px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(236,72,153,0.65)]">
						Discuter de mon événement
					</a>
				</motion.div>

				{/* Vidéo */}
				<motion.div
					initial={{ opacity: 0, x: 45, scale: 0.96, filter: "blur(8px)" }}
					whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
					viewport={{ once: false, amount: 0.25 }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="relative flex justify-center">
					<div className="absolute h-[520px] w-[280px] rounded-[3rem] bg-gradient-to-r from-pink-500/25 via-purple-500/20 to-blue-500/25 blur-2xl" />

					<div className="relative w-full max-w-[300px] rounded-[3rem] border border-white/15 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-xl">
						{/* Haut du téléphone */}
						<div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/20" />

						<div className="relative overflow-hidden rounded-[2.4rem] bg-black">
							<video
								ref={videoRef}
								id="presentation-video"
								controls
								preload="none"
								poster={imagePresentation}
								playsInline
								className="aspect-[9/16] w-full bg-black object-cover"
								aria-label="Présentation de Dydy Fantasy, animateur événementiel à Toulouse"
							/>
						</div>

						<div className="mt-4 px-2 pb-2 text-center">
							<p className="text-sm font-bold text-white">
								Dydy Fantasy en vidéo
							</p>

							<p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
								Présentation verticale
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default VideoPresentation;
