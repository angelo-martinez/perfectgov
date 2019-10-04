import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./js/views/Home";
import { Header } from "./js/components/Header";
import { Sidebar } from "./js/components/Sidebar";

import injectContext from "./js/store/appContext";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <div><Header /> <Sidebar /> <h1>Not found!</h1></div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default injectContext(App);
