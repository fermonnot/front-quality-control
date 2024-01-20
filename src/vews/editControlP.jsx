import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, useParams } from "react-router-dom";
import { getDate } from '../helpers/date';


import "../styles/petition.css"




export const EditControlP = () => {
    const { store, actions } = useContext(Context);
    let { id } = useParams();
    console.log("este es petitionId:", id)
    const getControlPetitionId = store.controlp.id
    console.log("fecha inicial", getControlPetitionId)
    
    // console.log("este es el id de la peticion:", getDatePet)


    let initState = {
        id: getControlPetitionId,
        process_affected: '',
        name_customer: '',
        process_customer: '',
        date_petition_sent: '',
        date_petition_received: '',
        status: '',
        date_finished_petition: '',
        observation: ''

    };



    const [qualityPetition, setQualityPetition] = useState(initState);
    let navigate = useNavigate();

    const handleChange = ({ target }) => {
        setQualityPetition({
            ...qualityPetition,
            [target.name]: target.value,
        });

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (qualityPetition.process_affected.trim() != "" && qualityPetition.name_customer.trim() != "" && qualityPetition.process_customer.trim() != "" && qualityPetition.date_petition_sent.trim() != "" && qualityPetition.date_petition_received.trim() != "" && qualityPetition.status.trim() != "" && qualityPetition.date_finished_petition.trim() != "" && qualityPetition.observation.trim() != "") {
           
            let response = await actions.editControlP(qualityPetition);
            console.log(response)
            if (response) {
                console.log("me guardé")
            };
            // actions.editPetition(id);
            // window.location.reload();
        } else {
            console.log("campos obligatorios");
        }
    };
    

    return (
        <>
            <table className="table table-striped border-start-button">
                <thead className="border-end">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha de creación</th>
                        <th scope="col">Procesos afectados</th>
                        <th scope="col">Nombre del cliente que solicita el cambio</th>
                        <th scope="col">Fecha de envío del Documento</th>
                        <th scope="col">Fecha de recepción del Documento</th>
                        <th scope="col">Fecha de finalización del cambio</th>
                        <th scope="col">Proceso solicitante</th>
                        <th scope="col">Estado del trámite</th>
                        <th scope="col">Observación</th>

                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th scope="row">{store.controlp.id}</th>
                        <td>{getDate(store.controlp.date_petition)}</td>
                        <td>{store.controlp.process_affected}</td>
                        <td>{store.controlp.name_customer}</td>
                        <td>{store.controlp.date_petition_sent}</td>
                        <td>{store.controlp.date_petition_received}</td>
                        <td>{store.controlp.date_finished_petition}</td>
                        <td>{store.controlp.status}</td>
                        <td>{store.controlp.observation}</td>
                        <td>
                            <button type="buttom"
                                className="btn btn-primary"

                            >Eliminar
                            </button>
                            <button type="buttom"

                                className="btn btn-primary m-1"

                            >Gestionar
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <h1> Edicion de registro del Control de cambio</h1>
            <h4>En este formulario ingresa todos los datos requeridos para EDITAR el registro en el Historico de cambios</h4>
            <div id="div-margen">
                <form onSubmit={handleSubmit}>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"
                            onChange={handleChange}
                            name='process_affected'
                            value={qualityPetition.process_affected}
                            id="floatingInput"
                            placeholder="Procesos Afectados" />
                        <label for="floatingInput"> Procesos Afectados </label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='name_customer'
                            value={qualityPetition.name_customer}
                            placeholder="Decribe el cambio que deseas"
                            id="floatingTextarea">
                        </textarea>
                        <label for="floatingTextarea">Nombre del cliente que solicita el cambio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='date_petition_sent'
                            value={qualityPetition.date_petition_sent}
                            placeholder="Decribe el cambio que deseas"
                            id="floatingTextarea">
                        </textarea>
                        <label for="floatingTextarea">Fecha de envío del Documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='date_petition_received'
                            value={qualityPetition.date_petition_received}
                            placeholder="Decribe el motivo por el que deseas cambiar este documento" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Fecha de recepción del Documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='date_finished_petition'
                            value={qualityPetition.date_finished_petition}
                            placeholder="Decribe el motivo por el que deseas cambiar este documento" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Fecha de finalización del cambio:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select"
                            onChange={handleChange}
                            name='process_customer'
                            value={qualityPetition.process_customer}
                            id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected> Selecciona el proceso correspondiente </option>
                            <option value='Compras'>Compras</option>
                            <option value='Operaciones'>Operaciones</option>
                            <option value='Calidad'>Calidad</option>
                            <option value='Dirección'>Dirección</option>
                            <option value='Transporte'>Transporte</option>
                        </select>
                        <label for="floatingSelect"> Proceso solicitante</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select"
                            onChange={handleChange}
                            name='status'
                            value={qualityPetition.status}
                            id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected> Selecciona el estado del trámite</option>
                            <option value='divulgado'>Divulgado</option>
                            <option value='distribuido'>Distribuido</option>
                            <option value='completado'>Completado</option>
                        </select>
                        <label for="floatingSelect"> Estado del trámite</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control"
                            onChange={handleChange}
                            name='observation'
                            value={qualityPetition.observation}
                            placeholder="indica si existe alguna observación"
                            id="floatingTextarea">
                        </textarea>
                        <label for="floatingTextarea">Observación</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Editar Solicitud
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

                                    <li>Procesos afectados con el cambio: {qualityPetition.process_affected}</li>
                                    <li>Nombre del usuario solicitante {qualityPetition.name_customer}</li>
                                    <li>Proceso solicitando el cambio: {qualityPetition.process_customer}</li>
                                    <li>Fecha de envio de documento: {qualityPetition.date_petition_sent}</li>
                                    <li>Fecha de recepción del documento: {qualityPetition.date_petition_received}</li>
                                    <li>Estado de la petición: {qualityPetition.status}</li>
                                    <li>Fecha de finalización del cambio: {qualityPetition.date_finished_petition}</li>
                                    <li>Observación:{qualityPetition.observation}</li>

                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Editar Control de Cambio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}