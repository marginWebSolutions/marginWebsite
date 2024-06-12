import PropTypes from 'prop-types';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import './ButtonDoubled.scss';

export default function ButtonDoubled({
	btnFirst,
	hrefFirst,
	btnSecond,
	hrefSecond,
}) {
	return (
		<div className="btn__doubled">
			<ButtonOrLink isLink={true} href={hrefFirst}>
				{btnFirst}
			</ButtonOrLink>
			<ButtonOrLink
				isLink={true}
				href={hrefSecond}
				btnClassName="reverse"
			>
				{btnSecond}
			</ButtonOrLink>
		</div>
	);
}

ButtonDoubled.propTypes = {
	btnFirst: PropTypes.string,
	hrefFirst: PropTypes.string,
	btnSecond: PropTypes.string,
	hrefSecond: PropTypes.string,
};
