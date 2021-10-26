import { Image } from '../components/core/Image';
import { FillerSection } from '../components/core/FillerSection';

import imgForest from '../assets/img-forest.jpg';
import imgCamera from '../assets/img-camera.jpg';
import imgSpaceport from '../assets/img-spaceport.jpg';

export const ExampleScrollBackground = () => {
  return (
    <section className="">
      <div className="container py-5">
        <div className="py-5">
          <p className="constrain mb-3">
            The following example is using a CSS <code>transform: translate(0, ΔY)</code>.
          </p>
          <p className="constrain mb-3">
            Extensive maths need to be used to calculate <code>ΔY</code>.
          </p>
          <p className="constrain">
            Here we also utilize <code>window.requestAnimationFrame</code> to prevent screen jank and only fire off an
            event once per frame (~16ms). An alternative to this would be using a <code>throttling</code> or{' '}
            <code>debouncing</code> function.
          </p>
        </div>
      </div>

      <Image src={imgForest} alt="Forest Background" height="50vh" speed={1}>
        <h3 className="image-text">whoa...</h3>
      </Image>

      <FillerSection fillAmount={50} />

      <div className="py-3">
        <h2 className="pb-3">Variable Speeds</h2>
        <p className="m-3">
          The parallax speed can also be variable. The following example uses a speed of <code>0.5</code> for a much
          more subtle effect:
        </p>
      </div>

      <Image src={imgSpaceport} alt="Space Port Background" height="75vh" speed={0.5}>
        <h3 className="image-text">sloooow</h3>
      </Image>

      <FillerSection fillAmount={50} />

      <div className="py-5 bg-light text-dark">
        <div className="py-5">
          <p className="m-0">
            <strong>Watch out!</strong> If a speed greater than&nbsp;
            <code>1</code> is provided, images can go out of bounds:
          </p>
        </div>
      </div>

      <Image src={imgCamera} alt="Camera Background" height="50vh" speed={5}>
        <h3>out of bounds!</h3>
      </Image>

      <div className="py-5 bg-light text-dark">
        <div className="py-5">
          <p className="m-0">
            However, an image can be clamped (BUT it's recommended to only use this as a fallback as it looks wonky):
          </p>
        </div>
      </div>

      <Image src={imgCamera} alt="Camera Background" height="50vh" speed={5} clamp>
        <h3>I stop parallaxing when I am out of bounds!</h3>
      </Image>

      <FillerSection />
    </section>
  );
};
