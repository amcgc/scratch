import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import Async from './Async';
import Arrows from './Arrows';
import ConstLet from './ConstLet';
import BlockScope from './BlockScope';
import TemplateLiterals from './TemplateLiterals';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';

const Javascript = ({ match }) => {
    return <div>
        <Switch>
            <Route path={`${match.url}/async`} component={Async} />
            <Route path={`${match.url}/const-let`} component={ConstLet} />
            <Route path={`${match.url}/block-scope`} component={BlockScope} />
            <Route path={`${match.url}/template-literals`} component={TemplateLiterals} />
            <Route path={`${match.url}/arrows`} component={Arrows} />
            <Route exact path={match.url} render={() => (
                <div className='row'>
                    <div className='col-md-4'>
                        <Link to={`${match.url}/const-let`}>
                            <Card>
                                <ImageHeader imageSrc="https://picsum.photos/400/250/?random" />
                                <CardBody>Const & Let</CardBody>
                                <CardFooter>Use const, else let: with block scoping</CardFooter>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-md-4'>
                        <Link to={`${match.url}/block-scope`}>
                            <Card>
                                <ImageHeader imageSrc="https://picsum.photos/400/250/?random" />
                                <CardBody>Block scope</CardBody>
                                <CardFooter>From IIFE to Blocks</CardFooter>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-md-4'>
                        <Link to={`${match.url}/template-literals`}>
                            <Card>
                                <ImageHeader imageSrc="https://picsum.photos/400/250/?random" />
                                <CardBody>Template literals</CardBody>
                                <CardFooter>From concatenating strings, to template literals</CardFooter>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-md-4'>
                        <Link to={`${match.url}/arrows`}>
                            <Card>
                                <ImageHeader imageSrc="https://picsum.photos/400/250/?random" />
                                <CardBody>Arrow Function</CardBody>
                                <CardFooter>From Function Expressions, to Arrow Functions</CardFooter>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <ImageHeader imageSrc="https://picsum.photos/400/250/?random" />
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