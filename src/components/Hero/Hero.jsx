import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import "./Hero.scss";

export default function Hero() {
	return (
		<Section className="hero">
			<div className="hero__content">
				<h1 className='hero__title'>Création et développement de sites Web à destination des PME et des artisans à Nevers et Saint-Etienne</h1>
				<div className="hero__btn-wrapper">
					<ButtonOrLink isLink={true} href="/contact">
						Nous Contacter
					</ButtonOrLink>
					<ButtonOrLink btnClassName={'reverse'} isLink={true} href="/services">
						Nos services et tarifs
					</ButtonOrLink>
				</div>
			</div>
		</Section>
	);
}
