import PropTypes from 'prop-types';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import './ButtonDoubled.scss';

const ButtonDoubled = ({ buttons }) => {
	return (
		<div className="btn__doubled">
			{buttons.map(({ content, href, btnClassName }, index) => (
				<ButtonOrLink
					key={index}
					isLink={!!href}
					href={href}
					btnClassName={btnClassName}
					reloadDocument={true}
				>
					{content}
				</ButtonOrLink>
			))}
		</div>
	);
};

ButtonDoubled.propTypes = {
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			content: PropTypes.string.isRequired,
			href: PropTypes.string,
			btnClassName: PropTypes.string,
		})
	).isRequired,
};

export default ButtonDoubled;
