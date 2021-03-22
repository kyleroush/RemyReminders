import React from 'react';
// import ListDashboard from './ListDashb/oard';
import SingleTask from './SingleTask';
import NewTask from './NewTask';

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
        <Route exact path={`${path}/new`} component={NewTask}/>
        <Route exact path={`${path}/:taskId`} component={SingleTask}/>
        <Route path='*'  component={NotFound}/>
      </Switch>
    </Router>
  );
};
