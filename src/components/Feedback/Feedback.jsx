import React, { useState } from 'react';
import './Feedback.scss';

import { Form, Button } from 'react-bootstrap';
import { MDBContainer, MDBRating } from 'mdbreact';

function Feedback() {
	const [basic] = useState([
		{
			tooltip: 'Very Bad'
		},
		{
			tooltip: 'Poor'
		},
		{
			tooltip: 'Ok',
			choosed: true
		},
		{
			tooltip: 'Good'
		},
		{
			tooltip: 'Excellent'
		}
	]);


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
						<Form.Control as="textarea" placeholder="Enter your comments" rows="5" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
  				</Button>
				</Form>
			</div>
		</div>
	);
}

export default Feedback;