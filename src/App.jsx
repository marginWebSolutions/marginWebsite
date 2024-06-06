import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Pricing from './pages/Pricing/Pricing';

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/services-et-tarifs"
							element={<Pricing />}
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
