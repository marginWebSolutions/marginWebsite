import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import './Section.scss';

export default function Section({
	className,
	children,
	isHero = false,
	...props
}) {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const checkVisibility = () => {
		if (sectionRef.current) {
			const rect = sectionRef.current.getBoundingClientRect();
			const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
			setIsVisible(isVisible);
		}
	};

	useEffect(() => {
		if (!isHero) {
			window.addEventListener('scroll', checkVisibility);
			checkVisibility();
			return () => {
				window.removeEventListener('scroll', checkVisibility);
			};
		}
	}, [isHero]);

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
