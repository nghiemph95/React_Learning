import productApi from 'api/productApi';
import NotFound from 'components/NotFound';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import React, { useEffect } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

/** App main*/
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);
  return (
    <div className="app">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active">
          Album
        </NavLink>
      </p>
      <Switch>
        <Redirect from="home" to="/" exact />

        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
