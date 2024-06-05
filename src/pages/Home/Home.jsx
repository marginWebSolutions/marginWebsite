import Engagement from '../../components/Engagement/Engagement';
import GoToSection from '../../components/GoToSection/GoToSection';
import Hero from '../../components/Hero/Hero';
import Presentation from '../../components/Presentation/Presentation';
import Underline from '../../components/Underline/Underline';

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
