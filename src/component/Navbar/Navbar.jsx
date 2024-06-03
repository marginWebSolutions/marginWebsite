import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.scss';

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<NavbarItem text="Accueil" href="/" />
				<NavbarItem text="Qui Sommes-Nous ?" href="/about" />
				<NavbarItem text="Services et Tarifs" href="/pricing" />
				<NavbarItem text="Nos Réalisations" href="/projects" />
			</ul>
		</nav>
	);
}
