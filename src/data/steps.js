// Déroulé commun d'une prestation : met en avant la co-construction avec le client.
// Utilisé par la page Prestations et par le modèle ServicePage.
import {
	ChatBubbleLeftRightIcon,
	UserGroupIcon,
	ClipboardDocumentCheckIcon,
	MicrophoneIcon,
} from "@heroicons/react/24/outline";

export const STEPS = [
	{
		icon: ChatBubbleLeftRightIcon,
		title: "On échange",
		text: "Vous me parlez de votre événement : le lieu, le public, l’ambiance que vous imaginez. Je vous pose aussi mes questions pour bien cerner vos envies.",
	},
	{
		icon: UserGroupIcon,
		title: "On construit ensemble",
		text: "Je vous propose un format et un déroulé, puis on l’ajuste ensemble : thèmes, musiques, moments clés, vos incontournables et vos interdits.",
	},
	{
		icon: ClipboardDocumentCheckIcon,
		title: "On valide les détails",
		text: "Avant le jour J, on fait le point : horaires, lieu, matériel et surprises éventuelles. Rien n’est laissé au hasard.",
	},
	{
		icon: MicrophoneIcon,
		title: "Je m’occupe de tout",
		text: "Le jour J, j’anime : rythme, relances au micro, participation du public. Vous n’avez plus qu’à profiter.",
	},
];
