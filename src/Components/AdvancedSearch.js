import React, { Component } from "react";
import {
  Dropdown,
  Menu,
  Checkbox,
  Accordion,
  Icon,
  Form,
  FormCheckbox
} from "semantic-ui-react";
import BirdCards from "./BirdCards";
import { connect } from "react-redux";
import { getBirdData } from "../Actions/action";
import Birdydex from "./Birdydex";
// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const stateOptions = [
  { text: "Alabama", key: "AL", value: "AL" },
  { text: "Alaska", key: "AK", value: "AK" },
  { text: "Arizona", key: "AZ", value: "AZ" },
  { text: "Arkansas", key: "AR", value: "AR" },
  { text: "California", key: "CA", value: "CA" },
  { text: "Colorado", key: "CO", value: "CO" },
  { text: "Connecticut", key: "CT", value: "CT" },
  { text: "Delaware", key: "DE", value: "DE" },
  { text: "Florida", key: "FL", value: "FL" },
  { text: "Georgia", key: "GA", value: "GA" },
  { text: "Hawaii", key: "HI", value: "HI" },
  { text: "Idaho", key: "ID", value: "ID" },
  { text: "Illnois", key: "IL", value: "IL" },
  { text: "Indiana", key: "IN", value: "IN" },
  { text: "Iowa", key: "IA", value: "IA" },
  { text: "Kansas", key: "KS", value: "KS" },
  { text: "Kentucky", key: "KY", value: "KY" },
  { text: "Louisiana", key: "LA", value: "LA" },
  { text: "Maine", key: "ME", value: "ME" },
  { text: "Maryland", key: "MD", value: "MD" },
  { text: "Massachusetts", key: "MA", value: "MA" },
  { text: "Michigan", key: "MI", value: "MI" },
  { text: "Minnesota", key: "MN", value: "MN" },
  { text: "Mississippi", key: "MS", value: "MS" },
  { text: "Missouri", key: "MO", value: "MO" },
  { text: "Montana", name: "MT", value: "MT" },
  { text: "Nebraska", key: "NE", value: "NE" },
  { text: "Nevada", key: "NV", value: "NV" },
  { text: "New Hampshire", key: "NH", value: "NH" },
  { text: "New Jersey", key: "NJ", value: "NJ" },
  { text: "New Mexico", key: "NM", value: "NM" },
  { text: "New York", key: "NY", value: "NY" },
  { text: "North Carolina", key: "NC", value: "NC" },
  { text: "North Dakota", key: "ND", value: "ND" },
  { text: "Ohio", key: "OH", value: "OH" },
  { text: "Oklahoma", key: "OK", value: "OK" },
  { text: "Oregon", key: "OR", value: "OR" },
  { text: "Pennsylvania", key: "PA", value: "PA" },
  { text: "Rhode Island", key: "RI", value: "RI" },
  { text: "South Carolina", key: "SC", value: "SC" },
  { text: "South Dakota", key: "SD", value: "SD" },
  { text: "Tennessee", key: "TN", value: "TN" },
  { text: "Texas", key: "TX", value: "TX" },
  { text: "Utah", key: "UT", value: "UT" },
  { text: "Vermont", key: "VT", value: "VT" },
  { text: "Virginia", key: "VA", value: "VA" },
  { text: "Washington", key: "WA", value: "WA" },
  { text: "West Virginia", key: "WV", value: "WV" },
  { text: "Wisconsin", key: "WI", value: "WI" },
  { text: "Wyoming", key: "WY", value: "WY" }
];

