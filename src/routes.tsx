import createHistory from "history/createBrowserHistory";
import React, { Component, Fragment } from "react";
import { Route, Router, Switch } from "react-router-dom";

import MainView from "./views/mainview/index";
import View2 from "./views/view2/index";
import View3 from "./views/view3/index";
import YouAreLost from "./views/you-are-lost/index";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/2" component={View2} />
            <Route exact path="/3" component={View3} />
            <Route path="**" component={YouAreLost} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
