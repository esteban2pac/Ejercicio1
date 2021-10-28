import react from 'react';
import {Link, Switch} from 'react-router-dom';
import Gridproduct from '../componentes/GridProduct';
import Product from '../componentes/Product'; 
export default function Store(){
    return(
        <>
        <Product></Product>
        <Gridproduct></Gridproduct>
        </>
    );
}