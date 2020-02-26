import React, { Component } from 'react';
import '../../assets/css/copyright.css';

class Copyright extends Component {
	render() {
		return (
			<div className='socials-div'>
				<section id='socials' className='socials'>
					<div className='grid-wrapper'>
						<div className='col-12'>
							<ul className='copy-ul'>
								<li className='copy-li'>KJS &copy; 2020</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Copyright;
