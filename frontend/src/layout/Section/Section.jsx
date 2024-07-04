import PropTypes from 'prop-types';
import { useRef } from 'react';
import './Section.scss';

export default function Section({
	className,
	children,
	isHero = false,
	...props
}) {
	const sectionRef = useRef(null);

	const sectionClasses = `section ${className} ${
		!isHero ? 'section--hidden' : ''
	}`;
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
