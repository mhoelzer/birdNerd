import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Modal,
  Segment,
} from "semantic-ui-react";
import {connect} from "react-redux"
import { composeEntry } from "../Actions/composeEntryAction";

class ComposeEntry extends Component {
  state = {
    // image:
    birdname: "",
    date: "",
    details: "",
    location: "",
    modalOpen: false,
    closeOnDimmerClick: true
  };

  // action/reducers
  handleChangeComposeEntry = (e, { value }) =>
    this.setState({ [e.target.name]: value });

  handleSubmit = (e, { value }) => {
    this.props.composeEntry({ ...this.state })
    .then(data => {
      this.setState({modalOpen: false})
      
  })
    
  };

  // modal
  handleOpen = () =>
    this.setState({ closeOnDimmerClick: false, modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  formatDate = date => {
    var monthNames = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.substring(8, 10);
    var monthIndex = parseInt(date.substring(5, 7), 10);
    var year = date.substring(0, 4);
    var time = "";
    if (date.substring(11, 13) > 12) {
      time = date.substring(11, 13) - 12 + date.substring(13, 16) + " PM";
    } else {
      time = date.substring(11, 16) + " AM";
    }

    return day + " " + monthNames[monthIndex] + " " + year + " at " + time;
  };

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
        <Header textAlign="center" verticalAlign="middle" as="h1">
          What's the Word on the Birds?
        </Header>
        <Form size="large">
          <Segment color="grey">
            <Form.Input
              onChange={this.handleChangeComposeEntry}
              name="birdname"
              fluid
              label="Bird Name"
              placeholder="Bird Name"
            />
            <Form.Input
              onChange={this.handleChangeComposeEntry}
              name="date"
              type="date"
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
              name="details"
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

const mapStateToProps = state => {
  return {
    userID: state.userID
  };
}

const mapDispatchToProps = dispatch => {
  return {
    composeEntry: (entryData) => {
      return dispatch(composeEntry(entryData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeEntry);

