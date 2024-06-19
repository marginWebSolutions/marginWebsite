import { useEffect, useState } from 'react';
import ButtonDoubled from '../../../components/ButtonDoubled/ButtonDoubled';
import Section from '../../../layout/Section/Section';
import './Hero.scss';

export default function Hero() {
	const images = [
		{ src: './426shots_so.webp', alt: 'Description 1' },
		{ src: './764shots_so.webp', alt: 'Description 2' },
		{ src: './798shots_so.webp', alt: 'Description 3' },
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
						className={`hero__mockup--image ${
							fadeIn ? 'fade-in' : ''
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
				</div>
				<div className="hero__container">
					<div className="hero__content">
						<div className="hero__logo--container">
							<p className="hero__logo">
								<span className="hero__logo--ma m">m</span>
								<span className="hero__logo--ma a">a</span>
								RGIN
							</p>
							<p className="hero__logo--text">Web Solutions</p>
						</div>
						<h1 className="hero__title">
							Création et développement de sites Web
							professionnels à destination des PME et des artisans
							à Nevers et Saint-Etienne
						</h1>
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
