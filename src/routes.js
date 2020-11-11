import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserPage from './components/users/UserPage';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route exact path='/user/:login' component={UserPage} />
    <Route component={NotFound} />
  </Switch>
)