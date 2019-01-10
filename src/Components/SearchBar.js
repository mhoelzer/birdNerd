import React, { Component } from "react";
import { Search, Grid, Header, Segment, Modal, Image } from "semantic-ui-react";
import _ from "lodash";
import load from "../Helpers/spreadsheet.js";
import { connect } from "react-redux";
import { getBirdData } from "../Actions/action";

// const source = _.times(1, () => ({
//   species: bird[0],
//   description: bird[0],
//   image:
//     "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/46634212_2193807474191913_9099061131959336960_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-2.xx&oh=402d33cf691aa9f037e86ea9ed642974&oe=5CD64E00"
// }));

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
    document.getElementById("search").focus();
  };

  state = { result: {} };

  componentDidMount() {
    this.props.getBirdData();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ result: result, showModal: true });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.species);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.bird, isMatch)
      });
    }, 300);
  };
  render() {
    const { isLoading, value, results, showModal, result } = this.state;

    return (
      <React.Fragment>
        <Modal
          size={"tiny"}
          open={this.state.showModal}
          closeOnDimmerClick={true}
          closeIcon
          onClose={this.handleCloseModal}
        >
          <Modal.Header>{result.species}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={result.image} />
            <Modal.Description>
              <Header>{result.species}</Header>
              <p>
                Scientific Name: <i>{result.scientificName}</i>
              </p>
              <p>State(s): {result.location}</p>
              <p>Type: {result.type}</p>

              <a href={result.site} target="_blank">
                Click here to research more about {result.species}!
              </a>
            </Modal.Description>
          </Modal.Content>
        </Modal>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Search
            id="search"
            loading={isLoading}
            size={"massive"}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            ref={this.searchBar}
            // {...this.props}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    bird: state.bird.map(bird => {
      bird.description = bird.species;
      return bird;
    })
  };
};

const mapDispatchToProps = dispatch => {
  return { getBirdData: () => dispatch(getBirdData()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
