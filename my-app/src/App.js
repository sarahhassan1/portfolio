import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-dom";

function App() {
  return (
    <div className="App">
      {/* <Container fixed> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hi! my name is ummm <code>sarah.hassan</code> and welcome to my
          portfolio!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/sarah-hassan1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          connect with me on LinkedIn
        </a>
      </header>
      {/* </Container> */}
    </div>
  );
}

export default App;
