import Us from '../../components/Us/Us';
import GoToSection from '../../components/GoToSection/GoToSection';
import Underline from '../../components/Underline/Underline';

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
