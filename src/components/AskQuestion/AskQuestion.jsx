import React, { Component } from 'react';
import './AskQuestion.scss';
import { Form, Button } from 'react-bootstrap';
import bulb from "./bestuu.png"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class AskQuestion extends Component {
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div class="imgQues">
				<img src={bulb} alt="image"></img>

			<div class="askQues">
				<Form >
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label><b>Title</b></Form.Label>
					<Form.Control type="email" placeholder="Enter the title here" />
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label><b>Question area</b></Form.Label>
					<CKEditor
						editor={ ClassicEditor }
						data=""
						onInit={ editor => {
							// You can store the "editor" and use when it is needed.
							console.log( 'Editor is ready to use!', editor );
						} }
						onChange={ ( event, editor ) => {
							const data = editor.getData();
							console.log( { event, editor, data } );
						} }
						onBlur={ ( event, editor ) => {
							console.log( 'Blur.', editor );
						} }
						onFocus={ ( event, editor ) => {
							console.log( 'Focus.', editor );
						} }
                	/>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Tags</Form.Label>
					<Form.Control type="email" placeholder="Your tags go here" />
				</Form.Group>
				<br></br>
				<Button variant="primary" type="submit">
					Post your Question
  				</Button>

			</Form>
			</div>
			</div>
			
		);
	}
}


export default AskQuestion;