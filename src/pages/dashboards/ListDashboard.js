import { Typography } from '@material-ui/core';
import React from 'react';

class ListDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootType: null,
      rootId: null,
    };
  }


  render() {

    let { teamId, userId } =  this.props.match.params

    const rootType = teamId? 'team': 'user'

    const rootId = teamId || userId
    return (
      <div>
        <Typography>
          List Dashboards for {rootType} {rootId}
        </Typography>
      </div>
    );
  }
}

export default ListDashboard;
