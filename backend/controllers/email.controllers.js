const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

// @desc     Send an email
// @route    POST /api/contact
// @access   Public
exports.forwardEmail = (req, res) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	});

	const MailGenerator = new Mailgen({
		theme: 'cerberus',
		product: {
			name: 'Margin Web Solutions',
			link: 'https://margin-web.com',
			copyright: `Copyright © ${new Date().getFullYear()} Margin Web Solutions. All rights reserved.`,
		},
	});

	const email = {
		body: {
			greeting: 'Bonjour',
			signature: 'Cordialement',
			name: 'Margin Web Solutions',
			intro: 'Vous avez reçu un email de la part de ' + req.body.name,
			action: {
				instructions: `${req.body.message}`,
				button: [
					{
						color: '#03b9bc',
						text: `Répondre à ${req.body.name}`,
						link: 'mailto:' + req.body.email,
					},
				],
			},
		},
	};

	let emailBody = MailGenerator.generate(email);
	let emailText = MailGenerator.generatePlaintext(email);

	const mailOptions = {
		from: req.body.email,
		to: process.env.MAIL_USERNAME,
		subject: `Nouveau message de ${req.body.name}`,
		html: emailBody || emailText,
	};

	transporter.sendMail(mailOptions, (error, data) => {
		if (error) {
			res.status(500).send({
				message: "Erreur lors de l'envoi du mail",
			});
		} else {
			res.status(200).send({ message: 'Mail envoyé avec succès' });
		}
	});
};
