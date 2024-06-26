import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useScrollAnimation from '../../../utils/hooks/useScrollAnimation';
import './AdditionalServices.scss';

export default function AdditionalServices() {
	const contentRef = useRef(null);
	const [contentVisible] = useScrollAnimation([contentRef]);

	const additionalServices = [
		'Hébergement',
		'Maintenance technique',
		'Mise à jour du contenu',
		'Pages supplémentaires',
		'Demandes de changements supplémentaires',
		'Animations poussées (pack Essentiel)',
		'Contenu administrable (pack Essentiel)',
	];

	return (
		<Section className="additionalServices">
			<div
				className={`additionalServices__content ${
					contentVisible ? 'fadeIn__title' : ''
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
							{additional}
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
}
