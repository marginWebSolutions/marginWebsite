import { useRef } from 'react';
import ButtonOrLink from '../../../components/ButtonOrLink/ButtonOrLink';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import Column from '../Column/Column';
import './Presentation.scss';

export default function Presentation() {
	const titleRef = useRef(null);
	const textRef = useRef(null);
	const firstColumnRef = useRef(null);
	const secondColumnRef = useRef(null);
	const thirdColumnRef = useRef(null);
	const buttonRef = useRef(null);

	return (
		<Section className="presentation">
			<div className="presentation__content">
				<h2
					className={`presentation__title ${
						useAnimation(titleRef, 'fadeIn__title') || ''
					}`}
					ref={titleRef}
				>
					En quelques mots
				</h2>
				<p
					className={`presentation__text ${
						useAnimation(textRef, 'fadeIn__text') || ''
					}`}
					ref={textRef}
				>
					Margin, c’est l’histoire de deux amis passionnés par la
					création et le développement de sites Internet, qui décident
					de mettre leur savoir-faire{' '}
					<span className="bolder">
						au service des PME et des artisans
					</span>{' '}
					autour de chez eux.
					<br /> Basés à{' '}
					<span className="bolder">Saint-Étienne et Nevers</span>,
					nous offrons des solutions digitales adaptées à vos besoins
					spécifiques, en alliant design, fonctionnalités et
					performances.
					<br />
					Conscients des enjeux et des spécificités uniques de chaque
					corps de métier, nous basons notre approche{' '}
					<span className="bolder">
						sur l’écoute et la compréhension de vos besoins
					</span>
					, afin de vous proposer les solutions web les plus adaptées.
				</p>

				<div className="presentation__columns">
					<Column
						srcmobile={
							'./illustration_Conseil_et_Expertise_en_stratégie_Web_mobile.webp'
						}
						src={
							'./illustration_Conseil_et_Expertise_en_stratégie_Web.webp'
						}
						alt={
							"illustration d'un personnage qui dispense des conseils à son client concernant sa stratégie Web"
						}
						title={'Conseil et Expertise'}
						text={
							'Accompagnement dans le choix des technologies adaptées à vos besoins, expertise sur la faisabilité des fonctionnalités souhaitées et conseils pour l’optimisation de votre présence en ligne.'
						}
						className={`${
							useAnimation(firstColumnRef, 'fadeIn__columns') ||
							''
						}`}
						ref={firstColumnRef}
					/>
					<Column
						srcmobile={
							'./illustration_Service_Web_de_Proximité_mobile.webp'
						}
						src={'./illustration_Service_Web_de_Proximité.webp'}
						alt={
							"illustration d'un service de proximité via un personnage qui tape dans la main de son client"
						}
						title={'Service de Proximité'}
						text={
							'Nous sommes fiers de soutenir les entreprises locales à Saint-Étienne et Nevers. Que vous soyez une PME ou un artisan, nous sommes là pour vous aider à créer une présence en ligne efficace.'
						}
						className={`${
							useAnimation(thirdColumnRef, 'fadeIn__columns') ||
							''
						}`}
						ref={thirdColumnRef}
					/>
					<Column
						srcmobile={
							'./illustration_Développement_de_site_Web_mobile.webp'
						}
						src={'./illustration_Développement_de_site_Web.webp'}
						alt={
							"illustration d'un développeur qui crée un site Internet"
						}
						title={'Développement Web'}
						text={
							'Création de sites web dynamiques et modernes en utilisant des technologies telles que ReactJS et WordPress afin de créer des sites web performants et évolutifs, pour une expérience utilisateur fluide.'
						}
						className={`${
							useAnimation(secondColumnRef, 'fadeIn__columns') ||
							''
						}`}
						ref={secondColumnRef}
					/>
				</div>
				<div
					ref={buttonRef}
					className={`btn-container ${
						useAnimation(buttonRef, 'fadeIn__button') || ''
					}`}
				>
					<ButtonOrLink
						btnClassName="reverse"
						isLink={true}
						to="/services-et-tarifs"
						reloadDocument={true}
					>
						Découvrez nos solutions
					</ButtonOrLink>
				</div>
			</div>
		</Section>
	);
}
