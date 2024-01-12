import { Navigate } from "react-router";
import useAuthContext from "../context/authContext"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			userData: JSON.parse(localStorage.getItem("userData")) ?? null,
			// user_id: localStorage.getItem("user_id") || "",

			urlBase: "http://127.0.0.1:3005",
			endPoint: "petitions",
			petitions: [],
			petition: [],	
			controlsp: [],
			controlp: []

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
						console.log(data);	
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
					console.log('data:',data)
					if (response.ok) {
						setStore({
							...store,
							controlsp: data
						})

					}
				} catch (error) {

					return console.log(error), 401

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
						getActions().getControlP(),

							console.log("me guardé")
					}

				} catch (error) {
					console.log("explote"(error))
				}

			},

			editControlP: async (cpetition) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.urlBase}/controlsp/<int:controlp_id>`, {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.userData.token}`
						},

						body: JSON.stringify(cpetition)
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

			// getOrdenCo: async () => {
			// 	let store = getStore()
			// 	try {
			// 		let response = await fetch(`${store.urlBase}/ordenco`,
			// 			{
			// 				headers: {
			// 					"Content-Type": "application/json",
			// 					"Authorization": `Bearer ${store.token}`
			// 				},
			// 			})

			// 		let data = await response.json();
			// 		console.log(data)
			// 		if (response.ok) {
			// 			setStore({
			// 				...store,
			// 				ordenCo: data
			// 			})

			// 		}
			// 	} catch (error) {

			// 		console.log(error)
			// 	}
			// },


			// filterProducts: async (description) => {
			// 	let store = getStore()
			// 	let filtered = store.products.filter((product) => product.description.includes(description) == true)
			// 	setStore({

			// 		...store,
			// 		filterProducts: filtered
			// 	})
			// 	console.log(filtered)
			// },

			// addOrdenCo: async (ordenco) => {
			// 	let store = getStore()

			// 	try {
			// 		let response = await fetch(`${store.urlBase}/ordenco`, {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				"Authorization": `Bearer ${store.token}`
			// 			},
			// 			body: JSON.stringify(ordenco)
			// 		})
			// 		console.log(response)
			// 		if (response.ok) {

			// 			getActions().getOrdenCo()
			// 		}

			// 	} catch (error) {

			// 		console.log("explote", error)
			// 	}

			// },

			// deleteOrdenCo: async (ordenco_id) => {
			// 	console.log(ordenco_id)
			// 	let store = getStore()
			// 	try {
			// 		let response = await fetch(`${store.urlBase}/ordenco/${ordenco_id}`, {
			// 			method: "DELETE",
			// 			headers: {

			// 				"Authorization": `Bearer ${store.token}`
			// 			},

			// 		})
			// 		console.log(response)
			// 		if (response.ok) {
			// 			getActions().getOrdenCo()
			// 			console.log("me borré")
			// 		}

			// 	} catch (error) {
			// 		console.log(error)
			// 	}

		}

	};
};

export default getState;
