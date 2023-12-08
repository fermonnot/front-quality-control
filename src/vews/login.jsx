import React,   { useState,useContext } from 'react';
import { Context } from '../store/appContext';
import {Navigate, useNavigate} from "react-router-dom";
	


const Login = () => {
	let initState = {
		user_name:'',
		password: '',
	};
	const {actions} = useContext(Context);
	const [userLogin,setUserLogin]= useState(initState);

	let navigate = useNavigate();

	const handleChange = ({target}) => {
		setUserLogin ({
		 ...userLogin,
		 [target.name]:target.value,
		});

	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (userLogin.user_name.trim() != "" && userLogin.password.trim() != "") {
			
		   let response = await actions.Login(userLogin);
		   if (response){
			navigate("/")}
			window.location.reload();
		} else {
		 console.log("campos obligatorios");
		} 
	};



  return (
    <div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form onSubmit={handleSubmit}>
						<div className="form- group">
							<label>Usuario</label>
							<input type="text"
							 name="user_name" 
							 className="form-control"
							 onChange={handleChange}
							 value={userLogin.usuario}
							/>
						</div>

						<div className="form- group">
							<label>Contraseña</label>
							<input type="password" 
							name="password" 
							className="form-control"
							onChange={handleChange}
							value={userLogin.password}
							/>
						</div>

						<button className="btn btn-primary w-100 my-3">
							Iniciar sesion
						</button>

					</form>
				</div>
			</div>
		</div>
  )
}

export default Login