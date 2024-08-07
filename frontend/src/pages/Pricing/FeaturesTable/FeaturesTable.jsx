/* eslint-disable react-hooks/rules-of-hooks */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef, useState } from 'react';
import PlanContext from '../../../context/PlanContext';
import PlansData from '../../../data/plans_data.json';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import FeaturesTableMobile from '../FeaturesTableMobile/FeaturesTableMobile';
import './FeaturesTable.scss';

export default function FeaturesTable() {
	const contentRef = useRef(null);
	const { selectedPlan, setSelectedPlan } = useContext(PlanContext);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

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
						useAnimation(contentRef, 'fadeIn__title') || ''
					}`}
					ref={contentRef}
				>
					<thead>
						<tr>
							<th colSpan={2} className="features__title">
								Détails des prestations
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan={2}>
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
									<span className="features__table--plan-pipe">
										|
									</span>
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
						<FeaturesTableMobile plan={selectedPlan} />
					</tbody>
				</table>
			)}
			{!isMobile && (
				<table
					className={`features__table ${
						useAnimation(contentRef, 'fadeIn__title') || ''
					}`}
					ref={contentRef}
				>
					<thead>
						<tr>
							<th className="features__title" colSpan={3}>
								Détails des prestations
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="features__item features__item--title features__item--title--left visually-hidden">
								Solutions
							</th>
							<td className="features__item features__item--title">
								Essentiel
							</td>
							<td className="features__item features__item--title">
								Premium
							</td>
						</tr>
						{PlansData.map((detail) => (
							<tr key={detail.name}>
								<th className="features__item features__item--left">
									{detail.name}
								</th>
								<td className="features__item">
									{detail.Essentiel === true ? (
										<FontAwesomeIcon
											icon={faCheck}
											className="color-touch-svg"
										/>
									) : (
										detail.Essentiel
									)}
								</td>
								<td className="features__item">
									{detail.Premium === true ? (
										<FontAwesomeIcon
											icon={faCheck}
											className="color-touch-svg"
										/>
									) : (
										detail.Premium
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</Section>
	);
}
