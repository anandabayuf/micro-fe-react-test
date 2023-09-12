import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import Header from 'usermanagement/Header';
// @ts-ignore
import Footer from 'usermanagement/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<div>HOST</div>
			<Footer />
		</div>
	);
}

export default App;
