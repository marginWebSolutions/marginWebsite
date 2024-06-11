import React, { useState, useEffect } from 'react';
import Section from '../../components/Section/Section';
import ButtonDoubled from '../ButtonDoubled/ButtonDoubled';
import './Hero.scss';

export default function Hero() {
    const images = [
        { src: './484shots_so.png', alt: 'Description 1' },
        { src: './288shots_so.png', alt: 'Description 2' },
        { src: './692shots_so.png', alt: 'Description 3' }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadeIn(true);
            }, 1000);
        }, 8000); 

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <Section className="hero" isHero={true}>
                <div className='hero__mockup'>
                    <img
                        className={`hero__mockup--image ${fadeIn ? 'fade-in' : ''}`}
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
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