class AdvancedSearch extends Component {
  state = { activeIndex: 0, filterBirds: this.props.birds && [] };
  componentDidMount() {
    this.props.getBirdData();
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.birds !== prevProps.birds) {
      this.setState({ filterBirds: this.props.birds });
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleFilter = event => {
    const colorToFind = event.currentTarget.getElementsByTagName("input")[0]
      .value;
    const checked = event.currentTarget.getElementsByTagName("input")[0]
      .checked;
    if (checked === true) {
      //filter
      this.filters.push(colorToFind);
      this.setState({
        filterBirds: this.filterColor(this.filters, this.props.birds)
      });
    } else {
      //unfilter
      this.filters.splice(
        this.filters.findIndex(color => color === colorToFind),
        1
      );
      this.setState({
        filterBirds: this.filterColor(this.filters, this.props.birds)
      });
    }
  };

  filters = [];

  filterColor(filters, birds) {
    return birds.filter(bird => {
      return filters.every(filterColor =>
        bird.color
          .split(",")
          .map(word => word.trim())
          .includes(filterColor)
      );
    });
  }
  // handleFilterCharacteristics= event => {
  //     const characteristicToFind = event.currentTarget.getElementsByTagName("input")[0].value
  //     const checkedTwo = event.currentTarget.getElementsByTagName("input")[0].checkedTwo
  //       if (checkedTwo === true){
  //           //filter
  //           this.setState({filterBirds: this.props.birds.filter(bird => {
  //               console.log(bird)
  //               const returnCharcteristic = bird.characteristics.split(",").find(characteristics => {
  //                   return characteristics === characteristicToFind
  //               })
  //               if (returnCharcteristic){
  //                   return true
  //               }
  //               else{
  //                   return false
  //               }
  //           })})
  //       }
  //       else{
  //           //unfilter
  //           this.setState({filterBirds: this.props.birds})
  //       }

  //   }
  render() {
    const { activeIndex } = this.state;
    return (
      <React.Fragment>
        <Accordion as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 0}
              content="colors"
              index={0}
              onClick={this.handleClick}
            />
            <Accordion.Content
              active={activeIndex === 0}
              content={
                <Form>
                  <Form.Group grouped>
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="Dark Brown"
                      name="color"
                      value="d-brown"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="light brown"
                      name="color"
                      value="l-brown"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="violet"
                      name="color"
                      value="violet"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="blue"
                      name="color"
                      value="blue"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="brown"
                      name="color"
                      value="brown"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="orange"
                      name="color"
                      value="orange"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="red"
                      name="color"
                      value="red"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="white"
                      name="color"
                      value="white"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="red-brown"
                      name="color"
                      value="red-brown"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="black"
                      name="color"
                      value="black"
                    />
                    <Form.Checkbox
                      onClick={this.handleFilter}
                      label="gray"
                      name="color"
                      value="gray"
                    />
                  </Form.Group>
                </Form>
              }
            />
          </Menu.Item>
        </Accordion>
        <Accordion as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 1}
              content="characteristics"
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content
              active={activeIndex === 1}
              content={
                <Form>
                  <Form.Group grouped>
                    <Form.Checkbox
                      onClick={this.handleFilterCharacteristics}
                      label="Ears"
                      name="characteristics"
                      value="ears"
                    />
                    <Form.Checkbox
                      label="Long tail"
                      name="characteristics"
                      value="Long tail"
                    />
                    <Form.Checkbox
                      label="Long legs"
                      name="characteristis"
                      value="Long legs"
                    />
                    <Form.Checkbox
                      label="Long neck"
                      name="characteristics"
                      value="Long neck"
                    />
                    <Form.Checkbox
                      label="Bare face/head"
                      name="characteristics"
                      value="Bare face/head"
                    />
                    <Form.Checkbox
                      label="Crest"
                      name="characteristics"
                      value="Crest"
                    />
                    <Form.Checkbox
                      label="Black mask/cap/bib"
                      name="characteristics"
                      value="Black mask/cap/bib"
                    />
                    <Form.Checkbox
                      label="Iridescent"
                      name="characteristics"
                      value="Iridescent"
                    />
                    <Form.Checkbox
                      label="Collar"
                      name="characteristics"
                      value="Collar"
                    />
                    <Form.Checkbox
                      label="Whiskers"
                      name="characteristics"
                      value="Whiskers"
                    />
                    <Form.Checkbox
                      label="Webbed feet"
                      name="characteristics"
                      value="Webbed feet"
                    />
                    <Form.Checkbox
                      label="Yellow eyes"
                      name="characteristics"
                      value="Yellow eyes"
                    />
                    <Form.Checkbox
                      label="Yellow beak"
                      name="characteristics"
                      value="Yellow beak"
                    />
                    <Form.Checkbox
                      label="Yellow feet"
                      name="characteristics"
                      value="Yellow feet"
                    />
                    <Form.Checkbox
                      label="Yellow legs"
                      name="characteristics"
                      value="Yellow legs"
                    />
                    <Form.Checkbox
                      label="Yellow eye ring"
                      name="characteristics"
                      value="Yellow eye ring"
                    />
                    <Form.Checkbox
                      label="Red eyes"
                      name="characteristics"
                      value="Red eyes"
                    />
                    <Form.Checkbox
                      label="Red eye ring"
                      name="characteristics"
                      value="Red eye ring"
                    />
                    <Form.Checkbox
                      label="Red beak"
                      name="characteristics"
                      value="Red beak"
                    />
                    <Form.Checkbox
                      label="Red feet"
                      name="characteristics"
                      value="Red feet"
                    />
                    <Form.Checkbox
                      label="Red legs"
                      name="characteristics"
                      value="Red legs"
                    />
                    <Form.Checkbox
                      label="Orange eyes"
                      name="characteristics"
                      value="Orange eyes"
                    />
                    <Form.Checkbox
                      label="Orange beak"
                      name="characteristics"
                      value="Orange beak"
                    />
                    <Form.Checkbox
                      label="Orange feet"
                      name="characteristics"
                      value="Orange feet"
                    />
                    <Form.Checkbox
                      label="Orange legs"
                      name="characteristics"
                      value="Orang legs"
                    />
                    <Form.Checkbox
                      label="White eyes"
                      name="characteristics"
                      value="White eyes"
                    />
                    <Form.Checkbox
                      label="White eye ring"
                      name="characteristics"
                      value="White eye ring"
                    />
                    <Form.Checkbox
                      label="Pink beak"
                      name="characteristics"
                      value="Pink beak"
                    />
                    <Form.Checkbox
                      label="Pink feet"
                      name="characteristics"
                      value="Pink feet"
                    />
                    <Form.Checkbox
                      label="Pink legs"
                      name="characteristics"
                      value="Pink legs"
                    />
                    <Form.Checkbox
                      label="Blue eyes"
                      name="characteristics"
                      value="Blue eyes"
                    />
                    <Form.Checkbox
                      label="Blue eye ring"
                      name="characteristics"
                      value="Blue eye ring"
                    />
                    <Form.Checkbox
                      label="Blue beak"
                      name="characteristics"
                      value="Blue beak"
                    />
                    <Form.Checkbox
                      label="Blue feet"
                      name="characteristics"
                      value="Blue feet"
                    />
                    <Form.Checkbox
                      label="Blue legs"
                      name="characteristics"
                      value="Blue legs"
                    />
                    <Form.Checkbox
                      label="Black eye ring"
                      name="characteristics"
                      value="Black eye ring"
                    />
                  </Form.Group>
                </Form>
              }
            />
          </Menu.Item>
        </Accordion>
        <Dropdown
          placeholder="stateOptions"
          fluid
          multiple
          selection
          options={stateOptions}
        />
        <Accordion as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 2}
              content="Size"
              index={2}
              onClick={this.handleClick}
            />
            <Accordion.Content
              active={activeIndex === 2}
              content={
                <Form>
                  <Form.Group grouped>
                    <Form.Checkbox
                      label="tiny"
                      name="Size(specific)"
                      value="tiny"
                    />
                    <Form.Checkbox
                      label="small"
                      name="Size(specific)"
                      value="small"
                    />
                    <Form.Checkbox
                      label="medium"
                      name="Size(specific)"
                      value="medium"
                    />
                    <Form.Checkbox
                      label="medium-large"
                      name="Size(specific)"
                      value="medium-large"
                    />
                    <Form.Checkbox
                      label="large"
                      name="Size(specific)"
                      value="large"
                    />
                    <Form.Checkbox
                      label="giant"
                      name="Size(specific)"
                      value="giant"
                    />
                  </Form.Group>
                </Form>
              }
            />
          </Menu.Item>
        </Accordion>
        <Accordion as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={activeIndex === 3}
              content="Type"
              index={3}
              onClick={this.handleClick}
            />
            <Accordion.Content
              active={activeIndex === 3}
              content={
                <Form>
                  <Form.Group grouped>
                    <Form.Checkbox
                      label="Owl"
                      name="Type(specific)"
                      value="Owl"
                    />
                    <Form.Checkbox
                      label="Eagle"
                      name="Type(specific)"
                      value="Eagle"
                    />
                    <Form.Checkbox
                      label="Hawk"
                      name="Type(specific)"
                      value="Hawk"
                    />
                    <Form.Checkbox
                      label="Kite"
                      name="Type(specific)"
                      value="Kite"
                    />
                    <Form.Checkbox
                      label="Osprey"
                      name="Type(specific)"
                      value="Osprey"
                    />
                    <Form.Checkbox
                      label="New World Vulture"
                      name="Type(specific)"
                      value="New World Vulture"
                    />
                    <Form.Checkbox
                      label="Falcon"
                      name="Type(specific)"
                      value="Falcon"
                    />
                    <Form.Checkbox
                      label="Woodpecker"
                      name="Type(specific)"
                      value="Woodpecker"
                    />
                    <Form.Checkbox
                      label="Chickadee, Titmouse"
                      name="Type(specific)"
                      value="Chickadee, Titmouse"
                    />
                    <Form.Checkbox
                      label="Bushtit"
                      name="Type(specific)"
                      value="Bushtit"
                    />
                    <Form.Checkbox
                      label="Verdin"
                      name="Type(specific)"
                      value="Verdin"
                    />
                    <Form.Checkbox
                      label="Wren or Nuthatch"
                      name="Type(specific)"
                      value="Wren or Nuthatch"
                    />
                    <Form.Checkbox
                      label="Dipper"
                      name="Type(specific)"
                      value="Dipper"
                    />
                    <Form.Checkbox
                      label="Kinglet"
                      name="Type(specific)"
                      value="Kinglet"
                    />
                    <Form.Checkbox
                      label="Thrush"
                      name="Type(specific)"
                      value="Thrush"
                    />
                    <Form.Checkbox
                      label="Mockingbird or Thrasher"
                      name="Type(specific)"
                      value="Mockingbird or Thrash"
                    />
                    <Form.Checkbox
                      label="Bulbul"
                      name="Type(specific)"
                      value="Bulbul"
                    />
                    <Form.Checkbox
                      label="Starling or Myna"
                      name="Type(specific)"
                      value="Starling or Myna "
                    />
                    <Form.Checkbox
                      label="Nightjar"
                      name="Type(specific)"
                      value="Nightjar"
                    />
                    <Form.Checkbox
                      label="Swift"
                      name="Type(specific)"
                      value="Swift"
                    />
                    <Form.Checkbox
                      label="Trogon"
                      name="Type(specific)"
                      value="Trogon"
                    />
                    <Form.Checkbox
                      label="Hummingbird"
                      name="Type(specific)"
                      value="Hummingbird"
                    />
                    <Form.Checkbox
                      label="Cuckoo, Roadrunner, Ani"
                      name="Type(specific)"
                      value="Cuckoo, Roadrunner, Ani"
                    />
                    <Form.Checkbox
                      label="Pigeon or Dove"
                      name="Type(specific)"
                      value="Pigeon or Dove"
                    />
                    <Form.Checkbox
                      label="Chachalaca"
                      name="Type(specific)"
                      value="Chachalaca"
                    />
                    <Form.Checkbox
                      label="Sandgrouse"
                      name="Type(specific)"
                      value="Sangrouse"
                    />
                    <Form.Checkbox
                      label="Quail, Partridge, or Francolin"
                      name="Type(specific)"
                      value="Quail, Partridge, or Francolin"
                    />
                    <Form.Checkbox
                      label="Pheasants, Junglefowl, Peafowl"
                      name="Type(specific)"
                      value="Pheasants, Junglefowl, Peafowl"
                    />
                    <Form.Checkbox
                      label="Turkey, Grouse, Ptarmigan"
                      name="Type(specific)"
                      value="Turkey, Grouse, Ptarmigan"
                    />
                    <Form.Checkbox
                      label="Flycatcher"
                      name="Type(specific)"
                      value="Flycatcher"
                    />
                    <Form.Checkbox
                      label="Shrike"
                      name="Type(specific)"
                      value="Shrike"
                    />
                    <Form.Checkbox
                      label="Vireo"
                      name="Type(specific)"
                      value="Vireo"
                    />
                    <Form.Checkbox
                      label="Crow, Jay, Magpie"
                      name="Type(specific)"
                      value="Crow, Jay, Magpie"
                    />
                    <Form.Checkbox
                      label="Horned Lark"
                      name="Type(specific)"
                      value="Horned Lark"
                    />
                    <Form.Checkbox
                      label="Swallow"
                      name="Type(specific)"
                      value="Swallow"
                    />
                    <Form.Checkbox
                      label="Gnatcatcher"
                      name="Type(specific)"
                      value="Gnatcatcher"
                    />
                    <Form.Checkbox
                      label="Pipit or Wagtail"
                      name="Type(specific)"
                      value="Pipit or Wagtail"
                    />
                    <Form.Checkbox
                      label="Waxbill"
                      name="Type(specific)"
                      value="Waxbill"
                    />
                    <Form.Checkbox
                      label="Canary"
                      name="Type(specific)"
                      value="Canary"
                    />
                    <Form.Checkbox
                      label="Laughingthrush"
                      name="Type(specific)"
                      value="Laughingthrush"
                    />
                    <Form.Checkbox
                      label="Waxwing or Phainopela"
                      name="Type(specific)"
                      value="Waxwing or Phainopela"
                    />
                    <Form.Checkbox
                      label="Longspur or Snow Bunting"
                      name="Type(specific)"
                      value="Longspur or Snow Bunting"
                    />
                    <Form.Checkbox
                      label="Warbler"
                      name="Type(specific)"
                      value="Warbler"
                    />
                  </Form.Group>
                </Form>
              }
            />
          </Menu.Item>
        </Accordion>

        <BirdCards birds={this.state.filterBirds} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { birds: state.bird, error: state.error };
};
const mapDispatchToProps = dispatch => {
  return { getBirdData: () => dispatch(getBirdData()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch);
