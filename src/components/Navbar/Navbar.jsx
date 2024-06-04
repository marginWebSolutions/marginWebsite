import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.scss';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<NavbarItem itemText="Accueil" href="/" />
				<NavbarItem itemText="Qui Sommes-Nous ?" href="/about" />
				<NavbarItem itemText="Services et Tarifs" href="/pricing" />
				<NavbarItem itemText="Nos Réalisations" href="/projects" />
				<NavbarItem
					itemText="Contact"
					href="/contact"
					className="btn btn__reverse"
				/>
			</ul>
		</nav>
	);
}
