import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useScrollAnimation from '../../../utils/hooks/useScrollAnimation';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.scss';

export default function Testimonials() {
	const titleRef = useRef(null);
	const cardRef = useRef(null);

	const [titleVisible, cardVisible] = useScrollAnimation([titleRef, cardRef]);

	return (
		<Section className="testimonials">
			<div className="testimonials__content" ref={titleRef}>
				<h2
					className={`testimonials__content--title ${
						titleVisible ? 'fadeIn__title' : ''
					}`}
				>
					Ils parlent de nous
				</h2>
				<div className="testimonials__cards" ref={cardRef}>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc. Lorem ipsum dolor sit amet, Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="John Doe"
						name="John Doe"
						job="CEO, Company Inc."
						className={`${cardVisible ? 'fadeIn__cards' : ''}`}
					/>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, Sed et turpis at nunc. Lorem ipsum dolor sit amet, Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="Jane Doe"
						name="Jane Doe"
						job="CTO, Company Inc."
						className={`${cardVisible ? 'fadeIn__cards' : ''}`}
					/>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="Michel Doe"
						name="Michel Doe"
						job="CFO, Company Inc."
						className={`${cardVisible ? 'fadeIn__cards' : ''}`}
					/>
				</div>
			</div>
		</Section>
	);
}
