import React, { useContext } from "react";
import { Context } from "../store/appContext";
import useAuthContext from "../context/authContext";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { getDate } from "../helpers/date";


export const Home = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    

    const handleDelete = (petition_id) => {

        
        actions.deletePetition(petition_id)
        console.log("petitions", typeof petition_id)
             
    }
    console.log("este es ",useAuthContext())
    
    // let dateFromDB = new Date(store.petition.created); // Ejemplo de fecha obtenida de la base de datos
    // let options = { timeZone: 'America/Caracas', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    // let formattedDate = new Intl.DateTimeFormat('es-VE', options).format(dateFromDB);
    // console.log(formattedDate);
    
    const handlePetition = (petition_id) => {
        
      
        actions.consultPetition(petition_id)
        navigate(`/add-controlp/${petition_id}`)
        
    
    }
    
    const petitionInfo = store.petition
    console.log("esta es la info:",petitionInfo)
    
    return (
        <>
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
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {store.petitions.map((petitions, index) => {

                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{getDate(petitions.created)}</td>
                                <td>{petitions.code}</td>
                                <td>{petitions.document_title}</td>
                                <td>{petitions.change_description}</td>
                                <td>{petitions.change_justify}</td>
                                <td>{petitions.type_document}</td>
                                <td>{petitions.change_type}</td>
                                <td>                                  
                                <button type="buttom"
                                    className="btn btn-primary"
                                    onClick={()=>handleDelete(petitions.id)}
                                    >Eliminar
                                </button>
                                <button type="buttom"
                                    className="btn btn-primary m-1"
                                    onClick={()=> handlePetition(petitions.id)}
                                    >Gestionar
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