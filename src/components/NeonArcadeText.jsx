import { useMemo } from "react";
import "../css/NeonArcade.css";

/**
 * Néon arcade utilisé dans le Hero du site vitrine.
 * Délais déterministes : pas de Math.random() pendant le rendu React.
 */
export default function NeonArcadeText({ text, size = "large" }) {
	const letters = useMemo(
		() =>
			Array.from(text).map((char, index) => {
				const start = 0.25 + index * 0.12;
				return {
					char,
					// On laisse l'allumage se terminer avant la respiration.
					delays: `${start.toFixed(2)}s, ${(start + 1.65).toFixed(2)}s, ${(
						12 +
						((index * 7) % 9)
					).toFixed(2)}s`,
				};
			}),
		[text],
	);

	return (
		<span
			className={`retro-neon-line ${
				size === "small" ? "retro-neon-small" : "retro-neon-large"
			}`}>
			<span className="sr-only">{text}</span>
			{letters.map(({ char, delays }, index) => (
				<span
					key={`${index}-${char}`}
					aria-hidden="true"
					className={`retro-neon-letter ${
						char === " " ? "retro-neon-space" : ""
					}`}
					style={{ animationDelay: delays }}>
					{char === " " ? "\u00A0" : char}
				</span>
			))}
		</span>
	);
}
