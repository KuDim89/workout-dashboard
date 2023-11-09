import React, { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchStreet } from "../../store/reducers/ActionCreators";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { streetData, isLoading, error } = useAppSelector(
    (state) => state.streetReducer,
  );

  useEffect(() => {
    void dispatch(fetchStreet());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
        {isLoading && <p>Loading...</p>}
        {error !== "" && <p>{error}</p>}
        {JSON.stringify(streetData, null, 2)}
      </header>
    </div>
  );
};
