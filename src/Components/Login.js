import React, { Component } from "react";
import { Button, Form, Header, Message, Card } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import config from "../Constants/config.js";
import load from "../Helpers/userSpreadsheet.js";
import {withRouter} from "react-router-dom";



class Login extends Component {
  state = {
    username: "",
    password: "",
    error: null
  };

  // componentDidMount() {
  //   // 1. Load the JavaScript client library.
  // }

  handleLogin = event => {
    // Handle Login
    event.preventDefault();
    window.gapi.load("client", this.initClient);
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

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
      const users = data.users;
      console.log(data.users);
      const user = users.find(users => users.username === this.state.username);
      if (user === undefined) {
        this.setState({ error: { message: "User does not exist." } });
      } else if (user.password === this.state.password) {
        // do something man - like route to different page
        this.props.history.push("/")
        console.log("hell yea?");        
      }
    } else {
      this.setState({ error });
    }
  };

  render() {
    const { username, password, error } = this.state;
    if (error) {
      return <div>{this.state.error.message}</div>;
    }
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
        <Form size="large" onSubmit={this.handleLogin}>
          <Form.Field>
            <input
              className="input"
              placeholder="Username"
              required
              autoFocus
              onChange={this.handleUsernameChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              className="input"
              placeholder="Password"
              type="password"
              required
              onChange={this.handlePasswordChange}
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

export default withRouter(Login)

