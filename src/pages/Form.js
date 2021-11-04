import React,{useState} from "react";
import {itemInicial} from "../componentes/GridProduct";
import ProductForm  from "../componentes/ProductForm";
import { Row } from "react-bootstrap";
const Form = () => {
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
        <div style={center}>
             <Row>
                <ProductForm agregar={alEnviarForm} />
            </Row>
            
        </div>
    );
};
export default Form;