import React, { Component } from 'react';
import UsersGrid from './components/users-grid';

import {
  QueryRenderer,
  graphql,
} from 'react-relay'

import environment from './createRelayEnvironment'

const AppQuery = graphql`
  query AppQuery {
    ...UsersGrid_viewer
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        render={RenderApp}
      />
    )
  }
}

function RenderApp({error, props}) {
  if (error) {
    return <div>{error.message}</div>
  } else if (props) {
    return (
        <UsersGrid viewer={props} />
    )
  } else {
    return <div>Loading</div>
  }
}

export default App;
