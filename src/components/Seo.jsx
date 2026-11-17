// Balises SEO d'une page : React 19 les place automatiquement dans le <head>,
// y compris dans le HTML généré à la compilation.
// Chaque page doit avoir exactement un <Seo />.

const SITE_URL = "https://dydyfantasy.fr";
const DEFAULT_IMAGE = `${SITE_URL}/dydy_fantasy_logo-v3.webp`;

export default function Seo({
	title,
	description,
	path,
	ogTitle,
	ogDescription,
	noindex = false,
}) {
	// path absent (ex. page 404) : pas d'URL canonique ni d'og:url
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
		</>
	);
}
