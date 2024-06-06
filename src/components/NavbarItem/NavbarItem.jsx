import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './NavbarItem.scss';

const NavbarItem = ({ itemText, href, className = '' }) => {
	const location = useLocation();
	const isValidLocation = location.pathname === href && href !== '/contact';

	return (
		<li className="navbar__list--item">
			<Link
				to={href}
				className={`navbar__link ${className} ${
					isValidLocation ? 'current' : ''
				}`}
				reloadDocument={true}
			>
				{itemText}
			</Link>
		</li>
	);
};

NavbarItem.propTypes = {
	itemText: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default NavbarItem;
