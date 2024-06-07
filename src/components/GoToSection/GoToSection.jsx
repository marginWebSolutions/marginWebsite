/* eslint-disable react/no-unescaped-entities */
import ButtonDoubled from '../ButtonDoubled/ButtonDoubled';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import Section from '../Section/Section';
import './GoToSection.scss';

export default function GoToSection({
	title = "Une question ? Un devis ?", 
	text = "Contactez-nous dès maintenant et discutons ensemble de votre projet",
	double = false
}) {
	return (
		<Section className="go-to">
			<div className="go-to__content">
				<h2 className="go-to__title">{title}</h2>
				<p className="go-to__text">
					{text}
				</p>
				{double ? (
					<ButtonDoubled
						btnFirst={'Tout savoir sur nos services'}
						hrefFirst={'/services-et-tarifs'}
						btnSecond={'Nous envoyer un message'}
						hrefSecond={'/contact'}
					/>
				) : (
					<ButtonOrLink isLink={true} href="/contact">
						C'est par ici !
					</ButtonOrLink>
				)}
			</div>
		</Section>
	);
}