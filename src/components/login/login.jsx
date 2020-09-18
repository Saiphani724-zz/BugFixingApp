import React from "react";
import loginImg from "./login.svg";
import cookie from 'react-cookies';

export class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		}
	}

	onUsernameChanged = (e) => {
		this.setState({ username: e.target.value })
		console.log(this.state.username);
	}

	onPasswordChanged = (e) => {
		this.setState({ password: e.target.value })
	}

	verifyLogin = (username, password) => {
		var db = [
			{
				'username': "psp",
				'password': "1919"
			},
			{
				'username': "sachmo",
				'password': "sachipo"
			}
		]

		for (var i in db) {
			if (db[i]['username'] === username && db[i]['password'] === password) return true;
		}
		alert("User Details not found!!")
		return false;
	}

	handleLogin = () => {
		console.log("Clicked");
		if (this.verifyLogin(this.state.username, this.state.password)) {
			cookie.save('username', this.state.username)
			window.location.href = '/dashboard';
		}
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Login</div>
				<div className="content">
					<div className="form">
						<div className="image">
							<img src={loginImg} className="regimg" alt= "" />
						</div>
						<br></br>

						<div className="form-group">
							<label htmlFor="regno">Register Number</label>
							<input type="text" name="regno" placeholder="register number" onChange={this.onUsernameChanged} />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" placeholder="password" onChange={this.onPasswordChanged} />
						</div>
					</div>
				</div>
				<div className="footer">
					<button type="button" className="btn" onClick={this.handleLogin}>
						Login
          				</button>
				</div>
			</div>
		);
	}
}
