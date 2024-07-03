import PropTypes from 'prop-types';
import React from 'react';
import './EngagementCard.scss';

const EngagementCard = React.forwardRef(({ title, text, className }, ref) => (
	<div className={`engagement__card--item ${className}`} ref={ref}>
		<h3 className="engagement__card--title">{title}</h3>
		<p className="engagement__card--text">{text}</p>
	</div>
));

EngagementCard.displayName = 'EngagementCard';

EngagementCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
};

export default EngagementCard;
