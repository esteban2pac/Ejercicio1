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
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Formulario</h5>
                                    <Button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                </div>
                                <div class="modal-body">
                                    <div style={center}>
                                        <Row>
                                            <ProductForm agregar={alEnviarForm} />
                                        </Row>

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <Button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</Button>
                                    <Button type="button" class="btn btn-primary">Agregar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
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