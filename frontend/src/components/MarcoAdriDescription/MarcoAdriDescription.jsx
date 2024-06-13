import { useState } from 'react';
import './MarcoAdriDescription.scss';

export default function MarcoAdriDescription() {
	const [hoveredElement, setHoveredElement] = useState(null);

	return (
		<div className="ma-description">
			<div className="ma-description__content">
				<div
					className={`ma-description__container ma-description__container--left ${hoveredElement === 'right' ? 'hover-modification' : ''} ${hoveredElement === null ? 'fade-in' : ''}`}
					onMouseEnter={() => setHoveredElement('left')}
					onMouseLeave={() => setHoveredElement(null)}
				>
					<div className="ma-description__image__container ma-description__image__container--left">
						<img className="ma-description__image ma-description__image--left" src="./marcoadri.png" alt="Marc" />
					</div>
					<div className="ma-description__wrapper ma-description__wrapper--left">
						<h3 className="ma-description__title ma-description__title--left names"><span className="margin-m">m</span>arc</h3>
						<p className="ma-description__text ma-description__text--left">Margin, c’est l’histoire de deux amis passionnés par la création et le développement de sites Internet, qui décident de mettre leur savoir-faire au service des PME et des artisans autour de chez eux.</p>
					</div>
				</div>
				<div
					className={`ma-description__container ma-description__container--right ${hoveredElement === 'left' ? 'hover-modification' : ''} ${hoveredElement === null ? 'fade-in' : ''}`}
					onMouseEnter={() => setHoveredElement('right')}
					onMouseLeave={() => setHoveredElement(null)}
				>
					<div className="ma-description__image__container ma-description__image__container--right">
						<img className="ma-description__image ma-description__image--right" src="./marcoadri.png" alt="Adrien" />
					</div>
					<div className="ma-description__wrapper ma-description__wrapper--right">
						<h3 className="ma-description__title ma-description__title--right names"><span className="margin-a">a</span>drien</h3>
						<p className="ma-description__text ma-description__text--right">Margin, c’est l’histoire de deux amis passionnés par la création et le développement de sites Internet, qui décident de mettre leur savoir-faire au service des PME et des artisans autour de chez eux.</p>
					</div>
				</div>
				<div className="ma-description__container--small">
					<div className="ma-description__image__container--small">
						<img className="ma-description__image--small" src="./marcoadri.png" alt="Marco et Adrien" />
					</div>
					<div className="ma-description__wrappers--small">
						<div className="ma-description__wrapper--small">
							<h3 className="ma-description__title--small names"><span className="margin-m">m</span>arc</h3>
							<p className="ma-description__text--small">Margin, c’est l’histoire de deux amis passionnés par la création et le développement de sites Internet, qui décident de mettre leur savoir-faire au service des PME et des artisans autour de chez eux.</p>
						</div>
						<div className="ma-description__wrapper--small">
							<h3 className="ma-description__title--small names"><span className="margin-a">a</span>drien</h3>
							<p className="ma-description__text--small">Margin, c’est l’histoire de deux amis passionnés par la création et le développement de sites Internet, qui décident de mettre leur savoir-faire au service des PME et des artisans autour de chez eux.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
