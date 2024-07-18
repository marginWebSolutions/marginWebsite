import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../ButtonOrLink/ButtonOrLink.scss';

const LinkComponent = ({
	href = '#',
	btnClassName = 'default',
	children,
	...props
}) => (
	<Link className={`btn btn__${btnClassName}`} to={href} {...props}>
		{children}
	</Link>
);

LinkComponent.propTypes = {
	href: PropTypes.string,
	btnClassName: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default LinkComponent;
