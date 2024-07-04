import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './TestimonialCard.scss';

const TestimonialCard = React.forwardRef(
	({ text, avatarSrc, avatarAlt, name, job, className }, ref) => (
		<div className={`testimonial__card ${className}`} ref={ref}>
			<div className="testimonial__card__content">
				<FontAwesomeIcon
					icon={faQuoteRight}
					className="card__content--icon"
				/>
				<p className="card__content--text">{text}</p>
				<div className="card__content__client--wrapper">
					<img
						src={avatarSrc}
						alt={avatarAlt}
						className="card__content--avatar"
						width={100}
						height={100}
					/>
					<div className="card__content__client">
						<h3 className="card__content__client--name">{name}</h3>
						<h4 className="card__content__client--job">{job}</h4>
					</div>
				</div>
			</div>
		</div>
	)
);

TestimonialCard.displayName = 'TestimonialCard';

TestimonialCard.propTypes = {
	text: PropTypes.string,
	avatarSrc: PropTypes.string,
	avatarAlt: PropTypes.string,
	name: PropTypes.string,
	job: PropTypes.string,
	className: PropTypes.string,
};

export default TestimonialCard;
