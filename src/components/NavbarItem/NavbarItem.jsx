import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './NavbarItem.scss';

export default function NavbarItem({ itemText, href, className }) {
	const location = useLocation();

	return (
		<li className="navbar__list--item">
			<Link
				to={href}
				className={`navbar__link ${className} ${
					location.pathname === href ? 'current' : ''
				}`}
			>
				{itemText}
			</Link>
		</li>
	);
}

NavbarItem.propTypes = {
	itemText: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};
