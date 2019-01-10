import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getBirdData } from "../Actions/action";

const styles = {
  cardPosition: {
    margin: "40px",
    padding: "20px"
  }
};

class Birdydex extends Component {
  componentDidMount() {
    this.props.getBirdData();
  }

  render() {
    console.log(this.props.bird);
    const { bird, error } = this.props;
    // if (error) {
    //   return <div>{error.message}</div>;
    // }
    return (
      <Card.Group className="birdydex">
        {bird.map((bird, i) => (
          <Card style={styles.cardPosition} className="bird-card">
            <Card.Content>
              <h2>{bird.species}</h2>
              <br />
              <img src={bird.image} className="thumbnail" />
              {/* <p>Color: {bird.color}</p>
              <br />
              <p>Size: {bird.size}</p> */}
              <br />
              <Modal
                size={"tiny"}
                trigger={<Button className="more-info">More Info</Button>}
                closeIcon
              >
                <Modal.Header>{bird.species}</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size="medium" src={bird.image} />
                  <Modal.Description>
                    <Header>{bird.species}</Header>
                    <p>
                      Scientific Name: <i>{bird.scientificName}</i>
                    </p>
                    <p>State(s): {bird.location}</p>
                    <p>Type: {bird.type}</p>
                    <p>Size: {bird.size}</p>
                    <p>Characteristics: {bird.characteristics}</p>

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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { getBirdData: () => dispatch(getBirdData()) };
};

const mapStateToProps = state => {
  return { bird: state.bird, error: state.error };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Birdydex);
