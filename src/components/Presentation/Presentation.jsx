import Section from '../../components/Section/Section';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import Column from '../Column/Column';
import './Presentation.scss';

export default function Presentation() {
	return (
		<Section className="presentation">
			<div className="presentation__content">
				<h2 className="presentation__title">En quelques mots</h2>
				<p className="presentation__text">
					Margin, c’est l’histoire de deux amis passionnés par la
					création et le développement de sites Internet, qui décident
					de mettre leur savoir-faire{' '}
					<span className="bolder">
						au service des PME et des artisans
					</span>{' '}
					autour de chez eux.
					<br /> Basés à{' '}
					<span className="bolder">
						Nevers et Saint-Étienne
					</span>,
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

				<div className="presentation__columns">
					<Column
						src={'./illustration_Conseil_et_Expertise_en_création_de_sites_Web.png'}
						alt={'illustration'}
						title={'Conseil et Expertise'}
						text={
							'Accompagnement dans le choix des technologies adaptées à vos besoins, expertise sur la faisabilité des fonctionnalités souhaitées et conseils pour l’optimisation de votre présence en ligne.'
						}
					/>
					<Column
						src={'./illustration_Développement_de_site_Web.png'}
						alt={'illustration'}
						title={'Développement Web'}
						text={
							'Création de sites web dynamiques et modernes en utilisant des technologies telles que ReactJS et WordPress afin de créer des sites web performants et évolutifs, pour une expérience utilisateur fluide.'
						}
					/>
					<Column
						src={'./illustration_Service_Web_de_Proximité.png'}
						alt={'illustration'}
						title={'Service de Proximité'}
						text={
							'Nous sommes fiers de soutenir les entreprises locales à Nevers et Saint-Étienne. Que vous soyez une PME ou un artisan, nous sommes là pour vous aider à créer une présence en ligne efficace.'
						}
					/>
				</div>

				<ButtonOrLink
					btnClassName={'reverse'}
					isLink={true}
					href="/services-et-tarifs"
				>
					Découvrez nos solutions
				</ButtonOrLink>
			</div>
		</Section>
	);
}
