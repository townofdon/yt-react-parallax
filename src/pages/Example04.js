import { AnimatedFade } from '../components/core/AnimatedFade';
import { ExampleScrollText } from '../examples/ExampleScrollText';

// import './ExampleFour.scss';
function ExampleFour() {
  return (
    <AnimatedFade>
      <div className="ExampleFour">
        <header className="header">
          <div className="container header py-4 center">
            <h1 className="pageTitle">4. Animated Text</h1>
          </div>
        </header>

        <ExampleScrollText />
      </div>
    </AnimatedFade>
  );
}

export default ExampleFour;
