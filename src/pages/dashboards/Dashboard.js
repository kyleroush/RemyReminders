import React from 'react';
import ListDashboard from './ListDashboard';
import SingleDashboard from './SingleDashboard';
import NewDashboard from './NewDashboard';
import NotFound from '../NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function (props) {
   
  let { path } = props.match

  return (
    
    <Router>
      <Switch>
        <Route exact path={`${path}/`} component={ListDashboard} />
        <Route exact path={`${path}/new`} component={NewDashboard} />
        <Route exact path={`${path}/:dashboardId`} component={SingleDashboard} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};
