import React, { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchHome } from "../../store/actionCreators/Home";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { homeData, isLoading, error } = useAppSelector(
    (state) => state.homeReducer,
  );

  useEffect(() => {
    void dispatch(fetchHome());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
        {isLoading && <p>Loading...</p>}
        {error !== "" && <p>{error}</p>}
        {JSON.stringify(homeData, null, 2)}
      </header>
    </div>
  );
};
