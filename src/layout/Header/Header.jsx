// import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import './Header.scss';

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<span className="header__logo--ma m">m</span>
				<span className="header__logo--ma a">a</span>
				RGIN
			</div>
			<Navbar />
		</header>
	);
}
