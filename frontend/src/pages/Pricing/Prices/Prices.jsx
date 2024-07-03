/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from 'react';
import PlanContext from '../../../context/PlanContext';
import Section from '../../../layout/Section/Section';
import PricesCard from '../PricesCard/PricesCard';
import PricesCardMobile from '../PricesCardMobile/PricesCardMobile';
import './Prices.scss';

export default function Prices() {
	const { selectedCard, setSelectedCard } = useContext(PlanContext);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
	console.log(selectedCard);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClick = (card) => {
		setSelectedCard(card);
	};

	return (
		<Section className="prices" isHero={true}>
			<div className="prices__content">
				<h1 className="prices__title">
					Choisissez un plan qui vous correspond
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
										selectedCard === 'default'
											? 'selected'
											: ''
									}`}
									onClick={() => handleClick('default')}
								>
									À la Carte
								</div>
								<div
									className={`prices__toggle--item ${
										selectedCard === 'Essentiel'
											? 'selected'
											: ''
									}`}
									onClick={() => handleClick('Essentiel')}
								>
									Essentiel
								</div>
								<div
									className={`prices__toggle--item ${
										selectedCard === 'Premium'
											? 'selected'
											: ''
									}`}
									onClick={() => handleClick('Premium')}
								>
									Premium
								</div>
							</div>
							<div className="prices__plans">
								<PricesCardMobile card={selectedCard} />
							</div>
						</>
					)}
					{!isMobile && (
						<>
							<PricesCard
								btnHref="/contact"
								btnTitle="Demander un devis"
								title="à la Carte"
								text="Prestation de services pour votre site existant"
								price="à partir de 450€*"
								listTitle="Les services disponibles :"
								features={[
									'Refonte graphique',
									'Modification de contenu',
									"Ajout d'une version adaptée mobile et tablette",
									'Animations des éléments du site',
									'Amélioration du référencement en ligne',
									'Optimisation des performances',
									'Audit',
									'Débogage',
									'Maintenance technique',
								]}
							/>
							<PricesCard
								plansLink={'Essentiel'}
								popular={true}
								title="Essentiel"
								text="Site vitrine moderne optimisé et référencé"
								price="à partir de 1500€*"
								features={[
									"Création d'un design sobre et profesionnel",
									'Ou mise en place de votre propre design',
									'Référencement en ligne',
									'Animations simples',
									'Nombre de pages limité',
									'Direction artistique et design travaillé',
									'Contenu administrable',
									'Référencement en ligne',
									'Animations poussées',
									'Plus grand nombre de pages',
								]}
							/>
							<PricesCard
								plansLink={'Premium'}
								title="Premium"
								text="Site vitrine performant au design travaillé"
								price="à partir de 4500€*"
								features={[
									'Direction artistique et design travaillé',
									'Contenu administrable',
									'Référencement en ligne',
									'Animations poussées',
									'Plus grand nombre de pages',
									'Direction artistique et design travaillé',
									'Contenu administrable',
									'Référencement en ligne',
									'Animations poussées',
									'Plus grand nombre de pages',
									'Direction artistique et design travaillé',
									'Contenu administrable',
									'Référencement en ligne',
									'Animations poussées',
									'Plus grand nombre de pages',
								]}
							/>
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
