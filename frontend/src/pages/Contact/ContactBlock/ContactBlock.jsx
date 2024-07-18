import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Section from '../../../layout/Section/Section';
import ContactDetail from '../ContactDetail/ContactDetail';
import Form from '../Form/Form';
import './ContactBlock.scss';

export default function ContactBlock() {
	return (
		<Section className="contact" isHero={true}>
			<div className="contact__content">
				<div className="contact__container">
					<div className="contact__infos">
						<div className="contact__infos--headings">
							<h1 className="infos__headings--title">
								Faites le premier pas !
							</h1>
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
									href="mailto:margin.webdev@gmail.com"
									text="margin.webdev@gmail.com"
								/>
								<ContactDetail
									icon={
										<FontAwesomeIcon
											icon={faPhone}
											className="infos__item--icon color-touch-svg"
										/>
									}
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
