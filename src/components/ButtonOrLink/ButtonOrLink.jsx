import React from 'react';
import PropTypes from 'prop-types';
import './ButtonOrLink.scss';

const ButtonOrLink = ({ isLink, href, type, btnClassName, children, ...props }) => {
    if (isLink) {
        return (
            <a className={`btn btn__${btnClassName}`} href={href} {...props}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={`btn btn__${btnClassName}`} type={type} {...props}>
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

ButtonOrLink.defaultProps = {
    isLink: false,
    href: '#',
    type: 'button',
    btnClassName: 'default',
};

export default ButtonOrLink;


// exemple pour appeler un bouton ou l'autre
{/* <form>
      <ButtonOrLink type="submit">Submit Form</ButtonOrLink>
    </form>
    <ButtonOrLink isLink={true} href="https://www.example.com">
      Go to Example.com
    </ButtonOrLink> */}