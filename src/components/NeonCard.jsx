// NeonCard.jsx
const NeonCard = ({ color = "cyan", children }) => {
	// Classes Tailwind pour l'effet néon selon la couleur
	const neonClasses = {
		red: "border-red-500 drop-shadow-[0_0_10px_red] drop-shadow-[0_0_20px_red]",
		green:
			"border-green-500 drop-shadow-[0_0_10px_lime] drop-shadow-[0_0_20px_lime]",
		blue: "border-blue-500 drop-shadow-[0_0_10px_blue] drop-shadow-[0_0_20px_blue]",
		yellow:
			"border-yellow-400 drop-shadow-[0_0_10px_yellow] drop-shadow-[0_0_20px_yellow]",
		cyan: "border-cyan-400 drop-shadow-[0_0_10px_cyan] drop-shadow-[0_0_20px_cyan]",
	};

	return (
		<div
			className={`border-2 ${neonClasses[color]} rounded-lg p-4 m-2 transition-all duration-300 hover:scale-105`}
			style={{ backgroundColor: "transparent" }}>
			{children}
		</div>
	);
};

export default NeonCard;
