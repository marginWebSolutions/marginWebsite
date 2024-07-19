import { Helmet } from 'react-helmet-async';

export default function Meta() {
	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Saint-Etienne et Nevers. Nous vous aidons à développer votre présence en ligne avec des solutions web sur mesure, optimisées pour le SEO et le design responsive."
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="https://margin-web.com" />
				<meta
					name="twitter:title"
					content="Margin Web Solutions - Création de Sites Internet à Saint-Etienne et Nevers"
				/>
				<meta
					name="twitter:description"
					content="Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Saint-Etienne et Nevers. Nous vous aidons à développer votre présence en ligne avec des solutions web sur mesure, optimisées pour le SEO et le design responsive."
				/>
				<meta
					name="twitter:image"
					content="https://margin-web.com/margin_web_solutions_preview_socials.png"
				/>

				<meta
					property="og:title"
					content="Margin Web Solutions - Création de Sites Internet à Saint-Etienne et Nevers"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://margin-web.com" />
				<meta
					property="og:description"
					content="Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Saint-Etienne et Nevers. Nous vous aidons à développer votre présence en ligne avec des solutions web sur mesure, optimisées pour le SEO et le design responsive."
				/>
				<meta
					property="og:image"
					content="https://margin-web.com/margin_web_solutions_preview_socials.png"
				/>
				<meta property="og:site_name" content="Margin Web Solutions" />
			</Helmet>
		</>
	);
}
