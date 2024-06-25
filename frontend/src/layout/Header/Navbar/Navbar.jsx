import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.scss';

export default function Navbar() {
	const location = useLocation();
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	const handleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	return (
		<nav className="navbar">
			<div
				className={`navbar__container ${
					isBurgerMenuOpen ? 'open' : ''
				}`}
			>
				<div className="navbar__burger" onClick={handleBurgerMenu}>
					{isBurgerMenuOpen ? (
						<FontAwesomeIcon icon={faXmark} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</div>
				<ul
					className={`navbar__list ${isBurgerMenuOpen ? 'open' : ''}`}
				>
					<NavbarItem itemText="Accueil" href="/" />
					<NavbarItem itemText="Qui Sommes-Nous ?" href="/a-propos" />
					<NavbarItem
						itemText="Services et Tarifs"
						href="/services-et-tarifs"
					/>
					{/* <NavbarItem
						itemText="Nos Réalisations"
						href="/nos-realisations"
					/> */}
					<NavbarItem
						itemText="Nous Contacter"
						href="/contact"
						className={`btn ${
							location.pathname === '/contact'
								? 'btn__default'
								: 'btn__reverse'
						}`}
					/>
				</ul>
			</div>
		</nav>
	);
}
