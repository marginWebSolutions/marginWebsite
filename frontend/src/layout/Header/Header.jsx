import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Navbar from './Navbar/Navbar';
import NavbarItem from './NavbarItem/NavbarItem';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	const updateMobileState = () => {
		setIsMobile(window.innerWidth < 640);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', updateMobileState);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateMobileState);
		};
	}, []);

	return (
		<header className={`header ${scrolled ? ' header--scrolled' : ''}`}>
			<div className="header__container">
				<Link to="/" reloadDocument={true}>
					<div
						className={`header__logo ${
							isMobile
								? scrolled
									? 'visible'
									: 'hidden'
								: 'visible'
						}`}
					>
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
