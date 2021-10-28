import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation, Link } from 'react-router-dom';

import { GlobalScrollProvider } from './hooks/useGlobalScroll';
import { GlobalMouseMoveProvider } from './hooks/useGlobalMouseMove';

import Home from './pages/Home';
import StyleGuide from './pages/StyleGuide';
import ExampleOne from './pages/Example01';
import ExampleTwo from './pages/Example02';
import NoMatch404 from './pages/NoMatch404';
import ExampleThree from './pages/Example03';
import ExampleFour from './pages/Example04';
import ExampleFive from './pages/Example05';
import FinalScene from './pages/FinalScene';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}

function App() {
  return (
    <Wrapper>
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
                <NavLink to="/final-scene" activeClassName="active" exact>
                  ΔΔ
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
            <Route path="/final-scene" exact>
              <FinalScene />
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
            <Route path="/example-five" exact>
              <Link to="/final-scene" className="bottom-nav-link">
                VIEW DEMO ⇒
              </Link>
            </Route>
          </Switch>
        </Router>
      </div>
    </Wrapper>
  );
}

export default App;
