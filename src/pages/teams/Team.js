import React from 'react';
import ListTeam from './ListTeam';
import SingleTeam from './SingleTeam';
import NewTeam from './NewTeam';

import NotFound from '../NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from '../dashboards/Dashboard';
import Task from '../tasks/Task';


export default function (props) {
   
  let { path } = props.match

  return (
    
    <Router>
      <Switch>
        <Route exact path={`${path}/`}  component={ListTeam} />
        <Route exact path={`${path}/new`}  component={NewTeam} />
        <Route exact path={`${path}/:teamId`}  component={SingleTeam} />
        <Route path={`${path}/:teamId/dashboards`} component={Dashboard} />
        <Route path={`${path}/:teamId/tasks`} component={Task} />
        <Route path='*'  component={NotFound} />
      </Switch>
    </Router>
  );
};
