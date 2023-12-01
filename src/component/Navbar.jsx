import "../styles/navbar.css"
import React, { useContext, useState }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";



export function Navbar() {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li>
                            <Link to="/login" className="nav-link active" aria-current="page" href="#">Iniciar sesion</Link>
                        </li>
                        <li>
                            
                            <Link to="/petitions" className="nav-link active" aria-current="page" href="#"> Nueva peticion</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button" className="btn-close" aria-label="Close"
                        onClick={() => {							
                            
                            navigate("/"),
                            actions.logout()  ;
						}}>

                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;