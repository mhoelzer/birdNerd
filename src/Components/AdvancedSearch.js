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
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

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
  { text: "Illinois", key: "IL", value: "IL" },
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
  { text: "Montana", key: "MT", name: "MT", value: "MT" },
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
  state = { activeIndex: 0, filterBirds: this.props.birds && [], value: "" };
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
    if (checked !== true) {
      //filter
      this.filters.push(colorToFind);
      this.setState({
        filterBirds: this.filterColor(
          this.filters,
          this.filterState(this.state.value, this.props.birds)
        )
      });
    } else {
      //unfilter
      this.filters.splice(
        this.filters.findIndex(color => color === colorToFind),
        1
      );
      this.setState({
        filterBirds: this.filterColor(
          this.filters,
          this.filterState(this.state.value, this.props.birds)
        )
      });
    }
  };
  handleFilter2 = (event, { value }) => {
    this.setState({
      filterBirds: this.filterState(
        value,
        this.filterColor(this.filters, this.props.birds)
      ),
      value
    });
  };

  filters = [];

  filterColor(filters, birds) {
    if (filters.length === 0) return birds;
    return birds.filter(bird => {
      return filters.every(filterColor =>
        bird.color
          .split(",")
          .map(word => word.trim())
          .includes(filterColor)
      );
    });
  }
  filterState(filter, birds) {
    if (filter === "") return birds;
    return birds.filter(bird => {
      return bird.location
        .split(",")
        .map(word => word.trim())
        .includes(filter);
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
        <div className="filter-total">
          <div className="filter-advanced">
            <Accordion as={Menu} vertical>
              <Menu.Item>
                <Accordion.Title
                  active={activeIndex === 0}
                  content="Colors"
                  index={0}
                  onClick={this.handleClick}
                />
                <Accordion.Content
                  active={activeIndex === 0}
                  content={
                    <Form>
                      <Form.Group grouped>
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Black"
                          name="color"
                          value="black"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Blue"
                          name="color"
                          value="blue"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Blue-gray"
                          name="color"
                          value="blue-gray"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Dark Brown"
                          name="color"
                          value="dark brown"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Gray"
                          name="color"
                          value="gray"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Green"
                          name="color"
                          value="green"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Light Brown"
                          name="color"
                          value="light brown"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Orange"
                          name="color"
                          value="orange"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Pink"
                          name="color"
                          value="pink"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Red"
                          name="color"
                          value="red"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Red-brown"
                          name="color"
                          value="red-brown"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Violet"
                          name="color"
                          value="violet"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="White"
                          name="color"
                          value="white"
                        />
                        <Form.Checkbox
                          onChange={this.handleFilter}
                          label="Yellow"
                          name="color"
                          value="yellow"
                        />
                      </Form.Group>
                    </Form>
                  }
                />
              </Menu.Item>
            </Accordion>
            {/* <Accordion as={Menu} vertical>
              <Menu.Item>
                <Accordion.Title
                  active={activeIndex === 1}
                  content="Characteristics"
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
                          label="Ear tufts"
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
                          value="Orange legs"
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
            </Accordion> */}
            <Dropdown
              placeholder="-- U.S. State --"
              selection
              options={stateOptions}
              onChange={this.handleFilter2}
              value={this.state.value}
            />
            {/* <Accordion as={Menu} vertical>
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
                          label="Tiny"
                          name="Size(specific)"
                          value="tiny"
                        />
                        <Form.Checkbox
                          label="Small"
                          name="Size(specific)"
                          value="small"
                        />
                        <Form.Checkbox
                          label="Medium"
                          name="Size(specific)"
                          value="medium"
                        />
                        <Form.Checkbox
                          label="Medium-large"
                          name="Size(specific)"
                          value="medium-large"
                        />
                        <Form.Checkbox
                          label="Large"
                          name="Size(specific)"
                          value="large"
                        />
                        <Form.Checkbox
                          label="Giant"
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
                  content="Group/Type"
                  index={3}
                  onClick={this.handleClick}
                />
                <Accordion.Content
                  active={activeIndex === 3}
                  content={
                    <Form>
                      <Form.Group grouped>
                        <Form.Checkbox
                          label="Albatross"
                          name="Type(specific)"
                          value="Albatross"
                        />
                        <Form.Checkbox
                          label="Anhinga"
                          name="Type(specific)"
                          value="Anhinga"
                        />
                        <Form.Checkbox
                          label="Auk, Puffin, or Murre"
                          name="Type(specific)"
                          value="Auk, Puffin, or Murre"
                        />
                        <Form.Checkbox
                          label="Blackbird, Oriole, or Meadowlark"
                          name="Type(specific)"
                          value="Blackbird, Oriole, or Meadowlark"
                        />
                        <Form.Checkbox
                          label="Bulbul"
                          name="Type(specific)"
                          value="Bulbul"
                        />
                        <Form.Checkbox
                          label="Bushtit"
                          name="Type(specific)"
                          value="Bushtit"
                        />
                        <Form.Checkbox
                          label="Canary"
                          name="Type(specific)"
                          value="Canary"
                        />
                        <Form.Checkbox
                          label="Cardinal, Grosbeak, or Bunting"
                          name="Type(specific)"
                          value="Cardinal, Grosbeak, or Bunting"
                        />
                        <Form.Checkbox
                          label="Chachalaca"
                          name="Type(specific)"
                          value="Chachalaca"
                        />
                        <Form.Checkbox
                          label="Chickadee, Titmouse, or Tit"
                          name="Type(specific)"
                          value="Chickadee, Titmouse, or Tit"
                        />
                        <Form.Checkbox
                          label="Cormorant"
                          name="Type(specific)"
                          value="Cormorant"
                        />
                        <Form.Checkbox
                          label="Crane"
                          name="Type(specific)"
                          value="Crane"
                        />
                        <Form.Checkbox
                          label="Crow, Jay, or Magpie"
                          name="Type(specific)"
                          value="Crow, Jay, or Magpie"
                        />
                        <Form.Checkbox
                          label="Cuckoo, Roadrunner, or Ani"
                          name="Type(specific)"
                          value="Cuckoo, Roadrunner, or Ani"
                        />
                        <Form.Checkbox
                          label="Dipper"
                          name="Type(specific)"
                          value="Dipper"
                        />
                        <Form.Checkbox
                          label="Duck"
                          name="Type(specific)"
                          value="Duck"
                        />
                        <Form.Checkbox
                          label="Eagle, Hawk, or Kite"
                          name="Type(specific)"
                          value="Eagle, Hawk, or Kite"
                        />
                        <Form.Checkbox
                          label="Falcon"
                          name="Type(specific)"
                          value="Falcon"
                        />
                        <Form.Checkbox
                          label="Finch or Honeycreeper"
                          name="Type(specific)"
                          value="Finch or Honeycreeper"
                        />
                        <Form.Checkbox
                          label="Flamingo"
                          name="Type(specific)"
                          value="Flamingo"
                        />
                        <Form.Checkbox
                          label="Flycatcher"
                          name="Type(specific)"
                          value="Flycatcher"
                        />
                        <Form.Checkbox
                          label="Frigatebird"
                          name="Type(specific)"
                          value="Frigatebird"
                        />
                        <Form.Checkbox
                          label="Gannet or Booby"
                          name="Type(specific)"
                          value="Gannet or Booby"
                        />
                        <Form.Checkbox
                          label="Gnatcatcher"
                          name="Type(specific)"
                          value="Gnatcatcher"
                        />
                        <Form.Checkbox
                          label="Goose"
                          name="Type(specific)"
                          value="Goose"
                        />
                        <Form.Checkbox
                          label="Grebe"
                          name="Type(specific)"
                          value="Grebe"
                        />
                        <Form.Checkbox
                          label="Gull"
                          name="Type(specific)"
                          value="Gull"
                        />
                        <Form.Checkbox
                          label="Heron, Egret, or Bittern"
                          name="Type(specific)"
                          value="Heron, Egret, or Bittern"
                        />
                        <Form.Checkbox
                          label="Horned Lark"
                          name="Type(specific)"
                          value="Horned Lark"
                        />
                        <Form.Checkbox
                          label="Hummingbird"
                          name="Type(specific)"
                          value="Hummingbird"
                        />
                        <Form.Checkbox
                          label="Ibis"
                          name="Type(specific)"
                          value="Ibis"
                        />
                        <Form.Checkbox
                          label="Kingfisher"
                          name="Type(specific)"
                          value="Kingfisher"
                        />
                        <Form.Checkbox
                          label="Kinglet"
                          name="Type(specific)"
                          value="Kinglet"
                        />
                        <Form.Checkbox
                          label="Laughingthrush"
                          name="Type(specific)"
                          value="Laughingthrush"
                        />
                        <Form.Checkbox
                          label="Limpkin"
                          name="Type(specific)"
                          value="Limpkin"
                        />
                        <Form.Checkbox
                          label="Longspur or Snow Bunting"
                          name="Type(specific)"
                          value="Longspur or Snow Bunting"
                        />
                        <Form.Checkbox
                          label="Loon"
                          name="Type(specific)"
                          value="Loon"
                        />
                        <Form.Checkbox
                          label="Mockingbird or Thrasher"
                          name="Type(specific)"
                          value="Mockingbird or Thrasher"
                        />
                        <Form.Checkbox
                          label="New World Vulture"
                          name="Type(specific)"
                          value="New World Vulture"
                        />
                        <Form.Checkbox
                          label="Nightjar"
                          name="Type(specific)"
                          value="Nightjar"
                        />
                        <Form.Checkbox
                          label="Osprey"
                          name="Type(specific)"
                          value="Osprey"
                        />
                        <Form.Checkbox
                          label="Owl"
                          name="Type(specific)"
                          value="Owl"
                        />
                        <Form.Checkbox
                          label="Oystercatcher"
                          name="Type(specific)"
                          value="Oystercatcher"
                        />
                        <Form.Checkbox
                          label="Parrot"
                          name="Type(specific)"
                          value="Parrot"
                        />
                        <Form.Checkbox
                          label="Pelican"
                          name="Type(specific)"
                          value="Pelican"
                        />
                        <Form.Checkbox
                          label="Petrel or Shearwater"
                          name="Type(specific)"
                          value="Petrel or Shearwater"
                        />
                        <Form.Checkbox
                          label="Pheasants, Junglefowl, or Peafowl"
                          name="Type(specific)"
                          value="Pheasants, Junglefowl, or Peafowl"
                        />
                        <Form.Checkbox
                          label="Pigeon or Dove"
                          name="Type(specific)"
                          value="Pigeon or Dove"
                        />
                        <Form.Checkbox
                          label="Pipit or Wagtail"
                          name="Type(specific)"
                          value="Pipit or Wagtail"
                        />
                        <Form.Checkbox
                          label="Plover"
                          name="Type(specific)"
                          value="Plover"
                        />
                        <Form.Checkbox
                          label="Quail, Partridge, or Francolin"
                          name="Type(specific)"
                          value="Quail, Partridge, or Francolin"
                        />
                        <Form.Checkbox
                          label="Rail, Coot, or Gallinule"
                          name="Type(specific)"
                          value="Rail, Coot, or Gallinule"
                        />
                        <Form.Checkbox
                          label="Sandgrouse"
                          name="Type(specific)"
                          value="Sandgrouse"
                        />
                        <Form.Checkbox
                          label="Sandpiper"
                          name="Type(specific)"
                          value="Sandpiper"
                        />
                        <Form.Checkbox
                          label="Shrike"
                          name="Type(specific)"
                          value="Shrike"
                        />
                        <Form.Checkbox
                          label="Skua or Jaeger"
                          name="Type(specific)"
                          value="Skua or Jaeger"
                        />
                        <Form.Checkbox
                          label="Sparrow, Junco, or Towhee"
                          name="Type(specific)"
                          value="Sparrow, Junco, or Towhee"
                        />
                        <Form.Checkbox
                          label="Starling or Myna"
                          name="Type(specific)"
                          value="Starling or Myna"
                        />
                        <Form.Checkbox
                          label="Stilt or Avocet"
                          name="Type(specific)"
                          value="Stilt or Avocet"
                        />
                        <Form.Checkbox
                          label="Stork"
                          name="Type(specific)"
                          value="Stork"
                        />
                        <Form.Checkbox
                          label="Storm-Petrel"
                          name="Type(specific)"
                          value="Storm-Petrel"
                        />
                        <Form.Checkbox
                          label="Swallow"
                          name="Type(specific)"
                          value="Swallow"
                        />
                        <Form.Checkbox
                          label="Swan"
                          name="Type(specific)"
                          value="Swan"
                        />
                        <Form.Checkbox
                          label="Swift"
                          name="Type(specific)"
                          value="Swift"
                        />
                        <Form.Checkbox
                          label="Tanager"
                          name="Type(specific)"
                          value="Tanager"
                        />
                        <Form.Checkbox
                          label="Tern"
                          name="Type(specific)"
                          value="Tern"
                        />
                        <Form.Checkbox
                          label="Thrush"
                          name="Type(specific)"
                          value="Thrush"
                        />
                        <Form.Checkbox
                          label="Trogon"
                          name="Type(specific)"
                          value="Trogon"
                        />
                        <Form.Checkbox
                          label="Tropicbird"
                          name="Type(specific)"
                          value="Tropicbird"
                        />
                        <Form.Checkbox
                          label="Turkey, Grouse, or Ptarmigan"
                          name="Type(specific)"
                          value="Turkey, Grouse, or Ptarmigan"
                        />
                        <Form.Checkbox
                          label="Verdin"
                          name="Type(specific)"
                          value="Verdin"
                        />
                        <Form.Checkbox
                          label="Vireo"
                          name="Type(specific)"
                          value="Vireo"
                        />
                        <Form.Checkbox
                          label="Warbler"
                          name="Type(specific)"
                          value="Warbler"
                        />
                        <Form.Checkbox
                          label="Waxbill"
                          name="Type(specific)"
                          value="Waxbill"
                        />
                        <Form.Checkbox
                          label="Waxwing or Phainopepla"
                          name="Type(specific)"
                          value="Waxwing or Phainopepla"
                        />
                        <Form.Checkbox
                          label="Weaver"
                          name="Type(specific)"
                          value="Weaver"
                        />
                        <Form.Checkbox
                          label="Woodpecker"
                          name="Type(specific)"
                          value="Woodpecker"
                        />
                        <Form.Checkbox
                          label="Wren or Nuthatch"
                          name="Type(specific)"
                          value="Wren or Nuthatch"
                        />
                      </Form.Group>
                    </Form>
                  }
                />
              </Menu.Item>
            </Accordion> */}
          </div>
          <div className="filter-cards">
            <BirdCards birds={this.state.filterBirds} />
            <ScrollUpButton
              className="scroll"
              style={{ border: "5px solid #6FB0CE" }}
            />
          </div>
        </div>
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
