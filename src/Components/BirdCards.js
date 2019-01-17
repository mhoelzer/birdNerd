import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getBirdData } from "../Actions/action";
import birdy from "../Images/birdy.png";

const styles = {
  cardPosition: {
    margin: "40px",
    padding: "20px"
  }
};

export default class BirdCards extends Component {
  render() {
    // console.log(this.props.bird);
    const { birds, error } = this.props;
    // if (error) {
    //   return <div>{error.message}</div>;
    // }
    return (
      <React.Fragment>
        {birds.length === 0 ? (
          <span className="birdCount">
            <h3>No results</h3>
            <img src={birdy} alt="birdy" className="birdCount" />
          </span>
        ) : (
          // <h4 style={{  marginRight: "20px", fontSize: "18px" }}>
          <h3 className="birdCount">{birds.length} Bird(s)</h3>
        )}
        <Card.Group className="birdydex">
          {birds.map((bird, i) => (
            <Card
              style={styles.cardPosition}
              key={bird.scientificName}
              className="bird-card"
            >
              <Card.Content>
                <h2>{bird.species}</h2>
                <br />
                <img src={bird.image} className="thumbnail" />
                {/* <p>Color: {bird.color}</p>
              <br />
              <p>Size: {bird.size}</p> */}
                <br />
                <Modal
                  size={"small"}
                  trigger={<Button className="more-info">More Info</Button>}
                  closeIcon
                  style={{ marginTop: "20px" }}
                >
                  <Modal.Header>{bird.species}</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size="huge" src={bird.image} />
                    <Modal.Description>
                      <Header>{bird.species}</Header>
                      <p>
                        Scientific Name: <i>{bird.scientificName}</i>
                      </p>
                      <p>Type: {bird.type}</p>
                      <p>
                        Group: {bird.vSType} ({bird.sType})
                      </p>
                      <p>Size: {bird.specificSize}</p>
                      <p>Color(s): {bird.color}</p>
                      <p>Characteristics: {bird.characteristics}</p>
                      <p>State(s): {bird.location}</p>

                      <a href={bird.site} target="_blank">
                        Click here to research more about {bird.species}!
                      </a>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </React.Fragment>
    );
  }
}
