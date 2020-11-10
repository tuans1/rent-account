import React from 'react';
import Home from './containers/home';
import Staff from './containers/staff';
import Menu from './containers/menu';
import Summary from './containers/summary';
// import Notify from './common/notify';
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
        <div className="wrapper">
          <Menu />
          {/* <Notify/> */}
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
