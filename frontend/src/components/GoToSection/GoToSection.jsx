/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Section from '../../layout/Section/Section';
import useScrollAnimation from '../../utils/hooks/useScrollAnimation';
import ButtonDoubled from '../ButtonDoubled/ButtonDoubled';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import './GoToSection.scss';

export default function GoToSection({
	title = 'Une question ? Un devis ?',
	text = 'Contactez-nous dès maintenant et discutons ensemble de votre projet',
	double = false,
}) {
	const titleRef = useRef(null);
	const textRef = useRef(null);

	const [titleVisible, textVisible] = useScrollAnimation([titleRef, textRef]);

	return (
		<Section className="go-to">
			<div className="go-to__content" ref={titleRef}>
				<h2
					className={`go-to__title ${
						titleVisible ? 'fadeIn__title' : ''
					}`}
				>
					{title}
				</h2>
				<p
					className={`go-to__text ${
						textVisible ? 'fadeIn__text' : ''
					}`}
					ref={textRef}
				>
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

GoToSection.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	double: PropTypes.bool,
};
