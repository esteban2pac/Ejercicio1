import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../css/misestilos.css'
const Griditem= (props) =>{
    const {nombre,precio,}  = props.item
        return(
            <div className="custom">
                <Row>
                    <Col className="border border-dark">
                        
                        <h6>{nombre}</h6>
                        <h2>{precio}</h2>
                        
                        <Button className="float-end" variant="dark">ADD TO CART</Button>{' '}
                        <Button className="float-end" variant="light">DETAILS</Button>{' '}
                        
                    </Col>
                    
                        
                    
                </Row>
            </div>
        );
}
export default Griditem;