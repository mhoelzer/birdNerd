import React, { Component } from "react";
import { Button, Form, Header, Message, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { registerAction } from "../Actions/registerAction"
import "../Styling/main.css";

class Register extends Component {
  state = {
    username: "",
    password: "",
    passwordRepeat: "",
    passwordMatches: true
  };

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleChangeMatch = event => {
    this.setState({
      passwordRepeat: event.target.value
    });
  };

  noMatch = () => {
    return <Segment color="red">Entered passwords do not match.</Segment>;
  };

  usernameFail = () => {
    return (
      <Segment color="red">
        Username taken. Choose a different username.
      </Segment>
    );
  };

  handleLoginLink = () => {
    this.props.loginLink();
  };

  handleRegister = event => {
    if (
      this.state.username &&
      this.state.password === this.state.passwordRepeat
    ) {
      this.setState({ passwordMatches: true });
      console.log("handle was called");
      this.props.register({
        username: this.state.username,
        password: this.state.password
      });
    }

    if (this.state.password !== this.state.passwordRepeat) {
      this.setState({ passwordMatches: false });
    } else {
      this.setState({ passwordMatches: true });
    }
  };

  componentWillMount = () => {
    document.body.classList.add("background");
  };

  // componentDidMount() {
  //   this.props.registerAction()
    
  // }

    state = {
        username: "",
        password: "",
        passwordRepeat: "",
        passwordMatches: true
      };
    
      handleChangeUsername = event => {
        this.setState({
          username: event.target.value
        });
      };
    
      handleChangePassword = event => {
        this.setState({
          password: event.target.value
        });
      };
    
      handleChangeMatch = event => {
        this.setState({
          passwordRepeat: event.target.value
        });
      };
    
      noMatch = () => {
        return <Segment color="red">Entered passwords do not match.</Segment>;
      };
    
      usernameFail = () => {
        return (
          <Segment color="red">
            Username taken. Choose a different username.
          </Segment>
        );
      };
    
      handleLoginLink = () => {
        this.props.loginLink();
      };
    
      handleRegister = event => {
        if (
          this.state.username &&
          this.state.password === this.state.passwordRepeat
        ) {
          this.setState({ passwordMatches: true });
          console.log("handle was called");
          console.log(this.props)
          this.props.registerAction({
            username: this.state.username,
            password: this.state.password,
          });
        }
    
        if (this.state.password !== this.state.passwordRepeat) {
          this.setState({ passwordMatches: false });
        } else {
          this.setState({ passwordMatches: true });
        }
      };

  render() {
    return (
      <div className="register">
        <Header className="header" as="h2">
          Sign Up
        </Header>
        <Form size="large">
          <Form.Field>
            <input
              className="input"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChangeUsername}
              required
            />
          </Form.Field>
          <Form.Field>
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            />
          </Form.Field>
          <Form.Field>
            {this.state.passwordMatches ? null : this.noMatch()}
            <input
              className="input"
              placeholder="Re-Enter Password"
              type="password"
              value={this.state.passwordRepeat}
              onChange={this.handleChangeMatch}
              required
            />
          </Form.Field>
          <Button className="submit-button" onClick={this.handleRegister}>
            Register
          </Button>
        </Form>
        <div>
          <h3>{this.props.result}</h3>
        </div>
        <Message className="line" style={{ boxShadow: "none" }}>
          _____________________________________
        </Message>
        <div>
          <Message className="message">
            Already signed up?
            <Link className="link" to="/login" onClick={this.handleLoginLink}>
              {" "}
              Login
            </Link>
          </Message>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.registerResult
  };
};

function mapDispatchToProps(dispatch) {
  return {
    registerAction: (username, password) => {
      dispatch(registerAction(username, password));
    }, } }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
