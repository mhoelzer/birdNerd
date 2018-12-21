import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.js";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Notebook from "./Notebook";
import EditProfile from "./EditProfile";
import Login from "./Login";
// import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={() => <SearchBar />} />
          <Route path="/notebook" render={() => <Notebook />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/edit" render={() => <EditProfile />} />
          <Route path="/Login" render={() => <Login />} />
          {/* <Route path="/register" render={() => <Register />} /> */}
          {/* <Route path="/advanced" render={() => <Identifier />} /> */}
          {/* <Route path="/birdidex" render={() => <Identifier />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
