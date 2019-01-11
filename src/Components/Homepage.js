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
  Visibility
} from "semantic-ui-react";
// import { Homepage } from "../Actions/action.js";
// import NavBarSecondary from "./NavBarSecondary";
import SearchBar from "./SearchBar"
import "../Styling/main.css";

class Homepage extends Component {
  // homepage = ({ mobile }) => (
  //   <Container text>
  //     <Header
  //       as="h1"
  //       content="Bird Nerd"
  //       inverted
  //       style={{
  //         fontSize: mobile ? "2em" : "4em",
  //         fontWeight: "normal",
  //         marginBottom: 0,
  //         marginTop: mobile ? "0.5em" : "3em"
  //       }}
  //     />
  //     <Header
  //       as="h2"
  //       content="search that bird you nerd."
  //       inverted
  //       style={{
  //         fontSize: mobile ? "1.5em" : "1.7em",
  //         fontWeight: "normal",
  //         marginTop: mobile ? "0.5" : "1.5"
  //       }}
  //     />
  render() {
    return (
      <React.Fragment>
        <div className="background">
        <Grid className="home">
          <div className="headers">
            <h1>Welcome to Bird Nerd</h1>
            <h2>Where nerds of a feather bird together</h2>
          </div>
          
          <SearchBar className="search" />
          <p className="para">
            We had two goals in mind when creating Bird Nerd:
            <ol>
              <li>Give users an easy way to identify birds they have see</li>
              <li>Allow users to document their sightings</li>
            </ol>
            On this site, users can both identify birds they have seen and document their sightings in a personal notebook. Going to our “Advanced Search” page allows the user to identify birds, with our code filtering the results based on criteria such as color, size, and location. Our “Birdydex” contains information on all U.S. birds, users should browse at their own risk. Creating a profile allows a user access to a notebook where they can store information on sightings, such as the species and the time and date of the sighting.
          </p>
          <h2 className="sub-header">Happy birding!</h2>
        </Grid>
        {/* <NavBarSecondary /> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Homepage;