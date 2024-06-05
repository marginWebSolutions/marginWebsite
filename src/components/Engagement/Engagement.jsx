/* eslint-disable react/no-unescaped-entities */
import Section from '../Section/Section';
import './Engagement.scss';

export default function Engagement() {
	return (
		<Section className="engagement">
			<div className="engagement__content">
				<h2 className="engagement__title">
					Margin s'engage à vos côtés
				</h2>
				<div className="engagement__cards">
					<div className="engagement__card--item">
						<h3 className="engagement__card--title">Qualité</h3>
						<p className="engagement__card--text">
							Nous nous engageons à fournir des sites web de
							qualité, avec une attention particulière portée à
							chaque détail pour assurer votre satisfaction et
							celle de vos futurs visiteurs.
						</p>
					</div>
					<div className="engagement__card--item">
						<h3 className="engagement__card--title">
							Communication
						</h3>
						<p className="engagement__card--text">
							Nous croyons en une collaboration étroite tout au
							long du processus de création, en restant disponible
							et en vous tenant informé à chaque étape du projet.
						</p>
					</div>
					<div className="engagement__card--item">
						<h3 className="engagement__card--title">Support</h3>
						<p className="engagement__card--text">
							Notre relation ne se termine pas à la livraison du
							projet. Nous offrons un support continu pour
							garantir que votre site Internet reste performant et
							à jour.
						</p>
					</div>
				</div>
				<p className="engagement__text">
					Nous comprenons les défis que rencontrent les PME et les
					artisans. Nos solutions web sont conçues pour élargir votre
					portée et attirer de nouveaux clients en ligne, vous aidant
					à atteindre vos objectifs commerciaux et à maximiser votre
					retour sur investissement.
				</p>
			</div>
		</Section>
	);
}
