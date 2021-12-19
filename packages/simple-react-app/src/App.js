import logo from "./logo.svg";
import "./App.css";
import _ from "lodash";
import axios from "axios";

function App() {
  const getData = async () => {
    const { data } = await axios("http://localhost:3001/");
    console.log(data.payload);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {_.toUpper("Learn React")}
        </a>
        <button onClick={getData}>GET SOME DATA</button>
      </header>
    </div>
  );
}

export default App;
