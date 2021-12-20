import { Modal, Container, Row } from "react-bootstrap";

const ModalD = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.closeModal}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Detalles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <p>detalles del articulo</p>
                            <p>id: {props.articulo.id} </p>
                            <p>nombre: {props.articulo.nombre} </p>
                            <p>precio: {props.articulo.precio} </p>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={props.closeModal}
                        className="btn btn-primary"
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default ModalD;