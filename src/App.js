import React, { Component } from 'react';
import Login from './components/login/App';
import HomePage from './components/Home/homepage';
import TopNavBar from './components/TopNavBar/topnavbar';
import TempComponent from './components/TempComponent/tempcomponent';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const notdefined = () => {
	return (
		<div id="404">
			<h1 >Page Not Found</h1>
			<h2>Error 404 </h2>
		</div>
	)
}

class App extends Component {
	render = () => {
		return (
			<div>
				<TopNavBar />
				<BrowserRouter>
					<Switch>
						<Route path='/' component={HomePage} exact />
						<Route path='/signin' component={Login} />
						<Route path='/temp' component={TempComponent} />
						<Route component={notdefined} />
					</Switch>
				</BrowserRouter>
			</div>

		);
	}
}

export default App;
