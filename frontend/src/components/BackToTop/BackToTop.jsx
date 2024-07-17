import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import './BackToTop.scss';

export default function BackToTop({
	scrollOffset = 850, // Default scroll offset
	icon = faChevronUp, // Default icon
	title = 'Retour en haut de la page', // Default title
	behavior = 'smooth', // Default behavior
	className = '', // Additional classes
}) {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const checkScrollToTop = useCallback(() => {
		const offset = window.scrollY;
		if (!showScrollToTop && offset > scrollOffset) {
			setShowScrollToTop(true);
		} else if (showScrollToTop && offset <= scrollOffset) {
			setShowScrollToTop(false);
		}
	}, [showScrollToTop, scrollOffset]);

	useEffect(() => {
		window.addEventListener('scroll', checkScrollToTop);
		return () => window.removeEventListener('scroll', checkScrollToTop);
	}, [checkScrollToTop]);

	return (
		<div
			className={`backToTop ${
				showScrollToTop ? 'visible' : 'hidden'
			} ${className}`}
		>
			<FontAwesomeIcon
				icon={icon}
				title={title}
				onClick={() => window.scrollTo({ top: 0, behavior })}
			/>
		</div>
	);
}

BackToTop.propTypes = {
	scrollOffset: PropTypes.number,
	icon: PropTypes.object, // Adjust based on the actual prop type for icons
	title: PropTypes.string,
	behavior: PropTypes.oneOf(['smooth', 'auto']),
	className: PropTypes.string,
};
