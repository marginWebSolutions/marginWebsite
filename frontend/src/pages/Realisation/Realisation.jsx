import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import Clients from './Clients/Clients';
import Testimonials from './Testimonials/Testimonials';

export default function Realisation() {
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
