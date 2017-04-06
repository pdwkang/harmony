import React, {Component} from 'react';
import FetchAccount from '../actions/FetchAccount.js'
import ProfilePic from '../actions/ProfilePic.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Form, FormGroup, ControlLabel, FormControl, Button, InputGroup, HelpBlock } from 'react-bootstrap';
// import { browserHistory } from 'react-router'

class ArtistAccount extends Component {  
	constructor(props) {
		super(props);
		this.state = {
			profilepic:'http://localhost:3000/images/avatar.jpg'
		}
		this.handleProfilePic = this.handleProfilePic.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
	}
	componentDidMount() {
		this.setState({
			profilepic:'http://localhost:3000/images/' + this.props.user.data[0].photo	
		})
	}
	handleProfilePic(event){
		event.preventDefault();
		let profileImg = event.target.elements[0].files[0];
		this.props.ChangeProfilePic({
			profileImg : profileImg,
			token: this.props.user.data[0].token
		});
		this.setState({
			profilepic:'http://localhost:3000/images/' + this.props.user.data[0].photo	
		})
	}
	render() {
		return (
			<div className="my-account-page">
				<div>Public Profile</div>
				<div>Profile Picture</div>
				<Form onSubmit={this.handleProfilePic}>
					<FormGroup controlId="formControlsFile">
	                    <ControlLabel>Image File</ControlLabel>
	                    <img className='profileImage' src={this.state.profilepic} alt='a'/>
	                    <FormControl className='uploadProfile' type="file" />
	                    <FormControl className='profilePicSubmit' type="submit" />
					</FormGroup>
				</Form>
			</div>
		);
	}
}

function mapStateToProps(state){
  // console.log(state.account)
  // console.log(state.login)
  return{
    account: state.account,
    user: state.login
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    FetchAccount:FetchAccount,
    ChangeProfilePic:ProfilePic
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAccount);
