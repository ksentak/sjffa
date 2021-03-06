import React, { Component } from 'react';

import Header from '../components/Header';
import Announcements from '../components/Announcements';
import Standings from '../components/Standings';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Header />
				<Announcements />
				<Standings />
				<Resources />
				<Footer />
			</div>
		);
	}
}

export default Home;
