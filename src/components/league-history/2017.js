import React, { Component } from 'react';
import API from '../../utils/API17';

class OneSeven extends Component {
	componentDidMount() {
		API.getAllDataOneSeven()
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
			<div className='one-seven-div'>
				<h1>Hello Test</h1>
			</div>
		);
	}
}

export default OneSeven;
