import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {Link} from 'react-router-dom';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

class ImageViewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagename: ""
    };
  }

  render() {
    if (this.props.auth.authenticated) {
      if (this.props.images.currentImage) {
        let tags = JSON.parse(this.props.images.currentImage.image.imageTags).map((tag, index) => <span key= {index} className="uk-label uk-text-lowercase">#{ tag }</span>);
        return (
          <div className="page">
            <div className="uk-section">
              <div className="uk-container">
                <div
                  className="uk-card uk-card-default uk-grid-collapse image-view"
                  data-uk-grid
                >
                  <div className="uk-card-media-left uk-cover-container uk-width-3-5@m uk-width-1-1@s">
                    <img
                      className = "uk-width-1-1"
                      src={"http://localhost:5000/imageLibrary/" + this.props.images.currentImage.image.filename}
                      alt=""
                    />
                  
                  </div>
                  <div className="uk-width-2-5@m uk-width-1-1@s uk-flex uk-flex-column uk-flex-between">
                    <div className="uk-card-body">
                      <h3 className="uk-card-title">{this.props.images.currentImage.image.imageTitle}</h3>
                      <p>
                        {tags}
                      </p>
                    </div>
                    <Link to = "/dashboard" className="uk-button uk-button-text uk-padding-small">
                      Go Back
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return <Redirect to={{ pathname: "/dashboard" }} />;
      }
    } else {
      return <Redirect to={{ pathname: "/" }} />;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageViewModal);
