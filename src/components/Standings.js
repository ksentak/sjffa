import React, { Component } from 'react';

import DataTable from './data-components/Table';

class Standings extends Component {

	render() {
		return (
			<div className='standings-div'>
				<section id='two' className='main style2'>
					<div className='grid-wrapper'>
						<div className='col-6'>
							<DataTable/>
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
