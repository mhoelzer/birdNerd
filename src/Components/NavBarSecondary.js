import React, { Component } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import logo from "../Images/birdNerd.png";

export default class NavBarSecondary extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky>
        <Menu>
          <Menu.Item>
            <img src={logo} alt="Logo" />
          </Menu.Item>

          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="identify"
            active={activeItem === "identify"}
            onClick={this.handleItemClick}
          >
            Identify
          </Menu.Item>

          <Menu.Item
            name="birdy-dex"
            active={activeItem === "birdy-dex"}
            onClick={this.handleItemClick}
          >
            Birdy-Dex
          </Menu.Item>

          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
            // position={"right"}
          />

          <Menu.Item
            name="username"
            active={activeItem === "username"}
            onClick={this.handleItemClick}
            position={"right"}
          >
            Username
          </Menu.Item>
        </Menu>
      </Sticky>
    );
  }
}
