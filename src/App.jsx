import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home';

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}
