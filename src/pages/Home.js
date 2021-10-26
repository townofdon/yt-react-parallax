import './Home.scss';
// import logo from '../assets/logo192.png';
import { DemoCanvas } from '../examples/DemoCanvas';
import { AnimatedFade } from '../components/core/AnimatedFade';

function Home() {
  return (
    <AnimatedFade>
      <div className="Home">
        <header className="header">
          <div className="container header py-4 center">
            {/* <img src={logo} className="Home-logo" alt="logo" /> */}
            <h1 className="pageTitle">Parallax Implementations In A ReactJS App</h1>
          </div>
        </header>

        <DemoCanvas />
      </div>
    </AnimatedFade>
  );
}

export default Home;
