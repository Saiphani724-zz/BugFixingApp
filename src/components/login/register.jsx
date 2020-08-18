import React, { Component } from 'react';
import cookie from 'react-cookies';
// import { withRouter } from 'react-router-dom'

// import './Register.css';
export class Register extends Component {

	componentWillMount() {
		this.setState({ isRegisterSuccess: false })
		console.log(this.state);
	}
	state = {
		'username': '',
		'wrongUsernameFormat': false
	}

	handleUsernameChange = (e) => {
		this.setState({ 'username': e.target.value })
	}
	handlePasswordChange = (e) => {
		this.setState({ 'password': e.target.value })
	}
	handleRollNoChange = (e) => {
		this.setState({ 'rollNo': e.target.value })
	}
	handleEmailChange = (e) => {
		this.setState({ 'email': e.target.value })
	}
	handleMobileChange = (e) => {
		this.setState({ 'mobile': e.target.value })
	}



	checkRegex = () => {
		if (this.state.username !== "") {
			return true
		}
		else {
			this.setState({ 'wrongUsernameFormat': 1 })
			return false
		}
	}

	goToHomePage = () => {
		window.location.href = window.location.origin + '/'
	}

	handleRegister = () => {
		var ipaddress = cookie.load('ipaddress');
		fetch(`http://${ipaddress}:5000/register?username=${this.state.username}&&password=${this.state.password}&&email=${this.state.email}&&rollNo=${this.state.rollNo}&&mobile=${this.state.mobile}`, {
			method: 'GET',
		}).then(res => res.json())
			.then(data => this.setState(
				() => (data),
				function () {
					console.log(this.state);
					if (this.state.isRegisterSuccess) {
						window.location.href = window.location.origin + '/'
						alert('Successfully Registered\nLogin to use the App');
					}
					else {
						alert('User already exits\nTry a different Username');
					}
				}));
	}

	render() {

		const Button = () => (
			<button
				className="btn-md btn btn-success"
				id="registerButton"
				value="Register"
				onClick={
					(e) => {
						if (this.checkRegex()) {
							this.handleRegister()
						}
						else {
							console.log("Hello ", this.state);
						}
					}
				}
			>
				Register
			</button>
		)



		return (
			<div className="base-container register" >
				<br></br>
				<br></br>
				<div className="header">Register</div>
				<div className="content">

					<div className="form">
						<div className="form-group">
							<label for="username" >Username</label>
							<input type="username" id="username" placeholder="Enter your Username" onChange={this.handleUsernameChange} />
						</div>

						{
							this.state.wrongUsernameFormat ?
								<p className="indentErrorMsg">Wrong Username Format</p>
								: null
						}


						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" placeholder="Enter your Email" onChange={this.handleEmailChange} />
						</div>


						<div className="form-group">
							<label for="rollNo">Register Number</label>
							<input type="text" id="rollNo" placeholder="Enter your Roll No" onChange={this.handleRollNoChange} />
						</div>


						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" id="password" placeholder="Enter your Password" onChange={this.handlePasswordChange} />
						</div>

					</div>
				</div>
				
				<button type="button" className="btn mybtn" >
					Register
          			</button>
				    

			</div>

		);
	}
}

export default Register;