import React from 'react';
import './Dashboard.scss';
import cookie from 'react-cookies';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import {
    MDBBtn,
    MDBCard,
    // MDBCardBody,
    MDBCardImage,
    // MDBCardTitle,
    // MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdbreact';


class Dashboard extends React.Component {

    state = {
        'search': ""
    }

    componentDidMount() {
        var username = cookie.load('username');
        if (username === undefined) {
            window.location.href = '/signin';
        } else {
            this.setState({'username': username});
        }
    }

    onSearchInputChange = (e) => {
        this.setState({'search': e.target.value})
    }

    handleSearch = () => {
        if (this.state.search === "") {
            alert("Please Enter Something to search!!")
        }
    }

    render() {
        return (
            <div className="dashboard">
                {this.state.username !== undefined ?
                    <div>
                        <div>

                            <h1> Questions </h1>

                            <MDBCol md="11" className="searchbar">
                                <div className="input-group md-form form-sm form-1 pl-0">
                                    <div className="input-group-prepend">
										<span className="input-group-text purple lighten-3" id="basic-text1">
											<MDBIcon className="text-white" icon="search"/>
										</span>
                                    </div>
                                    <input className="form-control my-0 py-1" type="text" placeholder="Search"
                                           aria-label="Search" onChange={this.onSearchInputChange}/>
                                    <MDBBtn color="unique" rounded size="md" className="mr-auto searchbutton"
                                            onClick={this.handleSearch}>
                                        Search
                                    </MDBBtn>
                                </div>

                            </MDBCol>


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

                            <h4 className="headeritem"> Your Questions</h4>
                        </div>
                        <MDBRow className="mycard">
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage
                                        className='purple-gradient'
                                        tag='div'>
                                        <a href="/viewanswer"><h5 className="question">Worth to use
                                            Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf,
                                            layout_constraintStart_toStartOf</h5></a>
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
                                <MDBCard>
                                    <MDBCardImage
                                        className='view blue-gradient'
                                        tag='div'>
                                        <a href="/viewanswer"><h5 className="question">Worth to use
                                            Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf,
                                            layout_constraintStart_toStartOf</h5></a>
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
                                <MDBCard>
                                    <MDBCardImage
                                        className='view aqua-gradient'
                                        tag='div'>
                                        <a href="/viewanswer"><h5 className="question">Worth to use
                                            Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf,
                                            layout_constraintStart_toStartOf</h5></a>
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
                                <MDBCard>
                                    <MDBCardImage
                                        className='view peach-gradient'
                                        tag='div'>
                                        <a href="/viewanswer"><h5 className="question">Worth to use
                                            Layout_constraintEnd_toEnd, layout_constraintLeft_toLeftOf,
                                            layout_constraintStart_toStartOf</h5></a>
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
