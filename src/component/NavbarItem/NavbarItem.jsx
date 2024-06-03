import PropTypes from 'prop-types';
import './NavbarItem.scss';

export default function NavbarItem({ text, href }) {
	return (
		<li className="navbar__list--item">
			<a href={href} className="navbar__link">
				{text}
			</a>
		</li>
	);
}

NavbarItem.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};
