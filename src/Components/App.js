import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.js";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Notebook from "./Notebook";
import EditProfile from "./EditProfile";
import Login from "./Login";
import Register from "./Register";
import Birdydex from "./Birdydex";

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={() => <SearchBar />} />
          <Route path="/notebook" render={() => <Notebook />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/editprofile" render={() => <EditProfile />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/birdidex" render={() => <Birdydex />} />
          {/* <Route path="/advanced" render={() => <Identifier />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;