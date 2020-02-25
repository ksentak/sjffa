import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function App() {
	return (
		<div>
			<Home />
		</div>

		// <Router>
		//   <div className="app">
		//     <Switch>
		//       <Route exact path="/" component={Home} />
		//       <Route exact path="/about" component={About} />
		//       <Route exact path="/products" component={Products} />
		//       <Route exact path="/info" component={Info} />
		//       <Route component={NotFound} />
		//     </Switch>
		//   </div>
		// </Router>
	);
}

export default App;
