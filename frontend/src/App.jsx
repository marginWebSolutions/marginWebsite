import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
import { PlanProvider } from './context/PlanContext';
import Favicon from './helmet/Favicon';
import JSONLD from './helmet/JSONLD';
import Meta from './helmet/Meta';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';
import Pricing from './pages/Pricing/Pricing';

export default function App() {
	return (
		<PlanProvider>
			<BrowserRouter>
				<div className="App">
					<div className="overlay"></div>
					<Favicon />
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
							{/* <Route
							path="/nos-realisations"
							element={<Realisation />}
						/> */}
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<Error />} />
							<Route
								path="/mentions-legales"
								element={<MentionsLegales />}
							/>
						</Routes>
					</main>
					<Footer />
					<BackToTop />
				</div>
			</BrowserRouter>
		</PlanProvider>
	);
}
