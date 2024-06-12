import PropTypes from 'prop-types';
import { useRef } from 'react';
import useScrollAnimation from '../../utils/hooks/useScrollAnimation';
import Section from '../Section/Section';
import './Citation.scss';

export default function Citation({ quote, author }) {
	const contentRef = useRef(null);

	const [contentVisible] = useScrollAnimation([contentRef]);
	return (
		<Section className="citation">
			<div
				className={`citation__content ${
					contentVisible ? 'fadeIn__text' : ''
				}`}
				ref={contentRef}
			>
				<q className="citation__content--quote">“{quote}”</q>
				<cite className="citation__content--author">{author}</cite>
			</div>
		</Section>
	);
}

Citation.propTypes = {
	quote: PropTypes.string,
	author: PropTypes.string,
};
