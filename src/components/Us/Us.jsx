import Section from '../../components/Section/Section';
import MarcoAdriDescription from '../MarcoAdriDescription/MarcoAdriDescription';
import './Us.scss';

export default function Us() {
	return (
		<Section className="us">
			<div className="us__content">
				<h2 className="us__title">Qui sommes-nous ?</h2>
				<p className="us__text">
					Margin, c’est l’histoire de deux amis passionnés par la
					création et le développement de sites Internet, qui décident
					de mettre leur savoir-faire{' '}
					<span className="bolder">
						au service des PME et des artisans
					</span>{' '}
					autour de chez eux.
				</p>

				<MarcoAdriDescription />

			</div>
		</Section>
	);
}
