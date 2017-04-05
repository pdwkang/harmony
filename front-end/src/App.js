import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'


class App extends Component {
    render() {
        return (
            <div className='ebay-wrapper'>
            	<div className='sign-in-nav-bar-wrapper'>
                    <div className='logo'><Link to='/'>Logo / Home</Link></div>
                    <div className='search-bar-wrapper'>
                        <Link to={'/account/' + this.props.user.username}>My Account</Link> or
                        <Link to="/login">Sign in</Link> or
                        <Link to="/register">Register</Link>
                            &nbsp;&nbsp;&nbsp;
                        <form>
                            <input type='text' placeholder=" &nbsp;Search Items"/>
                            <button className='btn btn-warning'>Search</button>
                        </form>
                    </div>
            	</div>
            	<div className='body-wrapper'>
                    {this.props.children}
            	</div>
			</div>
        );
    }
}



// go to all. like the array map function
function mapStateToProps(state){
  console.log(state.login)
    return{
        user: state.login
    }
}





export default connect(mapStateToProps)(App);
// export default App;
