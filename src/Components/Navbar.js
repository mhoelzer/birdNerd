import React, { Component } from "react";
import { Container, Image, Menu, Sticky } from "semantic-ui-react";
import logo from "../Images/birdNerd.jpg";
import { Link } from "react-router-dom";
import "../Styling/main.css";

export default class Navbar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     navbarItems: [
  //       { name: "Compose Entry", pathname: "/composeEntry" },
  //       { name: "Login", pathname: "/login" },
  //       { name: "Register", pathname: "/register" },
  //       { name: "Search", pathname: "/" },
  //       { name: "Advanced Search", pathname: "/advancedSearch" },
  //       { name: "Birdidex", pathname: "/birdidex" },
  //       { name: "Profile", pathname: "/profile" }
  //     ]
  //   };
  // }
  state = { activeItem: "home" };

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="navMenu">
        <div className="stickyMenu">
          <Menu>
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              <img src={logo} alt="Logo" />
            </Menu.Item>
            {/* <NavbarItems to={this.state.navbarItems.pathname}>
            {this.state.navbarItems.name}
          </NavbarItems> */}
            <Menu.Item
              as={Link}
              to="/birdidex"
              name="birdidex"
              active={activeItem === "birdidex"}
              onClick={this.handleItemClick}
            >
              Birdidex
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/advanced"
              name="advanced"
              active={activeItem === "advanced"}
              onClick={this.handleItemClick}
            >
              Advanced Search
            </Menu.Item>

            {/* <Menu.Item position={"right"}>
            <Link to="/username">Username</Link>
          </Menu.Item>
 */}
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/login"
                name="login"
                active={activeItem === "login"}
                onClick={this.handleItemClick}
              >
                Login
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/register"
                name="register"
                active={activeItem === "register"}
                onClick={this.handleItemClick}
              >
                Register
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    );
  }
}
