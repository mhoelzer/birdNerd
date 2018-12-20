import React, { Component } from "react";
import { Divider, Card } from "semantic-ui-react";

class NotebookEntry extends Component {
  render() {
    return (
      <Card
        color="blue"
        animation="overlay"
        Icon="labeled"
        Inverted
        vertical
        width="thin"
        fluid
      >
        <Card.Content>
          <Card.Header>{this.props.birdName}</Card.Header>
          <Card.Meta>{this.props.date}</Card.Meta>
          {/* // place props in styling, from fragment section. */}
          <Card.Description>{this.props.theDeets}</Card.Description>
          <Divider />
          <Divider />
          <Card.Content extra>{this.props.location}</Card.Content>
        </Card.Content>
      </Card>
    );
  }
}
export default NotebookEntry;
