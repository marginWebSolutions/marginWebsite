import PropTypes from 'prop-types';
import './ClientsCard.scss';

export default function ClientsCard({ href, src, alt, text }) {
	return (
		<div className="clients__card">
			<a href={href} target="_blank" className="clients__card--link">
				<div
					className="clients__card--overlay"
				></div>
				<img src={src} alt={alt} className="clients__card--img" width={432} height={310}/>
			</a>
			<p className="clients__card--text">{text}</p>
		</div>
	);
}

ClientsCard.propTypes = {
	href: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	text: PropTypes.string,
};
