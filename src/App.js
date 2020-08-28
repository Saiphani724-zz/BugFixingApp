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
import robo from "./Robo.png"

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const notdefined = () => {
	return (
		<div id="e404">
			<div class="error404">
				<ul class="errorpgu">
					<li><h2 class="a">Error 404 </h2></li>
					<br></br>
					<li><h1>&#123;&#123; Page Not Found &#125;&#125;</h1></li>
				</ul>
			</div>			
			
			<div class="robo">
				<img src={robo} alt="image"></img>
			</div>
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
