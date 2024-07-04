import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import Clients from './Clients/Clients';
import Testimonials from './Testimonials/Testimonials';

export default function Realisation() {

	document.title = 'Nos réalisations - Margin Web Solutions - Création de sites Internet à Saint-Etienne et Nevers';

	return (
		<>
			<Clients />
			<Underline />
			<Testimonials />
			<Underline />
			<GoToSection />
		</>
	);
}
