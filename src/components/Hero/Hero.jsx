import Section from '../../components/Section/Section';
import ButtonDoubled from '../ButtonDoubled/ButtonDoubled';
import './Hero.scss';

export default function Hero() {
	return (
		<>
			<Section className="hero">
				<div className="hero__container">
					<div className="hero__content">
						<div className="hero__logo--container">
							<p className="hero__logo">
								<span className="hero__logo--ma m">m</span>
								<span className="hero__logo--ma a">a</span>
								RGIN
							</p>
							<p className="hero__logo--text">Web Solutions</p>
						</div>
						<h1 className="hero__title">
							Création et développement de sites Web
							professionnels à destination des PME et des artisans
							à Nevers et Saint-Etienne
						</h1>
						<ButtonDoubled
							btnFirst={'Nous Contacter'}
							hrefFirst={'/contact'}
							btnSecond={'Nos Services et Tarifs'}
							hrefSecond={'/services-et-tarifs'}
						/>
					</div>
				</div>
			</Section>
		</>
	);
}
