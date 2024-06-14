import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import './Section.scss';

export default function Section({
	className,
	children,
	isHero = false,
	...props
}) {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const sectionClasses = `section ${className} ${
		!isHero ? 'section--hidden' : ''
	} ${!isHero && isVisible ? 'fade-in' : ''}`;
	return (
		<section ref={sectionRef} className={sectionClasses} {...props}>
			{children}
		</section>
	);
}

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	isHero: PropTypes.bool,
};
