import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  const state = store.getState();
  
  return (
    <div>
      <div>
        <button onClick={() => store.dispatch({ type: "GOOD" })}>good</button>
        <button onClick={() => store.dispatch({ type: "OK" })}>ok</button>
        <button onClick={() => store.dispatch({ type: "BAD" })}>bad</button>
        <button onClick={() => store.dispatch({ type: "ZERO" })}>
          reset stats
        </button>
      </div>

      <div>
        <div>good {state.good}</div>
        <div>ok {state.ok}</div>
        <div>bad {state.bad}</div>
      </div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};
renderApp();
store.subscribe(renderApp);
