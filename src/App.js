import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';

import Home from './pages/Home';
import History from './pages/History';
import NotFound from './pages/404';

function App() {
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path="/history" component={History} />
		      {/* <Route exact path="/products" component={Products} /> */}
		      {/* <Route exact path="/info" component={Info} /> */}
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
