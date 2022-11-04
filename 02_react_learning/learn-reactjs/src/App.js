import "./App.css";
import AlbumFeature from "./features/Album";
import React from "react";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFeature />
        {/* <AlbumFeature /> */}
      </header>
    </div>
  );
}

export default App;
