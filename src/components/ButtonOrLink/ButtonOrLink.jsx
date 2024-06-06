import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ButtonOrLink.scss';

const ButtonOrLink = ({
	isLink = false,
	href = '#',
	type = 'button',
	btnClassName = 'default',
	children,
	...props
}) => {
	if (isLink) {
		return (
			<Link
				className={`btn btn__${btnClassName}`}
				to={href}
				{...props}
				reloadDocument={true}
			>
				{children}
			</Link>
		);
	} else {
		return (
			<button
				className={`btn btn__${btnClassName}`}
				type={type}
				{...props}
			>
				{children}
			</button>
		);
	}
};

ButtonOrLink.propTypes = {
	isLink: PropTypes.bool,
	href: PropTypes.string,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	btnClassName: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default ButtonOrLink;

// exemple pour appeler un bouton ou l'autre
{
	/* <form>
      <ButtonOrLink type="submit">Submit Form</ButtonOrLink>
    </form>
    <ButtonOrLink isLink={true} href="https://www.example.com">
      Go to Example.com
    </ButtonOrLink> */
}
