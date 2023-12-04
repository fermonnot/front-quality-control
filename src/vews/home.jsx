import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Home = () =>{
    const { store, actions } = useContext(Context);
    

    return (
        <>  
            {store.petitions.map((petitions, index) => {
                return (
                    <div key={index}>
                        <h1> SOLICITUDES DE CAMBIO </h1>

                        <table className="table table-striped border-start-button">
                            <thead className="border-end">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fecha de creación</th>
                                    <th scope="col">Codigo de documento</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Descripción del cambio </th>
                                    <th scope="col">Justificación del cambio</th>
                                    <th scope="col">Tipo de documento</th>
                                    <th scope="col">Tipo de cambio</th>
                                    <th scope="col">status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{petitions.created}</td>
                                    <td>{petitions.code}</td>
                                    <td>{petitions.document_title}</td>
                                    <td>{petitions.change_description}</td>
                                    <td>{petitions.change_justify}</td>
                                    <td>{petitions.type_document}</td>
                                    <td>{petitions.change_type}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </>
    )
}

