import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/pokedex" component={PokedexPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
