// import './ExampleOne.scss';
import { AnimatedFade } from '../components/core/AnimatedFade';
import { ExampleFixedBackground } from '../examples/ExampleFixedBackground';

function ExampleOne() {
  return (
    <AnimatedFade>
      <div className="ExampleOne">
        <header className="header">
          <div className="container header py-4 center">
            <h1 className="pageTitle">1. Fixed Background Parallax</h1>
          </div>
        </header>

        <ExampleFixedBackground />
      </div>
    </AnimatedFade>
  );
}

export default ExampleOne;
