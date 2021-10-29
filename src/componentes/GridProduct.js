import React,{useState} from "react";
import Row from 'react-bootstrap/Row'
import ProductForm from "./ProductForm";
import Griditem from "./GridItem";


const Gridproduct  =()=>{
    const itemInicial =  [
        {id:1,nombre:'Buffalo - Striploin',precio:'$39.11',},
        {id:2,nombre:'Bacardi Breezer - Tropical',precio:'$257.92'},
        {id:3,nombre:'Wine - Gato Negro Cabernet',precio:'$51.01'},
        {id:4,nombre:'Cabbage - Nappa',precio:'$250.90'},
        {id:5,nombre:'Sping Loaded Cup Dispenser',precio:'$175.85'},
        {id:6,nombre:'Bread - Malt',precio:'$82.61'},
        {id:7,nombre:'Glass Clear 8 Oz',precio:'$201.10'},
        {id:8,nombre:'Sour Puss Raspberry',precio:'$134.99'},
        {id:9,nombre:'Pork - Chop, Frenched',precio:'$199.16'},
    ]
    const[items, setItems] = useState(itemInicial);

    const alEnviarForm = (itemFromForm) =>{
        const idS = items.length + 1;
        const item = {...itemFromForm, id:idS}; 
        setItems([...items,item]);
    }
    return(
        <>
        <Row>
            <ProductForm agregar={alEnviarForm}/>
        </Row>
        <Row>
            {items.map((s)=>{
                return(
                    <div class="col-md-4">
                    
                            <>
                            <Griditem items={s}/>
                            </>
                           
                            </div>
                        );
                    }    
                )
                
            }
        </Row>
        </>
    );
}
export default Gridproduct;