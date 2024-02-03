import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
} from 'cdbreact';
import "../styles/sidebar.css"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png"








export function Sidebar() {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    const handleLogin = () => { actions.Login };
    const handleLogout = () => { actions.logout }

    console.log(store.userData, "dataaa")

    return (
        <div className='sidebar-custom shadow bg-body-tertiary rounded'>
            <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" style={{ maxHeight: "100vh" }} >
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={logo}
                            alt=""
                            style={{ width: '30px' }}
                        />
                        <h6 className="ms-2">Farmaceutica 24 ™</h6>
                    </div>
                </CDBSidebarHeader>
                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem icon={store.userData.role != "usuario" ? "fa-light fa-clipboard-list" : null}>

                            {store.userData.role != "usuario" ?
                                (
                                    <Link to="/controlsp" className="nav-link active" aria-current="page" href="#"> Histiorico de Cambios</Link>

                                ) : (
                                    null
                                )}
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="far fa-list-ul">


                            <Link to="/home" className="nav-link active" aria-current="page" href="#">Solicitudes</Link>


                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="far fa-edit">
                            <Link to="/petitions" className="nav-link active" aria-current="page" href="#">Nueva Solicitud</Link>
                        </CDBSidebarMenuItem>

                        {/* <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem icon="sticky-note">Componentsss</CDBSidebarMenuItem> */}

                        {/* <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                            metrics
                        </CDBSidebarMenuItem> */}
                        <CDBSidebarMenuItem icon="fas fa-sign-out-alt" iconType="solid"
                            onClick={() => {
                                handleLogout(),
                                    navigate("/login"),
                                    actions.logout();
                            }}> Salir 
                            
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>

                    <div
                        className="sidebar-btn-wrapper"
                        style={{ padding: '20px 5px' }}
                    > Mas que rapido, súper rápido!
                     
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div >
    )
};

export default Sidebar;