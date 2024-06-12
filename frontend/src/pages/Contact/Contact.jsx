import Citation from '../../components/Citation/Citation';
import ContactBlock from '../../components/ContactBlock/ContactBlock';

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
