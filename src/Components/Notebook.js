import React, { Component } from "react";
import NotebookEntry from "./NotebookEntry";
import GridRow from "../Styling/GridRow";
import { Grid } from "semantic-ui-react";

class Notebook extends Component {
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
              text={message.text}
              username={message.username}
              toggleLike={() => this.props.toggleLike(message.id)}
              numOfLikes={message.likes.length}
              isLiked={message.isLiked}
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
//     },
//     toggleLike: messageId => dispatch(toggleLike(messageId))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MessagesList);
export default Notebook;