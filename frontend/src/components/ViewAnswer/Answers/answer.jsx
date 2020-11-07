import React, { Component } from 'react';
import cookie from 'react-cookies';

import {
	 MDBBtn,
	MDBCard,
	 MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBIcon
} from 'mdbreact';

class Answer extends Component {

	handleButtonClick = () => {
		
	}

	render() { 
		var colors = ['purple-gradient', 'aqua-gradient', 'peach-gradient', 'blue-gradient'];

		return (
			<div className="card" style={{width: "90%"}}>
                                        <div className="card-header">
                                            {this.props.userid}
                                        </div>
                                        <div className="card-body">

                                            <p className="card-text" style={{color:"black"}}>{this.props.full_answer}</p>
                                        </div>
                                        <div className="card-footer text-right">
                                            <MDBIcon icon="thumbs-up" className="m-3"/>{this.props.accp}
                                            <MDBIcon icon="comment" className="m-3"/>
                                            <MDBIcon icon="bars" className="m-3"/>
                                        </div>
                                    </div>
		)
	}
}

export default Answer;