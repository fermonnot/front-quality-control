import "../styles/navbar.css";

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"


export function Navbar() {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    ;
    console.log("este es el sTORE.USERDATA",store.userData)
    const handleLogin = () => {actions.Login};
    const handleLogout = () => {actions.logout};


    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom" id="navbar">

            <div className="container-fluid navbar-custom">
                <button className="icon " type="button">
                    <span><img className="img w-25 "src={logo}/></span>
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {store.userData ?(
                                <Link to="/home" className="nav-link active" aria-current="page" href="#">Gestionar las Peticiones</Link>
                                ) : (
                                    null
                                )}
                        </li>

                        <li>
                            {store.userData ?(
                               null
                            ) : (
                                <Link to="/login" className="nav-link active" aria-current="page" href="#">Iniciar sesion</Link>
                             )}
                        </li>
                        <li>
                            {store.userData ? (
                                <Link to="/petitions" className="nav-link active" aria-current="page" href="#"> Nueva peticion</Link>
                            ) : (
                               null
                            )}

                           
                        </li>
                        <li>
                        {store.userData != null &&  store.userData.role != "usuario" ? (
                                <Link to="/controlsp" className="nav-link active" aria-current="page" href="#"> Histiorico de Cambios</Link>
                            ) : (
                               null
                            )}

                           
                        </li>
                    </ul>
                </div>
                <div>
                    {store.userData ? (
                        <button type="button" className="btn-close" aria-label="Close"
                            onClick={() => {
                                handleLogout(),
                                    navigate("/"),
                                    actions.logout();
                            }}>
                        </button>
                    ) : (
                        <button onClick={() => {
                            handleLogin(),
                                navigate("/login")
                        }} >Sign In</button>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;