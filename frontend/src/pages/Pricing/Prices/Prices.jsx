/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from 'react';
import PlanContext from '../../../context/PlanContext';
import PricesCardData from '../../../data/prices_card_data.json';
import Section from '../../../layout/Section/Section';
import PricesCard from '../PricesCard/PricesCard';
import PricesCardMobile from '../PricesCardMobile/PricesCardMobile';
import './Prices.scss';

export default function Prices() {
	const { selectedCard, setSelectedCard } = useContext(PlanContext);
	const { setSelectedPlan } = useContext(PlanContext);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClick = (card, plan) => {
		setSelectedCard(card);
		setSelectedPlan(plan);
	};

	return (
		<Section className="prices" isHero={true}>
			<div className="prices__content">
				<h1 className="prices__title">
					Choisissez la solution qui vous correspond
				</h1>
				<p className="prices__text">
					Vous souhaitez retravailler le look de votre site Internet
					vieillissant ? Vous avez besoin de remonter dans le résultat
					des moteurs de recherche ? Vous voulez créer un site vitrine
					moderne et optimisé ?<br />
					<br />
					Réalisons ensemble le site Internet professionnel de vos
					rêves !
				</p>
				<div className="prices__plans">
					{isMobile && (
						<>
							<div className="prices__toggle">
								<div
									className={`prices__toggle--item ${
										selectedCard === 'Essentiel'
											? 'selected'
											: ''
									}`}
									onClick={() =>
										handleClick('Essentiel', 'Essentiel')
									}
								>
									Essentiel
								</div>
								<div
									className={`prices__toggle--item ${
										selectedCard === 'Premium'
											? 'selected'
											: ''
									}`}
									onClick={() =>
										handleClick('Premium', 'Premium')
									}
								>
									Premium
								</div>
								<div
									className={`prices__toggle--item ${
										selectedCard === 'default'
											? 'selected'
											: ''
									}`}
									onClick={() =>
										handleClick('default', 'Essentiel')
									}
								>
									À la Carte
								</div>
							</div>
							<div className="prices__plans__cards">
								<PricesCardMobile card={selectedCard} />
							</div>
						</>
					)}
					{!isMobile && (
						<>
							{PricesCardData.map((card) => (
								<PricesCard
									key={card.name}
									title={card.title}
									text={card.text}
									price={card.price}
									features={card.features}
									listTitle={card.listTitle}
									btnHref={card.btnHref}
									btnTitle={card.btnTitle}
									popular={card.popular}
									plansLink={card.plansLink}
								/>
							))}
						</>
					)}
				</div>
			</div>
			<p className="prices__details">
				*Tarif indicatif Hors Taxe, évolution selon devis personnalisé
			</p>
		</Section>
	);
}
