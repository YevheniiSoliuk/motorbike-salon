import './Sass/App.scss';
import Product from './Product/Product';
import ListModule from './ListModule';
import Summary from './Summary';
import list from './List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { useMemo } from 'react';
import Logout from './Logout';

const App = () => {
  const isAuthorised = useMemo(() => {
    const accessToken = localStorage.getItem('access-token');
    const userUuid = localStorage.getItem('uuid');

    return accessToken && userUuid;
  }, []);

  // const RouteMaker = () => {
  //   const route = list.map((item) => {
  //     return (
  //       <div key={item.id}>
  //         <Route path={'/' + item.model}>
  //           <Product order={item} />
  //         </Route>
  //       </div>
  //     );
  //   });
  //   return <>{route}</>;
  // };
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/models' />
        </Route>
        <Route exact path='/models'>
          <div className='mobileMenuWrapper'>
            <nav role='custom-dropdown' className='navBar'>
              <input type='checkbox' />
              <span></span>
              <span></span>
              <span></span>

              <ul className='topBarWrapper'>
                <li className='topBarOption'>
                  <Link to='#' className='headerText'>
                    Strona główna
                  </Link>
                </li>
                <li className='topBarOption'>
                  <Link to='/models' className='headerText'>
                    Modele
                  </Link>
                </li>
                <li className='topBarOption logo'>
                  <img src='./photos/motorbike.png' alt='logo' />
                </li>
                <li className='topBarOption'>
                  <Link to={'/dashboard'} className='headerText'>
                    Konfiguracje
                  </Link>
                </li>
                <li className='topBarOption'>
                  {isAuthorised ? (
                    <Logout />
                  ) : (
                    <Link to='/login' className='headerText'>
                      Logowanie
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <img
              src='./photos/motorbike.png'
              className='mobileLogo '
              alt='logo'
            />
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/models'>
          <ul id='list'>
            <ListModule />
          </ul>
        </Route>
        <Route exact path={'/summary'}>
          <Summary />
        </Route>
        <Route exact path={'/dashboard'}>
          <Dashboard />
        </Route>
        <Route exact path={'/login'}>
          <Login />
        </Route>
        <Route exact path={'/signup'}>
          <Signup />
        </Route>
      </Switch>

      {/* <RouteMaker /> */}
      <Route path={'/models/:productId'}>
        <Product />
      </Route>
    </HashRouter>
  );
};

export default App;
