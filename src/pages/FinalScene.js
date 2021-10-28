import { AnimatedFade } from '../components/core/AnimatedFade';
import { AnimatedScene } from '../examples/AnimatedScene';

// import './FinalScene.scss';
function FinalScene() {
  return (
    <AnimatedFade>
      <div className="FinalScene">
        <AnimatedScene />
      </div>
    </AnimatedFade>
  );
}

export default FinalScene;
