import "./Sass/App.scss";
import Product from "./Product/Product";
import ListModule from "./ListModule";
import Summary from "./Summary";
import list from "./List";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";

const App = () => {
  const RouteMaker = () => {
    const route = list.map((item) => {
      return (
        <div key={item.id}>
          <Route path={"/" + item.model}>
            <Product order={item} />
          </Route>
        </div>
      );
    });
    return <>{route}</>;
  };
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/models" />
        </Route>
        <Route exact path="/models">
          <div className="mobileMenuWrapper">
            <nav role="custom-dropdown" className="navBar">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>

              <ul className="topBarWrapper">
                <li className="topBarOption">
                  <Link to="#" className="headerText">
                    Strona główna
                  </Link>
                </li>
                <li className="topBarOption">
                  <Link to="/models" className="headerText">
                    Modele
                  </Link>
                </li>
                <li className="topBarOption logo">
                  <img src="./photos/motorbike.png" alt="logo" />
                </li>
                <li className="topBarOption">
                  <Link to="#" className="headerText">
                    Technologia
                  </Link>
                </li>
                <li className="topBarOption">
                  <Link to="#" className="headerText">
                    News
                  </Link>
                </li>
              </ul>
            </nav>
            <img
              src="./photos/motorbike.png"
              className="mobileLogo "
              alt="logo"
            />
          </div>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/models">
          <ul id="list">
            <ListModule />
          </ul>
        </Route>
        <Route exact path={"/summary"}>
          <Summary />
        </Route>
      </Switch>

      <RouteMaker />
    </HashRouter>
  );
};

export default App;
