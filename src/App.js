import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="Menu">
          <li className="MenuItem">
            <a href="https://react.org/">Pricing</a>
          </li>
          <li className="MenuItem">
            <a href="https://react.org/">About</a>
          </li>
          <li className="MenuItem">
            <a href="https://react.org/">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
