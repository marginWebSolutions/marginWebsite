import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from '../Form/Form';
import Section from '../Section/Section';
import './ContactBlock.scss';

export default function ContactBlock() {
	return (
		<Section className="contact">
			<div className="contact__content">
				<h1 className="contact__title">Prenons contact</h1>
				<div className="contact__container">
					<div className="contact__infos">
						<div className="contact__infos--headings">
							<h2 className="infos__headings--title">
								Faites le premier pas !
							</h2>
							<p className="infos__headings--text">
								Nous sommes impatients de collaborer avec vous
								et de vous aider à développer une présence en
								ligne réussie. <br />
								Contactez-nous dès aujourd’hui pour discuter de
								votre projet !
							</p>
							<div className="infos__content">
								<div className="infos__item">
									<FontAwesomeIcon
										icon={faEnvelope}
										className="infos__item--icon color-touch-svg"
									/>
									<h3 className="infos__item--title">
										Email
									</h3>
									<a
										href="mailto:margin.webdev.com"
										className="infos__item--text"
									>
										margin.webdev@gmail.com
									</a>
								</div>
								<div className="infos__item">
									<FontAwesomeIcon
										icon={faPhone}
										className="infos__item--icon color-touch-svg"
									/>
									<h3 className="infos__item--title">
										Téléphone
									</h3>
									<a
										href="tel:+33664148826"
										className="infos__item--text"
									>
										06 64 14 88 26
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="contact__form">
						<Form />
					</div>
				</div>
			</div>
		</Section>
	);
}
