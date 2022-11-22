import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

//Mainnn
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      {/* </header> */}
      header
      {/* <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p> */}
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active-menu">
          Albums
        </NavLink>
      </p>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      footer
    </div>
  );
}

export default App;
