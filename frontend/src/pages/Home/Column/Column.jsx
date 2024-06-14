import PropTypes from 'prop-types';
import './Column.scss';

export default function Column({
	srcmobile,
	src,
	alt,
	title,
	text,
	className,
}) {
	return (
		<div className={`column ${className}`}>
			<div className="column__content">
				<div className="column__image--container">
					<img
						className="column__image"
						srcSet={`${srcmobile} 172w, ${src} 288w`}
						src={src}
						alt={alt}
						width={288}
						height={288}
						sizes="(max-width: 640px) 172px, 288px"
						loading="lazy"
					/>
				</div>
				<h3 className="column__title">{title}</h3>
				<p className="column__text">{text}</p>
			</div>
		</div>
	);
}

Column.propTypes = {
	srcmobile: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
};
