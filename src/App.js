import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar, Home } from './components';

const App = () => {
	return (
		<div className='App'>
			{/* NavBar */}
			<NavBar />
			{/* Home */}
			<Home />
			{/* Search */} {/*  Filter  */}
			{/* Grid of Countries - Axios request to API */}
		</div>
	);
};

export default App;
