import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './NavbarItem.scss';

export default function NavbarItem({ itemText, href }) {
	const location = useLocation();

	return (
		<li className="navbar__list--item">
			<Link
				to={href}
				className={`navbar__link ${
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
};
