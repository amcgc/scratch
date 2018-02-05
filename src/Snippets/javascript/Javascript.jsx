import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Async from './async/Async';
import Arrows from './arrows/Arrows';
import ConstLet from './const-let/ConstLet';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

const Javascript = ({ match }) => {
    return <div>
        <Switch>
            <Route path={`${match.url}/async`} component={Async} />
            <Route path={`${match.url}/arrows`} component={Arrows} />
            <Route path={`${match.url}/const-let`} component={ConstLet} />
            <Route exact path={match.url} render={() => (
                <div className='row'>
                    <div className='col-md-4'>
                        <Link to={`${match.url}/const-let`}>
                            <Card>
                                <ImageHeader imageSrc="../let-const.jpg" />
                                <CardBody>Const & Let</CardBody>
                                <CardFooter>From var, to Const & Let</CardFooter>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
                            <CardBody>Block scope</CardBody>
                            <CardFooter>From IIFE to Blocs</CardFooter>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
                            <CardBody>Template literals</CardBody>
                            <CardFooter>From concatenation strings, to template literals</CardFooter>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
                            <CardBody>Arrow Function</CardBody>
                            <CardFooter>From Function Expressions, to Arrow Functions</CardFooter>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
                            <CardBody>Multiple Return values</CardBody>
                            <CardFooter>How to handle multiple return values</CardFooter>
                        </Card>
                    </div>
                </div>
            )} />
            <Redirect to={`${match.url}`} />
        </Switch>
    </div>
}

export default Javascript;