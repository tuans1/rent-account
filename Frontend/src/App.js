import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AdminAccount from './containers/Admin/account';
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

function App() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // history.push("/");
      return;
    } else {
      history.push("/login");
    }
  }, [])
  return (
    <>
      {location.pathname === '/admin' ? <Route path="/admin" exact component={AdminAccount} /> : location.pathname === "/admin/game" ? <Route path="/admin/game" exact component={AdminGame} />
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
            </Switch>
          </div>
        </div>
      }
    </>
  );
}

export default App;
