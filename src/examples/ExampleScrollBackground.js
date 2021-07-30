import { Image } from '../components/Image';

import imgForest from '../assets/img-forest.jpg';
import imgCamera from '../assets/img-camera.jpg';
import imgSpaceport from '../assets/img-spaceport.jpg';

export const ExampleScrollBackground = () => {
  return (
    <section className="">
      <div className="container">
        <h1 className="py-5">2. Scroll Background Parallax</h1>
      </div>

      <Image src={imgForest} alt="Forest Background" height="50vh" speed={1}>
        <h3>whoa...</h3>
      </Image>
      <Image src={imgCamera} alt="Camera Background" height="50vh" speed={-1}>
        <h3>reversed</h3>
      </Image>
      <Image src={imgSpaceport} alt="Space Port Background" height="50vh" speed={0.25}>
        <h3>sloooow</h3>
      </Image>

      <div className="pb-4" />
      <p>If a speed greater than 1 is provided, images can go out of bounds:</p>

      <Image src={imgCamera} alt="Camera Background" height="50vh" speed={5}>
        <h3>out of bounds!</h3>
      </Image>

      <div className="pb-4" />
      <p>However, an image can be clamped (but it's recommended to use this as a fallback as it looks wonky):</p>

      <Image src={imgCamera} alt="Camera Background" height="50vh" speed={5} clamp debug>
        <h3>out of bounds!</h3>
      </Image>
    </section>
  );
};
