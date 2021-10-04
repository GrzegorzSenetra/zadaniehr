import * as React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import BlocksView from "./views/BlocksView";
import HousesView from "./views/HousesView";
import House from "./views/House";
// import { COUNTRIES_BY_NAME_LINK } from "./endpoints";
// import { CountryNameAndCode } from "./types";

const history = createHistory();

function RouterComponent() {

    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route
                path="/houses"
                render={() => (
                    <HousesView />
                )}
            />
            <Route
              path="/house/:houseid"
              render={(props) => <House {...props} />}
            />
            <Route
              path="/"
              render={() => (
                <BlocksView />
              )}
            />
            
          </Switch>
        </div>
      </Router>
    );

}

export default RouterComponent