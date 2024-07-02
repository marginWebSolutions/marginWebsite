import { useEffect, useState } from 'react';
import ButtonDoubled from '../../../components/ButtonDoubled/ButtonDoubled';
import Section from '../../../layout/Section/Section';
import './Hero.scss';

export default function Hero() {
	const images = [
		{
			src: './margin_web_solutions_navigation_site_Internet.webp',
			alt: 'Navigation fluide sur un site Internet',
		},
		{
			src: './margin_web_solutions_maquettage.webp',
			alt: "Création de maquette et wireframe d'un site Web",
		},
		{
			src: './margin_web_solutions_developpement_site_web.webp',
			alt: 'développement de site web pour PME et Artisans à Nevers et Saint-Etienne',
		},
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fadeIn, setFadeIn] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeIn(false);
			setTimeout(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % images.length
				);
				setFadeIn(true);
			}, 300);
		}, 8000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<>
			<Section className="hero" isHero={true}>
				<div className="hero__mockup">
					<img
						className={`hero__mockup--image ${fadeIn ? 'fade-in' : ''
							}`}
						src={images[currentImageIndex].src}
						alt={images[currentImageIndex].alt}
						width={1920}
						height={1080}
					/>
					<img
						className="hero__mockup--mask"
						src="./margin_web_solutions_mockupmask.webp"
						alt="mask"
						width={1920}
						height={1080}
					/>
					<img
						className="hero__pictos--stars"
						src="./deux étoiles.png"
						alt="mask"
					/>
					{/* <img
						className="hero__pictos--star"
						src="./étoile.png"
						alt="mask"
					/> */}
					{/* <img
						className="hero__pictos--rocket"
						src="./fusée.png"
						alt="mask"
					/>
					<img
						className="hero__pictos--heart"
						src="./coeur.png"
						alt="mask"
					/> */}
				</div>
				<div className="hero__container">
					<div className="hero__content">
						<h1 className="hero__title">
							Création et développement de sites Web
							professionnels à destination des PME et des artisans
							à Saint-Etienne et Nevers
						</h1>
						<div className="hero__logo--container">
							<span className="hero__logo">
								<span className="hero__logo--ma m">m</span>
								<span className="hero__logo--ma a">a</span>
								RGIN
							</span>
							<span className="hero__logo--text">
								Web{' '}
								<span className="hero__logo--text gradient">
									Solutions
								</span>
							</span>
						</div>

						<ButtonDoubled
							btnFirst={'Nous Contacter'}
							hrefFirst={'/contact'}
							btnSecond={'Nos Services et Tarifs'}
							hrefSecond={'/services-et-tarifs'}
						/>
					</div>
				</div>
			</Section>
		</>
	);
}
