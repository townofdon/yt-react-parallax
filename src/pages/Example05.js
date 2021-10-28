import { AnimatedFade } from '../components/core/AnimatedFade';

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
        <p className="p-5 m-0">
          The following is a demonstration of controlled Parallax effects (probably done poorly and sub-optimized!!) YOU
          HAVE BEEN WARNED.
        </p>
      </div>
    </AnimatedFade>
  );
}

export default ExampleFive;
