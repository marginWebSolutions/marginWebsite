import Section from '../Section/Section';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.scss';

export default function Testimonials() {
	return (
		<Section className="testimonials">
			<div className="testimonials__content">
				<h2 className="testimonials__content--title">
					Ils parlent de nous
				</h2>
				<div className="testimonials__cards">
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc. Lorem ipsum dolor sit amet, Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="John Doe"
						name="John Doe"
						job="CEO, Company Inc."
					/>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, Sed et turpis at nunc. Lorem ipsum dolor sit amet, Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="Jane Doe"
						name="Jane Doe"
						job="CTO, Company Inc."
					/>
					<TestimonialCard
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis at nunc."
						avatarSrc="https://via.placeholder.com/100"
						avatarAlt="Michel Doe"
						name="Michel Doe"
						job="CFO, Company Inc."
					/>
				</div>
			</div>
		</Section>
	);
}
