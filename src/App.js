import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import StyleGuide from './pages/StyleGuide';
import ExampleOne from './pages/Example01';
import ExampleTwo from './pages/Example02';
import NoMatch404 from './pages/NoMatch404';

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
                Home
              </NavLink>
              <NavLink to="/example-one" activeClassName="active" exact>
                01
              </NavLink>
              <NavLink to="/example-two" activeClassName="active" exact>
                02
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

          {/* STYLE GUIDE */}
          <Route path="/style-guide" exact>
            <StyleGuide />
          </Route>

          <Route path="*">
            <NoMatch404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
