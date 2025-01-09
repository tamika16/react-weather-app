import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="contaier">
        <Weather />
        <footer>
          This project was coded by Tamika Englehart and is open-sourced on{" "}
          <a
            href="https://github.com/tamika16/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
