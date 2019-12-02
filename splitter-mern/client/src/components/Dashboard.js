import React, { Component } from "react";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import Header from "./Header";
import SearchBox from "./SearchBox";
import AddImageModal from "./AddImageModal";
import LogoutModal from "./LogoutModal";
import { logout } from "../actions/authActions";
import { fetchAllImages, openImage } from "../actions/imageActions";
function mapStateToProps(state) {
  return {
    auth: state.auth,
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllImages: () => {
      dispatch(fetchAllImages());
    },
    openImage: image => {
      dispatch(openImage(image));
    },
    logoutUser: () => {
      dispatch(logout());
    }
  };
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addImageModal: false,
      logoutModal: false,
      currentImageView: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.authenticated) {
      this.props.fetchAllImages();
    }
  }

  hideModal = s => {
    this.setState({
      [s]: false
    });
  };

  showModal = s => {
    this.setState({
      [s]: true
    });
  };

  render() {
    if (this.props.auth.authenticated) {
      const imageJSX = {
        col0: [],
        col1: [],
        col2: []
      };

      this.props.images.filteredImages.forEach((item, index) => {
        let tags = JSON.parse(item.image.imageTags).map((tag, index) => (
          <span key={index} className="uk-label uk-text-lowercase">
            #{tag}
          </span>
        ));

        imageJSX["col" + (index % 3)] = [
          ...imageJSX["col" + (index % 3)],
          <div className="imageCard" key={index}>
            <Link
              to="/imageview"
              onClick={() => this.props.openImage(item)}
              className="uk-card uk-card-default"
            >
              <div className="uk-card-media-top">
                <img
                  src={
                    "http://localhost:5000/imageLibrary/" + item.image.filename
                  }
                  alt="test"
                />
              </div>
              <div className="uk-card-body uk-padding-small">
                <h3 className="uk-card-title">{item.image.imageTitle}</h3>
                <p>{tags}</p>
              </div>
            </Link>
          </div>
        ];
      });
      return (
        <div className="page">
          <Header
            primaryBtn={
              <button
                className="uk-button uk-button-primary uk-button-small"
                onClick={() => this.showModal("addImageModal")}
              >
                Upload Image
              </button>
            }
            secondaryBtn={
              <button
                className="uk-button uk-button-danger logout_btn"
                onClick={() => this.showModal("logoutModal")}
              >
                {" "}
                <i className="fas fa-sign-out-alt"></i>
              </button>
            }
          />
          
          <SearchBox />
      
          <AddImageModal
            addImageModal={this.state.addImageModal}
            addImageModal={this.state.addImageModal}
            hideModal={() => this.hideModal("addImageModal")}
          />

          <LogoutModal
            logoutModal={this.state.logoutModal}
            hideModal={() => this.hideModal("logoutModal")}
            logout={this.props.logoutUser}
          />

          <div className="uk-section">
            <div className="uk-container">
              <div
                className="uk-child-width-1-3@m uk-child-width-1-2@s uk-grid uk-grid-small"
                data-uk-grid
              >
                <div>{imageJSX.col0}</div>
                <div>{imageJSX.col1}</div>
                <div>{imageJSX.col2}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to={{ pathname: "/" }} />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
