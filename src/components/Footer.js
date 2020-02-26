import React from 'react';
import Sitemap from '../components/footer-components/Sitemap';
import Socials from '../components/footer-components/Socials';

class Footer extends React.Component {
	render() {
		return (
			<section id='footer'>
				<Sitemap />
				<Socials />
				<ul className='copyright'>
					<li>KJS &copy; 2020</li>
				</ul>
			</section>
		);
	}
}

export default Footer;
