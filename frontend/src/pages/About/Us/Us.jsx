import Section from '../../../layout/Section/Section';
import MarcoAdriDescription from '../MarcoAdriDescription/MarcoAdriDescription';
import './Us.scss';

export default function Us() {
	return (
		<Section className="us" isHero={true}>
			<div className="us__content">
				<h1 className="us__title">Qui sommes-nous ?</h1>
				<p className="us__text">
					Marc et Adrien sont deux amis passionnés par le développement de sites Web, la communication et le monde du numérique.
					C’est à force de discussions autour de leur sujet de prédilection que l’idée germe :
					"Puisque <span className="bolder">l’union fait la force</span>, nous pourrions être deux fois
					<span className="bolder"> plus fort pour nos clients !</span>"
				</p>
				<MarcoAdriDescription />
			</div>
		</Section>
	);
}
