import React from 'react';
import './App.css';
import { StoreProvider } from './store/Store';
import HelloComponent from './HelloComponent';
import TestComponent from './TestComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HelloComponent} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
