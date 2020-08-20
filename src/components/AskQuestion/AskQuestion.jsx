import React, { Component } from 'react';
import './AskQuestion.css';

export class AskQuestion extends Component {
	constructor(props) {
	  super(props);
	  this.state = {value: ''};  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	//   this.setState({value: event.target.value});
	}

	handleQuesChange(event) {
		  this.setState({value: event.target.value});
		  console.log(event.target.value);
		}
  
	handleSubmit(event) {
	  alert('A name was submitted: ' + this.state.value);
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>

		  <div class="title">
            <label>
			<h5><b>Title:</b></h5>			
			<input type="text" value={this.state.value} />
			</label>
		  </div>

		  <br></br>

		  <div class="QuesArea">
			<label>
				<h5><b>Your Question</b></h5>
				<textarea>
					<input type="textarea" lines="3" placeholder = "Your Question Goes Here" onChange={this.handleQuesChange}/>
				</textarea>				
			</label>
		  </div>

	      <br></br>
		  <div class="title">
            <label>
			<h5><b>Tags:</b></h5>			
			<input type="text" placeholder = "add tags" value={this.state.value} />
			</label>
		  </div>

		  <div>
		  	<input type="submit" value="Post your Question" />
		  </div>

		</form>
	  );
	}
  }


  export default AskQuestion;