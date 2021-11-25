import React,{useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { itemInicial } from "../componentes/GridProduct";
import Button from 'react-bootstrap/Button';
import ProductForm from "../componentes/ProductForm";

const Productos = () => {
    const center = {
        textAlign: "center"
    };
    const [items, setItems] = useState(itemInicial);
    const alEnviarForm = (itemFromForm) => {
        const idS = items.length + 1;
        const item = { ...itemFromForm, id: idS };
        setItems([...items, item]);
    }
    return (
        <Row>
            <Col >
                <h1 className="py5 text-center">STORE</h1>
                <p className="text-center">
                    <p className="text-muted">This is the store page</p>
                </p>
            </Col>
            <Row>
                <Col>
                    <Button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Agregar producto
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={9} sm={9}>
                    <span className="text-muted">{itemInicial.length} products</span>
                </Col>
                <Col md={3} sm={3}>
                    <span className="form-outline">
                        <input type="search" id="form1" className="form-control" placeholder="Search Product" aria-label="Search" />
                    </span>
                </Col>
            </Row>
        </Row>
    );
}

export default Productos;