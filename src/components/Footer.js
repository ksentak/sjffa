import React from 'react';
import Sitemap from '../components/footer-components/Sitemap';
import Socials from '../components/footer-components/Socials';
import Copyright from '../components/footer-components/Copyright';

class Footer extends React.Component {
	render() {
		return (
			<section id='footer'>
				<Sitemap />
				<Socials />
				<Copyright />
			</section>
		);
	}
}

export default Footer;
