import React, { Component} from 'react';

class LogoutModal extends Component{
  render() {
    return(
      <div className = {this.props.logoutModal? "modal_container_showing" : "modal_container_hiding"}>
        <div className = "modal">
        <p className = "uk-text-lead uk-text-bold">
        <i className="fas fa-sign-out-alt"></i>
          <span>Are you sure you want to logout?</span>
        </p>

        <p className = "uk-text-muted">
          Your session will be cleared and you have to re-login.
        </p>

            <button className="uk-button uk-button-danger uk-width-1-1" onClick = {this.props.logout}>Logout</button>
            <button className="uk-button uk-button-text cancel" onClick={() => this.props.hideModal("logoutModal")}>Close</button>
        </div>
      </div>
    );
  }
}


export default LogoutModal;
