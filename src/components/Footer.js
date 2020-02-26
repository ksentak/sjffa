import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/sitemap.css';

class Footer extends React.Component {
	render() {
		return (
			<section id='footer'>
				<ul className='copyright'>
					<li>KJS &copy; 2020</li>
				</ul>
			</section>
		);
	}
}

export default Footer;
