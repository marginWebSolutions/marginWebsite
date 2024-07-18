import PropTypes from 'prop-types';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LinkComponent from '../LinkComponent/LinkComponent';

const ButtonOrLink = ({ isLink, ...props }) => {
	return isLink ? (
		<LinkComponent {...props} />
	) : (
		<ButtonComponent {...props} />
	);
};

ButtonOrLink.propTypes = {
	isLink: PropTypes.bool,
};

export default ButtonOrLink;
