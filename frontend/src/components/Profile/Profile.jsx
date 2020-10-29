import React from 'react';
import './Profile.css';
import cookie from 'react-cookies';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    // MDBBox,
    MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardBody, MDBCardText, MDBIcon, MDBContainer, MDBCardFooter
} from 'mdbreact';

class Profile extends React.Component {
    state = {
        'username': '',
        'asked': 0,
        'answered': 0,

    }

    componentDidMount() {
        var username = cookie.load('username');
        if (username === undefined) {
            window.location.href = '/signin';
        } else {
            this.setState({'username': username});
        }
    }


    render() {
        return (
            <MDBContainer>
                <MDBRow middle>
                    <MDBCol middle style={{maxWidth: "40rem", marginLeft: "25%", marginTop: "3%", marginBottom: '3%'}}>
                        <MDBCard reverse>
                            <MDBCardImage cascade style={{height: '20rem'}}
                                          src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"/>
                            <MDBCardBody cascade className="text-center">
                                <MDBCardTitle>{this.state.username}</MDBCardTitle>
                                <MDBCardText className="text-center">{(this.state.username === 'sachmo') ?
                                    <h4>Moderator</h4> : <h4>User</h4>}</MDBCardText>
                                <h5 className="indigo-text"><strong>Company Name</strong></h5>
                                <MDBCardText>This is my Bio.. Have a quick peek ;)</MDBCardText>
                                <MDBIcon icon="star"/><MDBIcon icon="star"/><MDBIcon icon="star"/><MDBIcon icon="star"/><MDBIcon
                                icon="star"/><br/>
                                <a href="#!" className="icons-sm li-ic ml-1">
                                    <MDBIcon fab icon="linkedin-in"/></a>
                                <a href="#!" className="icons-sm tw-ic ml-1">
                                    <MDBIcon fab icon="twitter"/></a>
                                <a href="#!" className="icons-sm fb-ic ml-1">
                                    <MDBIcon fab icon="facebook-f"/></a>
                            </MDBCardBody>
                            <MDBCardFooter style={{textAlign: "center"}}>No.of Questions asked/answered:</MDBCardFooter>
                            <MDBCardText
                                style={{textAlign: "center"}}>{this.state.asked}/{this.state.answered}</MDBCardText>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        );
    }
}

export default Profile;
