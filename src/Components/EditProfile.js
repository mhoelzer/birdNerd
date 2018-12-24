import React, { Component } from "react";
import { Button, Form, Container, Header, Grid } from "semantic-ui-react";
import bird1 from "../Images/1.jpg";
import bird2 from "../Images/2.jpg";
import bird3 from "../Images/3.jpg";
import bird4 from "../Images/4.jpg";
import bird5 from "../Images/5.jpg";

// This component will be used as a button in the Profile Component

export default class EditProfile extends Component {
  render() {
    return (
      <div
      //   style={{ display: "table" }}
      >
        <Form style={{ width: "40%", padding: "1.5%" }}>
          {/* <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field> */}
          <Form.Field>
            <label>About Me</label>
            <textarea
              style={{ height: "10%" }}
              className="editAboutMe"
              placeholder="Share your experiences!"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <label>Re-Enter Password</label>
            <input placeholder="Re-Enter Password" />
          </Form.Field>
          <Button type="submit">Update Profile</Button>
          <Button type="reset">Reset Form</Button>
          <Button color="red">Delete Account</Button>
        </Form>
        <Grid
        // style={{ textAlign: "center", verticalAlign: "middle" }}
        >
          <Container
          //   style={{ padding: "5%" }}
          >
            <Header textAlign="center" style={{ padding: "2%" }} as="h2">
              Choose your Bird Icon
            </Header>
            <div>
              <img
                style={{ width: "20vw", height: "40vh" }}
                src={bird1}
                alt=""
              />
              <img
                style={{ width: "20vw", height: "40vh" }}
                src={bird2}
                alt=""
              />
              <img
                style={{ width: "20vw", height: "40vh" }}
                src={bird3}
                alt=""
              />
              <img
                style={{ width: "20vw", height: "40vh" }}
                src={bird4}
                alt=""
              />
              <img
                style={{ width: "20vw", height: "40vh" }}
                src={bird5}
                alt=""
              />
            </div>
          </Container>
        </Grid>
      </div>
    );
  }
}