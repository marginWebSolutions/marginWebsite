import './MarcoAdriDescription.scss';

export default function MarcoAdriDescription() {
	return (
		<div className="ma-description">
			<div className="ma-description__content">
				<div className="ma-description__container ma-description__container--left">
					<div className="ma-description__image__container ma-description__image__container--left">
						<img className="ma-description__image ma-description__image--left" src="./marcoadri.png" alt="Marc" />
					</div>
					<div className="ma-description__wrapper ma-description__wrapper--left">
						<h3 className="ma-description__title ma-description__title--left">Marc</h3>
						<p className="ma-description__text ma-description__text--left">Margin, c’est l’histoire de deux amis passionnés par la création et le développement de sites Internet, qui décident de mettre leur savoir-faire au service des PME et des artisans autour de chez eux.</p>
					</div>
				</div>
				<div className="ma-description__container ma-description__container--right">
					<div className="ma-description__image__container ma-description__image__container--right">
						<img className="ma-description__image ma-description__image--right" src="./marcoadri.png" alt="Adrien" />
					</div>
					<div className="ma-description__wrapper ma-description__wrapper--right">
						<h3 className="ma-description__title ma-description__title--right">Adrien</h3>
						<p className="ma-description__text ma-description__text--right">Margin, c’est l’histoire de deux amis passionnés par la création et le développement de sites Internet, qui décident de mettre leur savoir-faire au service des PME et des artisans autour de chez eux.</p>
					</div>
				</div>
			</div>
		</div>
	);
}