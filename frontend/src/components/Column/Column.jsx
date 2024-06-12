import PropTypes from 'prop-types';
import './Column.scss';

export default function Column({ src, alt, title, text, className }) {
	return (
		<div className={`column ${className}`}>
			<div className="column__content">
				<div className="column__image--container">
					<img className="column__image" src={src} alt={alt} />
				</div>
				<h3 className="column__title">{title}</h3>
				<p className="column__text">{text}</p>
			</div>
		</div>
	);
}

Column.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
};