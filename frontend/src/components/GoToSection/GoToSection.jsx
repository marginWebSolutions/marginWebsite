/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Section from '../../layout/Section/Section';
import useAnimation from '../../utils/hooks/useAnimation';
import ButtonDoubled from '../ButtonDoubled/ButtonDoubled';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import './GoToSection.scss';

export default function GoToSection({
	title = 'Une question ? Un devis ?',
	text = 'Contactez-nous dès maintenant et discutons ensemble de votre projet',
	double = false,
	singleBtnText = "C'est par ici !",
	singleBtnHref = '/Contact',
}) {
	const titleRef = useRef(null);
	const textRef = useRef(null);

	const buttons = [
		{
			content: 'Tout savoir sur nos services',
			href: '/services-et-tarifs',
		},
		{
			content: 'Nous envoyer un message',
			href: '/contact',
			btnClassName: 'reverse',
		},
	];

	return (
		<Section className="go-to">
			<div className="go-to__content">
				<h2
					className={`go-to__title ${
						useAnimation(titleRef, 'fadeIn__title') || ''
					}`}
					ref={titleRef}
				>
					{title}
				</h2>
				<p
					className={`go-to__text ${
						useAnimation(textRef, 'fadeIn__text') || ''
					}`}
					ref={textRef}
				>
					{text}
				</p>
				{double ? (
					<ButtonDoubled buttons={buttons} />
				) : (
					<ButtonOrLink
						isLink={true}
						href={singleBtnHref}
						reloadDocument={true}
					>
						{singleBtnText}
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
	singleBtnText: PropTypes.string,
	singleBtnHref: PropTypes.string,
};
