import Navbar from '../../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import './Header.scss';

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
	},);

	return (
		<header className={`header${scrolled ? ' header--scrolled' : ''}`}>
			<div className="header__container">
				<div className="header__logo">
					<span className="header__logo--ma m">m</span>
					<span className="header__logo--ma a">a</span>
					RGIN
				</div>
				<Navbar />
			</div>
		</header>
	);
}