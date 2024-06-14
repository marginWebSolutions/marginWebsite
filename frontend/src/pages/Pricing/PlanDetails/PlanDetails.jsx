import PropTypes from 'prop-types';
import TableRow from '../TableRow/TableRow';

export default function PlanDetails({ plan }) {
	return (
		<>
			<TableRow title="Prix" isMobile={true}>
				{plan.price}
			</TableRow>
			<TableRow title="Tech" isMobile={true}>
				{plan.tech}
			</TableRow>
			<TableRow title="Page" isMobile={true}>
				{plan.pages}
			</TableRow>
			{plan.features && (
				<TableRow title="Fonctionnalités" isMobile={true}>
					{plan.features}
				</TableRow>
			)}
		</>
	);
}

PlanDetails.propTypes = {
	plan: PropTypes.object,
};
