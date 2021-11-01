import React,{useState} from "react";

export default function ProductForm(props){
    const estadoInicialForm = {
        nombre:'',
        precio:''
    };
    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);
    const gestionarCamposForm = event => {
        const {name, value} = event.target;
        cambiarEstadoForm({...estadoForm,[name]:value});
    }

    const onSubmitForm = ev =>{
        ev.preventDefault();
        props.agregar(estadoForm);
        cambiarEstadoForm(estadoInicialForm);
    }
    return(
        <form onSubmit={onSubmitForm}>
            <div class="mb-3">
                <label htmlFor="nameProduct" className="form-label">nombre</label>
                <input type="text" name="nombre"  class="form-control" id="nameProduct" value={estadoForm.nombre} onChange={gestionarCamposForm} />
            </div>
            <div class="mb-3">
                <label htmlFor="priceProduct" className="form-label">precio</label>
                <input type="text" name="precio" class="form-control" id="priceProduct" value={estadoForm.precio} onChange={gestionarCamposForm}/>
            </div>
            
            <div class="col-12">
                <button type="submit" className="btn btn-primary">Agregar</button>
            </div> 
        </form>
    );
};