import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./js/views/Home";

import injectContext from "./js/store/appContext";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default injectContext(App);
