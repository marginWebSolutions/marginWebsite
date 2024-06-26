import PropTypes from 'prop-types';

export default function TableRow({
	detail,
	title,
	children,
	values,
	isMobile,
}) {
	if (!isMobile) {
		return (
			<tr>
				<th className="features__item features__item--left">{title}</th>
				{values.map((value, index) => (
					<td key={index} className="features__item">
						{value}
					</td>
				))}
			</tr>
		);
	} else {
		return (
			<tr>
				<th className="features__item--mobile features__item--mobile--title">
					{title}
				</th>
				<td className="features__item--mobile">{children}</td>
			</tr>
		);
	}
}

TableRow.propTypes = {
	detail: PropTypes.object,
	title: PropTypes.string,
	children: PropTypes.node,
	isMobile: PropTypes.bool,
	values: PropTypes.array,
};
