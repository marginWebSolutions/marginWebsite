import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import "./Presentation.scss";

export default function Presentation() {
	return (
		<Section className="presentation">
			<div className="presentation__content">
				<h2 className='presentation__title'>En quelques mots</h2>
				<div className="presentation__btn-wrapper">
					<ButtonOrLink btnClassName={'reverse'} isLink={true} href="/services">
						Découvrez nos solutions
					</ButtonOrLink>
				</div>
			</div>
		</Section>
	);
}
