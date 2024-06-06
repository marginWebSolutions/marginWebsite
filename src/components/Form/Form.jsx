import { useState } from 'react';
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

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: '',
				email: '',
				message: '',
			});
		}, 5000);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
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
			<div className="form__confirm">
				{isSubmitted && 'Merci pour votre message !'}
			</div>
			<ButtonOrLink isLink={false} type="submit">
				Envoyer un message !
			</ButtonOrLink>
		</form>
	);
}
