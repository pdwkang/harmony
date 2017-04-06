import React, {Component} from 'react';
import FetchAccount from '../actions/FetchAccount.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'

class ArtistAccount extends Component {  
    render() {
        return (
          <div className="my-account-page">
             
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
    FetchAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAccount);
