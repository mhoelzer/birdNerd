import React, { Component } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";

class ComposeEntry extends Component {
  state = {
    // image: 
    birdName: "",
    date: "",
    theDeets: "",
    location: ""
  };

  handleMessageSubmit = event => {
    this.setState({ theDeets: event.target.value });
  };

  handleComposeMessageProfileButton = event => {
    this.props.composeMessage(this.state.theDeets);
    this.setState({ theDeets: "" });
  };

  render() {
    return (
      <Form
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TextArea
          placeholder="What would you like to Kweet about today?"
          onChange={this.handleMessageSubmit}
          value={this.state.theDeets}
          maxLength="255"
          style={{ maxWidth: "36em" }}
        />
        <Button
          style={{
            color: "rgb(45,45,45)",
            padding: "5px"
          }}
          onClick={this.handleComposeMessageProfileButton}
        >
          Add Entry
        </Button>
      </Form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     userID: state.userID
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     composeMessage: theDeets => {
//       dispatch(composeMessage(theDeets));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ComposeEntry);

export default ComposeEntry;
