import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import FeaturesTable from './FeaturesTable/FeaturesTable';
import Prices from './Prices/Prices';

export default function Pricing() {
	return (
		<>
			<Prices />
			<Underline />
			<FeaturesTable />
			<Underline />
			<GoToSection />
		</>
	);
}
