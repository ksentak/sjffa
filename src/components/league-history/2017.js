import React, { Component } from 'react';
import API from '../../utils/API17';

import Seventeen from '../../assets/images/2017.png';

class OneSeven extends Component {
	state = {
		first: '',
		second: '',
		third: '',
	};

	componentDidMount() {
		API.getAllDataOneSeven()
			.then(res => {
				let firstPlace =
					res[0].teams[1].location + ' ' + res[0].teams[1].nickname;
				let secondPlace =
					res[0].teams[9].location + ' ' + res[0].teams[9].nickname;
				let thirdPlace =
					res[0].teams[3].location + ' ' + res[0].teams[3].nickname;

				this.setState({
					first: firstPlace,
					second: secondPlace,
					third: thirdPlace,
				});
			})
			.catch(function(err) {
				// handle error
				console.log(err);
			});
	}

	render() {
		return (
			<div className='one-seven-div'>
				<section className='main style1'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<header className='major'>
								<h2>2017 Season</h2>
							</header>
							<p className='announcementText'>
								<span>1st place: {this.state.first}</span> <br />
								<span>2nd place: {this.state.second}</span> <br />
								<span>3rd place: {this.state.third}</span> <br />
							</p>
						</div>
						<div className='col-6'>
							<span className='image fit'>
								<img src={Seventeen} alt='2017 results' />
							</span>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default OneSeven;
