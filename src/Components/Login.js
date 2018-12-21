import React, { Component } from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import config from "../Constants/config.js";
import load from "../Helpers/spreadsheet.js";

class Login extends Component {
  state = {
    user: [],
    error: null
  };

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const user = data.user;
      this.setState({ user });
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <div
        className="login"
        style={{
          margin: "auto",
          width: "50%",
          border: "2px solid lightblue",
          padding: "20px",
          marginTop: "50px"
        }}
      >
        <Header className="header" as="h2">
          Sign In
        </Header>
        <Form size="small">
          <Form.Field width="6">
            <input
              className="input"
              placeholder="Username"
              required
              autoFocus
            />
          </Form.Field>
          <Form.Field width="6">
            <input
              className="input"
              placeholder="Password"
              type="password"
              required
            />
          </Form.Field>
          <Button className="submit-button" type="submit">
            Submit
          </Button>
        </Form>

        <Message className="message" size="small">
          Not a member?
          <Link className="link" to="/Register">
            {" "}
            Sign up
          </Link>
        </Message>
      </div>
    );
  }
}

export default Login;
