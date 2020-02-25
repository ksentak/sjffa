import React, { Component } from 'react';

import API from '../utils/API';

class Standings extends Component {
	componentDidMount() {
		API.getAllData()
			.then(res => {
				// console.log(res);
				let teams = [];

				for (let i = 0; i < res.teams.length; i++) {
					let teamName = res.teams[i].location + ' ' + res.teams[i].nickname;
					let teamWins = res.teams[i].record.overall.wins;
					let teamLosses = res.teams[i].record.overall.losses;
					let teamRecord = teamWins + '-' + teamLosses;
					let pointsExact = res.teams[i].points;
					let teamPoints = pointsExact.toFixed(2);

					let addTeam = {
						name: teamName,
						wins: teamWins,
						losses: teamLosses,
						record: teamRecord,
						points: teamPoints,
					};

					teams.push(addTeam);
				}

				console.log(teams);
			})
			.catch(function(err) {
				// handle error
				console.log(err);
			});
	}

	render() {
		return (
			<div className='standings-div'>
				<section id='two' className='main style2'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<ul className='major-icons'>
								<li>
									<span className='icon style1 major fa-code'></span>
								</li>
								<li>
									<span className='icon style2 major fa-bolt'></span>
								</li>
								<li>
									<span className='icon style3 major fa-camera-retro'></span>
								</li>
								<li>
									<span className='icon style4 major fa-cog'></span>
								</li>
								<li>
									<span className='icon style5 major fa-desktop'></span>
								</li>
								<li>
									<span className='icon style6 major fa-calendar'></span>
								</li>
							</ul>
						</div>
						<div className='col-6'>
							<header className='major'>
								<h2>Scores and Standings</h2>
							</header>
							<p>
								Adipiscing a commodo ante nunc accumsan interdum mi ante
								adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
								nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
								Adipiscing id accumsan adipiscing ipsum.
							</p>
							<p>
								Blandit faucibus proin. Ac aliquam integer adipiscing enim non
								praesent vis commodo nunc phasellus cubilia ac risus accumsan.
								Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
								varius accumsan lobortis. Blandit ante aliquam lacinia lorem
								lobortis semper morbi col faucibus vitae integer placerat
								accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
								curae consequat feugiat etiam dolore.
							</p>
							<p>
								Adipiscing a commodo ante nunc accumsan interdum mi ante
								adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
								nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
								Adipiscing id accumsan adipiscing ipsum.
							</p>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Standings;
