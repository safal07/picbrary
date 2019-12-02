import React, { Component } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

class Header extends Component {

  render() {
    if (this.props.auth.authenticated) {
      return (
        <div className="nav">
          <div className="uk-text-large uk-text-bold">
            <Link to="/dashboard">
              PIC<span className="blue">BRARY</span>
            </Link>
          </div>

          <div className="subMenuContainerLeft">
            <ul className="subMenuList">{this.props.menuListJSX}</ul>
          </div>

          <div className="subMenuContainerRight">
            {this.props.primaryBtn}
            {this.props.secondaryBtn}
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <div className="uk-text-large uk-text-bold">
            <Link to="/">
              PIC<span className="blue">BRARY</span>
            </Link>
          </div>

          <div>
            <Link to="/login" className="uk-button uk-button-primary">
              Login <i className="fas fa-sign-in-alt"></i>
            </Link>
          </div>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, null)(Header);
