/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useScrollAnimation from '../../../utils/hooks/useScrollAnimation';
import EngagementCard from '../EngagementCard/EngagementCard';
import './Engagement.scss';

export default function Engagement() {
	const titleRef = useRef(null);
	const cardRef = useRef(null);
	const textRef = useRef(null);

	const [titleVisible, cardVisible, textVisible] = useScrollAnimation([
		titleRef,
		cardRef,
		textRef,
	]);

	return (
		<Section className="engagement">
			<div className="engagement__content" ref={titleRef}>
				<h2
					className={`engagement__title ${
						titleVisible ? 'fadeIn__title' : ''
					}`}
				>
					Margin s'engage à vos côtés
				</h2>
				<div className="engagement__cards" ref={cardRef}>
					<EngagementCard
						title="Qualité"
						text="Nous nous engageons à fournir des sites web de
							qualité, avec une attention particulière portée à
							chaque détail pour assurer votre satisfaction et
							celle de vos futurs visiteurs."
						className={`${cardVisible ? 'fadeIn__columns' : ''}`}
					/>
					<EngagementCard
						title="Communication"
						text="Nous croyons en une collaboration étroite tout au
							long du processus de création, en restant disponible
							et en vous tenant informé à chaque étape du projet."
						className={`${cardVisible ? 'fadeIn__columns' : ''}`}
					/>
					<EngagementCard
						title="Support"
						text="Notre relation ne se termine pas à la livraison du
							projet. Nous offrons un support continu pour
							garantir que votre site Internet reste performant et
							à jour."
						className={`${cardVisible ? 'fadeIn__columns' : ''}`}
					/>
				</div>
				<p
					className={`engagement__text ${
						textVisible ? 'fadeIn__text' : ''
					}`}
					ref={textRef}
				>
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
