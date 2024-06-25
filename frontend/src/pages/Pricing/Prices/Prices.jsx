/* eslint-disable react/no-unescaped-entities */
import Section from '../../../layout/Section/Section';
import PricesCard from '../PricesCard/PricesCard';
import './Prices.scss';

export default function Prices() {
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
					Faîtes-nous confiance pour réaliser le site Internet
					professionnel de vos rêves !
				</p>
				<div className="prices__plans">
					<PricesCard
						popular={true}
						title="Essentiel"
						text="Site vitrine moderne optimisé et référencé"
						price="à partir de 1500€*"
						features={["Création d'un design sobre et profesionnel", "Ou mise en place de votre propre design", 'Référencement en ligne', 'Animations simples', "Nombre de pages limité" ]}
					/>
					<PricesCard
						title="Premium"
						text="Site vitrine perfomant au design travaillé"
						price="à partir de 4500€*"
						features={['Direction artistique et design travaillé', 'Contenu administrable', 'Référencement en ligne', 'Animations poussées', "Plus grand nombre de pages"]}
					/>
					<PricesCard
						title="à la Carte"
						text="Prestation de services pour site déjà existant"
						price="à partir de 800€*"
						features={['Refonte graphique', 'Modification de contenu', 'Animations des éléments de la page', 'Référencement en ligne', "Optimisation des performances", "Audit", "Débogage", "Maintenance technique"]}
					/>
				</div>
			</div>
		</Section>
	);
}
