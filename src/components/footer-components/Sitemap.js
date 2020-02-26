import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar-div'>
				<section id='nav' className='navbar'>
					<div className='grid-wrapper'>
						{/* <div className='col-12'> */}
							<ul className='navbar-ul'>
								<li className='navbar-li'>
									<Link to='/'>Home</Link>
								</li>
								<li className='navbar-li'>
									<Link to='/history'>History</Link>
								</li>
							</ul>
						{/* </div> */}
					</div>
				</section>
			</div>
		);
	}
}

export default Navbar;
