/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import PricesCardData from '../../../data/prices_card_data.json';
import PricesCard from '../PricesCard/PricesCard';

export default function PricesCardMobile({ card }) {
	if (card === 'Essentiel') {
		const EssentielCard = PricesCardData[0];
		return (
			<PricesCard
				key={EssentielCard.name}
				title={EssentielCard.title}
				text={EssentielCard.text}
				price={EssentielCard.price}
				features={EssentielCard.features}
				listTitle={EssentielCard.listTitle}
				btnHref={EssentielCard.btnHref}
				btnTitle={EssentielCard.btnTitle}
				popular={EssentielCard.popular}
				plansLink={EssentielCard.plansLink}
				className="card__body--secondary"
			/>
		);
	}

	if (card === 'Premium') {
		const PremiumCard = PricesCardData[1];
		return (
			<PricesCard
				key={PremiumCard.name}
				title={PremiumCard.title}
				text={PremiumCard.text}
				price={PremiumCard.price}
				features={PremiumCard.features}
				listTitle={PremiumCard.listTitle}
				btnHref={PremiumCard.btnHref}
				btnTitle={PremiumCard.btnTitle}
				popular={PremiumCard.popular}
				plansLink={PremiumCard.plansLink}
				className="card__body--secondary"
			/>
		);
	}

	if (card === 'default') {
		const defaultCard = PricesCardData[2];
		return (
			<PricesCard
				key={defaultCard.name}
				title={defaultCard.title}
				text={defaultCard.text}
				price={defaultCard.price}
				features={defaultCard.features}
				listTitle={defaultCard.listTitle}
				btnHref={defaultCard.btnHref}
				btnTitle={defaultCard.btnTitle}
				popular={defaultCard.popular}
				plansLink={defaultCard.plansLink}
			/>
		);
	}
}

PricesCardMobile.propTypes = {
	card: PropTypes.string,
};
