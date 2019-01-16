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
  state = { menuVisible: false };
  // state = { activeItem: "home" };

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;
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
                  // active={activeItem === "home"}
                  // onClick={this.handleItemClick}
                >
                  <img src={logo} alt="Logo" />
                </Menu.Item>
                {/* <NavbarItems to={this.state.navbarItems.pathname}>
            {this.state.navbarItems.name}
          </NavbarItems> */}
                <Menu.Item
                  exact
                  as={NavLink}
                  to="/birdidex"
                  name="birdidex"
                  // active={activeItem === "birdidex"}
                  // onClick={this.handleItemClick}
                >
                  Birdidex
                </Menu.Item>
                <Menu.Item
                  exact
                  as={NavLink}
                  to="/advanced"
                  name="advanced"
                  // active={activeItem === "advanced"}
                  // onClick={this.handleItemClick}
                >
                  Advanced Search
                </Menu.Item>

                {/* <Menu.Item position={"right"}>
            <NavLink to="/username">Username</NavLink>
          </Menu.Item>
 */}
                <Menu.Menu position="right">
                  <Menu.Item
                    exact
                    as={NavLink}
                    to="/login"
                    name="login"
                    // active={activeItem === "login"}
                    // onClick={this.handleItemClick}
                  >
                    Login
                  </Menu.Item>
                  <Menu.Item
                    exact
                    as={NavLink}
                    to="/register"
                    name="register"
                    // active={activeItem === "register"}
                    // onClick={this.handleItemClick}
                  >
                    Register
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </div>
          </div>
        </Responsive>
        <Responsive maxWidth={767}>
          <Dropdown icon="sidebar" style={{fontSize: "50px", marginTop: "20px"}}>
            <Dropdown.Menu >
              <Dropdown.Item exact as={NavLink} to="/" name="home" className="dropdownItem">
                <img src={logo} alt="Logo" /> Home
              </Dropdown.Item>
              <Dropdown.Item exact as={NavLink} to="/birdidex" name="birdidex" className="dropdownItem">
                Birdidex
              </Dropdown.Item>
              <Dropdown.Item exact as={NavLink} to="/advanced" name="advanced" className="dropdownItem">
                Advanced Search
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item exact as={NavLink} to="/login" name="login" className="dropdownItem">
                Login
              </Dropdown.Item>
              <Dropdown.Item exact as={NavLink} to="/register" name="register" className="dropdownItem">
                Register
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </React.Fragment>
    );
  }
}
