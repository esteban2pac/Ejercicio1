import React from "react";
import Row from 'react-bootstrap/Row'

import Griditem from "./GridItem";


const Gridproduct  =()=>{
    const item =  [
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
    return(
        <Row>
            {item.map((s)=>{
                return(
                    <div class="col-md-4">
                    
                            <>
                            <Griditem item={s}/>
                            </>
                           
                            </div>
                        );
                    }    
                )
                
            }
        </Row>
    );
}
export default Gridproduct;