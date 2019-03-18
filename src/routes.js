import React from 'react';
import App from './App';
import Form from './form';
import Task0313 from './task0313';
import {Route} from 'react-router';

import { BrowserRouter, HashRouter,  Switch} from 'react-router-dom';

export default class Routes extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact="true" component={App} />
                    <Route path="/home" exact="true" component={App} />
                    <Route path="/form" exact="true" component={Form} />
                    <Route path="/task0313" exact="true" component={Task0313} />
                </Switch>
            </HashRouter>
        );
    }
}