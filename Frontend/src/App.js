import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AdminAccount from './containers/Admin/account';
import Account from './components/Account/index';
import Nav from './components/Nav/index';
import HistoryRent from './components/HistoryRent/index';
import HistoryTransaction from './components/HistoryTransaction/index';
import Guide from './components/Guide/index';
import Transaction from './components/Transaction/index';
import { useLocation } from 'react-router-dom'
import AdminGame from './containers/Admin/game';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/admin' ? <Route path="/admin" exact component={AdminAccount} /> : location.pathname === "/admin/game" ? <Route path="/admin/game" exact component={AdminGame} />
        : <div className="wrapper">
          <Nav />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Account} />
              <Route path="/guide" exact component={Guide} />
              <Route path="/history-rent" exact component={HistoryRent} />
              <Route path="/history-transaction" exact component={HistoryTransaction} />
              <Route path="/transaction" exact component={Transaction} />
            </Switch>
          </div>
        </div>
      }
    </>
  );
}

export default App;
