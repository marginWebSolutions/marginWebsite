import './Footer.scss';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				{`Copyright © ${new Date().getFullYear()} Margin Web Solutions.
				All rights reserved.`}
			</div>
		</footer>
	);
}
