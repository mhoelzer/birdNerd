import React, { Component } from "react";
import {
  Button,
  Search,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Modal
} from "semantic-ui-react";
// import { Homepage } from "../Actions/action.js";
// import NavBarSecondary from "./NavBarSecondary";
import SearchBar from "./SearchBar";
import "../Styling/main.css";

class Homepage extends Component {
  componentWillMount = () => {
    document.body.classList.add("background");
  };

  componentWillUnmount = () => {
    document.body.classList.remove("background");
  };

  render() {
    return (
      <div>
        <div className="headers">
          <h1 className="header">Welcome to Bird Nerd</h1>
          <h2 className="header">Where nerds of a feather bird together</h2>
        </div>

        <SearchBar className="search" />

        <div className="about">
          <Modal trigger={<Icon name="massive question circle outline" />}>
            <Modal.Header>Information</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Goals</Header>
                <ol>
                  <li>
                    Give users an easy way to identify birds they have see
                  </li>
                  <li>Allow users to document their sightings</li>
                </ol>
                <Header>About</Header>
                <p>
                  On this site, users can both identify birds they have seen and
                  document their sightings in a personal notebook. Going to our
                  “Advanced Search” page allows the user to identify birds, with
                  our code filtering the results based on criteria such as
                  color, size, and location. Our “Birdydex” contains information
                  on all U.S. birds, users should browse at their own risk.
                  Creating a profile allows a user access to a notebook where
                  they can store information on sightings, such as the species
                  and the time and date of the sighting.
                </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Homepage;
