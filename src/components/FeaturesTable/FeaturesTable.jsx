import Section from '../Section/Section';
import './FeaturesTable.scss';

export default function FeaturesTable() {
	return (
		<Section className="features" id="features">
			<table className="features__table">
				<thead>
					<tr>
						<th className="features__title">Plans</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="features__item"></td>
						<td className="features__item">Basic</td>
						<td className="features__item">Pro</td>
						<td className="features__item">Ultimate</td>
					</tr>
					<tr>
						<th className="features__item">Prix</th>
						<td className="features__item">1500€</td>
						<td className="features__item">2500€</td>
						<td className="features__item">3500€</td>
					</tr>
					<tr>
						<th className="features__item">Technologies</th>
						<td className="features__item">Wordpress</td>
						<td className="features__item">React</td>
						<td className="features__item">React</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
