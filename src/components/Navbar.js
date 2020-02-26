import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar-div'>
				<section id='nav' className='navbar'>
					<div className='grid-wrapper'>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/history'>History</Link>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}

export default Navbar;
