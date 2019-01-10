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
import { composeEntry } from "../Actions/composeEntryAction";

class ComposeEntry extends Component {
  state = {
    // image:
    birdName: "",
    date: "",
    theDeets: "",
    location: "",
    modalOpen: false,
    closeOnDimmerClick: true
  };

  // action/reducers
  handleChangeComposeEntry = (e, { value }) =>
    this.setState({ [e.target.name]: value });

  handleSubmit = (e, { value }) => {
    this.props.composeEntry({ ...this.state });
  };

  // modal
  handleOpen = () =>
    this.setState({ closeOnDimmerClick: false, modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { closeOnDimmerClick, modalOpen } = this.state;

    return (
      <Modal
        trigger={
          <Button className="submit-button" onClick={this.handleOpen}>
            <Icon name="sticky note " /> Add Entry
          </Button>
        }
        open={modalOpen}
        closeOnDimmerClick={closeOnDimmerClick}
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
              onChange={this.handleChangeComposeEntry}
              name="birdName"
              fluid
              label="Bird Name"
              placeholder="Bird Name"
            />
            <Form.Input
              onChange={this.handleChangeComposeEntry}
              name="date"
              fluid
              label="Date"
              placeholder="Date of Discovery"
            />
            <Form.Input
              onChange={this.handleChangeComposeEntry}
              name="location"
              fluid
              label="Location"
              placeholder="Where did you see this bird?"
            />
            <Form.TextArea
              onChange={this.handleChangeComposeEntry}
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
            <Button
              color="red"
              className="cancel-button"
              onClick={this.handleClose}
            >
              <Icon name="remove" /> Nevermind!
            </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     userID: state.userID
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     composeEntry: (birdName, date, theDeets, location) => {
//       dispatch(composeEntry(birdName, date, theDeets, location));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ComposeEntry);

export default ComposeEntry;
