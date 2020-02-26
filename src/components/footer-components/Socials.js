import React, { Component } from 'react';
import '../../assets/css/socials.css';

class Socials extends Component {
	render() {
		return (
			<div className='socials-div'>
				<section id='socials' className='socials'>
					<div className='grid-wrapper'>
						<div className='col-12'>
							<ul className='socials-ul'>
								<li className='socials-li'>
									<a href='https://fantasy.espn.com/football/league?leagueId=23879'>
										<i className="fas fa-football-ball"></i>
									</a>
								</li>
								<li className='socials-li'>
									<a href='https://sportsbook.draftkings.com/'>
										<i className="fas fa-crown"></i>									
									</a>
								</li>
								<li className='socials-li'>
									<a href='https://sportsbook.fanduel.com/sports'>
										<i className="fas fa-shield-alt"></i>									
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Socials;
