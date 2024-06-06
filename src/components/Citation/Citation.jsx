/* eslint-disable react/no-unescaped-entities */
import Section from '../Section/Section';
import './Citation.scss';

export default function Citation() {
	return (
		<Section className="citation">
			<div className="citation__content">
				<q className="citation__content--quote">
					“Le commencement est beaucoup plus que la moitié de
					l'objectif.”
				</q>
				<cite className="citation__content--author"> ~ Aristote ~</cite>
			</div>
		</Section>
	);
}
