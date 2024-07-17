import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import './AdditionalServices.scss';

export default function AdditionalServices({
	services, // Array of services with icon and service name
	sectionClassName = '', // Custom class for the section
	listClassName = '', // Custom class for the list
	listItemClassName = '', // Custom class for list items
	animationClass = '', // Custom animation class or function
	IconComponent = FontAwesomeIcon, // Custom icon component
}) {
	const contentRef = useRef(null);

	const animation =
		typeof animationClass === 'function'
			? animationClass(contentRef)
			: animationClass;

	return (
		<Section className={`additionalServices ${sectionClassName}`}>
			<div
				className={`additionalServices__content ${useAnimation(
					contentRef,
					animation
				)}`}
				ref={contentRef}
			>
				<h3 className="additionalServices__title">
					Services additionnels
				</h3>
				<ul className={`additionalServices__list ${listClassName}`}>
					{services.map((service, idx) => (
						<li
							key={idx}
							className={`additionalServices__list--item ${listItemClassName}`}
						>
							<IconComponent
								icon={service.icon}
								className="color-touch-svg additionalServices__list--icon"
							/>
							{service.service}
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
}

AdditionalServices.propTypes = {
	services: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.object.isRequired,
			service: PropTypes.string.isRequired,
		})
	).isRequired,
	sectionClassName: PropTypes.string,
	listClassName: PropTypes.string,
	listItemClassName: PropTypes.string,
	animationClass: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	IconComponent: PropTypes.elementType,
};
