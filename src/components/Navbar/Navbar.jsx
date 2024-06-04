import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.scss';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<NavbarItem itemText="Accueil" href="/" />
				<NavbarItem itemText="Qui Sommes-Nous ?" href="/a-propos" />
				<NavbarItem
					itemText="Services et Tarifs"
					href="/services-et-tarifs"
				/>
				<NavbarItem
					itemText="Nos Réalisations"
					href="/nos-realisations"
				/>
				<NavbarItem
					itemText="Nous Contacter"
					href="/contact"
					className="btn btn__reverse"
				/>
			</ul>
		</nav>
	);
}
