// NeonText.jsx
import { useEffect, useState } from "react";

const NeonText = ({ text }) => {
	const [litLetters, setLitLetters] = useState(
		new Array(text.length).fill(false)
	);
	const [flicker, setFlicker] = useState(new Array(text.length).fill(false));

	useEffect(() => {
		let timeouts = [];

		text.split("").forEach((char, index) => {
			const delay = Math.random() * 2000;
			const timeout = setTimeout(() => {
				setLitLetters((prev) => {
					const newState = [...prev];
					newState[index] = true;
					return newState;
				});
			}, delay);
			timeouts.push(timeout);
		});

		// Effet scintillement
		const flickerInterval = setInterval(() => {
			setFlicker((prev) =>
				prev.map(
					(f, i) => (litLetters[i] ? Math.random() > 0.8 : false) // 20% de chance de scintiller
				)
			);
		}, 200);

		return () => {
			timeouts.forEach(clearTimeout);
			clearInterval(flickerInterval);
		};
	}, [text, litLetters]);

	return (
		<div className="flex flex-wrap justify-center text-center max-w-3xl mx-auto">
			{text.split("").map((char, index) => (
				<span
					key={index}
					className={`titleNeon transition-all duration-800 ${
						litLetters[index]
							? flicker[index]
								? "text-cyan-200 drop-shadow-[0_0_5px_cyan] drop-shadow-[0_0_10px_cyan]"
								: "text-cyan-400 drop-shadow-[0_0_10px_cyan] drop-shadow-[0_0_20px_cyan]"
							: "text-gray-800"
					}`}
					style={{
						marginRight: char === " " ? "1rem" : "0",
					}}>
					{char}
				</span>
			))}
		</div>
	);
};

export default NeonText;
