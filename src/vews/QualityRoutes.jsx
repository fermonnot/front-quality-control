import React, { useContext } from 'react';
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import useAuthContext from '../context/authContext';



const QualityRoutes = () => {

    const location = useLocation();
    const auth = useAuthContext();
    const navigate = useNavigate()
    // const from = location.state?.from || '/default';
    console.log("este es el auth:", auth[0].userData)
    if (auth[0].userData == null) {
        return (
            console.log("esta vacio"),
            <Navigate to="/login" />
        )

    } else
        if (auth[0].userData.role == "calidad") {
            return (
                 <Outlet /> 
            );
        } else return (
            console.log("NO TIENES EL RANGO PAPA"),
            <Navigate to="/petitions" />
        )
    
    
};
export default QualityRoutes;
