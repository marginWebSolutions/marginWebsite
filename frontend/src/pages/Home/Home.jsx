import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import Engagement from './Engagement/Engagement';
import Hero from './Hero/Hero';
import Presentation from './Presentation/Presentation';

export default function Home() {
	document.title = 'Accueil - Margin Web Solutions - Création de sites Internet à Saint-Etienne et Nevers';

	return (
		<>
			<Hero />
			<Underline />
			<Presentation />
			<Engagement />
			<GoToSection />
		</>
	);
}
