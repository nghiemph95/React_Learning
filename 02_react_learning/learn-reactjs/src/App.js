import "./App.css";
import AlbumFeature from "./features/Album";
import React from "react";
import TodoFeature from "./features/Todo";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      {/* </header> */}

      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
