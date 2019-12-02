import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/authActions";

export function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    registerUser: user => {
      dispatch(register(user));
    }
  };
}

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordVerify: ""
    };
  }

  componentDidMount() {
    if (this.props.lid) {
      this.setState({
        lid: this.props.lid
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };

  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className= "registration-content">
          <p className="uk-text-lead uk-text-bold"> Get started for free! </p>
          <form className="registrationForm" onSubmit={this.register}>
           
            <div className="two-input">
              <div className="one">
                <label> First Name: </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <div className="two">
                <label> Last Name: </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
            </div>

            <div className="one-input">
              <label id="email-label">Email Address: </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required
              ></input>
            </div>

            <div className="two-input">
              <div className="one">
                <label> Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <div className="two">
                <label> Verify Password: </label>
                <input
                  type="password"
                  name="passwordVerify"
                  id="passwordVerify"
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
            </div>
            <p className="uk-text-small uk-text-muted">
              By registering, you are agreeing to comply with the terms and
              policies of PicBary
            </p>
            <button type="submit" className="uk-button uk-button-primary uk-width-1-1" name="submit">
                Signup
         
            </button>
          </form>
        
        
        </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
