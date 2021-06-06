import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from './pages/Boards/Board';
import Home from './pages/Home/Home';

export default function App(): ReactElement {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/board/:id" component={Board} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
