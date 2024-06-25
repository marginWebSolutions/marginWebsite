import PlansData from '../../../data/plans_data.json';
import Section from '../../../layout/Section/Section';
import './AdditionalServices.scss';

export default function AdditionalServices() {
	return (
		<Section className="additionalServices">
			<div className="additionalServices__content">
				<h2 className="additionalServices__title">
					Services additionnels
				</h2>
				{PlansData.map(
					(plan, index) =>
						plan.additionals && (
							<div
								key={index}
								className="additionalServices__plan"
							>
								<h3 className="additionalServices__subtitle">
									{plan.name}
								</h3>
								<ul className="additionalServices__list">
									{plan.additionals.map((additional, idx) => (
										<li
											key={idx}
											className="additionalServices__list--item"
										>
											{additional}
										</li>
									))}
								</ul>
							</div>
						)
				)}
			</div>
		</Section>
	);
}
