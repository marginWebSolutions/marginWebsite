import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export default function Favicon({ basePath = '/favicon' }) {
	const favicons = [
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: `${basePath}/apple-touch-icon.png`,
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: `${basePath}/favicon-32x32.png`,
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: `${basePath}/favicon-16x16.png`,
		},
		{
			rel: 'manifest',
			href: `${basePath}/site.webmanifest`,
		},
	];

	return (
		<Helmet>
			{favicons.map((favicon, index) => (
				<link key={index} {...favicon} />
			))}
		</Helmet>
	);
}

Favicon.propTypes = {
	basePath: PropTypes.string,
};
