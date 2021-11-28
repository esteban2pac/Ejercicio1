import { Modal, Container, Row } from "react-bootstrap";
import ProductForm from "./ProductForm";
const ModalPrducts = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.closeModal}
                centered
            >
            <Modal.Header>
                <Modal.Title>Agregar producto(s)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Container>
                        <Row>
                            <ProductForm/>
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

}

export default ModalPrducts;