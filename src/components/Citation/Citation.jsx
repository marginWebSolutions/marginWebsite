import PropTypes from 'prop-types';
import Section from '../Section/Section';
import './Citation.scss';

export default function Citation({ quote, author }) {
	return (
		<Section className="citation">
			<div className="citation__content">
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
