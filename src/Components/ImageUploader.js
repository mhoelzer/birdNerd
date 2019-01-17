import React, { Component } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import storage from "../Firebase/firebase";
import { connect } from "react-redux";
import birdShadow from "../Images/birdShadowShape.png";

export default class ImageUploader extends Component {
  state = {
    selectedFile: { birdShadow },
    downloadURL: "",
    // NEED TO GRAB USERNAME USING TOKEN OR SOMETHING
    username: "Michael"
  };

  fileSelectedHandler = event => {
    const file = event.target.files[0];
    console.log(file);

    this.setState({
      selectedFile: file,
      cacheControl: "public",
      // NEED TO GRAB USERNAME USING TOKEN OR SOMETHING
      customMetadata: {
        username: this.state.username
      }
    });
    console.log("this.state", this.state);
  };

  fileUploadHandler = () => {
    // const newMetadata = {
    //   cacheControl: "public",
    //   // NEED TO GRAB USERNAME USING TOKEN OR SOMETHING
    //   customMetadata: {
    //     username: this.state.username
    //   }
    // };

    const file = this.state.selectedFile;
    const profileRef = storage.child(this.state.username);
    // const profileImageRef = profileRef.child(file.name);
    console.log("Upload Staged", file);
    const fd = new FormData();
    fd.append("image", file, file.name);
    const uploadTask = profileRef.put(file);
    uploadTask
      .then(snapshot => {
        console.log("snapshot", snapshot.ref);
        return snapshot.ref.getDownloadURL();
      })
      .then(newDownloadURL => {
        console.log("newDownloadURL", newDownloadURL);
        this.setState({ downloadURL: newDownloadURL });
        return console.log("this.state", this.state);
      });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Form size="large">
          <Form.Input
            type="file"
            onChange={event => this.fileSelectedHandler(event)}
          />
          <Button onClick={this.fileUploadHandler}>Upload</Button>
        </Form>
      </Grid>
    );
  }
}

// const mapStateToProps = function(state) {
//   return {
//     downloadURL: state.downloadURL
//   };
// };
// export default connect(mapStateToProps)(ImageUploader);
