import React, { Component } from "react";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
import bird1 from "../Images/1.jpg";
import bird2 from "../Images/2.jpg";
import bird3 from "../Images/3.jpg";
import bird4 from "../Images/4.jpg";
import bird5 from "../Images/5.jpg";
import DeleteUser from "./DeleteUser";

export default class EditProfile extends Component {
  state = { password: "", about: "" };

  handleChange = (e, { value }) => this.setState({ [e.target.name]: value });
  handleSubmit = (e, { value }) => {
    this.props.updateUser({ ...this.state });
  };

  render() {
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
              <Button color="green" type="submit" onClick={this.handleSubmit} className="accept-delete-or-update">
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
