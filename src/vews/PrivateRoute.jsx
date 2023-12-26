import React, { useContext } from 'react';
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

import useAuthContext from '../context/authContext';



const PrivateRoute = () => {

    const location = useLocation();
    const auth =  useAuthContext();
    const navigate = useNavigate()
    // const from = location.state?.from || '/default';
    console.log("este es el auth:", auth[0].userData)
    if (auth[0].userData == null) {
        return (
            console.log("esta vacio"),
            <Navigate to="/login" />
        )
    }else (console.log("es verdad motherfucker"), true)
    
    
    return (
        auth[0].userData ? <Outlet /> :  <Navigate to="/login" />
    
    );
};
export default PrivateRoute;
