import PropTypes from 'prop-types';
import PlansData from '../../../data/plans_data.json';

export default function FeaturesTableMobile({ plan }) {
	if (plan === 'Essentiel') {
		return PlansData.map((detail) => (
			<tr key={detail.name}>
				<th className="features__item features__item--left">
					{detail.name}
				</th>
				<td className="features__item">{detail.Essentiel}</td>
			</tr>
		));
	}

	if (plan === 'Premium') {
		return PlansData.map((detail) => (
			<tr key={detail.name}>
				<th className="features__item features__item--left">
					{detail.name}
				</th>
				<td className="features__item">{detail.Premium}</td>
			</tr>
		));
	}
}

FeaturesTableMobile.propTypes = {
	plan: PropTypes.string,
};
