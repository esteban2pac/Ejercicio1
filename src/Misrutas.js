import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Store from './pages/Store'
import About from './pages/About';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export default function Misroutes(){
    return (
        <Switch>
        <Route exact path='/' component={Store}/>
        <Route path='/About' component={About}/> 
        <Route path='/Cart' component={Cart}/>
        <Route path="*" component={NotFound} />
        </Switch>
    );
}
    