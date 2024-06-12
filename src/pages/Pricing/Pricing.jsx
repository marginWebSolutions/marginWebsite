import FeaturesTable from '../../components/FeaturesTable/FeaturesTable';
import Prices from '../../components/Prices/Prices';
import Underline from '../../components/Underline/Underline';
import GoToSection from '../../components/GoToSection/GoToSection';

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
