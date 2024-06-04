import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
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
							Création et développement de sites Web professionnels à
							destination des PME et des artisans à Nevers et
							Saint-Etienne
						</h1>
						<div className="hero__btn-wrapper">
							<ButtonOrLink isLink={true} href="/contact">
								Nous Contacter
							</ButtonOrLink>
							<ButtonOrLink
								btnClassName={'reverse'}
								isLink={true}
								href="/services"
							>
								Nos services et tarifs
							</ButtonOrLink>
						</div>
					</div>
					<div className="hero__image--container">
						<img
							src="/margin_hero.png"
							alt="Illustration de site internet sur différents écrans"
							className="hero__image"
						/>
					</div>
				</div>
			</Section>
			<div className="underline"></div>
		</>
	);
}
