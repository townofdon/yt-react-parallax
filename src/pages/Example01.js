// import './ExampleOne.scss';
import { Link } from 'react-router-dom';
import { ExampleFixedBackground } from '../examples/ExampleFixedBackground';

function ExampleOne() {
  return (
    <div className="ExampleOne">
      <header className="header">
        <div className="container header py-4 center">
          <h1 className="pageTitle">1. Fixed Background Parallax</h1>
        </div>
      </header>

      <ExampleFixedBackground />

      <Link to="/example-two" className="bottom-nav-link">
        Continue To Next Example ⇒
      </Link>
    </div>
  );
}

export default ExampleOne;
