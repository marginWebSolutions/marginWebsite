import Logo from '../../component/Logo/Logo';
import Navbar from '../../component/Navbar/Navbar';
import './Header.scss';

export default function Header() {
	return (
		<header className="header">
			<Logo />
			<Navbar />
		</header>
	);
}
