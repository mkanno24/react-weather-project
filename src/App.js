import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by {""}{" "}
        <a
          href="https://app.netlify.com/sites/brave-khorana-df5338/overview"
          target="_blank"
          rel="noreferrer"
        >
          Mika Kanno
        </a>
        and is {""}
        <a
          href="https://github.com/mkanno24/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          open sourced on Github
        </a>
      </footer>
    </div>
  );
}
