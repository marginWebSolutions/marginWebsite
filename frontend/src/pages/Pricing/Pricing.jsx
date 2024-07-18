import {
	faFileCirclePlus,
	faFileCode,
	faFilePen,
	faPencil,
	faRocket,
	faScrewdriverWrench,
	faServer,
} from '@fortawesome/free-solid-svg-icons';
import GoToSection from '../../components/GoToSection/GoToSection';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import FeaturesTable from './FeaturesTable/FeaturesTable';
import Prices from './Prices/Prices';

export default function Pricing() {
	document.title =
		'Services et tarifs - Margin Web Solutions - Création de sites Internet à Saint-Etienne et Nevers';

	return (
		<>
			<Prices />
			<FeaturesTable />
			<AdditionalServices
				services={[
					{ icon: faServer, service: 'Hébergement' },
					{
						icon: faScrewdriverWrench,
						service: 'Maintenance technique',
					},
					{
						icon: faFilePen,
						service: 'Mise à jour du contenu',
					},
					{
						icon: faFileCirclePlus,
						service: 'Pages supplémentaires',
					},
					{
						icon: faFileCode,
						service: 'Demandes de changements supplémentaires',
					},
					{
						icon: faRocket,
						service: 'Animations poussées (pack Essentiel)',
					},
					{
						icon: faPencil,
						service: 'Contenu administrable (pack Essentiel)',
					},
				]}
				animationClass={'fadeIn__title'}
			/>
			<GoToSection />
		</>
	);
}
