import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import Engagement from './Engagement/Engagement';
import Hero from './Hero/Hero';
import Presentation from './Presentation/Presentation';

export default function Home() {
	return (
		<>
			<Hero />
			<Underline />
			<Presentation />
			<Underline />
			<Engagement />
			<Underline />
			<GoToSection />
		</>
	);
}
