import React from "react";
import Home from "./components/Home";
import Chat from "./components/Chat";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

const Routes = () => {
  const history = useHistory();
  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
};

export default Routes;
