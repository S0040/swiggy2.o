import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './component./Main';

import SignInSide from './component/SignInSide';
function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
  export default AppRouter;
