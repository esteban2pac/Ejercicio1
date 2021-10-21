import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/misestilos.css'
import { Link } from "react-router-dom";

const header = ()=>{
    return(
        <Row>
            <Col className =  "py5 text-center">
                <h1></h1>
                <span><Link to='/'>Store</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/About'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <img src="https://w7.pngwing.com/pngs/15/602/png-transparent-font-awesome-shopping-cart-computer-icons-shopping-cart-angle-silhouette-black.png" className="image"/>
                    <span>&nbsp;&nbsp;<Link to='/Cart'>cart(0)</Link></span>
            </Col>
        </Row>
    );
}

export default header;