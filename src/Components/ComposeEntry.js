import React, { Component } from "react";
import { Button, Form, Icon, Segment, TextArea } from "semantic-ui-react";

class ComposeEntry extends Component {
  state = {
    // image:
    birdName: "",
    date: "",
    theDeets: "",
    location: ""
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

  render() {
    return (
      // <Form
      //   style={{
      //     display: "flex",
      //     justifyContent: "center"
      //   }}
      // >
      //   <TextArea
      //     placeholder="What would you like to Kweet about today?"
      //     onChange={this.handleMessageSubmit}
      //     value={this.state.theDeets}
      //     maxLength="255"
      //     style={{ maxWidth: "36em" }}
      //   />
      //   <Button
      //     style={{
      //       color: "rgb(45,45,45)",
      //       padding: "5px"
      //     }}
      //     onClick={this.handleComposeMessageProfileButton}
      //   >
      //     Add Entry
      //   </Button>
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
            <Form.Button color="blue" onClick={this.handleSubmit}>
              <Icon name="sticky note " /> Add Entry
            </Form.Button>
            {/* <DeleteUser /> */}
          </Segment>
        </Form>
      // </Form>
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
