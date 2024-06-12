import { useEffect, useState } from 'react';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import Field, { FIELD_TYPES } from '../FormInputs/Field/Field';
import './Form.scss';

export default function Form() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleCaptcha = async () => {
		const captchaElement = document.querySelector('#g-recaptcha-response');
		if (!captchaElement.value) {
			setErrorMessage(
				'Veuillez cocher la case "Je ne suis pas un robot"'
			);
			return false;
		} else {
			setErrorMessage('');
		}

		const newFormData = { ...formData };
		if (captchaElement && captchaElement.value) {
			newFormData.captcha = captchaElement.value;
		}

		const response = await fetch('http://localhost:3000/api/captcha', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFormData),
		});

		const data = await response.json();
		return data.success;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const isCaptchaValid = await handleCaptcha();
		if (!isCaptchaValid) {
			return;
		}

		fetch('http://localhost:3000/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				setIsSubmitted(true);
				setTimeout(() => {
					setIsSubmitted(false);
					setFormData({
						name: '',
						email: '',
						message: '',
					});
					setErrorMessage('');
				}, 5000);
			});
	};

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://www.google.com/recaptcha/api.js';
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return (
		<form method="POST" className="form" onSubmit={handleSubmit}>
			<div className="form__headings">
				<h2 className="form__headings--title">À vous de jouer</h2>
				<p className="form__headings--text">
					Écrivez-nous pour toutes questions et demandes de devis !
				</p>
			</div>
			<div className="form__inputs">
				<Field
					label="Nom"
					name="name"
					id="name"
					value={formData.name}
					handleChange={handleChange}
					placeholder="Michel Dupont"
					required
				/>
			</div>
			<div className="form__inputs">
				<Field
					type={FIELD_TYPES.INPUT_EMAIL}
					label="Email"
					name="email"
					id="email"
					value={formData.email}
					handleChange={handleChange}
					placeholder="exemple@email.com"
					required
				/>
			</div>
			<div className="form__inputs">
				<Field
					type={FIELD_TYPES.TEXTAREA}
					label="Message"
					name="message"
					id="message"
					value={formData.message}
					handleChange={handleChange}
					placeholder="Veuillez taper votre message ici..."
					required
				/>
			</div>
			<label htmlFor="g-recaptcha-response" className="visually-hidden">
				Je ne suis pas un robot
			</label>
			<div
				className="form__recaptcha"
				data-sitekey="KEY HERE"
				id="g-recaptcha-response"
			></div>
			<div
				className={`${errorMessage ? 'form__error' : ''} ${
					isSubmitted ? 'form__confirm' : ''
				}`}
			>
				{errorMessage}
				{isSubmitted && 'Merci pour votre message !'}
			</div>
			<ButtonOrLink isLink={false} type="submit">
				Envoyer un message !
			</ButtonOrLink>
		</form>
	);
}
