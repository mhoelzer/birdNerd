import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Modal,
  Segment,
  TextArea
} from "semantic-ui-react";

class ComposeEntry extends Component {
  state = {
    // image:
    birdName: "",
    date: "",
    theDeets: "",
    location: "",
    modalOpen: false
  };

  // handleMessageSubmit = event => {
  //   this.setState({ theDeets: event.target.value });
  // };

  // handleComposeMessageProfileButton = event => {
  //   this.props.composeMessage(this.state.theDeets);
  //   this.setState({ theDeets: "" });
  // };

  handleChange = (e, { value }) => this.setState({ [e.target.name]: value });
  handleSubmit = (e, { value }) => {
    this.props.updateUser({ ...this.state });
  };
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button className="submit-button" onClick={this.handleOpen}>
            <Icon name="sticky note " /> Add Entry
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header
          textAlign="center"
          verticalAlign="middle"
          icon="trash alternate outline"
          as="h1"
        >
          What's the Word on the Birds?
        </Header>
        <Form size="large">
          <Segment color="grey">
            <Form.Input
              onChange={this.handleChange}
              name="birdNAme"
              fluid
              label="Bird Name"
              placeholder="Bird Name"
            />
            <Form.Input
              onChange={this.handleChange}
              name="date"
              fluid
              label="Date"
              placeholder="Date of Discovery"
            />
            <Form.Input
              onChange={this.handleChange}
              name="location"
              fluid
              label="Location"
              placeholder="Where did you see this bird?"
            />
            <Form.TextArea
              onChange={this.handleChange}
              name="theDeets"
              label="Details"
              placeholder="What happened when you met this bird?"
              autoHeight
              rows={5}
            />
            <div>this si wehere the image uploader will go</div>
          </Segment>
        </Form>
        <Modal.Actions>
          <Button.Group fluid>
            <Button className="submit-button" onClick={this.handleSubmit}>
              <Icon name="sticky note " /> Add Entry
            </Button>
            <Button.Or />
            <Button color="red" className="cancel-button" onClick={this.handleClose}>
              <Icon name="remove" /> Nevermind!
            </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
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
