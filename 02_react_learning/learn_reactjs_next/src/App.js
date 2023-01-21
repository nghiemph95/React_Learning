import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo/pages';
import React from 'react';
import './App.css';

/** App main*/
function App() {
  return (
    <div className="app">
      <TodoFeature />
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
