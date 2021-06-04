import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay';
import AdminAccount from './containers/Admin/account';
import AdminPricePage from './containers/Admin/price';
import Nav from './components/Nav/index';
import HistoryTransaction from './components/HistoryTransaction/index';
import Guide from './components/Guide/index';
import Transaction from './components/Transaction/index';

import AdminGame from './containers/Admin/game';
import LoginPage from './containers/Login/index';

import AccountPage from './containers/Account/index';
import RentHistoryPage from './containers/RentHistory/index';
import contact from './assets/banner/contact.png';
import NotFound from './containers/NotFound/index';
import Register from './components/Register/index';
import Verify from './components/Register/verify';

import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
function App() {
  const { accountLoading } = useSelector(state => state.accountReducer)
  const [loading, setLoading] = useState(false)
  const isInitialMount = useRef(true);
  // const location = useLocation();
  // const history = useHistory();
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (accountLoading === true) {
        setLoading(true)
      } else {
        setLoading(false)
      }
    }
  }, [accountLoading])
  return (
    <div>
      <ToastContainer />
      <LoadingOverlay
        active={loading}
        spinner
        text='Loading ...'
      />
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
              <Route path="/dang-ky" exact component={Register} />
              <Route path="/dang-ky/:token" exact component={Verify} />
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

    </div>
  );
}

export default App;
