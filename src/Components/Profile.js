import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import ComposeEntry from "./ComposeEntry";
import Notebook from "./Notebook";

class Profile extends Component {
  render() {
    return (
      <Grid container stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Card
              color="green"
              as={Menu}
              animation="overlay"
              Icon="labeled"
              Inverted
              vertical
              width="thin"
              fluid
            >
              <Card.Content>
                {/* <Image src={logo} /> */}
                <Segment style={{ padding: "1em 0em" }} inverted color="green">
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
        </Grid.Row>
      </Grid>
    );
  }
}

export default Profile;
