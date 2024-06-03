import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';

export default function Hero() {
	return (
		<Section className="hero">
			<h1>Test</h1>
			<div>
			<ButtonOrLink isLink={true} href="/contact">
				Nous Contacter
			</ButtonOrLink>
			<ButtonOrLink btnClassName={'reverse'} isLink={true} href="/services">
				Nos services et tarifs
			</ButtonOrLink>
			</div>
		</Section>
	);
}
