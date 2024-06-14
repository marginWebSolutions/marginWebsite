import Citation from './Citation/Citation';
import ContactBlock from './ContactBlock/ContactBlock';

export default function Contact() {
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
