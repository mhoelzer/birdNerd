import React, { Component } from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userLogin } from "../Actions/loginAction";

class Login extends Component {
	constructor(props) {
	  super(props); 
	  this.state = {
		username: "",
		password: ""
	  };
	}

  handleSubmitLogin = () => {
    this.props.userLogin(this.state.username, this.state.password);
  };

  handleChangeUser = event => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleRegisterLink = () => {
    this.props.registerLink();
  };

  render() {
    return (
      <div className="login-box">
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
          <Form size="large">
            <Form.Field>
              <input
                className="input"
                placeholder="Username"
                required
                value={this.state.username}
                onChange={this.handleChangeUser}
                autoFocus
              />
            </Form.Field>
            <Form.Field>
              <input
                className="input"
                placeholder="Password"
                type="password"
                required
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </Form.Field>
            <Button
              className="submit-button"
              type="submit"
              onClick={this.handleSubmitLogin}
            >
              Submit
            </Button>
          </Form>

          <Message className="message" size="small">
            Not a member?
            <Link className="link" to="/register">
              {" "}
              Sign up
            </Link>
          </Message>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, register }) => ({
  auth,
  register
});

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (username, password) => {
      dispatch(userLogin(username, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
