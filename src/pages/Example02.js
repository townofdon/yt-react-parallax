// import './ExampleTwo.scss';
import { Link } from 'react-router-dom';
import { ExampleScrollBackground } from '../examples/ExampleScrollBackground';

function ExampleTwo() {
  return (
    <div className="ExampleTwo">
      <header className="header">
        <div className="container header py-4 center">
          <h1 className="pageTitle">2. Scroll Background Parallax</h1>
        </div>
      </header>

      <ExampleScrollBackground />

      <Link to="/example-three" className="bottom-nav-link">
        Continue To Next Example ⇒
      </Link>
    </div>
  );
}

export default ExampleTwo;
