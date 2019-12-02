import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import Header from "./Header";

function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (email, password) => {
      dispatch(login(email, password));
    }
  };
}

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
  };

  render() {

    if (!this.props.auth.authenticated) {
      return (
        <div className="page">
          <Header />
          <div className="body">
            <div className="uk-section">
              <div className="uk-container">
                <div className="login-content">
                  <p className="uk-text-lead uk-text-bold"> Please login below! </p>
          
                  <form className="loginForm" onSubmit={this.login}>
                    <div className="one-input">
                      <label> Email: </label>
                      <input
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        required
                      ></input>
                    </div>
                    <div className="one-input">
                      <label> Password: </label>
                      <input
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                        required
                      ></input>
                    </div>
                    <p className="uk-text-small uk-text-muted">
                      By clicking login, you agree to comply with the terms and
                      policies of Picbrary
                    </p>
                    <button type="submit" className="uk-button uk-button-primary uk-width-1-1" name="login">
                     Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
