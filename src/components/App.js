import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Header from "./header/header";
import Dashboard from "./dashboard/dashboard";
import Materials from "./materials/materials";
import Applications from "./applications/applications";
import Networking from "./networking/networking";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/materials/" component={Materials} />
            <Route exact path="/applications/" component={Applications} />
            <Route exact path="/networking/" component={Networking} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
