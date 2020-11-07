import React from 'react';
import './ViewAnswer.css';
import cookie from 'react-cookies';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBCarousel, MDBBox, MDBIcon} from 'mdbreact';
import Answer from './Answers/answer.jsx';
class ViewAnswer extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        likes: 0,
        comment: '',
        answers: [],
        ques_id: "anonymous"


    }
    }
    componentDidMount() {
        var ques_id = cookie.load('Ques_id');
        if(ques_id=== undefined) {
            window.location.href = '/dashboard';
        }else {

            //Code for fetching answer

            let self = this;
            self.setState({ques_id: ques_id })
            const chunks = [];
            var result = " not updated";
            var base_url = cookie.load('base_url');
    
            fetch(`${base_url}/viewAnswer`, {
                method: 'POST',
                headers: {
                    
                    
                },
                body: JSON.stringify({"Ques_id":ques_id})
            }).then(function (response) {
    
                const reader = response.body.getReader();
    
                reader.read().then(({ value, done }) => {
                    var string = new TextDecoder("utf-8").decode(value);
                    //console.log(string);
                    chunks.push(string);
                }).then(() => {
                    console.log("chunks:" + chunks);
                    if(chunks.length > 0){
                        result = JSON.parse(chunks);
                        console.log("result:" + JSON.stringify(result[0]));
                    }
                }).then(() => {
                    self.setState({ answers: result });
                    
                    console.log(self.state.answers);
                }
                );
            })


        }
    }
    handlelikeclick = (e) => {
        e.preventDefault();
        this.setState({likes: this.state.likes + 1});
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
                        <div className="container-fluid" style={{height: "100%"}}>

                            <div id="left">

                                {this.state.answers.length <= 0?<h1>Error Fetching question</h1>:
                                    <div className="card" style={{width: "90%"}}>
                                    <div className="card-header">
                                        {this.state.answers[0].creator_id}
                                    </div>
                                    <div className="card-body">
                                
                                        <h5 className="card-title">{this.state.answers[0].question}</h5>
                                    </div>
                                    <div className="card-footer text-right">
                                        <MDBIcon icon="thumbs-up" className="m-3"
                                                onClick={this.handlelikeclick}/>{this.state.likes}
                                        <MDBIcon icon="comment" className="m-3" onClick={this.handleshareclick}/>
                                        <MDBIcon icon="bars" className="m-3"/>

                                    </div>
                                </div>
                                
                                
                                }
     
                                <div className="container" id="answers">
                                    {this.state.answers.length == 0?<h1>No Answers Yet</h1>:
                                        this.state.answers.map(ans=> {
                                            return <div>
                                                {
                                                    <Answer userid={ans.user_id} full_answer={ans.full_answer} accp={ans.accp} />
                                                }
                                            </div>
                                        })
                                    }
                                    
                                        
                                    
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
