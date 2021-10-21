import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home';
import StyleGuide from './pages/StyleGuide';
import ExampleOne from './pages/Example01';
import ExampleTwo from './pages/Example02';
import NoMatch404 from './pages/NoMatch404';
import ExampleThree from './pages/Example03';
import ExampleFour from './pages/Example04';
import ExampleFive from './pages/Example05';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Δ
              </NavLink>
              <NavLink to="/example-one" activeClassName="active" exact>
                01
              </NavLink>
              <NavLink to="/example-two" activeClassName="active" exact>
                02
              </NavLink>
              <NavLink to="/example-three" activeClassName="active" exact>
                03
              </NavLink>
              <NavLink to="/example-four" activeClassName="active" exact>
                04
              </NavLink>
              <NavLink to="/example-five" activeClassName="active" exact>
                05
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/example-one" exact>
            <ExampleOne />
          </Route>
          <Route path="/example-two" exact>
            <ExampleTwo />
          </Route>
          <Route path="/example-three" exact>
            <ExampleThree />
          </Route>
          <Route path="/example-four" exact>
            <ExampleFour />
          </Route>
          <Route path="/example-five" exact>
            <ExampleFive />
          </Route>

          {/* STYLE GUIDE */}
          <Route path="/style-guide" exact>
            <StyleGuide />
          </Route>

          <Route path="*">
            <NoMatch404 />
          </Route>
        </Switch>

        <Switch>
          <Route path="/" exact>
            <Link to="/example-one" className="bottom-nav-link">
              Continue To Next Example ⇒
            </Link>
          </Route>

          <Route path="/example-one" exact>
            <Link to="/example-two" className="bottom-nav-link">
              Continue To Next Example ⇒
            </Link>
          </Route>
          <Route path="/example-two" exact>
            <Link to="/example-three" className="bottom-nav-link">
              Continue To Next Example ⇒
            </Link>
          </Route>
          <Route path="/example-three" exact>
            <Link to="/example-four" className="bottom-nav-link">
              Continue To Next Example ⇒
            </Link>
          </Route>
          <Route path="/example-four" exact>
            <Link to="/example-five" className="bottom-nav-link">
              Continue To Next Example ⇒
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
