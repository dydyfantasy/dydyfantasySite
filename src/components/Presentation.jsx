import myPhoto from "../assets/PhotoPresentation.jpg";
import { CheckIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Presentation = () => {
	return (
		<section className="min-h-screen py-16 bg-gray-900 text-white">
			<div className="max-w-5xl mx-auto px-4 flex flex-col  gap-8">
				<div className="flex justify-center items-center">
					<img
						src={myPhoto}
						alt="Présentation DYDY FANTASY"
						className="rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.6)] w-full max-w-sm"
					/>
				</div>
				<div>
					<h1 className="font-bold mb-4 title-site title-page">
						Qui suis-je ?
					</h1>
					<p className="mb-4 text-gray-200 whitespace-pre-line">
						Je suis <strong> DYDY FANTASY</strong>, ingénieur développeur le
						jour et animateur d'évènements le soir.
					</p>
					<p className="mb-4 text-gray-200 whitespace-pre-line">
						Je me suis lancé dans l'animation avec une idée simple : vous faire
						découvrir mon univers et vous faire passer un bon moment.
					</p>
					<p className="mb-4 text-gray-200">
						Passionné par la musique, les jeux et les rencontres, je crée des
						moments inoubliables grâce à des quiz, des blind tests, et d'autres
						animations sur mesure. J'adore mettre l'ambiance, créer et animer
						des soirées où on rigole, on chante, on se challenge, mais surtout
						où on repart avec de bons souvenirs et le sourire aux lèvres.
					</p>
					<p className="mb-4 text-gray-200">
						Que ce soit pour un bar, un restaurant ou une soirée privé, mon
						objectif reste le même : apporter de la bonne humeur, rapprocher les
						participants et faire de chaque événement un souvenir mémorable.
					</p>
					<p className="mb-4 text-gray-200">
						Basé à Toulouse, je me déplace également dans les communes voisines
						telles que Blagnac, Colomiers ou Tournefeuille. Que vous soyez à
						Balma, Ramonville ou Saint Orens, je peux intervenir dans toute
						l'agglomération toulousaine.
					</p>

					<p className="text-gray-200">
						N’hésitez pas à me contacter pour discuter de votre prochain
						événement et créer ensemble une expérience unique !
					</p>
				</div>
				<div>
					<ul className="mt-4 space-y-2">
						<li className="flex items-center space-x-2">
							<CheckIcon className="w-5 h-5 text-purple-400" />
							<span>Animations de soirées ponctuelles ou régulières</span>
						</li>
						<li className="flex items-center space-x-2">
							<CheckIcon className="w-5 h-5 text-purple-400" />
							<span>Quiz interactifs à thème</span>
						</li>
						<li className="flex items-center space-x-2">
							<CheckIcon className="w-5 h-5 text-purple-400" />
							<span>Blind tests musicaux</span>
						</li>
						<li className="flex items-center space-x-2">
							<CheckIcon className="w-5 h-5 text-purple-400" />
							<span>Évènements sur mesure</span>
						</li>
						<li className="flex items-center space-x-2">
							<CheckIcon className="w-5 h-5 text-purple-400" />
							<span>Organisation d’évènements à Toulouse et ses environs</span>
						</li>
					</ul>
				</div>
				<Link
					to="/contact"
					className="inline-flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-purple-400 transition-all duration-300">
					<EnvelopeIcon className="w-5 h-5 mr-2" />
					ME CONTACTER
				</Link>
			</div>
		</section>
	);
};

export default Presentation;
