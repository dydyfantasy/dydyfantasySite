import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import PeekingMascot from "./PeekingMascot";

/**
 * Avis client cité MOT POUR MOT (extrait autorisé, coupures signalées par « […] »).
 * testimonial = {
 *   label, title, accent,            // titre de section
 *   highlight,                        // phrase mise en avant (tirée de l’avis)
 *   quote: ["paragraphe", …],         // extrait de l’avis
 *   author, rating, source,           // ex. "Michel", 5, "Avis Google"
 *   link: { href, label },            // facultatif (ex. profil Mariages.net)
 *   mascot,                           // facultatif : bulle de la mascotte
 *   hearts,                           // facultatif : petits cœurs sur le cadre (page Mariage)
 * }
 */
export default function Testimonial({ testimonial: t }) {
	return (
		<section aria-labelledby="avis" className="relative px-4 py-16">
			{t.mascot && <PeekingMascot text={t.mascot} className="top-10" />}
			<div className="mx-auto max-w-4xl">
				<SectionTitle id="avis" label={t.label} title={t.title} accent={t.accent} />

				<ScrollReveal className="mt-10">
					<figure className="neon-card testimonial-card relative rounded-3xl p-6 md:p-10" style={{ "--c": "var(--pink)" }}>
						{t.hearts && (
							<span aria-hidden="true" className="testimonial-hearts">
								<HeartIcon className="h-6 w-6" />
								<HeartIcon className="h-4 w-4" />
							</span>
						)}
						<div className="flex gap-1 text-[var(--gold)]" aria-label={`Note : ${t.rating} sur 5`} role="img">
							{Array.from({ length: t.rating }, (_, i) => (
								<StarIcon key={i} aria-hidden="true" className="h-6 w-6" />
							))}
						</div>
						<blockquote className="mt-5">
							<p className="text-2xl font-extrabold leading-snug md:text-3xl">« {t.highlight} »</p>
							<div className="mt-5 space-y-3 text-white/80">
								{t.quote.map((p) => (
									<p key={p}>{p}</p>
								))}
							</div>
						</blockquote>
						<figcaption className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
							<p className="font-bold">
								{t.author} <span className="font-normal text-white/60">· {t.source}</span>
							</p>
							{t.link && (
								<a
									href={t.link.href}
									target="_blank"
									rel="noopener"
									className="btn-outline-neon inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--pink)] px-5 py-2.5 text-sm font-semibold text-[var(--pink)]">
									{t.link.label}
									<ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
								</a>
							)}
						</figcaption>
					</figure>
				</ScrollReveal>
			</div>
		</section>
	);
}
