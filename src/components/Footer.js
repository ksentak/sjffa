import React from 'react';
import Navbar from './Navbar';

class Footer extends React.Component {
	render() {
		return (
			<section id='footer'>
				<Navbar/>
				<ul className='copyright'>
					<li>KJS &copy; 2020</li>
				</ul>
			</section>
		);
	}
}

export default Footer;
