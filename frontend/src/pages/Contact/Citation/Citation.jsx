import PropTypes from 'prop-types';
import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import './Citation.scss';

export default function Citation({ quote, author }) {
	const contentRef = useRef(null);

	return (
		<Section className="citation">
			<div
				className={`citation__content ${
					useAnimation(contentRef, 'fadeIn__title') || ''
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
