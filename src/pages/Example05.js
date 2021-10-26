import { AnimatedFade } from '../components/core/AnimatedFade';
import { AnimatedScene } from '../examples/AnimatedScene';

// import './ExampleFive.scss';
function ExampleFive() {
  return (
    <AnimatedFade>
      <div className="ExampleFive">
        <header className="header position-relative z-index-10 border-bottom-reveal">
          <div className="container header py-4 center">
            <h1 className="pageTitle">5. The Animated Scene</h1>
          </div>
        </header>

        <AnimatedScene />
      </div>
    </AnimatedFade>
  );
}

export default ExampleFive;
