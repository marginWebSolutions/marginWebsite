import GoToSection from '../../components/GoToSection/GoToSection';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import FeaturesTable from './FeaturesTable/FeaturesTable';
import Prices from './Prices/Prices';

export default function Pricing() {
	document.title = 'Margin Web Solutions - Services et tarifs';

	return (
		<>
			<Prices />
			<FeaturesTable />
			<AdditionalServices />
			<GoToSection />
		</>
	);
}
