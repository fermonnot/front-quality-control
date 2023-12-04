import React, { useEffect }from "react";
import "../styles/petition.css"




export const Petition = () => {
    let initState = {
		code:'',
		document_title: '',
		change_description: '',
		change_justify: '',
		type_document: '',
		cchange_type: '',

	};
	const {actions} = useContext(Context);
	const [userPetition,setUserPetition]= useState(initState);

	let navigate = useNavigate();

	const handleChange = ({target}) => {
		setUserPetition ({
		 ...userPetition,
		 [target.name]:target.value,
		});

	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (userPetition.code.trim() != "" && userPetition.document_title.trim() != "" && userPetition.change_description.trim() != "" && userPetition.change_justify.trim() != "" && userPetition.cchange_type.trim() != "" && userPetition.type_document.trim() != "") {
			
		   let response = await actions.Login(userPuserPetition);
		   if (response){
			navigate("/")}
			window.location.reload();
		} else {
		 console.log("campos obligatorios");
		} 
	};

    return (
        <>
            <h1>soy petiiciones</h1>
            <div id="div-margen">
                <div class="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="codigo del documento" />
                    <label for="floatingInput">Codigo del documento</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Titulo del documento" />
                    <label for="floatingInput"> Titulo del documento </label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Decribe el cambio que deseas" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Descripcion del cambio</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Decribe el motivo por el que deseas cambiar este documento" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Justificacion del cambio</label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Selecciona un tipo de documento</option>
                        <option value="1">formulario</option>
                        <option value="1">procedimiento</option>
                        <option value="2">instrucciont</option>
                        <option value="3">otro</option>
                    </select>
                    <label for="floatingSelect"> Tipo de documento</label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Selecciona un tipo de cambio</option>
                        <option value="1">creacion</option>
                        <option value="2">actualizacion</option>
                        <option value="3">eliminacion</option>
                    </select>
                    <label for="floatingSelect">Tipo de camnbio</label>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button">Generar Solicitud</button>

                </div>
            </div>
        </>
    );


}