import './Home.scss';
// import logo from '../assets/logo192.png';
import { DemoCanvas } from '../examples/DemoCanvas';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="header">
        <div className="container header py-4 center">
          {/* <img src={logo} className="Home-logo" alt="logo" /> */}
          <h1 className="pageTitle">Parallax Implementations In A ReactJS App</h1>
        </div>
      </header>

      <DemoCanvas />

      <Link to="/example-one" className="bottom-nav-link">
        Continue To First Example ⇒
      </Link>
    </div>
  );
}

export default Home;
