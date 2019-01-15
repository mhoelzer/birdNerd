import React, { Component } from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { getBirdData } from "../Actions/action";
import BirdCards from "./BirdCards";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const styles = {
  cardPosition: {
    margin: "40px",
    padding: "20px"
  }
};

class Birdydex extends Component {
  componentDidMount() {
    this.props.getBirdData()
  }
  render() {
    console.log(this.props.bird);
    const { birds, error } = this.props;
    // if (error) {
    //   return <div>{error.message}</div>;
    // }
    return (
      <div>
        <BirdCards birds={birds} />;
        <ScrollUpButton className="scroll" style={{border: "5px solid #6FB0CE "}} />
      </div>
      
    )
      
  }
}

const mapStateToProps = state => {
  return {
    birds: state.bird
  };
};
const mapDispatchToProps = (dispatch) => {
  return { getBirdData: () => dispatch(getBirdData()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Birdydex);
