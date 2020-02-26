import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/sitemap.css';

class Sitemap extends Component {
	render() {
		return (
			<div className='sitemap-div'>
				<section id='map' className='sitemap'>
					<div className='grid-wrapper'>
						<div className='col-12'>
							<ul className='sitemap-ul'>
								<li className='sitemap-li'>
									<Link to='/'>Home</Link>
								</li>
								<li className='sitemap-li'>
									<Link to='/history'>History</Link>
								</li>
								<li className='sitemap-li'>
									<Link to='/about'>About</Link>
								</li>
								<li className='sitemap-li'>
									<Link to='/history'>History</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Sitemap;
