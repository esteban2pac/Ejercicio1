import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Store from './pages/Store'
import About from './pages/About';
import Cart from './pages/Cart';
export default function Misroutes(){
    return (
        <Switch>
        <Route exact path='/' component={Store}/>
        <Route path='/About' componen={About}/> 
        <Route path='/Cart' componen={Cart}/>
        </Switch>
    );
}
    