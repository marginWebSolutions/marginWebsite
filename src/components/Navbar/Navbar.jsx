import { useLocation } from 'react-router-dom';
import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.scss';

export default function Navbar() {
	const location = useLocation();

	return (
		<nav className="navbar">
			<ul className="navbar__list">
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
		</nav>
	);
}
