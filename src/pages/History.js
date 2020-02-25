import React, { Component } from 'react';

import Header from '../components/Header';
import OneEight from '../components/league-history/2018';
import OneSeven from '../components/league-history/2017';
import OneSix from '../components/league-history/2016';
import Footer from '../components/Footer';

class History extends Component {
	render() {
		return (
			<div className='History'>
				<Header />
				<OneEight />
				<OneSeven />
				<OneSix />
				<Footer />
			</div>
		);
	}
}

export default History;
