import { Helmet } from 'react-helmet';

export default function Meta() {

    return (
        <>
            <Helmet>
                <meta name="description" content="La Ferme de la corne dorée est une chèvrerie située aux portes du parc naturel régional du Pilat : Vente de fromages de chèvre artisanaux et équitation Western." />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="https://www.margin-web.com" />
                <meta name="twitter:title" content="Margin Web Solutions - Création de Sites Internet à Nevers et Saint-Etienne" />
                <meta name="twitter:description" content="Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Nevers et Saint-Étienne. Nous vous aidons à développer votre présence en ligne avec des solutions web sur mesure, optimisées pour le SEO et le design responsive." />
                <meta name="twitter:image" content="./logo_margin_web_solutions.webp" />

                <meta property="og:title" content="Margin Web Solutions - Création de Sites Internet à Nevers et Saint-Etienne" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.margin-web.com" />
                <meta property="og:description" content="Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Nevers et Saint-Étienne. Nous vous aidons à développer votre présence en ligne avec des solutions web sur mesure, optimisées pour le SEO et le design responsive." />
                <meta property="og:image" content="./logo_margin_web_solutions.webp" />
                <meta property="og:site_name" content="Margin Web Solutions" />
            </Helmet>
        </>
    );
}