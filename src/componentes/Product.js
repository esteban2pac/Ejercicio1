import React,{useState,useContext} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { itemInicial } from "../componentes/GridProduct";
import Button from 'react-bootstrap/Button';
import ModalProducts from "./ModalProduct";
import { CartContext } from "../contexts/CartContex";

const Productos = (props) => {
    const center = {
        textAlign: "center"
    };
    
    const [mostrarModal, setMostrarModal] = useState(false);
    const closeModal = () => setMostrarModal(false);
    
    const estadoDetalles = {
        nombre: "",
        precio: ""
    }

    const [detalle, setDetalle] = useState(estadoDetalles);

    

    const openModal = (articulo) => {
        setMostrarModal(true);
        setDetalle(articulo);
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
                    <Button onClick={(event) => openModal(props.product)} className="btn btn-outline-dark flex-shrink-0">
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
            <>
                <ModalProducts
                    show={mostrarModal}
                    closeModal={closeModal}
                    articulo={detalle}
                />
            </>
        </Row>
    );
}

export default Productos;