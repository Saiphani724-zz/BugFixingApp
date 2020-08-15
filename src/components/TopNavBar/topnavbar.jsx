import React from 'react';
import './topnavbar.css';

function TopNavBar() {
	return (
		<div className="HomePage">
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

					<div className="nav-link-wrapper">
						<a href="/signin">Sign In</a>
					</div>

					<div className="nav-link-wrapper">
						<a href="/temp">Temp Component</a>
					</div>

				</div>
			</div>

		</div>

	);
}

export default TopNavBar;
