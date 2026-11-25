// Balises SEO d’une page : React 19 les place automatiquement dans le <head>,
// y compris dans le HTML généré à la compilation.
// Chaque page doit avoir exactement un <Seo />.

const SITE_URL = "https://dydyfantasy.fr";
// Image d’aperçu des partages (WhatsApp, Facebook, Messenger, LinkedIn…) : 1200 x 630 en JPG,
// lu par toutes les applis. Original dans medias-sources/partage-dydy-fantasy-original.jpg.
const DEFAULT_IMAGE = `${SITE_URL}/partage-dydy-fantasy.jpg`;
const DEFAULT_IMAGE_ALT = "Dydy Fantasy aux platines devant une salle pleine : animation interactive et DJ";

export default function Seo({
	title,
	description,
	path,
	ogTitle,
	ogDescription,
	noindex = false,
}) {
	// path absent (ex. page 404) : pas d’URL canonique ni d’og:url
	const url = path ? SITE_URL + path : null;
	const shareDescription = ogDescription ?? description;

	return (
		<>
			<title>{title}</title>
			{description && <meta name="description" content={description} />}
			{noindex && <meta name="robots" content="noindex" />}
			{!noindex && url && <link rel="canonical" href={url} />}

			{/* Aperçu lors des partages (WhatsApp, Facebook, LinkedIn…) */}
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="fr_FR" />
			{url && <meta property="og:url" content={url} />}
			<meta property="og:title" content={ogTitle ?? title} />
			{shareDescription && (
				<meta property="og:description" content={shareDescription} />
			)}
			<meta property="og:image" content={DEFAULT_IMAGE} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content={DEFAULT_IMAGE_ALT} />
			{/* Grand aperçu aussi sur X (Twitter) */}
			<meta name="twitter:card" content="summary_large_image" />
		</>
	);
}
