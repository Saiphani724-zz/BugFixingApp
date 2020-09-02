import React, { Component , PropTypes} from 'react';
import './AskQuestion.scss';
import { Form, Button } from 'react-bootstrap';
import bulb from "./bestuu.png"
import RichTextEditor from 'react-rte';

export class AskQuestion extends Component {
  constructor(props) {
    super(props);
  
  }
    
  state = {
    value: RichTextEditor.createEmptyValue()
   }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using .toString() but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render() {
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
      };
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
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={this.state.value}
            onChange={this.onChange}
            className= 'custom-css-class'
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