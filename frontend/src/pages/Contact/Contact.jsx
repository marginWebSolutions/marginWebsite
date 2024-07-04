import Citation from './Citation/Citation';
import ContactBlock from './ContactBlock/ContactBlock';

export default function Contact() {

	document.title = 'Nous contacter - Margin Web Solutions - Création de sites Internet à Saint-Etienne et Nevers';

	return (
		<>
			<ContactBlock />
			<Citation
				quote="Le commencement est beaucoup plus que la moitié de l'objectif."
				author="~ Aristote ~"
			/>
		</>
	);
}
