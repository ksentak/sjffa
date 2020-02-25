import React, { Component } from 'react';
import API from'../../utils/API18';

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
				<h1>Hello Test</h1>
			</div>
		);
	}
}

export default OneEight;
