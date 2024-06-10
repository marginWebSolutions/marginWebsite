import { useCallback, useEffect, useRef, useState } from 'react';
import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import Column from '../Column/Column';
import './Presentation.scss';

export default function Presentation() {
	const contentRef = useRef(null);
	const columnRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [columnsVisible, setColumnsVisible] = useState(false);
	const [buttonVisible, setButtonVisible] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(window.scrollY);

	const checkVisibility = useCallback(() => {
		const currentScrollY = window.scrollY;
		const scrollingDown = currentScrollY > lastScrollY;

		if (currentScrollY < 5) {
			setIsVisible(false);
			setColumnsVisible(false);
			setButtonVisible(false);
		} else if (scrollingDown) {
			if (contentRef.current) {
				const rect = contentRef.current.getBoundingClientRect();
				const isContentVisible =
					rect.top < window.innerHeight && rect.bottom >= 0;
				setIsVisible(isContentVisible);
			}

			if (columnRef.current) {
				const rect = columnRef.current.getBoundingClientRect();
				const isColumnsVisible =
					rect.top < window.innerHeight && rect.bottom >= 0;
				setColumnsVisible(isColumnsVisible);
				setButtonVisible(isColumnsVisible);
			}
		}

		setLastScrollY(currentScrollY);
	}, [lastScrollY]);

	useEffect(() => {
		const handleScroll = () => {
			checkVisibility();
		};

		window.addEventListener('scroll', handleScroll);
		checkVisibility();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [
		columnsVisible,
		buttonVisible,
		isVisible,
		lastScrollY,
		checkVisibility,
	]);

	return (
		<Section className="presentation">
			<div className="presentation__content" ref={contentRef}>
				<h2
					className={`presentation__title ${
						isVisible ? 'fadeIn__title' : ''
					}`}
				>
					En quelques mots
				</h2>
				<p
					className={`presentation__text ${
						isVisible ? 'fadeIn__text' : ''
					}`}
				>
					Margin, c’est l’histoire de deux amis passionnés par la
					création et le développement de sites Internet, qui décident
					de mettre leur savoir-faire{' '}
					<span className="bolder">
						au service des PME et des artisans
					</span>{' '}
					autour de chez eux.
					<br /> Basés à{' '}
					<span className="bolder">Nevers et Saint-Étienne</span>,
					nous offrons des solutions digitales adaptées à vos besoins
					spécifiques, en alliant design, fonctionnalités et
					performances. Conscients des enjeux et des spécificités
					uniques de chaque corps de métier, nous basons notre
					approche{' '}
					<span className="bolder">
						sur l’écoute et la compréhension de vos besoins
					</span>
					, afin de vous proposer les solutions web les plus adaptées.
				</p>

				<div className="presentation__columns" ref={columnRef}>
					<Column
						src={
							'./illustration_Conseil_et_Expertise_en_stratégie_Web.png'
						}
						alt={
							"illustration d'un personnage qui dispense des conseils à son client concernant sa stratégie Web"
						}
						title={'Conseil et Expertise'}
						text={
							'Accompagnement dans le choix des technologies adaptées à vos besoins, expertise sur la faisabilité des fonctionnalités souhaitées et conseils pour l’optimisation de votre présence en ligne.'
						}
						className={`${columnsVisible ? 'fadeIn__columns' : ''}`}
					/>
					<Column
						src={'./illustration_Développement_de_site_Web.png'}
						alt={
							"illustration d'un développeur qui crée un site Internet"
						}
						title={'Développement Web'}
						text={
							'Création de sites web dynamiques et modernes en utilisant des technologies telles que ReactJS et WordPress afin de créer des sites web performants et évolutifs, pour une expérience utilisateur fluide.'
						}
						className={`${columnsVisible ? 'fadeIn__columns' : ''}`}
					/>
					<Column
						src={'./illustration_Service_Web_de_Proximité.png'}
						alt={
							"illustration d'un service de proximité via un personnage qui tape dans la main de son client"
						}
						title={'Service de Proximité'}
						text={
							'Nous sommes fiers de soutenir les entreprises locales à Nevers et Saint-Étienne. Que vous soyez une PME ou un artisan, nous sommes là pour vous aider à créer une présence en ligne efficace.'
						}
						className={`${columnsVisible ? 'fadeIn__columns' : ''}`}
					/>
				</div>

				<ButtonOrLink
					btnClassName={`reverse ${
						buttonVisible ? 'fadeIn__button' : ''
					}`}
					isLink={true}
					href="/services-et-tarifs"
				>
					Découvrez nos solutions
				</ButtonOrLink>
			</div>
		</Section>
	);
}
