import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="contaier">
        <Weather defaultCity="Pittsburgh" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://tamreportfolioproject.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tamika Englehart
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/tamika16/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted by{" "}
          <a
            href="https://reactweathertamika.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
