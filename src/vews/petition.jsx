import React, { useEffect, useState, useContext, useRef } from 'react';
import { Context } from '../store/appContext';
import { Navigate, useNavigate } from "react-router-dom";



import "../styles/petition.css"




export const Petition = () => {
    const { store, actions } = useContext(Context);
    
    const getUser = JSON.stringify(store.userData.user_id)
    console.log("ESTE ES GETUSER",typeof getUser)
    
    let initState = {
        code: '',
        document_title: '',
        change_description: '',
        change_justify: '',
        type_document: '',
        change_type: '',
        user_id: getUser
        
    };

    

    const [userPetition, setUserPetition] = useState(initState);
    let navigate = useNavigate();
    console.log("hola desde peticiones", store.userData.user_id)
    const handleChange = ({ target }) => {
        setUserPetition({
            ...userPetition,
            [target.name]: target.value,
        });

    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (userPetition.code.trim() != "" && userPetition.document_title.trim() != "" && userPetition.change_description.trim() != "" && userPetition.change_justify.trim() != "" && userPetition.change_type.trim() != "" && userPetition.type_document.trim() != "" && userPetition.user_id.trim() != "") {

            let response = await actions.addPetition(userPetition);
            console.log(response)
            if (response) {
                console.log("me guardé")
            };
            window.location.reload();
            
        } else {
            console.log("campos obligatorios");
        }
    };

    return (
        <>
            <h1>Nueva Peticion</h1>
            <h4>En este formulario ingresa todos los datos requeridos de la solicitud que deseas ingresar a el proceso de Gestión de la calidad</h4>
            <div id="div-margen">
                <form id='formRef'  >
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
                            <option defaultValue={"Selecciona un tipo de documento"}></option>
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
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Generar Solicitud
                        </button>
                    </div>
                </form>
           
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Verifica todos los campos, por favor!</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    <li>Codigo del documento: {userPetition.code}</li>
                                    <li>Titulo del documento: {userPetition.document_title}</li>
                                    <li>Descripción del cambio: {userPetition.change_description}</li>
                                    <li>Justificación del cambio: {userPetition.change_justify}</li>
                                    <li>Tipo de documento: {userPetition.type_document}</li>
                                    <li>Tipo de cambio o creación del documento: {userPetition.change_type}</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    );


}   