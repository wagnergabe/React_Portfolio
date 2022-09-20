import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
