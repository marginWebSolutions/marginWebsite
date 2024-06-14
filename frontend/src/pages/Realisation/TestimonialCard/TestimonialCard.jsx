import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './TestimonialCard.scss';

export default function TestimonialCard({
	text,
	avatarSrc,
	avatarAlt,
	name,
	job,
	className,
}) {
	return (
		<div className={`testimonial__card ${className}`}>
			<div className="testimonial__card__content">
				<FontAwesomeIcon
					icon={faQuoteRight}
					className="card__content--icon"
				/>
				<p className="card__content--text">{text}</p>
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
	);
}

TestimonialCard.propTypes = {
	text: PropTypes.string,
	avatarSrc: PropTypes.string,
	avatarAlt: PropTypes.string,
	name: PropTypes.string,
	job: PropTypes.string,
	className: PropTypes.string,
};
