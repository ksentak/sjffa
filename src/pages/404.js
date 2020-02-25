import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
	return (
		<div className='notFound'>
			<Header />
			<div className='text-center mt-2'>
				<h1>404 Page Not Found</h1>
				<h1>
					<span role='img' aria-label='Face With Rolling Eyes Emoji'>
						🙄
					</span>
				</h1>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
