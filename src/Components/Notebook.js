import React, { Component } from "react";
import NotebookEntry from "./NotebookEntry";
import GridRow from "../Styling/GridRow";
import { Grid } from "semantic-ui-react";

class Notebook extends Component {
  // puts in redux state after running action crreator 
  //   componentDidMount() {
  //     this.props.getMessages();
  //   }
  render() {
    return (
      <GridRow>
        <Grid.Column>
          <div>this is where the NotebookEntry.js will go</div>
          {/* {this.props.messages.map(message => (
            <NotebookEntry
              key={message.id}
              // username={message.username}
              birdName={message.birdName}
              date={message.date}
              location={message.location}
              location={message.location}
            />
          ))} */}
        </Grid.Column>
      </GridRow>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     messages: state.messages.map(message => {
//       const username =
//         (state.users[message.userId] && state.users[message.userId].username) ||
//         "unknown";
//       const like = message.likes.find(
//         like => like.userId === state.authentication.id
//       );
//       if (like) {
//         return {
//           ...message,
//           username,
//           isLiked: true
//         };
//       } else {
//         return {
//           ...message,
//           username,
//           isLiked: false
//         };
//       }
//     })
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getMessages: () => {
//       dispatch(getMessages());
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Notebook);

export default Notebook;