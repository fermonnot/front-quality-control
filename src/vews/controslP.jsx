import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import useAuthContext from "../context/authContext";
import { getDate } from "../helpers/date";
import { useNavigate } from "react-router";
import "../styles/Controlsp.css"

export const ControlsP = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();

    // const handleDelete = (petition_id) => {


    //     actions.deletePetition(petition_id)
    //     console.log("petitions", typeof petition_id)

    // }
    console.log("este es ", useAuthContext())
    const handlePetition = (petition_id) => {

        actions.consultPetition(petition_id)
        

    }
    const handleControlP = (controlp_id) => {
        

        actions.consultControlP(controlp_id)
        navigate(`/update-controlp/${controlp_id}`)
        

    }
    // const getUpdateDate = getDate(store.ControlsP.update_at)
    // console.log("este es el getUpadeData", getUpdateDate)
    console.log("este es el id de la petición rata",handlePetition())

  

    return ( 
        <>  
            <div className="d-flex tittles-custom"> 
                <h1> HISTORICO DE CAMBIOS </h1>
            </div>
            <div>
                <table className="table table-striped border-start-button">
                    <thead className="border-end">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha de creación del historico del cambio</th>
                            <th scope="col">Procesos Afectados</th>
                            <th scope="col">Nombre del Solicitante</th>
                            <th scope="col">Proceso Solicitante </th>
                            <th scope="col">Fecha de envío de archivo </th>
                            <th scope="col">Fecha de recibo de archivo</th>
                            <th scope="col">Estado de solicitud</th>
                            <th scope="col">Fecha de cierre de solicitud</th>
                            <th scope="col">Observación</th>
                            <th scope="col">Ultima Actualización</th>
                            <th scope="col">Datos del cambio</th>
                            <th scope="col">Acción</th>



                        </tr>
                    </thead>
                    <tbody>
                        {store.controlsp.map((controlsp, index) => {

                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>    
                                    <td>{getDate(controlsp.date_petition)}</td>
                                    <td>{controlsp.process_affected}</td>
                                    <td>{controlsp.name_customer}</td>
                                    <td>{controlsp.process_customer}</td>
                                    <td>{controlsp.date_petition_sent}</td>
                                    <td>{controlsp.date_petition_received}</td>
                                    <td>{controlsp.status}</td>
                                    <td>{controlsp.date_finished_petition}</td>
                                    <td>{controlsp.observation}</td>
                                    <td>{getDate(controlsp.updated_at)}</td>
                                    
                                    
                                    <td>
                                        <button type="buttom"
                                            className="btn btn-primary m-1" data-bs-toggle="modal" 
                                            data-bs-target="#exampleModal"
                                            onClick={() => handlePetition(controlsp.petition_id)}
                                        >Observar
                                        </button>       
                                    </td>
                                    <td>
                                        <button type="buttom"
                                            className="btn btn-primary m-1"  
                                            onClick={() =>handleControlP(controlsp.id)}
                                        >Modificar
                                        </button>       
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Estos son los datos de la peticion gestionada</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    
                                    <li>Fecha de petición del documento: {getDate(store.petition.created)}</li>
                                    <li>Codigo del documento: {store.petition.code}</li>
                                    <li>Título del documento: {store.petition.document_title}</li>
                                    <li>Descripción del cambio: {store.petition.change_description}</li>
                                    <li>Justificación del cambio: {store.petition.change_justify}</li>
                                    <li>Tipo de documento: {store.petition.type_document}</li>
                                    <li>Tipo de cambio o creación del documento: {store.petition.change_type}</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}