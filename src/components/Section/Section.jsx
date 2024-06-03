import PropTypes from 'prop-types';
import './Section.scss';

export default function Section({ className, children, ...props }) {
	return (
		<section className={`section ${className}`} {...props}>
			{children}
		</section>
	);
}

Section.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
