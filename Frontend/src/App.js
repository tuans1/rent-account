import React, { useState } from 'react';
import Home from './containers/home';
import Staff from './containers/staff';
import Summary from './containers/summary';
import Login from './containers/login';
import { ToastContainer } from 'react-toastify';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './containers/notFound';
function App() {

  return (
    <>
      <Router>
        <div className="wrapper">
          <ToastContainer />
          <Switch>
            <Route path="/home" exact  component={Home} />
            <Route path="/staff"exact component={Staff} />
            <Route path="/summary"exact component={Summary} />
            <Route path="/login" exact component={Login} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
