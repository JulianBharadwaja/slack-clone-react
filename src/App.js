import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Header from './components/Header';
import React from 'react';

function App() {
  return (
    <div className="app">
      <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
