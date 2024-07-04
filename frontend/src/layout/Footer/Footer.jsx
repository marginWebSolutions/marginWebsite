import './Footer.scss';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				{`Copyright © ${new Date().getFullYear()} Margin Web Solutions.
				Tous droits réservés.`}
				<a href="/mentions-legales" className="footer__link">
					Mentions Légales
				</a>
			</div>
		</footer>
	);
}
