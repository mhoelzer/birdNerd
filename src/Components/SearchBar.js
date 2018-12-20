import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import _ from "lodash";

const source = _.times(1, () => ({
  name: "Austin Levine",
  description: "Austin - Badass",
  image:
    "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/46634212_2193807474191913_9099061131959336960_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-2.xx&oh=402d33cf691aa9f037e86ea9ed642974&oe=5CD64E00",
  price: "$1999.99"
}));

export default class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };
  render() {
    const { isLoading, value, results } = this.state;

    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Search
          loading={isLoading}
          size={"massive"}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          {...this.props}
        />
      </div>
    );
  }
}
