import { Helmet } from 'react-helmet-async';

export default function JSONLD() {
	const businessInfo = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Adrien Blanco - Margin Web Solutions',
		image: './logo_margin_web_solutions.webp',
		description:
			'Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Saint-Étienne et Nevers. Nous fournissons des solutions web sur mesure, optimisées pour le SEO et le design responsive, afin de développer votre présence en ligne.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '5 impasse Jean Guiton',
			addressLocality: 'Saint-Genest-Lerpt',
			postalCode: '42530',
			addressRegion: 'Loire, Auvergne-Rhône-Alpes',
			addressCountry: 'FR',
		},
		telephone: '+33 0664148826',
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
				],
				opens: '09:00',
				closes: '18:00',
			},
		],
		priceRange: '€€',
		areaServed: [
			'Saint-Etienne, Loire, Auvergne-Rhône-Alpes, Nevers, Nièvre, Bourgogne-Franche-Comté',
		],
		url: 'https://margin-web.com',
	};

	const secondLocation = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Marc Villevieille - Margin Web Solutions',
		image: './logo_margin_web_solutions.webp',
		description:
			'Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Saint-Étienne et Nevers. Nous fournissons des solutions web sur mesure, optimisées pour le SEO et le design responsive, afin de développer votre présence en ligne.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '14 C rue Saint-Louis',
			addressLocality: 'Fourchambault',
			postalCode: '58600',
			addressRegion: 'Nièvre, Bourgogne-Franche-Comté',
			addressCountry: 'FR',
		},
		telephone: '+33 0664148826',
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
				],
				opens: '09:00',
				closes: '18:00',
			},
		],
		priceRange: '€€',
		areaServed: [
			'Saint-Etienne, Loire, Auvergne-Rhône-Alpes, Nevers, Nièvre, Bourgogne-Franche-Comté',
		],
		url: 'https://margin-web.com',
	};

	return (
		<Helmet>
			<script type="application/ld+json">
				{JSON.stringify({ '@graph': [businessInfo, secondLocation] })}
			</script>
		</Helmet>
	);
}
