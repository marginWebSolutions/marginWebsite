import Clients from '../../components/Clients/Clients';
import GoToSection from '../../components/GoToSection/GoToSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import Underline from '../../components/Underline/Underline';

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
