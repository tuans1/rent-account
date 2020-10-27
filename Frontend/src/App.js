import React from 'react';
// import Home from './containers/home';
import Staff from './containers/staff';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" component={Staff} />
      </Switch>
    </Router>
  );
}

export default App;
