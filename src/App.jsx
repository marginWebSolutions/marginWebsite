import Section from './components/Section/Section';
import Header from './layout/Header/Header';

export default function App() {
	return (
		<div className="App">
			<Header />
			<Section className="test">
				<h1>Test</h1>
			</Section>
		</div>
	);
}
