import React, { Component } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import logo from "../Images/birdNerd.jpg";
import { Link } from "react-router-dom";

const NavbarItems = props => {
  return (
    <React.Fragment>
      <Menu.Item>
        <Link to={props.pathname}>{props.name}</Link>
      </Menu.Item>
      {props.children}
    </React.Fragment>
  );
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarItems: [
        { name: "Compose Entry", pathname: "/composeEntry" },
        { name: "Login", pathname: "/login" },
        { name: "Register", pathname: "/register" },
        { name: "Search", pathname: "/" },
        { name: "Advanced Search", pathname: "/advancedSearch" },
        { name: "Birdidex", pathname: "/birdidex" },
        { name: "Profile", pathname: "/profile" }
      ]
    };
  }
  render() {
    return (
      <Sticky>
        <Menu style={{ position: "sticky" }}>
          <Menu.Item as={Link} to="/">
            <img src={logo} alt="Logo" />
          </Menu.Item>

          {/* <NavbarItems to={this.state.navbarItems.pathname}>
            {this.state.navbarItems.name}
          </NavbarItems> */}

          <Menu.Item as={Link} to="/birdidex">
            Birdidex
          </Menu.Item>

          <Menu.Item as={Link} to="/advanced">
            Advanced Search
          </Menu.Item>

          {/* <Menu.Item position={"right"}>
            <Link to="/username">Username</Link>
          </Menu.Item>
 */}
          <Menu.Item position={"right"} as={Link} to="/login">
            Login
          </Menu.Item>

          <Menu.Item as={Link} to="/register">
            Register
          </Menu.Item>

          {/* <Menu.Item>
            <Link to="/login">Logout</Link>
          </Menu.Item> */}
        </Menu>
      </Sticky>
    );
  }
}
