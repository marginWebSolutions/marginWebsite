/* eslint-disable react/no-unescaped-entities */
import Section from '../Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import './GoToSection.scss';

export default function GoToSection() {
	return (
		<Section className="go-to">
			<div className="go-to__content">
				<h2 className="go-to__title">
					Une question ? Un devis ?
				</h2>
				<p className="go-to__text">
				Contactez-nous dès maintenant et discutons ensemble de votre projet
				</p>
				<ButtonOrLink
					isLink={true}
					href="/contact"
				>
					C'est par ici !
				</ButtonOrLink>
			</div>
		</Section>
	);
}
