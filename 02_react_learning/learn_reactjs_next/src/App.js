import Header from 'components/Header';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter';
import ProductFeature from 'features/Product';
import TodoFeature from 'features/Todo';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

/** App main*/
function App() {
  return (
    <div className="app">
      <Header />
      {/* <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Album
        </NavLink>
      </p> */}
      <Switch>
        <Redirect from="home" to="/" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route path="/products" component={ProductFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
