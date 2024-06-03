import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import './Header.scss';

export default function Header() {
	return (
		<header className="header">
			<Logo />
			<Navbar />
		</header>
	);
}
