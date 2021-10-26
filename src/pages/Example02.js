// import './ExampleTwo.scss';
import { AnimatedFade } from '../components/core/AnimatedFade';
import { ExampleScrollBackground } from '../examples/ExampleScrollBackground';

function ExampleTwo() {
  return (
    <AnimatedFade>
      <div className="ExampleTwo">
        <header className="header">
          <div className="container header py-4 center">
            <h1 className="pageTitle">2. Scroll Background Parallax</h1>
          </div>
        </header>

        <ExampleScrollBackground />
      </div>
    </AnimatedFade>
  );
}

export default ExampleTwo;
