import React, { Component } from 'react';
import API from '../../utils/API16';

import Sixteen from '../../assets/images/2016.png';

class OneSix extends Component {
	state = {
		first: '',
		second: '',
		third: '',
	};

	componentDidMount() {
		API.getAllDataOneSix()
			.then(res => {
				let firstPlace =
					res[0].teams[8].location + ' ' + res[0].teams[8].nickname;
				let secondPlace =
					res[0].teams[3].location + ' ' + res[0].teams[3].nickname;
				let thirdPlace =
					res[0].teams[0].location + ' ' + res[0].teams[0].nickname;

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
			<div className='one-six-div'>
				<section className='main style1'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<header className='major'>
								<h2>2016 Season</h2>
							</header>
							<p className='announcementText'>
								<span>1st place: {this.state.first}</span> <br />
								<span>2nd place: {this.state.second}</span> <br />
								<span>3rd place: {this.state.third}</span> <br />
							</p>
						</div>
						<div className='col-6'>
							<span className='image fit'>
								<img src={Sixteen} alt='2016 results' />
							</span>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default OneSix;
