import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Image
} from "semantic-ui-react";
// import bird1 from "../Images/1.jpg";
// import bird2 from "../Images/2.jpg";
// import bird3 from "../Images/3.jpg";
// import bird4 from "../Images/4.jpg";
// import bird5 from "../Images/5.jpg";
import DeleteUser from "./DeleteUser";
import ImageUploader from "./ImageUploader";
import { connect } from "react-redux";
import "../Styling/main.css";
import birdShadow from "../Images/birdShadowShape.png";
import editProfile from "../Actions/editProfileAction";
import { store } from "../Redux/store";

const ImageExampleCircular = () => (
  <Image
    className="profilePhoto"
    src={birdShadow}
    // {
    //   this.state.downloadURL === "undefined"
    //     ? { birdShadow }
    //     : this.state.downloadURL
    // }
    size="small"
    rounded
    verticalAlign="middle"
  />
);

class EditProfile extends Component {
  state = {
    password: "",
    about: "",
    downloadURL: "",
    username: "Michael"
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleChangeMatchPassword = event => {
    this.setState({
      matchPassword: event.target.value
    });
  };

  handleAboutChange = event => {
    this.setState({
      about: event.target.value
    });
  };

  handleSubmitEditProfile = () => {
    this.props.editProfile(this.state.password, this.state.about);
    this.setState({
      password: "",
      matchPassword: "",
      about: ""
    });
  };

  // handleChange = (e, { value }) => this.setState({ [e.target.name]: value });
  // handleSubmit = (e, { value }) => {
  //   this.props.updateUser({ ...this.state });
  // };

  render() {
    console.log("EDIT PROFILE", this.state);
    const data = store.getState();
    console.log("STORE DATA", data);

    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header textAlign="center" verticalAlign="middle" as="h1" icon>
            <Icon name="settings" />
            Edit Profile
          </Header>
          <Form size="large">
            <Segment stacked color="grey">
              <ImageExampleCircular />
              {/* <image
                className="profilePhoto"
                src="../Images/birdShadowShape.png"
                {
                  this.props.downloadURL === "undefined"
                    ? "../Images/birdShadowShape.png"
                    : this.props.downloadURL
                }
                size="medium"
                rounded
              /> */}
              {/* <div
                className={
                  this.state.uploadProgress === "false" ? "" : "uploader"
                }
              >
                <div class="flower-spinner">
                  <div class="dots-container">
                    <div class="bigger-dot">
                      <div class="smaller-dot" />
                    </div>
                  </div>
                </div>
              </div> */}
              <Form.TextArea
                onChange={this.handleChange}
                name="about"
                className="editAboutMe"
                label="About Me"
                placeholder={
                  this.props.about === ""
                    ? "Tell us more about you! Share your birding experiences!"
                    : this.props.about
                }
              />
              <Form.Input
                onChange={this.handleChange}
                name="password"
                fluid
                label="New Password"
                placeholder="New Password"
              />
              <Form.Input
                onChange={this.handleChange}
                name="password"
                fluid
                label="Re-Enter New Password"
                placeholder="Re-Enter New Password"
              />
              <div style={{ padding: "5%" }}>
                <ImageUploader />
              </div>
              <Button
                color="green"
                type="submit"
                onClick={this.handleSubmit}
                className="accept-delete-or-update"
              >
                <Icon name="checkmark" /> Update Profile
              </Button>
              <Button color="green" type="reset" className="reset">
                <Icon name="refresh" /> Reset Form
              </Button>
              <DeleteUser />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    downloadURL: state.downloadURL,
    password: state.password,
    about: state.about
  };
};

export default connect(mapStateToProps)(EditProfile);
