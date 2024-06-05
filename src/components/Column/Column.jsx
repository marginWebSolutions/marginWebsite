import './Column.scss';

export default function Column({ src, alt, title, text }) {
	return (
		<div className="column">
			<div className="column__content">
				<div className="column__image--container">
					<img
						className="column__image"
						src={src}
						alt={alt}
					/>
				</div>
				<h3 className="column__title">{title}</h3>
				<p className="column__text">{text}</p>
			</div>
		</div>
	);
}

