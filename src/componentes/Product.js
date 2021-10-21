import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const productos = () =>  {
    return(
        <Row>
            <Col >
                <h1 className =  "py5 text-center">STORE</h1>
                
                <p className="text-center">
                        <p className="text-muted">This is the store page</p>
                </p>
            </Col>
            <Row>
                <Col md={9} sm={9}>
                <span className="text-muted">10 products</span>
                </Col>
                <Col  md={3} sm={3}>
                <span className="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="Search Product" aria-label="Search" />
                    </span>
                </Col>
            </Row>
        </Row>
    );
}

export default productos;

