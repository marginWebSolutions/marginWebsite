/* eslint-disable react/no-unescaped-entities */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import ButtonOrLink from '../../../components/ButtonOrLink/ButtonOrLink';
import PlanContext from '../../../context/PlanContext';
import PricesCardData from '../../../data/prices_card_data.json';

export default function PricesCard({ card }) {
	console.log(card);
	const { setSelectedPlan } = useContext(PlanContext);

	const handlePlanChange = (newPlan) => {
		setSelectedPlan(newPlan);
	};

	if (card === 'default') {
		const defaultCard = PricesCardData[0];
		return (
			<div className="card">
				{defaultCard.popular && (
					<div className="card__popular">Populaire</div>
				)}
				<div className="card__content">
					<div className="card__heading">
						<h2 className="card__heading--title">
							{defaultCard.title}
						</h2>
						<p className="card__heading--text">
							{defaultCard.text}
						</p>
					</div>
					<div className="card__body">
						<p className="card__body--price">{defaultCard.price}</p>
						<div className="card__body__features">
							<p className="card__body__list--title">
								{defaultCard.listTitle}
							</p>
							<ul className="card__body__list">
								{defaultCard.features.map((feature, index) => (
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
							href={defaultCard.btnHref}
							onClick={() =>
								handlePlanChange(defaultCard.plansLink)
							}
						>
							{defaultCard.btnTitle}
						</ButtonOrLink>
					</div>
				</div>
			</div>
		);
	}

	if (card === 'Essentiel') {
		const EssentielCard = PricesCardData[1];
		return (
			<div className="card">
				{EssentielCard.popular && (
					<div className="card__popular">Populaire</div>
				)}
				<div className="card__content">
					<div className="card__heading">
						<h2 className="card__heading--title">
							{EssentielCard.title}
						</h2>
						<p className="card__heading--text">
							{EssentielCard.text}
						</p>
					</div>
					<div className="card__body">
						<p className="card__body--price">
							{EssentielCard.price}
						</p>
						<div className="card__body__features">
							<p className="card__body__list--title">
								{EssentielCard.listTitle}
							</p>
							<ul className="card__body__list">
								{EssentielCard.features.map(
									(feature, index) => (
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
									)
								)}
							</ul>
						</div>
						<ButtonOrLink
							isLink={true}
							href={EssentielCard.btnHref}
							onClick={() =>
								handlePlanChange(EssentielCard.plansLink)
							}
						>
							{EssentielCard.btnTitle}
						</ButtonOrLink>
					</div>
				</div>
			</div>
		);
	}

	if (card === 'Premium') {
		const PremiumCard = PricesCardData[2];
		return (
			<div className="card">
				{PremiumCard.popular && (
					<div className="card__popular">Populaire</div>
				)}
				<div className="card__content">
					<div className="card__heading">
						<h2 className="card__heading--title">
							{PremiumCard.title}
						</h2>
						<p className="card__heading--text">
							{PremiumCard.text}
						</p>
					</div>
					<div className="card__body">
						<p className="card__body--price">{PremiumCard.price}</p>
						<div className="card__body__features">
							<p className="card__body__list--title">
								{PremiumCard.listTitle}
							</p>
							<ul className="card__body__list">
								{PremiumCard.features.map((feature, index) => (
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
							href={PremiumCard.btnHref}
							onClick={() =>
								handlePlanChange(PremiumCard.plansLink)
							}
						>
							{PremiumCard.btnTitle}
						</ButtonOrLink>
					</div>
				</div>
			</div>
		);
	}
}

PricesCard.propTypes = {
	card: PropTypes.string,
};
