import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import useAuthContext from "../context/authContext";


export const ControlsP = () => {
    const { store, actions } = useContext(Context);
 
  
    const handleDelete = (petition_id) => {

        
        actions.deletePetition(petition_id)
        console.log("petitions", typeof petition_id)
             
    }
    console.log("este es ",useAuthContext())
    
    return (
        <>
            <h1> HISTORICO DE CAMBIOS </h1>

            <table className="table table-striped border-start-button">
                <thead className="border-end">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha de petición</th>
                        <th scope="col">Procesos Afectados</th>
                        <th scope="col">Nombre del Solicitante</th>
                        <th scope="col">Proceso Solicitante </th>
                        <th scope="col">Justificación del cambio</th>
                        <th scope="col">Fecha de envio de archivo </th>
                        <th scope="col">Fecha de recibo de archivo</th>
                        <th scope="col">Estado de solicitud</th>
                        <th scope="col">Fecha de cierre de solicitud</th> 
                        <th scope="col">Observación</th>
                        <th scope="col">Ultima Actualización</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {store.controlsp.map((controlsp, index) => {

                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                {/* <td>{con.created}</td> */}
                                <td>{controlsp.process_affected}</td>
                                <td>{controlsp.name_customer}</td>
                                <td>{controlsp.process_costumer}</td>
                                <td>{controlsp.date_petition_sent}</td>
                                <td>{controlsp.date_petition_received}</td>
                                <td>{controlsp.status}</td>
                                <td>{controlsp.date_finished_petition}</td>
                                <td>{controlsp.observation}</td>
                                <td>{controlsp.update_at}</td>
                                
                                <td>                                  
                                <button type="buttom"
                                    className="btn btn-primary"
                                    onClick={()=>handleDelete(petitions.id)}
                                    >Eliminar
                                </button>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}