import React, { Component } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import logo from "../Images/birdNerd.jpg";
import { Link } from "react-router-dom";

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
            name="=composeEntry"
            active={activeItem === "composeEntry"}
            onClick={this.handleItemClick}
          >
            <Link to="/composeEntry" id="composeEntry">
              Compose Entry
            </Link>
          </Menu.Item>

          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            <Link to="/profile" id="profile">
              Profile
            </Link>
          </Menu.Item>

          <Menu.Item
            name="birdidex"
            active={activeItem === "birdidex"}
            onClick={this.handleItemClick}
          >
            <Link to="/birdidex" id="birdidex">
              Birdy-Dex
            </Link>
          </Menu.Item>

          <Menu.Item
            name="notebook"
            active={activeItem === "notebook"}
            onClick={this.handleItemClick}
          >
            <Link to="/notebook" id="notebook">
              Notebook
            </Link>
          </Menu.Item>

          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Link to="/" id="home">
              Search
            </Link>
          </Menu.Item>

          <Menu.Item
            name="username"
            active={activeItem === "username"}
            onClick={this.handleItemClick}
            position={"right"}
          >
            <Link to="/username" id="username">
              Username
            </Link>
          </Menu.Item>
        </Menu>
      </Sticky>
    );
  }
}
