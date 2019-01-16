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

export default class Navbar extends Component {
  state = { menuVisible: false };

  render() {
    return (
      <React.Fragment>
        <Responsive minWidth={768}>
          <div className="navMenu">
            <div className="stickyMenu">
              <Menu>
                <Menu.Item
                  exact
                  as={NavLink}
                  to="/"
                  name="home"
                >
                  <img src={logo} alt="Logo" />
                </Menu.Item>
                <Menu.Item
                  exact
                  as={NavLink}
                  to="/birdidex"
                  name="birdidex"
                >
                  Birdidex
                </Menu.Item>
                <Menu.Item
                  exact
                  as={NavLink}
                  to="/advanced"
                  name="advanced"
                >
                  Advanced Search
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item
                    exact
                    as={NavLink}
                    to="/login"
                    name="login"
                  >
                    Login
                  </Menu.Item>
                  <Menu.Item
                    exact
                    as={NavLink}
                    to="/register"
                    name="register"
                  >
                    Register
                  </Menu.Item>
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
                name="home"
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                <img src={logo} alt="Logo" /> Home
              </Dropdown.Item>
              <Dropdown.Item
                exact
                as={NavLink}
                to="/birdidex"
                name="birdidex"
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                Birdidex
              </Dropdown.Item>
              <Dropdown.Item
                exact
                as={NavLink}
                to="/advanced"
                name="advanced"
                style={{ fontSize: "20px" }}
              >
                Advanced Search
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                exact
                as={NavLink}
                to="/login"
                name="login"
                style={{ fontSize: "20px", marginBottom: "10px" }}
              >
                Login
              </Dropdown.Item>
              <Dropdown.Item
                exact
                as={NavLink}
                to="/register"
                name="register"
                style={{ fontSize: "20px" }}
              >
                Register
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </React.Fragment>
    );
  }
}
