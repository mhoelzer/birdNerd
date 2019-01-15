import React, { Component } from "react";
import {
  Container,
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
          <Menu stackable>
            <Menu.Item
              onClick={() =>
                this.setState({ menuVisible: !this.state.menuVisible })
              }
            >
              <Icon name="sidebar" />
              Menu
            </Menu.Item>
            <Sidebar.Pushable as={Segment} attached="bottom">
              <Sidebar
                as={Menu}
                animation="uncover"
                visible={this.state.menuVisible}
                icon="labeled"
                vertical
                inline
                inverted
              >
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
              </Sidebar>
            </Sidebar.Pushable>
          </Menu>
        </Responsive>
      </React.Fragment>
    );
  }
}
