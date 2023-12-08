import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Navigate, useNavigate } from "react-router-dom";



import "../styles/petition.css"




export const Petition = () => {
    let initState = {
        code: '',
        document_title: '',
        change_description: '',
        change_justify: '',
        type_document: '',
        change_type: '',

    };
   
    

    // let decodedToken = jwtDecode(token)
    // console.log("token",decodedToken)
    // const user_id = decodedToken.user_id
    
    const { actions } = useContext(Context);
    const [userPetition, setUserPetition] = useState(initState);
    

    let navigate = useNavigate();

    const handleChange = ({ target }) => {
        setUserPetition({
            ...userPetition,
            [target.name]: target.value,
        });

    };
    const user_id = localStorage.getItem('user_id');    
        console.log( ("este es el user:", JSON.stringify(user_id)))
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        if (userPetition.code.trim() != "" && userPetition.document_title.trim() != "" && userPetition.change_description.trim() != "" && userPetition.change_justify.trim() != "" && userPetition.change_type.trim() != "" && userPetition.type_document.trim() != "" && userPetition.user_id != "") {

            let response = await actions.addPetition(userPetition);
            console.log(response)
            if (response) {
                console.log("me guardé")
            };
            // window.location.reload();
        } else {
            console.log("campos obligatorios");
        }
    };
    
    return (
        <>
           <h1>Nueva Peticion</h1>
           <h4>En este formulario ingresa todos los datos requeridos de la solicitud que deseas ingresar a el proceso de Gestión de la calidad</h4>
            <div id="div-margen">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            name='code'
                            value={userPetition.code}
                            id="floatingInput"
                            placeholder="codigo del documento" />
                        <label for="floatingInput">Codigo del documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            name='document_title'
                            value={userPetition.document_title}
                            id="floatingInput"
                            placeholder="Titulo del documento" />
                        <label for="floatingInput"> Titulo del documento </label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='change_description'
                            value={userPetition.change_description}
                            placeholder="Decribe el cambio que deseas"
                            id="floatingTextarea">
                        </textarea>
                        <label for="floatingTextarea">Descripcion del cambio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='change_justify'
                            value={userPetition.change_justify}
                            placeholder="Decribe el motivo por el que deseas cambiar este documento" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Justificacion del cambio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select"
                            onChange={handleChange}
                            name='type_document'
                            value={userPetition.type_document}
                            id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Selecciona un tipo de documento</option>
                            <option value="formulario">Formulario</option>
                            <option value="procedimiento">Procedimiento</option>
                            <option value="instrucciont">Instrucción de trabajo</option>
                            <option value="otro">otro</option>
                        </select>
                        <label for="floatingSelect"> Tipo de documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select"
                            onChange={handleChange}
                            name='change_type'
                            value={userPetition.change_type}
                            id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Selecciona un tipo de cambio</option>
                            <option value="creacion">Creación</option>
                            <option value="actualizacion">Actualización</option>
                            <option value="eliminacion">Eliminación</option>
                        </select>
                        <label for="floatingSelect">Tipo de camnbio</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary">
                            Generar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </>
    );


}