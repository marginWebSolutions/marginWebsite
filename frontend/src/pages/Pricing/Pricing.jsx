import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import FeaturesTable from './FeaturesTable/FeaturesTable';
import Prices from './Prices/Prices';

export default function Pricing() {
	return (
		<>
			<Prices />
			<Underline />
			<FeaturesTable />
			<AdditionalServices />
			<Underline />
			<GoToSection />
		</>
	);
}
