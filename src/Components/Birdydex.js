import React, { Component } from "react";
import config from "../Constants/config.js";
import load from "../Helpers/spreadsheet.js";

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
      <ul>
        {bird.map((bird, i) => (
          <li key={i}>
            <img src={bird.image} />
            {bird.species} {bird.color} {bird.size}
          </li>
        ))}
      </ul>
    );
  }
}
