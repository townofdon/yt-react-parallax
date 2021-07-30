import './App.scss';
import logo from './assets/logo192.png';
import { DemoCanvas } from './examples/DemoCanvas';
import { ExampleFixedBackground } from './examples/ExampleFixedBackground';
import { ExampleScrollBackground } from './examples/ExampleScrollBackground';

const TiltChar = ({ i = 0, children }) => {
  const deg = 15 + 15 * i;
  const opacity = 1 - i / 6;
  return (
    <span className="mx-2 d-inline-block" style={{ transform: `rotate(${deg}deg)`, opacity }}>
      {children}
    </span>
  );
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container header py-4">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="pageTitle">Awesome Parallax</h1>
        </div>
      </header>

      <DemoCanvas />
      <ExampleFixedBackground />
      <ExampleScrollBackground />

      <section className="container py-5">
        <div className="py-5 my-5" />
        <h1 className="pb-4">
          The End
          <TiltChar i={0}>!</TiltChar>
          <TiltChar i={1}>!</TiltChar>
          <TiltChar i={2}>!</TiltChar>
          <TiltChar i={3}>!</TiltChar>
          <TiltChar i={4}>!</TiltChar>
          <TiltChar i={5}>!</TiltChar>
        </h1>
        <div className="py-5 my-5" />
      </section>
    </div>
  );
}

export default App;
