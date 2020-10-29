import React, {useState} from 'react';
import './Feedback.scss';

import {Form, Button} from 'react-bootstrap';
import {MDBContainer, MDBRating} from 'mdbreact';

import Chart from './Chart/Chart';


class Feedback extends React.Component {

    state = {
        "rating": null,
        "comment": ""
    }

    handleCommentChange = (e) => {
        console.log(this.state);
        this.setState({"comment": e.target.value});
    }

    handleRatingChange = (e) => {
        console.log(e);
        this.setState({"rating": e.target});
    }

    handleSubmit = () => {
        var flag = 1;
        if (this.state.comment === "") {
            flag = 0;
        }


        console.log(this.state);
        if (flag) {
            alert("Feedback Submitted");
        } else {
            alert("Please give both comments and rating");
        }

    }


    render() {


        return (
            <div class="feedbackpage">


                <h1>Your Feedback is very Valuable</h1>
                <div class="feedbackform">
                    <Form>
                        <Form.Group controlId="rating" className="rating">
                            <Form.Label class="formlabel">Rating</Form.Label>
                            <MDBContainer>
                                <MDBRating
                                    iconFaces
                                    fillClassName='black-text'
                                    iconRegular
                                    iconSize="2x"
                                />
                            </MDBContainer>
                        </Form.Group>

                        <Form.Group controlId="comments">
                            <Form.Label class="formlabel">Comments</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your comments" rows="5"
                                          onChange={this.handleCommentChange}/>
                        </Form.Group>

                        <Button variant="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>

                <div className="mychart">
                    <Chart/>
                </div>


            </div>
        );
    }
}

export default Feedback;