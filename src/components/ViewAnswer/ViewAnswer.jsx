import React from 'react';
import './ViewAnswer.css';
// import cookie from 'react-cookies';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBBox, MDBIcon } from 'mdbreact';

class ViewAnswer extends React.Component{
	state = {
    likes:0,
    comment:''

  }
  handlelikeclick = (e) => {
    e.preventDefault();
    this.setState({likes:this.state.likes + 1});
  }
  handleshareclick = (e) => {
    e.preventDefault()
    alert(" Link generated. Please share this link:" + window.location.href);
  }
  
render() {
	return (
		<div>
			<MDBCarousel>
			<MDBBox>
			<div className="container-fluid" style={{height:"100%"}}>
            
              <div id="left">
            <div className="card" style={{width:"90%"}}>
                <div className="card-header">
                  Date and User goes here
                </div>
                <div className="card-body">
                  <h4 className="card-title">Question Goes Here :</h4>
                  <p className="card-text">Question explanation goes here.</p>
                </div>
                <div className="card-footer text-right">
					<MDBIcon icon="thumbs-up" className="m-3" onClick={this.handlelikeclick} />{this.state.likes}
					<MDBIcon icon="comment" className="m-3" onClick={this.handleshareclick}/>
					<MDBIcon icon="bars" className="m-3" />
					
                  </div>
              </div>
              <div className="container" id="answers">
                <div className="card" style={{width:"90%"}}>
                    <div className="card-header">
                      Date and User goes here
                    </div>
                    <div className="card-body">
                      
                      <p className="card-text">Answer explanation goes here.</p>
                    </div>
                    <div className="card-footer text-right">
					<MDBIcon icon="thumbs-up" className="m-3" />
					<MDBIcon icon="comment" className="m-3"/>
					<MDBIcon icon="bars" className="m-3" />
                      </div>
                  </div>
                  <div className="card" style={{width:"90%"}}>
                    <div className="card-header">
                      Date and User goes here
                    </div>
                    <div className="card-body">
                      
                      <p className="card-text">Answer explanation goes here.</p>
                    </div>
                    <div className="card-footer text-right">
					<MDBIcon icon="thumbs-up" className="m-3" />
					<MDBIcon icon="comment" className="m-3"/>
					<MDBIcon icon="bars" className="m-3" />
                      </div>
                  </div>
              </div>
            </div>
            <div id="right" className="d-inline">
                <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        
                        <th>First Name</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>Mark</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Jacob</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Mark</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Jacob</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Mark</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Jacob</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Mark</td>
                        
                      </tr>
                      <tr>
                        
                        <td>Jacob</td>
                        
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
			</MDBBox>
			</MDBCarousel>
		</div>

	);
}
}
export default ViewAnswer;
