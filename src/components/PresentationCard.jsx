import { CheckIcon } from "@heroicons/react/24/outline";

const PresentationCard = (props) => {
	return (
		<section className="py-16 bg-gray-900">
			<div className="max-w-6xl mx-auto px-4 grid gap-8">
				{props.cards.map((card, index) => (
					<div
						key={index}
						className={`border-2 border-${card.color} rounded-2xl p-6 bg-gray-900 text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 `}>
						<div className="text-5xl mb-4 text-center">{card.icon}</div>
						<h3 className={`text-2xl font-bold mb-5 text-center`}>
							{card.title}
						</h3>
						<p className="text-gray-200  whitespace-pre-line">
							{card.description}
						</p>
						<div>
							<ul className="px-5 mt-4 space-y-2">
								{card.items.map((item, index) => (
									<li key={index} className="flex items-center gap-2">
										{item.icon}
										<span>{item.text}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PresentationCard;
