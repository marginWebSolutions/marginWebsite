import Citation from './Citation/Citation';
import ContactBlock from './ContactBlock/ContactBlock';

export default function Contact() {

	document.title = 'Margin Web Solutions - Nous contacter';

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
