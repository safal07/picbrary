import React, { Component } from "react";
import { connect } from "react-redux";
import {filterImages} from "../actions/imageActions";
function mapStateToProps(state) {
    return {
      images: state.images
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        filterImages: (images) => {
            dispatch(filterImages(images));
        }
    };
  }

class SearchBox extends Component {

  handleChange = (e) => {
      let allImages = this.props.images.imageList;
      let filteredImages = allImages.filter(img => RegExp(e.target.value,'ig').test(img.image.imageTitle) || RegExp(e.target.value,'ig').test(img.image.imageTags));
      this.props.filterImages(filteredImages);
  }
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
        <h1 className="uk-heading-small uk-text-center">Welcome to our Picbrary collection</h1>
        <hr className="uk-divider-icon"></hr>
            <div className="uk-margin">
              <input
                className="uk-input uk-width-1-1 uk-form-large"
                type="text"
                onChange={this.handleChange}
                placeholder="Search for images in our library"
              />
            </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

