/* eslint-disable react/no-unescaped-entities */
import ButtonDoubled from '../ButtonDoubled/ButtonDoubled';
import Section from '../Section/Section';
import './GoToSection.scss';

export default function GoToSection() {
	return (
		<Section className="go-to">
			<div className="go-to__content">
				<h2 className="go-to__title">Une question ? Un devis ?</h2>
				<p className="go-to__text">
					Contactez-nous dès maintenant et discutons ensemble de votre
					projet
				</p>
				<ButtonDoubled
					btnFirst={'Coucou'}
					hrefFirst={'/contact'}
					btnSecond={'ahahaha'}
					hrefSecond={'/services-et-tarifs'}
				/>
				{/* <ButtonOrLink isLink={true} href="/contact">
					C'est par ici !
				</ButtonOrLink> */}
			</div>
		</Section>
	);
}
