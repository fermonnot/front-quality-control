import React, { useState, useContext } from 'react';
import { CDBInput, CDBBox, CDBContainer } from 'cdbreact';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';


const Singup = () => {

    let initState = {
        user_name: '',
        password: '',
        role: ''
    };
    const { actions, store } = useContext(Context);
    const [userLogin, setUserLogin] = useState(initState);

    function handleChange({ target }) {
        setUserLogin({
            ...userLogin,
            [target.name]: target.value,
        });

    }


    const handleSubmit = async (event) => {

        event.preventDefault();
        if (userLogin.user_name.trim() != "" && userLogin.password.trim() != "" && userLogin.role.trim() != "") {

            let response = await actions.userRegister(userLogin);
            console.log("respuesta del user:", response)
            if (response == false) {
                console.log("usuario ya existe");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Este nombre de usuario ya existe",
                });
            }
            else {
                Swal.fire({
                    
                    isConfirmed: window.location.reload(),
                    position: "center",
                    icon: "success",
                    title: "Usuario creado!",    
                    timer: 5000,

                })
            };


        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Verifica usuario o clave",
            });
        }
    };



    return (

        <CDBContainer>
            <div className='container text-center' >
                <form onSubmit={handleSubmit}>
                    <div className='row row cols-2'>   
                        <h1>Creación de usuario </h1>
                        <CDBInput type="user" placeholder="Nombre de usuario"
                            className="form-control my-2 col mx-2"
                            name="user_name"
                            onChange={handleChange}
                            value={userLogin.usuario}
                        />
                        <CDBInput type="password" placeholder="Clave"
                            className="form-control my-2 col mx-2"
                            name="password"
                            onChange={handleChange}
                            value={userLogin.password}
                        />

                        <select className="form-select my-2 col mx-2"
                            onChange={handleChange}
                            name='role'
                            value={userLogin.role}
                            id="floatingSelect"
                            aria-label="Floating label select example">
                            <option selected>Selecciona un role para el usuario</option>
                            <option value="usuario">Principiante</option>
                            <option value="calidad">Amateur</option>
                            <option value="admin">Nivel Leyenda</option>
                            <label for="floatingSelect"> Tipo de documento</label>
                        </select>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className="btn btn-primary w-50 my-3 ">
                            Crear usuario
                        </button>
                    </div>
                </form>
            </div>
        </CDBContainer >
    );
};
export default Singup;