import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContex";
import Button from 'react-bootstrap/Button'
import '../css/misestilos.css'
import ModalD from "./ModalD";

export default function GridItem(props) {
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    const [mostrarModal, setMostrarModal] = useState(false);
    const closeModal = () => setMostrarModal(false);
    
    const estadoDetalles = {
        nombre: "",
        precio: ""
    }
    const [detalle, setDetalle] = useState(estadoDetalles)

    const openModal = (articulo) => {
        setMostrarModal(true);
        setDetalle(articulo);
    }
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title"> {props.product.nombre} </h4>
                <div className="card-subtitle fs-5 mb-3">
                    <span> $ {props.product.precio} </span>
                </div>
                <div className="card-text">
                    <div className="card-link">
                        {isInCart(props.product) && (
                            <button
                                onClick={() => increase(props.product)}
                                className="btn btn-outline-dark flex-shrink-0 float-end"
                            >
                                Add more
                            </button>
                        )}
                        {!isInCart(props.product) && (
                            <button
                                onClick={() => addProduct(props.product)}
                                className="btn btn-outline-dark flex-shrink-0 float-end"
                            >
                                Add to cart
                            </button>
                        )}
                        <div className="card-link">
                            <Button
                                onClick={(event) => openModal(props.product)}
                                className="btn btn-outline-dark flex-shrink-0 float-end"
                            >
                                Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <ModalD
                    show={mostrarModal}
                    closeModal={closeModal}
                    articulo={detalle}
                />
            </>
        </div>
    );
}
