import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';
import Realisation from './pages/Realisation/Realisation';
import Meta from './helmet/Meta';
import JSONLD from './helmet/JSONLD';

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="overlay"></div>
				<Meta />
				<JSONLD />
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/a-propos" element={<About />} />
						<Route
							path="/services-et-tarifs"
							element={<Pricing />}
						/>
						<Route
							path="/nos-realisations"
							element={<Realisation />}
						/>
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
				<BackToTop />
			</div>
		</BrowserRouter>
	);
}
