import './App.scss';
import logo from './assets/logo192.png';
import { DemoCanvas } from './examples/DemoCanvas';
import { ExampleFixedBackground } from './examples/ExampleFixedBackground';
import { ExampleScrollBackground } from './examples/ExampleScrollBackground';

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

      <div className="fauxScrollable" />
    </div>
  );
}

export default App;
