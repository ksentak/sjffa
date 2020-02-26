import React, { Component } from 'react';
import API from '../../utils/API18';

import Eighteen from '../../assets/images/2018.png';

class OneEight extends Component {
	componentDidMount() {
		API.getAllDataOneEight()
			.then(res => {
				console.log(res);
			})
			.catch(function(err) {
				// handle error
				console.log(err);
			});
	}

	render() {
		return (
			<div className='one-eight-div'>
				<section className='main style1'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<header className='major'>
								<h2>2018 Season</h2>
							</header>
							<p className='announcementText'>
								Congrats to Harry for winning the 2019 SJFFA Championship! He is
								now the first owner to have won multiple championships in the
								SJFFA. I hope everyone enjoys the long offseason and I hope you
								are excited as I am for the start up of the 2020 season which
								will begin with the draft in August.
							</p>
						</div>
						<div className='col-6'>
							<span className='image fit'>
								<img src={Eighteen} alt='2018 results' />
							</span>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default OneEight;
