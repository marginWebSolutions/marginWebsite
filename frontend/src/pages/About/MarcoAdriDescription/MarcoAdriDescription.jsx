import { useState } from 'react';
import './MarcoAdriDescription.scss';

export default function MarcoAdriDescription() {
	const [hoveredElement, setHoveredElement] = useState(null);

	const marcDescription =
		"Amoureux des nouvelles technologies et de l'informatique, Marc façonne sa vie grace à sa curiosité. Suite à une expérience dans le support informatique, c'est en 2023 qu'il se lance dans le développement de sites Internet.";
	const adriDescription =
		"Spécialisé dans la communication et la relation client, Adrien a toujours travaillé au contact des professionnels. Passionné par le numérique depuis l'enfance, il se lance dans la création de sites web en 2022.";

	return (
		<div className="ma-description">
			<div className="ma-description__content">
				<div
					className={`ma-description__container ma-description__container--left ${
						hoveredElement === 'right' ? 'hover-modification' : ''
					} ${hoveredElement === null ? 'fade-in' : ''}`}
					onMouseEnter={() => setHoveredElement('left')}
					onMouseLeave={() => setHoveredElement(null)}
				>
					<div className="ma-description__image__container ma-description__image__container--left">
						<img
							className="ma-description__image ma-description__image--left"
							src="./marcoadri.webp"
							alt="Illustration Marc"
							width={500}
							height={500}
						/>
					</div>
					<div className="ma-description__wrapper ma-description__wrapper--left">
						<h2 className="ma-description__title ma-description__title--left names">
							<span className="margin-m">m</span>arc
						</h2>
						<p className="ma-description__text ma-description__text--left">
							{marcDescription}
						</p>
					</div>
				</div>
				<div
					className={`ma-description__container ma-description__container--right ${
						hoveredElement === 'left' ? 'hover-modification' : ''
					} ${hoveredElement === null ? 'fade-in' : ''}`}
					onMouseEnter={() => setHoveredElement('right')}
					onMouseLeave={() => setHoveredElement(null)}
				>
					<div className="ma-description__image__container ma-description__image__container--right">
						<img
							className="ma-description__image ma-description__image--right"
							src="./marcoadri.webp"
							alt="Illustration Adrien"
							width={500}
							height={500}
						/>
					</div>
					<div className="ma-description__wrapper ma-description__wrapper--right">
						<h2 className="ma-description__title ma-description__title--right names">
							<span className="margin-a">a</span>drien
						</h2>
						<p className="ma-description__text ma-description__text--right">
							{adriDescription}
						</p>
					</div>
				</div>
				<div className="ma-description__container--small">
					<div className="ma-description__image__container--small">
						<img
							className="ma-description__image--small"
							src="./marcoadri.webp"
							alt="Illustration Marc et Adrien"
							width={500}
							height={500}
						/>
					</div>
					<div className="ma-description__wrappers--small">
						<div className="ma-description__wrapper--small">
							<h2 className="ma-description__title--small names">
								<span className="margin-m">m</span>arc
							</h2>
							<p className="ma-description__text--small">
								{marcDescription}
							</p>
						</div>
						<div className="ma-description__wrapper--small">
							<h2 className="ma-description__title--small names">
								<span className="margin-a">a</span>drien
							</h2>
							<p className="ma-description__text--small">
								{adriDescription}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
