import React, { useState } from 'react';
import Home from './containers/home';
import Staff from './containers/staff';
import Summary from './containers/summary';
import Login from './containers/login';
import { ToastContainer } from 'react-toastify';
import './index.scss';
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './containers/notFound';
function App() {
  var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjA3OTE5MjQ3LCJleHAiOjE2MDg1MjQwNDd9.iynweGJaBNADugp29DIh__iE8HL2bXwQJQUbYSlOfj4qiADn-brVnIIwd7jDsKrG3OP10FeGpfhL7WElX9xKVg";
  var decoded = jwt_decode("Bearer " + token);
   
  console.log(decoded);
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
