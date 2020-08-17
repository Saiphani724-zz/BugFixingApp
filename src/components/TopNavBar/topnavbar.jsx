import React from 'react';
import './topnavbar.css';
import cookies from 'react-cookies';

function logOut() {
	console.log(cookies.load('username'));
	cookies.remove('username');
}


function TopNavBar() {

	var username = cookies.load('username');

	return (
		<div className="TopNavbar">
			<div className="container">
				<div className="nav-wrapper">
					<div className="nav-link-wrapper">
						<a href="/">Home</a>
					</div>
					<div className="nav-link-wrapper">
						<a href="/about">About</a>
					</div>
					<div className="nav-link-wrapper">
						<a href="/dashboard">Dashboard</a>
					</div>

					<div className="nav-link-wrapper">
						<a href="/askquestion">Ask a Question</a>
					</div>

					{username !== undefined ? <div className="nav-link-wrapper">
							<a href="/profile" >Hi {username}!!</a>
						</div>
						 :
						<div className="nav-link-wrapper">
							<a href="/signin" >Sign In</a>
						</div>
					}
					{username !== undefined ? <div className="nav-link-wrapper">
							<a href="/" onClick={logOut} >Log Out</a>
						</div>
						 : null
					}
				</div>
			</div>

		</div>

	);
}

export default TopNavBar;
