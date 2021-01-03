import React, { useEffect } from 'react';
import Home from './containers/home';
import Staff from './containers/staff';
import Summary from './containers/summary';
import Login from './containers/login';
import SalarySlip from './containers/salarySlip';
import Admin from './containers/admin';
import { ToastContainer } from 'react-toastify';
import './index.scss';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import * as action from './reducers/login';
import { Switch, Route } from "react-router-dom";
import NotFound from './containers/notFound';
function App() {
  // var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjA3OTE5MjQ3LCJleHAiOjE2MDg1MjQwNDd9.iynweGJaBNADugp29DIh__iE8HL2bXwQJQUbYSlOfj4qiADn-brVnIIwd7jDsKrG3OP10FeGpfhL7WElX9xKVg";
  const history = useHistory();
  const dispatch = useDispatch();
  // console.log(decoded)
  useEffect(() => {
    var link = window.location.href
    let url = new URL(link);
    let searchParams = new URLSearchParams(url.search);
    if (localStorage.getItem("token")) {
      const decoded = jwt_decode("Bearer " + localStorage.getItem("token"));
      const expired = Math.floor(Date.now() / 1000);
      if (decoded.exp < expired) {
        history.push("/login");
        // localStorage.removeItem('token');
        dispatch(action.onFetchJwtFailed());
      } else {
        dispatch(action.onFetchJwtSuccess());
      }
    } else {
      if (searchParams.get('token')) {
        return;
      }
      else {
        history.push("/login")
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <div className="wrapper">
        <ToastContainer />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/staff" exact component={Staff} />
          <Route path="/summary" exact component={Summary} />
          <Route path="/login" component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/salary_slip/:id" component={SalarySlip} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
