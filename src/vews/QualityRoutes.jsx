import React, { useContext } from 'react';
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import useAuthContext from '../context/authContext';



const QualityRoutes = ({allowedRoles} ) => {

    const location = useLocation();
    const auth = useAuthContext();
    const navigate = useNavigate()
    // const from = location.state?.from || '/default';
    console.log("este es el auth:", auth[0].userData.role)
    if (!allowedRoles.includes(auth[0].userData.role)) {
        return (
            console.log("esta vacio"),
            <Navigate to="/login" />
        )

    } else
        return (
            <Outlet /> 
        );
    
    
    
};
export default QualityRoutes;
