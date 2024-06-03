import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';

export default function Hero() {
	return (
		<Section className="hero">
			<h1>Test</h1>
			<div>
			<ButtonOrLink isLink={true} href="https://www.example.com">
				Go to Example.com
			</ButtonOrLink>
			<ButtonOrLink btnClassName={'reverse'} isLink={true} href="https://www.example.com">
				Go to Example.com
			</ButtonOrLink>
			</div>
		</Section>
	);
}
