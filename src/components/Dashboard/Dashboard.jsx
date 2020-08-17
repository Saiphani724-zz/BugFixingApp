import React from 'react';
import './Dashboard.css';
import cookie from 'react-cookies';
import SignIn from '../login/SignInApp';
class Dashboard extends React.Component {

	state = {

	}
	componentDidMount() {
		var username = cookie.load('username');
		if (username === undefined) {
			window.location.href = '/signin';
		}
		else {
			this.setState({ 'username': username });
		}
	}

	render() {

		return (
			<div>
				{this.state.username != undefined ?
					<div>
						<h1>Hello {this.state.username} !!</h1>
					</div>
					: <div>
						<h1>Please Login!!</h1>
					</div>}
			</div>
		);
	}

}

export default Dashboard;
