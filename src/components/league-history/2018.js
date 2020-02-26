import React, { Component } from 'react';
import API from '../../utils/API18';

import Eighteen from '../../assets/images/2018.png';

class OneEight extends Component {
	state = {
		first: '',
		second: '',
		third: '',
	};

	componentDidMount() {
		API.getAllDataOneEight()
			.then(res => {
				let firstPlace =
					res[0].teams[2].location + ' ' + res[0].teams[2].nickname;
				let secondPlace =
					res[0].teams[7].location + ' ' + res[0].teams[7].nickname;
				let thirdPlace =
					res[0].teams[5].location + ' ' + res[0].teams[5].nickname;

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
			<div className='one-eight-div'>
				<section className='main style1'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<header className='major'>
								<h2>2018 Season</h2>
							</header>
							<p className='announcementText'>
								<span>1st place: {this.state.first}</span> <br />
								<span>2nd place: {this.state.second}</span> <br />
								<span>3rd place: {this.state.third}</span> <br />
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
