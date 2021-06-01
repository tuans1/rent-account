import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import AdminAccount from './containers/Admin/account';
import AdminPricePage from './containers/Admin/price';
import Nav from './components/Nav/index';
import HistoryTransaction from './components/HistoryTransaction/index';
import Guide from './components/Guide/index';
import Transaction from './components/Transaction/index';
import { useLocation, useHistory } from 'react-router-dom'
import AdminGame from './containers/Admin/game';
import LoginPage from './containers/Login/index';
import { useEffect } from 'react';
import AccountPage from './containers/Account/index';
import RentHistoryPage from './containers/RentHistory/index';
import contact from './assets/banner/contact.png';
import NotFound from './containers/NotFound/index';
function App() {
  const location = useLocation();
  const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     // history.push("/");
  //     return;
  //   } else {
  //     history.push("/dang-nhap");
  //   }
  // }, [])
  return (
    <>
      {localStorage.getItem("role") === "admin" ?
        <Switch>
          <Route path="/admin" exact component={AdminAccount} />
          <Route path="/admin/game" exact component={AdminGame} />
          <Route path="/admin/price" exact component={AdminPricePage} />
        </Switch>
        : <div className="wrapper">
          <Nav />
          <div className="container">
            <Switch>
              <Route path="/" exact component={AccountPage} />
              <Route path="/dang-nhap" exact component={LoginPage} />
              <Route path="/huong-dan" exact component={Guide} />
              <Route path="/lich-su-thue" exact component={RentHistoryPage} />
              <Route path="/lich-su-giao-dich" exact component={HistoryTransaction} />
              <Route path="/giao-dich" exact component={Transaction} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="contact">
            <a href="https://www.facebook.com/Thu%C3%AA-Acc-110458054565244" target="_blank"><img src={contact} /></a>
          </div>
        </div>
      }
    </>
  );
}

export default App;
