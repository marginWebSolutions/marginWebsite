import PropTypes from 'prop-types';
import './ContactDetail.scss';

export default function ContactDetail({ icon, title, href, text }) {
	return (
		<div className="infos__item">
			{icon}
			<h3 className="infos__item--title">{title}</h3>
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
