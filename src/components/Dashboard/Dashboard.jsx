import React from 'react';
import './Dashboard.scss';
import cookie from 'react-cookies';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';




import { 
	// MDBBtn, 
	MDBCard, 
	// MDBCardBody, 
	MDBCardImage, 
	// MDBCardTitle, 
	// MDBCardText,
	 MDBRow,
	  MDBCol,
	//    MDBIcon 
	} from 'mdbreact';



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
			<div className="dashboard">
				{this.state.username !== undefined ?
					<div>
						<div>

							<h1 > Questions </h1>

							<FormControlLabel className="headeritem"
								control={
									<Checkbox
										checked={this.state.checkedB}
										onChange=""
										name="checkedB"
										color="Secondary"
									/>
								}
							/>

							<h4 className="headeritem">	Your Questions</h4>
						</div>
						<MDBRow className="mycard">
							<MDBCol>
								<MDBCard >
									<MDBCardImage
										className='purple-gradient'
										tag='div'>
										<a href="/viewanswer"><h5 className="question">Worth to use Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf, layout_constraintStart_toStartOf</h5></a>
									</MDBCardImage>
									<div className="body">
										<span className="details">
											<span class="details_item text-center">
												<h6>0</h6>
												<h6>Votes</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Answers</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Views</h6>
											</span>
										</span>
										<span className="tags">
											<span className="tagtag">Tags: </span>
											<span className="tag">Javascript</span>
											<span className="tag">webdev</span>
											<span className="tag">react</span>
											<span className="tag">frontend</span>
										</span>
									</div>
								</MDBCard>
							</MDBCol>
						</MDBRow>

						<MDBRow className="mycard">
							<MDBCol>
								<MDBCard >
									<MDBCardImage
										className='view blue-gradient'
										tag='div'>
										<a href="/viewanswer"><h5 className="question">Worth to use Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf, layout_constraintStart_toStartOf</h5></a>
									</MDBCardImage>
									<div className="body">
										<span className="details">
											<span class="details_item text-center">
												<h6>0</h6>
												<h6>Votes</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Answers</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Views</h6>
											</span>
										</span>
										<span className="tags">
											<span className="tagtag">Tags: </span>
											<span className="tag">Javascript</span>
											<span className="tag">webdev</span>
											<span className="tag">react</span>
											<span className="tag">frontend</span>
										</span>
									</div>
								</MDBCard>
							</MDBCol>
						</MDBRow>

						<MDBRow className="mycard">
							<MDBCol>
								<MDBCard >
									<MDBCardImage
										className='view aqua-gradient'
										tag='div'>
										<a href="/viewanswer"><h5 className="question">Worth to use Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf, layout_constraintStart_toStartOf</h5></a>
									</MDBCardImage>
									<div className="body">
										<span className="details">
											<span class="details_item text-center">
												<h6>0</h6>
												<h6>Votes</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Answers</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Views</h6>
											</span>
										</span>
										<span className="tags">
											<span className="tagtag">Tags: </span>
											<span className="tag">Javascript</span>
											<span className="tag">webdev</span>
											<span className="tag">react</span>
											<span className="tag">frontend</span>
										</span>
									</div>
								</MDBCard>
							</MDBCol>
						</MDBRow>


						<MDBRow className="mycard">
							<MDBCol>
								<MDBCard >
									<MDBCardImage
										className='view peach-gradient'
										tag='div'>
										<a href="/viewanswer"><h5 className="question">Worth to use Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf, layout_constraintStart_toStartOf</h5></a>
									</MDBCardImage>
									<div className="body">
										<span className="details">
											<span class="details_item text-center">
												<h6>0</h6>
												<h6>Votes</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Answers</h6>
											</span>
											<span class="details_item">
												<h6>0</h6>
												<h6>Views</h6>
											</span>
										</span>
										<span className="tags">
											<span className="tagtag">Tags: </span>
											<span className="tag">Javascript</span>
											<span className="tag">webdev</span>
											<span className="tag">react</span>
											<span className="tag">frontend</span>
										</span>
									</div>
								</MDBCard>
							</MDBCol>
						</MDBRow>
						<br></br>
						<br></br>
					</div>

					: <div>
						<h1>Please Login!!</h1>
					</div>
				}
			</div>
		);
	}

}

export default Dashboard;
