/* eslint-disable react/no-unescaped-entities */

import PricesCard from '../PricesCard/PricesCard';
import Section from '../Section/Section';
import './Prices.scss';

export default function Prices() {
	return (
		<Section className="prices">
			<div className="prices__content">
				<h1 className="prices__title">
					Choisissez un plan qui vous correspond
				</h1>
				<p className="prices__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maiores harum nulla minima? Quos architecto aliquam
					veritatis eligendi repellat. Aspernatur, rerum!
				</p>
				<div className="prices__plans">
					<PricesCard
						title="Essentiel"
						text="Création d'un site vitrine moderne"
						price="A partir de 1500€"
						features={['WordPress', 'SEO', 'Maintenance']}
					/>
					<PricesCard
						title="Pro"
						text="Création d'un site vitrine moderne"
						price="De 1500€ à 3000€"
						features={['React', 'SEO', 'Maintenance']}
					/>
					<PricesCard
						title="Premium"
						text="Création d'un site vitrine moderne"
						price="A partir de 4500€"
						features={['React', 'SEO', 'Design', 'Maintenance']}
					/>
				</div>
			</div>
		</Section>
	);
}
