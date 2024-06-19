import { Helmet } from 'react-helmet';

export default function JSONLD () {
  const businessInfo = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Margin Web Solutions",
    "image": "./logo_margin_web_solutions.webp",
    "description": "Margin Web Solutions offre des services de création de sites internet personnalisés pour artisans et PME à Nevers et Saint-Étienne. Nous fournissons des solutions web sur mesure, optimisées pour le SEO et le design responsive, afin de développer votre présence en ligne.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 C rue Saint-Louis",
      "addressLocality": "Fourchambault",
      "postalCode": "58600",
      "addressRegion": "Nièvre, Bourgogne-Franche-Comté",
      "addressCountry": "FR"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 impasse Jean Guiton",
      "addressLocality": "Saint-Genest-Lerpt",
      "postalCode": "42530",
      "addressRegion": "Loire, Auvergne-Rhône-Alpes",
      "addressCountry": "FR"
    },
    "telephone": " +33 0664148826",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "areaServed": ["Nevers, Nièvre, Bourgogne-Franche-Comté, Saint-Etienne, Loire, Auvergne-Rhône-Alpes"],
    "url": "https://www.margin-web.com",
    // "sameAs": [
    //     "https://www.facebook.com/profile.php?id=100067318896608",
    //     "hhttps://www.facebook.com/profile.php?id=100057409511291",
    // ],
    // "review": {
    //     "@type": "Review",
    //     "reviewRating": {
    //         "@type": "Rating",
    //         "ratingValue": "5",
    //         "bestRating": "5"
    //     },
    //     "author": {
    //         "@type": "Person",
    //         "name": "Claire Leguet"
    //     },
    //     "reviewBody": "Cela fait deux ans que je monte à cheval avec Julie pour apprendre l’équitation western, après des années à fuir les clubs manquant de bienveillance voire de bientraitance. C’est une petite structure à taille humaine, respectueuse des chevaux comme des cavaliers. J’y ai depuis inscrit mon fils dès ses 5 ans aux cours de poney, où il va avec enthousiasme les mercredi ainsi qu’aux stages durant les vacances scolaires (jeux, balades). Julie est patiente et pédagogue avec tous, et sait s’adapter aux possibilités et besoins de chacun. Les cavaliers d’extérieurs ne sont pas en reste avec de belles balades à faire dans le Pilat, sur des chevaux au pied sûr."
    // }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(businessInfo)}
      </script>
    </Helmet>
  );
};