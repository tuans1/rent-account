import React from 'react';
import Home from './containers/home';
import Staff from './containers/staff';
import Menu from './containers/menu';
import Summary from './containers/summary';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="d-flex">
          <Menu />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/staff" component={Staff} />
            <Route path="/summary" component={Summary} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
