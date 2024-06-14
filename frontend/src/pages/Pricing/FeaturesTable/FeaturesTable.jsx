import { useEffect, useRef, useState } from 'react';
import PlansData from '../../../data/plans_data.json';
import Section from '../../../layout/Section/Section';
import useScrollAnimation from '../../../utils/hooks/useScrollAnimation';
import PlanDetails from '../PlanDetails/PlanDetails';
import TableRow from '../TableRow/TableRow';
import './FeaturesTable.scss';

export default function FeaturesTable() {
	const contentRef = useRef(null);
	const [selectedPlan, setSelectedPlan] = useState(PlansData[0]);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
	const [contentVisible] = useScrollAnimation([contentRef]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClick = (plan) => {
		setSelectedPlan(plan);
	};

	return (
		<Section className="features" id="features">
			{isMobile && (
				<table
					className={`features__table ${
						contentVisible ? 'fadeIn__title' : ''
					}`}
					ref={contentRef}
				>
					<thead>
						<tr>
							<th className="features__title">
								Détails des prestations et tarifs
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="features__table--plan-names">
									{PlansData.map((plan) => (
										<div
											key={plan.name}
											className={`features__table--plan-name ${
												selectedPlan.name === plan.name
													? 'selected'
													: ''
											}`}
											onClick={() => handleClick(plan)}
										>
											{plan.name}
										</div>
									))}
								</div>
							</td>
						</tr>
						<PlanDetails plan={selectedPlan} />
					</tbody>
				</table>
			)}
			{!isMobile && (
				<table
					className={`features__table ${
						contentVisible ? 'fadeIn__title' : ''
					}`}
					ref={contentRef}
				>
					<thead>
						<tr>
							<th className="features__title">
								Détails des prestations et tarifs
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="features__item features__item--title features__item--title--left">
								Plans
							</th>
							{PlansData.map((plan) => (
								<td
									key={plan.name}
									className="features__item features__item--title"
								>
									{plan.name}
								</td>
							))}
						</tr>
						<TableRow
							title="Prix"
							values={PlansData.map((plan) => plan.price)}
						/>
						<TableRow
							title="Technologies"
							values={PlansData.map((plan) => plan.tech)}
						/>
						<TableRow
							title="Pages"
							values={PlansData.map((plan) => plan.pages)}
						/>
					</tbody>
				</table>
			)}
		</Section>
	);
}
