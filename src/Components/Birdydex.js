import React, { Component } from "react";
import config from "../Constants/config.js";
import load from "../Helpers/spreadsheet.js";
import { Button, Header, Image, Modal, Grid, Card } from "semantic-ui-react";

const styles = {
  cardPosition: {
    margin: "40px",
    padding: "20px"
  }
};

export default class Birdydex extends Component {
  state = {
    bird: [],
    error: null
  };

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const bird = data.bird;
      this.setState({ bird });
    } else {
      this.setState({ error });
    }
  };

  render() {
    const { bird, error } = this.state;
    if (error) {
      return <div>{this.state.error.message}</div>;
    }
    return (
      <Card.Group className="birdydex">
        {bird.map((bird, i) => (
          <Card style={styles.cardPosition} className="bird-card">
            <Card.Content>
              {/* <img src={bird.image} /> */}
              <h2>{bird.species}</h2>
              <br />
              <p>Color: {bird.color}</p>
              <br />
              <p>Size: {bird.size}</p>
              <br />
              <Modal size={"tiny"} trigger={<Button className="more-info">More Info</Button>}>
                <Modal.Header>{bird.species}</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size="medium" src={bird.image} />
                  <Modal.Description>
                    <Header>{bird.species}</Header>
                    <p>State(s): {bird.location}</p>
                    <p>Type: {bird.type}</p>
                    <p>Description: {bird.description}</p>
                    <a href={bird.site}>
                      Click here to research more about {bird.species}!
                    </a>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}