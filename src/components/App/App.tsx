import React from "react";
import "./App.scss";

export const App: React.FC = () => {
  const yourApiKey = process.env.REACT_APP_YOUR_API_KEY;
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React {yourApiKey}</p>
      </header>
    </div>
  );
};
