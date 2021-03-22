import React from 'react';
import NavBar from './navBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Dashboard from './pages/dashboards/Dashboard';
import {firestore, auth} from './firestore';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Team from './pages/teams/Team';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  setValue = (newMap) => {
    this.setState(newMap);
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      this.setState({
        user,
      })
    })
  }
  render() {

    return (
      <div>
        <NavBar setValue={this.setValue} user={this.state.user} name={"Remy's Reminders"}/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/teams"  component={Team} />
            <Route path="/users/:userId/dashboards" component={Dashboard} />
            <Route path='*' component={NotFound} />
            {/* search? */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
