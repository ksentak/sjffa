import React, { Component } from 'react';
import '../assets/scss/main.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Header />
				<Footer />
			</div>
		);
	}
}

export default Home;
