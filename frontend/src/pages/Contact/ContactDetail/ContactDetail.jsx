import PropTypes from 'prop-types';
import './ContactDetail.scss';

export default function ContactDetail({ icon, href, text }) {
	return (
		<div className="infos__item">
			{icon}
			<a href={href} className="infos__item--text">
				{text}
			</a>
		</div>
	);
}

ContactDetail.propTypes = {
	icon: PropTypes.element,
	title: PropTypes.string,
	href: PropTypes.string,
	text: PropTypes.string,
};
