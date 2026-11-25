// Zone d’intervention déclarée à Google (données structurées areaServed) :
// RECOPIE EXACTE des « zones desservies » de la fiche Google Business Profile (même ordre).
// Si la fiche change, changer cette liste aussi (cohérence site / fiche, voir CLAUDE.md).
const CITIES = [
	"Pibrac",
	"Labège",
	"Toulouse",
	"Beauzelle",
	"Muret",
	"L’Union",
	"Blagnac",
	"Samatan",
	"Fonsorbes",
	"Saint-Lys",
	"Léguevin",
	"Lévignac",
	"Colomiers",
	"Mondonville",
	"Cornebarrieu",
	"L’Isle-Jourdain",
	"Portet-sur-Garonne",
	"Villefranche-de-Lauragais",
	"Lavaur",
	"Giroussens",
];

export const AREA_SERVED = [
	...CITIES.map((name) => ({ "@type": "City", name })),
];
