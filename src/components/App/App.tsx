import React from "react";
import "./App.scss";
import { SheetTitleType } from "../../sevices/googleSheets/interfaces";
import { useGoogleSheetsData } from "./hooks/useGoogleSheetsData";

export const App: React.FC = () => {
  const googleSheetsData = useGoogleSheetsData(SheetTitleType.Street);

  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React {googleSheetsData?.sig}</p>
      </header>
    </div>
  );
};
