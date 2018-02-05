import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const Javascript = ({ match }) => {
    return <div>
        <Switch>
            <Route exact path={match.url} render={() => (
                <h3>Please select a D3 Snippet</h3>
            )} />
            <Redirect to={`${match.url}`} />
        </Switch>
    </div>
}

export default Javascript;