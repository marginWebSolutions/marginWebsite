import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import Prices from './Prices/Prices';

export default function Pricing() {
	document.title = 'Margin Web Solutions - Services et tarifs';

	return (
		<>
			<Prices />
			<Underline />
			{/* <FeaturesTable /> */}
			<AdditionalServices />
			<Underline />
			<GoToSection />
		</>
	);
}
