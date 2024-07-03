/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import EngagementCard from '../EngagementCard/EngagementCard';
import './Engagement.scss';

export default function Engagement() {
	const titleRef = useRef(null);
	const firstCardRef = useRef(null);
	const secondCardRef = useRef(null);
	const thirdCardRef = useRef(null);
	const textRef = useRef(null);

	return (
		<Section className="engagement">
			<div className="engagement__content">
				<h2
					className={`engagement__title ${
						useAnimation(titleRef, 'fadeIn__title') || ''
					}`}
					ref={titleRef}
				>
					Margin s'engage à vos côtés
				</h2>
				<div className="engagement__cards">
					<EngagementCard
						title="Qualité"
						text="Nous nous engageons à fournir des sites web de
							qualité, avec une attention particulière portée à
							chaque détail pour assurer votre satisfaction et
							celle de vos futurs visiteurs."
						className={`${
							useAnimation(firstCardRef, 'fadeIn__cards') || ''
						}`}
						ref={firstCardRef}
					/>
					<EngagementCard
						title="Communication"
						text="Nous croyons en une collaboration étroite tout au
							long du processus de création, en restant disponible
							et en vous tenant informé à chaque étape du projet."
						className={`${
							useAnimation(secondCardRef, 'fadeIn__cards') || ''
						}`}
						ref={secondCardRef}
					/>
					<EngagementCard
						title="Support"
						text="Notre relation ne se termine pas à la livraison du
							projet. Nous offrons un support continu pour
							garantir que votre site Internet reste performant et
							à jour."
						className={`${
							useAnimation(thirdCardRef, 'fadeIn__cards') || ''
						}`}
						ref={thirdCardRef}
					/>
				</div>
				<p
					className={`engagement__text ${
						useAnimation(textRef, 'fadeIn__text') || ''
					}`}
					ref={textRef}
				>
					Nous comprenons les défis que rencontrent les PME et les
					artisans. Nos solutions web sont conçues pour{' '}
					<span className="bolder">
						élargir votre portée et attirer de nouveaux clients en
						ligne
					</span>
					, vous aidant à atteindre vos objectifs commerciaux et à
					maximiser votre retour sur investissement.
				</p>
			</div>
		</Section>
	);
}
