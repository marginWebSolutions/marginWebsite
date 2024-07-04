import GoToSection from '../../components/GoToSection/GoToSection';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import FeaturesTable from './FeaturesTable/FeaturesTable';
import Prices from './Prices/Prices';

export default function Pricing() {
	document.title = 'Services et tarifs - Margin Web Solutions - Création de sites Internet à Saint-Etienne et Nevers';

	return (
		<>
			<Prices />
			<FeaturesTable />
			<AdditionalServices />
			<GoToSection />
		</>
	);
}
