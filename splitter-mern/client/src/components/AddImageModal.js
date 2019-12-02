import React, { Component } from "react";
import { addImage } from "../actions/imageActions";
import { connect } from "react-redux";
function mapStateToProps(state) {
  return {
    imageData: state.imageData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addImage: image => {
      dispatch(addImage(image));
    }
  };
}

class AddImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageTitle: "",
      imageTags: [],
      currentTag: "",
      fileInputKey: Date.now()
    };
  }

  keyPress = e => {
    if(e.key === " ") {
      this.setState({
        imageTags: [...this.state.imageTags, e.target.value]
      });
      e.target.value = "";
    }
  };

  handleChange = e => {
    if(e.target.type === "file") {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  addImage = () => {
    let image = {
      imageTitle: this.state.imageTitle,
      imageTags: JSON.stringify(this.state.imageTags),
      imageData: this.state.imageData
    };
    this.props.addImage(image);
    this.setState({
      imageTitle: "",
      imageTags: [],
      currentTag: "",
      imageData: "",
      fileInputKey: Date.now()
    });
    this.props.hideModal("addImageModalShowing");
  };

  render() {
    let tags = this.state.imageTags.map((tag, index) => <span key= {index} className="uk-label uk-text-lowercase">#{ tag }</span>);
    return (
      <div
        className={
          this.props.addImageModal
            ? "modal_container_showing"
            : "modal_container_hiding"
        }
      >
        <div className="modal">
          <p className="uk-text-lead uk-text-bold">
            <i className="fas fa-upload"></i>
            <span>Let's add a new image to the library.</span>
          </p>

          <p className="uk-text-muted">
            Select an image from your computer and fill out additional
            information.
          </p>

          <input
            value={this.state.imageTitle}
            type="text"
            name="imageTitle"
            onChange={this.handleChange}
            placeholder="Title"
          />

          <input
            type="text"
            name="imageTag"
            onKeyPress={this.keyPress}
            placeholder="#Tags - hit space to add multiple tags"
          />
          <div>
          { tags }
          </div>
          
          <input
            type="file"
            name="imageData"
            key={this.state.fileInputKey}
            onChange={this.handleChange}
          />

      
          <button className = "uk-button uk-button-primary uk-width-1-1" onClick={this.addImage}>
            Upload
          </button>
          <button className="uk-button uk-button-text cancel" onClick={() => this.props.hideModal("addImageModal")}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImageModal);
