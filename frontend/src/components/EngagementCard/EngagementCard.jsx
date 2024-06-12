import PropTypes from 'prop-types';
import './EngagementCard.scss';

export default function EngagementCard({ title, text, className }) {
	return (
		<div className={`engagement__card--item ${className}`}>
			<h3 className="engagement__card--title">{title}</h3>
			<p className="engagement__card--text">{text}</p>
		</div>
	);
}

EngagementCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
};
