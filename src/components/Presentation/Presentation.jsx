import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import './Presentation.scss';

export default function Presentation() {
	return (
		<Section className="presentation">
			<div className="presentation__content">
				<h2 className="presentation__title">En quelques mots</h2>
				<p className="presentation__text">
					Margin, c’est l’histoire de deux amis passionnés par la
					création et le développement de sites Internet, qui décident
					de mettre leur savoir-faire au service des PME et des
					artisans autour de chez eux.
					<br /> Basés à Nevers et Saint-Étienne, nous offrons des
					solutions digitales adaptées à vos besoins spécifiques, en
					alliant design, fonctionnalités et performances. Conscients
					des enjeux et des spécificités uniques de chaque corps de
					métier, nous basons notre approche sur l’écoute et la
					compréhension de vos besoins, afin de vous proposer les
					solutions web les plus adaptées.
				</p>

				<ButtonOrLink
					btnClassName={'reverse'}
					isLink={true}
					href="/services"
				>
					Découvrez nos solutions
				</ButtonOrLink>
			</div>
		</Section>
	);
}
