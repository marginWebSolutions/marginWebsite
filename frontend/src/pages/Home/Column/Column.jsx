import PropTypes from 'prop-types';
import React from 'react';
import './Column.scss';

const Column = React.forwardRef(
	(
		{
			srcmobile,
			src,
			alt,
			title,
			text,
			className,
			ImageComponent = 'img', // Default to standard img tag
			titleRenderer = (title) => (
				<h3 className="column__title">{title}</h3>
			), // Default title renderer
			textRenderer = (text) => <p className="column__text">{text}</p>, // Default text render
			additionalContent, // Optional additional content
			imageAttributes = {}, // Additional image attributes
			imageContainerClassName = '', // Custom class for the image container
			titleClassName = '', // Custom class for the title
			textClassName = '', // Custom class for the text
		},
		ref
	) => (
		<div className={`column ${className}`} ref={ref}>
			<div className="column__content">
				<div
					className={`column__image--container ${imageContainerClassName}`}
				>
					<ImageComponent
						className="column__image"
						srcSet={`${srcmobile} 172w, ${src} 288w`}
						src={src}
						alt={alt}
						width={288}
						height={288}
						sizes="(max-width: 640px) 172px, 288px"
						loading="lazy"
						{...imageAttributes}
					/>
				</div>
				{title && titleRenderer(title, titleClassName)}
				{text && textRenderer(text, textClassName)}
				{additionalContent}
			</div>
		</div>
	)
);

Column.displayName = 'Column';

Column.propTypes = {
	srcmobile: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	className: PropTypes.string,
	ImageComponent: PropTypes.elementType,
	titleRenderer: PropTypes.func,
	textRenderer: PropTypes.func,
	additionalContent: PropTypes.node,
	imageAttributes: PropTypes.object,
	imageContainerClassName: PropTypes.string,
	titleClassName: PropTypes.string,
	textClassName: PropTypes.string,
};

export default Column;
