import React from 'react';
import logo from './cool-background.png';
import './homepage.css';

function HomePage() {
	return (
		<div className="HomePage">
			<div className="cont">
				<h1 style={{ textAlign: 'left' }}>
					Unable to fix the code</h1>
			</div>
			<div className="conte">

				<h1 style={{ textAlign: 'center' }}> Errors in the code</h1>
			</div>
			<div className="contr">




				<h1 style={{ textAlign: 'right' }}>
					You are lucky
        </h1>
			</div>
			<div className="contd">
				<marquee behavior="scroll" direction="up">

					<h1 style={{ textAlign: 'center' }}>
						We are here to help you
    </h1> </marquee>
			</div>
		</div >
	);
}

export default HomePage;
