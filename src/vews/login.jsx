import React,{ useState, useContext } from 'react';
import { Context } from '../store/appContext';
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import useAuthContext from '../context/authContext';


const Login = () => {
	let initState = {
		user_name:'',
		password: '',
	};
	const {actions, store} = useContext(Context);
	const [userLogin,setUserLogin]= useState(initState);
	
	
	
	const navigate = useNavigate();

	function handleChange({ target }) {
		setUserLogin({
			...userLogin,
			[target.name]: target.value,
		});

	}



    

	const handleSubmit = async (event) => {
		
		event.preventDefault();
		if (userLogin.user_name.trim() != "" && userLogin.password.trim() != "") {

		   let response = await actions.Login(userLogin);
		   if (response){
				
				navigate("/home")};
				actions.getPetitions();
				window.location.reload();

		} else {
		 console.log("campos obligatorios")
		 ;
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