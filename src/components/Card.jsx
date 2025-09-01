import React, { useState } from "react";
const Card = ({ color, front, back }) => {
	const [flipped, setFlipped] = useState(false);

	const neonClasses = {
		red: "border-red-500 drop-shadow-[0_0_10px_red] drop-shadow-[0_0_20px_red]",
		green:
			"border-green-500 drop-shadow-[0_0_10px_lime] drop-shadow-[0_0_20px_lime]",
		blue: "border-blue-500 drop-shadow-[0_0_10px_blue] drop-shadow-[0_0_20px_blue]",
		yellow:
			"border-yellow-400 drop-shadow-[0_0_10px_yellow] drop-shadow-[0_0_20px_yellow]",
	};

	const neonClassesFont = {
		red: "bg-red-900/40",
		green: "bg-green-900/40",
		blue: "	bg-blue-900/40",
		yellow: "bg-yellow-800/40",
	};

	const neonClassesBack = {
		red: "bg-red-950",
		green: "bg-green-950",
		blue: "bg-blue-950",
		yellow: "bg-yellow-900",
	};

	const handleClick = () => {
		// Vérifie si c'est un device tactile
		if ("ontouchstart" in window) {
			setFlipped(!flipped);
		}
	};
	//className={`border-2 ${neonClasses[color]} rounded-lg p-4 m-2 transition-all duration-300 hover:scale-105`}

	return (
		<div
			className={`border-2 ${neonClasses[color]} rounded-lg hover:scale-105 w-70 md:w-80 h-30 cursor-pointer perspective `}
			onClick={handleClick}>
			<div
				className={`flip-card-inner relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
					flipped ? "rotate-y-180" : ""
				}`}>
				{/* Face avant */}
				<div
					className={` ${neonClassesFont[color]} flip-card-front absolute w-full h-full backface-hidden flex items-center justify-center text-xl font-bold text-white whitespace-pre-line text-center`}>
					{front}
				</div>

				{/* Face arrière */}
				<div
					className={` ${neonClassesBack[color]} flip-card-back absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-center p-4 text-white font-semibold`}>
					{back}
				</div>
			</div>
		</div>
	);
};

export default Card;
