import PropTypes from 'prop-types';
import PlansDetailsMobile from '../../../data/plans_data.json';

export default function PlanDetails({ plan }) {
	if (plan === 'Essentiel') {
		return PlansDetailsMobile.map((detail) => (
			<tr key={detail.name}>
				<th className="features__item features__item--left">
					{detail.name}
				</th>
				<td className="features__item">{detail.Essentiel}</td>
			</tr>
		));
	}

	if (plan === 'Premium') {
		return PlansDetailsMobile.map((detail) => (
			<tr key={detail.name}>
				<th className="features__item features__item--left">
					{detail.name}
				</th>
				<td className="features__item">{detail.Premium}</td>
			</tr>
		));
	}
}

PlanDetails.propTypes = {
	plan: PropTypes.string,
};
