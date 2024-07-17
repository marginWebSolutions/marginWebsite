import PropTypes from 'prop-types';
import '../ButtonOrLink/ButtonOrLink.scss';

const ButtonComponent = ({
	btnClassName = 'default',
	type = 'button',
	children,
	...props
}) => (
	<button className={`btn btn__${btnClassName}`} type={type} {...props}>
		{children}
	</button>
);

ButtonComponent.propTypes = {
	btnClassName: PropTypes.string,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	children: PropTypes.node.isRequired,
};

export default ButtonComponent;
