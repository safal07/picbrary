import React, { Component} from 'react';
import Header from './Header';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import UserRegistration from './UserRegistration';

function mapStateToProps(state) {
  return({
    auth: state.auth
  });
}

class Home extends Component{
  render() {
    if(!this.props.auth.authenticated) {
      return(
        <div className = "page">
          <Header />

          <div className = "body uk-background-cover" style={{"backgroundImage": "url(https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2292&q=80)"}}>    
              <UserRegistration />
          </div>
        </div>

      );
    }
    else {
      return(<Redirect to={{
            pathname: '/dashboard',
        }}
      />);
    }
  };
}

export default connect(mapStateToProps, null)(Home);
