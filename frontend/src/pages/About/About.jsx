import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../layout/Underline/Underline';
import Us from './Us/Us';

export default function Contact() {
	return (
		<>
			<Us />
			<Underline />
			<GoToSection
				double
				title="Vous voulez en savoir plus ?"
				text="Consultez le détail de nos prestations ou envoyez-nous un message !"
			/>
		</>
	);
}
