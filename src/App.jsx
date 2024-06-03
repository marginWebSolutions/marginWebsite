import ButtonOrLink from './components/ButtonOrLink/ButtonOrLink';
import Section from './components/Section/Section';

export default function App() {
	return (
		<div className='App'>
			<Section className="test">
				<h1>Test</h1>
				<ButtonOrLink isLink={true} href="https://www.example.com">
					Go to Example.com
				</ButtonOrLink>
				<ButtonOrLink btnClassName={'reverse'} isLink={true} href="https://www.example.com">
					Go to Example.com
				</ButtonOrLink>
			</Section>
		</div>
	);
}
