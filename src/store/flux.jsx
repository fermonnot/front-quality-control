import { Navigate } from "react-router";
import useAuthContext from "../context/authContext"
import { getDate } from "../helpers/date";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			userData: JSON.parse(localStorage.getItem("userData")) ?? null,
			// user_id: localStorage.getItem("user_id") || "",

			urlBase: "http://127.0.0.1:3005",
			endPoint: "petitions-active",
			petitions: [],
			petitions_active: [],
			petition: [],	
			controlsp: [],
			controlp: [],
			cnpetition:[]

		},

		actions: {
			// Use getActions to call a function within a fuction
			getPetitions: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/${store.endPoint}`, {

						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

					});
					let data = await response.json();

					if (response.ok) {
						setStore({
							...store,
							petitions: data
						})

					}
				} catch (error) {

					return console.log(error), 401

				}
			},

			userRegister: async (user) => {
				let store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/user`, {

						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(user),
					});
					if (response.ok) {
						return true;
					}
					return false;
				} catch (error) {
					console.log(`Error: ${error}`);
				}
			},

			Login: async (user) => {
				// const {setAuth} = useAuthContext();
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/login`, {

						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(user)
					});
					if (response.ok) {

						let data = await response.json();
						const userData = {
							"token": data.token,
							"user_id": data.user_id,
							"role": data.roles_user
						}
						localStorage.setItem("userData", JSON.stringify(userData));

						setStore(userData);

						return true;

					}
					return false;

				} catch (error) {
					console.log(`Error: ${error}`);
				}
			},


			logout: () => {
				localStorage.removeItem("userData");
				setStore({ userData: "" });
				window.location.reload();
			},


			addPetition: async (petition) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.urlBase}/petition`, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

						body: JSON.stringify(petition)
					})
					console.log(response)
					if (response.ok) {
						getActions().getPetitions(),

							console.log("me guardé")
					}

				} catch (error) {
					console.log("explote"(error))
				}

			},

			editPetition: async (petition_id) => {
				let store = getStore()
				let active_petition = {"is_active": false}
				try {
					let response = await fetch(`${store.urlBase}/petitions-active/${petition_id}`, {
						method: "PATCH",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

						body: JSON.stringify(active_petition)
					})
					console.log(response)
					if (response.ok) {
						
						console.log("me volvi inactiva")
					}

				} catch (error) {
					console.log("explote"(error))
				}

			},

			deletePetition: async (petition_id) => {

				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/${store.endPoint}/${petition_id}`, {
						method: "DELETE",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},
						body: JSON.stringify(petition_id)
					})
					console.log(response)
					if (response.ok) {
						
						const data = await response.json();
						console.log(data);
						getActions().getPetitions(), 300
						console.log("me borré")
					}

				} catch (error) {
					console.log(error)
				}

			},
			consultPetition: async (petition_id) => {

				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/${store.endPoint}/${petition_id}`, {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},
						
					})
						
					if (response.ok) {
						
						const data = await response.json();
						console.log("ESTA ES DATA",data);	
						setStore({
							...store,
							petition: data 	
						})	
					}

				} catch (error) {
					console.log(error)
				}

			},

			getControlP: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/controlsp`, {

						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

					});
					let data = await response.json();
					console.log('este es el CONTROL PETITIONS:',data)
					if (response.ok) {
						setStore({
							...store,
							controlsp: data
						})

					}
					console.log("este es el store de CONTROLSP:",getDate( store.controlsp.update_at))
				} catch (error) {

					return console.log(error), 401

				}
			},
			

			consultControlP: async (controlp_id) => {

				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/controlsp/${controlp_id}`, {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},
						
					})
						
					if (response.ok) {
						
						const data = await response.json();
						console.log("ESTA ES DATA",data);	
						setStore({
							...store,
							controlp: data 	
						})	
					}

				} catch (error) {
					console.log(error)
				}

			},

			


			addControlP: async (cpetition) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.urlBase}/controlp`, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

						body: JSON.stringify(cpetition)
					})
					console.log(response)
					if (response.ok) {
						
						console.log("me guardé")
					}

				} catch (error) {
					console.log("explote"(error))
				}

			},

			editControlP: async (controlp_id, cnpetition) => {
				let store = getStore()
				
				try {
					let response = await fetch(`${store.urlBase}/controlsp/${controlp_id}`, {
						method: "PATCH",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

						body: JSON.stringify(cnpetition)
						
					})
					console.log(response)
					if (response.ok) {
						getActions().getControlP(),

							console.log("me guardé")
					}

				} catch (error) {
					console.log("explote"(error))
				}

			},

			


			
		}

	};
};

export default getState;
