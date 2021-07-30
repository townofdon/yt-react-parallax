import { Image } from '../components/Image';

import img from '../assets/img-spaceport.jpg';

export const ExampleFixedBackground = () => {
  return (
    <section className="bg-dark">
      <div className="container">
        <h1 className="py-5">1. Fixed Background Parallax</h1>
      </div>

      <Image src={img} alt="Space Port Background" height="50vh" fixed darken>
        <h3>That's kinda neat huh</h3>
      </Image>
    </section>
  );
};
