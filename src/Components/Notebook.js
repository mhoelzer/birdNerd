import React, { Component } from "react";
import NotebookEntry from "./NotebookEntry";
import GridRow from "../Styling/GridRow";
import { Grid } from "semantic-ui-react";
import {connect} from "react-redux"
import {getNotebookEntries} from "../Actions/action"

class Notebook extends Component {
  // puts in redux state after running action crreator
    componentDidMount() {
      this.props.getNotebookEntries();
    }
  render() {
    return (
      <GridRow>
        <Grid.Column>
          {this.props.notebookEntries.map(notebookEntry => (
            <NotebookEntry
              key={notebookEntry.id}
              birdname={notebookEntry.birdname}
              details={notebookEntry.details}
              date={notebookEntry.date}
              location={notebookEntry.location}
            />
          ))}
        </Grid.Column>
      </GridRow>
    );
  }
}

const mapStateToProps = state => {
  return {
    notebookEntries: state.notebookEntries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotebookEntries: () => {
      dispatch(getNotebookEntries());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);

// export default Notebook;
