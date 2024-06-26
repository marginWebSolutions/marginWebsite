import { useEffect, useRef, useState } from 'react';
import PlansDataDetails from '../../../data/plans_data.json';
import Section from '../../../layout/Section/Section';
import useScrollAnimation from '../../../utils/hooks/useScrollAnimation';
import PlanDetails from '../PlanDetails/PlanDetails';
import './FeaturesTable.scss';

export default function FeaturesTable() {
	const contentRef = useRef(null);
	const [selectedPlan, setSelectedPlan] = useState('Essentiel');
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
									<div
										className={`features__table--plan-name ${
											selectedPlan === 'Essentiel'
												? 'selected'
												: ''
										}`}
										onClick={() => handleClick('Essentiel')}
									>
										Essentiel
									</div>
									<div
										className={`features__table--plan-name ${
											selectedPlan === 'Premium'
												? 'selected'
												: ''
										}`}
										onClick={() => handleClick('Premium')}
									>
										Premium
									</div>
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
								Détails des prestations
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="features__item features__item--title features__item--title--left">
								Plans
							</th>
							<td className="features__item features__item--title">
								Essentiel
							</td>
							<td className="features__item features__item--title">
								Premium
							</td>
						</tr>
						{PlansDataDetails.map((detail) => (
							<tr key={detail.name}>
								<th className="features__item features__item--left">
									{detail.name}
								</th>
								<td className="features__item">
									{detail.Essentiel}
								</td>
								<td className="features__item">
									{detail.Premium}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</Section>
	);
}
