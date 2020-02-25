import React, { Component } from 'react';

import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';

class Resources extends Component {
	render() {
		return (
			<div className='resources-div'>
				<section id='three' className='main style1 special resources'>
					<div className='grid-wrapper'>
						<div className='col-12'>
							<header className='major'>
								<h2>Resources</h2>
							</header>
						</div>

						<div className='col-6'>
							<span className='image fit'>
								<img src={pic02} alt='' />
							</span>
							<h3 className='resourceText'>ESPN League Home</h3>
							<p className='resourceText'>
								This is a quick link to the SJFFA league home page on ESPN's
								Fantasy Football site.
							</p>
							<ul className='actions'>
								<li>
									<a href='#' className='button'>
										Go to League Home
									</a>
								</li>
							</ul>
						</div>
						<div className='col-6'>
							<span className='image fit'>
								<img src={pic03} alt='' />
							</span>
							<h3 className='resourceText'>League History</h3>
							<p className='resourceText'>
								Brings you to the League History page where you can view stats
								from previous years.
							</p>
							<ul className='actions'>
								<li>
									<a href='/history' className='button'>
										League History
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Resources;
