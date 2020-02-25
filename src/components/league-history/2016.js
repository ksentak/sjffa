import React, { Component } from 'react';
import API from '../../utils/API16';

class OneSix extends Component {
	componentDidMount() {
		API.getAllDataOneSix()
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
			<div className='one-six-div'>
				<h1>Hello Test</h1>
			</div>
		);
	}
}

export default OneSix;
