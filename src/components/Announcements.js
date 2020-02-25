import React, { Component } from 'react';

import Harry from '../assets/images/harry-c.jpg';

class Announcements extends Component {
	render() {
		return (
			<div className='announcements-div'>
				<section id='one' className='main style1'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<header className='major'>
								<h2>Important Announcements</h2>
							</header>
							<p className='announcementText'>
								Congrats to Harry for winning the 2019 SJFFA Championship! He is
								now the first owner to have won multiple championships in the
								SJFFA. I hope everyone enjoys the long offseason and I hope you
								are excited as I am for the start up of the 2020 season which
								will begin with the draft in August.
							</p>
							<p className='announcementText'>-The Commish</p>
						</div>
						<div className='col-6'>
							<span className='image fit'>
								<img src={Harry} alt='Harry C' />
							</span>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Announcements;
