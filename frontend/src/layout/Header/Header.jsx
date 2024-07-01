import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Navbar from './Navbar/Navbar';
import NavbarItem from './NavbarItem/NavbarItem';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<header className={`header${scrolled ? ' header--scrolled' : ''}`}>
			<div className="header__container">
				<Link to="/" reloadDocument={true}>
					<div className="header__logo">
						<span className="header__logo--ma m">m</span>
						<span className="header__logo--ma a">a</span>
						RGIN
					</div>
				</Link>
				<ul className="header__CTA--small-device">
					<NavbarItem
						itemText="Nous Contacter"
						href="/contact"
						className={`btn ${
							location.pathname === '/contact'
								? 'btn__reverse'
								: 'btn__default'
						}`}
					/>
				</ul>
				<Navbar />
			</div>
		</header>
	);
}
