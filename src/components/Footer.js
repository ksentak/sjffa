import React from 'react';
import Sitemap from '../components/footer-components/Sitemap';

class Footer extends React.Component {
	render() {
		return (
			<section id='footer'>
				<Sitemap/>
				<ul className='copyright'>
					<li>KJS &copy; 2020</li>
				</ul>
			</section>
		);
	}
}

export default Footer;
