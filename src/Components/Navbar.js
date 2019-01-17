import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Sticky
} from "semantic-ui-react";
import logo from "../Images/birdNerd.jpg";
import { NavLink } from "react-router-dom";
import "../Styling/main.css";
import { connect } from "react-redux";
import Logout from "./Logout";

class Navbar extends Component {
  state = { menuVisible: false };

  render() {
    return (
      <React.Fragment>
        <Responsive minWidth={768}>
          <div className="navMenu">
            <div className="stickyMenu">
              <Menu>
                <Menu.Item exact as={NavLink} to="/">
                  <img src={logo} alt="Logo" />
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/birdidex">
                  Birdidex
                </Menu.Item>
                <Menu.Item exact as={NavLink} to="/advanced">
                  Advanced Search
                </Menu.Item>
                <Menu.Menu position="right">
                  {this.props.isLoggedIn ? (
                    <Menu.Item exact as={NavLink} to="/profile">
                      Welcome, {this.props.username}
                    </Menu.Item>
                  ) : (
                    <Menu.Item exact as={NavLink} to="/login">
                      Login
                    </Menu.Item>
                  )}
                  {this.props.isLoggedIn ? (
                    <Logout />
                  ) : (
                    // <Menu.Item exact as={NavLink} to="/logout">
                    //   Logout
                    // </Menu.Item>
                    <Menu.Item exact as={NavLink} to="/register">
                      Register
                    </Menu.Item>
                  )}
                </Menu.Menu>
              </Menu>
            </div>
          </div>
        </Responsive>
        <Responsive maxWidth={767}>
          <Dropdown
            icon="sidebar"
            style={{ fontSize: "50px", marginTop: "30px", marginLeft: "10px" }}
          >
            <Dropdown.Menu style={{ minWidth: "200px" }}>
              <br />
              <Dropdown.Item
                exact
                as={NavLink}
                to="/"
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                <img src={logo} alt="Logo" /> Home
              </Dropdown.Item>
              <Dropdown.Item
                exact
                as={NavLink}
                to="/birdidex"
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                Birdidex
              </Dropdown.Item>
              <Dropdown.Item
                exact
                as={NavLink}
                to="/advanced"
                style={{ fontSize: "20px" }}
              >
                Advanced Search
              </Dropdown.Item>
              <Dropdown.Divider />
              {this.props.isLoggedIn ? (
                <Dropdown.Item
                  exact
                  as={NavLink}
                  to="/profile"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Welcome, {this.props.username}
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  exact
                  as={NavLink}
                  to="/login"
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Login
                </Dropdown.Item>
              )}
              {this.props.isLoggedIn ? (
                  <Logout/>
              ) : (
                // <Dropdown.Item
                //   exact
                //   as={NavLink}
                //   to="/logout"
                //   style={{ fontSize: "20px" }}
                // >
                //   Logout
                // </Dropdown.Item>
                <Dropdown.Item
                  exact
                  as={NavLink}
                  to="/register"
                  style={{ fontSize: "20px" }}
                >
                  Register
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.username !== "",
    username: state.username
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
