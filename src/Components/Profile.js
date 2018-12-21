import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";
import birdNerd from "../Images/birdNerd.jpg";
import GridRow from "../Styling/GridRow";
import ComposeEntry from "./ComposeEntry";
import Notebook from "./Notebook";

class Profile extends Component {
  render() {
    return (
      <GridRow>
        <Grid.Column width={6}>
          <Card
            color="grey"
            as={Menu}
            animation="overlay"
            Icon="labeled"
            Inverted
            vertical
            width="thin"
            fluid
          >
            <Card.Content>
              <Image src={birdNerd} />
              <Segment style={{ padding: "1em 0em" }} inverted color="blue">
                <Card.Header as="h2" textAlign="center">
                  {this.props.username}
                </Card.Header>
              </Segment>
              <Card.Description>
                <Card.Meta as="h2">About Me:</Card.Meta>
                {this.props.about}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to="/editprofile">
                <Button size="large" color="black" fluid>
                  Edit Profile
                </Button>
              </Link>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column floated="right" width={10}>
          <Segment basic>
            <Header as="h1" textAlign="center">
              Notebook
            </Header>
            <ComposeEntry />
            <Divider />
            <Notebook />
          </Segment>
        </Grid.Column>
      </GridRow>
    );
  }
}

export default Profile;
