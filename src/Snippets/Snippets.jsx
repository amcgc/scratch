import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Javascript from './javascript/Javascript';
import D3 from './d3/D3';

const Snippets = ({ match }) => {
  return <div>
    <Switch>
      <Route path={`${match.url}/javascript`} component={Javascript} />
      <Route path={`${match.url}/d3`} component={D3} />
      <Redirect to={`${match.url}/javascript`} />
    </Switch>
  </div>
}

export default Snippets;