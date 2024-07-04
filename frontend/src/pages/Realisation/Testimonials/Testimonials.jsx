import { useRef } from 'react';
import Section from '../../../layout/Section/Section';
import useAnimation from '../../../utils/hooks/useAnimation';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.scss';

export default function Testimonials() {
	const titleRef = useRef(null);
	const firstCardRef = useRef(null);
	const secondCardRef = useRef(null);
	const thirdCardRef = useRef(null);

	return (
		<Section className="testimonials">
			<div className="testimonials__content">
				<h2
					className={`testimonials__content--title ${
						useAnimation(titleRef, 'fadeIn__title') || ''
					}`}
					ref={titleRef}
				>
					Ils parlent de nous
				</h2>
				<div className="testimonials__cards">
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc. Lorem ipsum dolor sit amet, Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="John Doe"
						name="John Doe"
						job="CEO, Company Inc."
						className={`${
							useAnimation(firstCardRef, 'fadeIn__cards') || ''
						}`}
						ref={firstCardRef}
					/>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, Sed et turpis at nunc. Lorem ipsum dolor sit amet, Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="Jane Doe"
						name="Jane Doe"
						job="CTO, Company Inc."
						className={`${
							useAnimation(secondCardRef, 'fadeIn__cards') || ''
						}`}
						ref={secondCardRef}
					/>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="Michel Doe"
						name="Michel Doe"
						job="CFO, Company Inc."
						className={`${
							useAnimation(thirdCardRef, 'fadeIn__cards') || ''
						}`}
						ref={thirdCardRef}
					/>
				</div>
			</div>
		</Section>
	);
}
