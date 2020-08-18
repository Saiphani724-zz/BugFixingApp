import React, { Component } from 'react';
import Login from './components/login/SignInApp';
import HomePage from './components/Home/homepage';
import TopNavBar from './components/TopNavBar/topnavbar';

import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import AskQuestion from './components/AskQuestion/AskQuestion';
import PostAnswer from './components/PostAnswer/PostAnswer';
import ViewAnswer from './components/ViewAnswer/ViewAnswer';
import Profile from './components/Profile/Profile';
import Feedback from './components/Feedback/Feedback';
import './App.css';

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
						<Route path='/about' component={About} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/askquestion' component={AskQuestion} />
						<Route path='/postanswer' component={PostAnswer} />
						<Route path='/viewanswer' component={ViewAnswer} />
						<Route path='/profile' component={Profile} />
						<Route path='/feedback' component={Feedback} />

						<Route component={notdefined} />
					</Switch>
				</BrowserRouter>
			</div>

		);
	}
}

export default App;
