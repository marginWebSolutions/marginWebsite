import PropTypes from 'prop-types';
import PlansData from '../../../data/plans_data.json';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FeaturesTableMobile({ plan }) {
	if (plan === 'Essentiel') {
		return PlansData.map((detail) => (
			<tr key={detail.name}>
				<th className="features__item features__item--left">
					{detail.name}
				</th>
				<td className="features__item">
					{detail.Essentiel === true ? <FontAwesomeIcon
						icon={faCheck}
						className="color-touch-svg"
					/> : detail.Essentiel}
				</td>
			</tr>
		));
	}

	if (plan === 'Premium') {
		return PlansData.map((detail) => (
			<tr key={detail.name}>
				<th className="features__item features__item--left">
					{detail.name}
				</th>
				<td className="features__item">
				{detail.Premium === true ? <FontAwesomeIcon
						icon={faCheck}
						className="color-touch-svg"
					/> : detail.Premium}
				</td>
			</tr>
		));
	}
}

FeaturesTableMobile.propTypes = {
	plan: PropTypes.string,
};
