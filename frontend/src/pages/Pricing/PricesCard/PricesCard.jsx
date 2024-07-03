/* eslint-disable react/no-unescaped-entities */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import ButtonOrLink from '../../../components/ButtonOrLink/ButtonOrLink';
import PlanContext from '../../../context/PlanContext';
import './PricesCard.scss';

export default function PricesCard({
	title,
	text,
	price,
	features,
	listTitle = 'Ce qui est compris :',
	btnHref = '#features',
	btnTitle = "Plus d'infos",
	popular = false,
	plansLink,
	className,
}) {
	const { setSelectedPlan } = useContext(PlanContext);

	const handlePlanChange = (newPlan) => {
		setSelectedPlan(newPlan);
	};

	return (
		<div className="card">
			{popular && <div className="card__popular">Populaire</div>}
			<div className="card__content">
				<div className="card__heading">
					<h2 className="card__heading--title">{title}</h2>
					<p className="card__heading--text">{text}</p>
				</div>
				<div className={`card__body ${className}`}>
					<p className="card__body--price">{price}</p>
					<div className="card__body__features">
						<p className="card__body__list--title">{listTitle}</p>
						<ul className="card__body__list">
							{features.map((feature, index) => (
								<li
									key={index}
									className="card__body__list--item"
								>
									<FontAwesomeIcon
										icon={faCheck}
										className="color-touch-svg"
									/>
									{feature}
								</li>
							))}
						</ul>
					</div>
					<ButtonOrLink
						isLink={true}
						href={btnHref}
						onClick={() => handlePlanChange(plansLink)}
					>
						{btnTitle}
					</ButtonOrLink>
				</div>
			</div>
		</div>
	);
}

PricesCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	features: PropTypes.array.isRequired,
	listTitle: PropTypes.string,
	btnHref: PropTypes.string,
	btnTitle: PropTypes.string,
	popular: PropTypes.bool,
	plansLink: PropTypes.string,
	className: PropTypes.string,
};
