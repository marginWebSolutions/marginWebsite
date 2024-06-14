import FeaturesTable from '../../components/FeaturesTable/FeaturesTable';
import GoToSection from '../../components/GoToSection/GoToSection';
import Prices from '../../components/Prices/Prices';
import Underline from '../../layout/Underline/Underline';

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
