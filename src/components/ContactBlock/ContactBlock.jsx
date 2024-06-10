import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactDetail from '../ContactDetail/ContactDetail';
import Form from '../Form/Form';
import Section from '../Section/Section';
import './ContactBlock.scss';

export default function ContactBlock() {
	return (
		<Section className="contact" isHero={true}>
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
								<ContactDetail
									icon={
										<FontAwesomeIcon
											icon={faEnvelope}
											className="infos__item--icon color-touch-svg"
										/>
									}
									title="Email"
									href="mailto:margin.webdev.com"
									text="margin.webdev@gmail.com"
								/>
								<ContactDetail
									icon={
										<FontAwesomeIcon
											icon={faPhone}
											className="infos__item--icon color-touch-svg"
										/>
									}
									title="Téléphone"
									href="tel:+33664148826"
									text="06 64 14 88 26"
								/>
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
