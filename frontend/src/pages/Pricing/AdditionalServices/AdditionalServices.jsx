import {
	faFileCirclePlus,
	faFileCode,
	faFilePen,
	faPencil,
	faRocket,
	faScrewdriverWrench,
	faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import './AdditionalServices.scss';

export default function AdditionalServices() {
	const contentRef = useRef(null);

	const additionalServices = [
		{
			icon: faServer,
			service: 'Hébergement',
		},
		{
			icon: faScrewdriverWrench,
			service: 'Maintenance technique',
		},
		{
			icon: faFilePen,
			service: 'Mise à jour du contenu',
		},
		{
			icon: faFileCirclePlus,
			service: 'Pages supplémentaires',
		},
		{
			icon: faFileCode,
			service: 'Demandes de changements supplémentaires',
		},
		{
			icon: faRocket,
			service: 'Animations poussées (pack Essentiel)',
		},
		{
			icon: faPencil,
			service: 'Contenu administrable (pack Essentiel)',
		},
	];

	return (
		<Section className="additionalServices">
			<div
				className={`additionalServices__content ${
					useAnimation(contentRef, 'fadeIn__title') || ''
				}`}
				ref={contentRef}
			>
				<h3 className="additionalServices__title">
					Services additionnels
				</h3>
				<ul className="additionalServices__list">
					{additionalServices.map((additional, idx) => (
						<li
							key={idx}
							className="additionalServices__list--item"
						>
							<FontAwesomeIcon
								icon={additional.icon}
								className="color-touch-svg additionalServices__list--icon"
							/>
							{additional.service}
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
}
