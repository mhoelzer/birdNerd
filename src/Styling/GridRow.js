import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class GridRow extends Component {
  render() {
    return (
      <Grid container stackable>
        <Grid.Row>{this.props.children}</Grid.Row>
      </Grid>
    );
  }
}

export default GridRow;
