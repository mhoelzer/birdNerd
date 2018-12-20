import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBarSecondary from "./NavBarSecondary.js";
import SearchBar from "./SearchBar";
import ComposeEntry from "./ComposeEntry";
import Profile from "./Profile";
import Notebook from "./Notebook";
// import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div>
        <Route component={NavBarSecondary} />
        <Switch>
          <Route exact path="/" render={() => <SearchBar />} />
          <Route path="/composeEntry" render={() => <ComposeEntry />} />
          <Route path="/notebook" render={() => <Notebook />} />
          <Route path="/profile" render={() => <Profile />} />
          {/* <Route path="/register" render={() => <Register />} /> */}
          {/* <Route path="/identifier" render={() => <Identifier />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
