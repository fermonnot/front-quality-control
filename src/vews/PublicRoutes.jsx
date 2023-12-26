import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useAuthContext from '../context/authContext';



const PublicRoutes = () => { 

    const auth =  useAuthContext();
    console.log("este es el auth:", auth[0].userData)
    if (auth[0].userData == null) {
        return (
            console.log("es falso"), 
            auth[0].userData ? <Navigate to="/home" /> :  <Outlet />

        )
    }else (console.log("es verdad motherfucker"), true)
    
    
    return (
        
        auth[0].userData ? <Navigate to="/home" /> :  <Outlet />
        
    );  
};
export default PublicRoutes;
