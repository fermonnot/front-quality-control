const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			token: localStorage.getItem("token") || "",
			user_id: localStorage.getItem("user_id") || "",
			urlBase: "http://127.0.0.1:3005",
			endPoint: "petitions",
			petitions: [],
			petition: [],
			filterProducts: [],
			ordenCo: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			getPetitions: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/${store.endPoint}`,{
						
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.token}`
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

					console.log(error)
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
						setStore({ token: data.token, user_id: data.user_id });
						localStorage.setItem("token", data.token, "user_id", data.user_id);
						return true;
						
					}
					return false;

				} catch (error) {
					console.log(`Error: ${error}`);
				}
			},


			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: "" });
				window.location.reload();
			},





			addPetition: async (petition) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.urlBase}/petition`, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${store.token}`
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

			deleteProduct: async (product_id) => {
				console.log(product_id)
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/products/${product_id}`, {
						method: "DELETE",

					})
					console.log(response)
					if (response.ok) {
						getActions().getProducts()
						console.log("me borré")
					}

				} catch (error) {
					console.log(error)
				}

			},


			getOrdenCo: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/ordenco`,
						{
							headers: {
								"Content-Type": "application/json",
								"Authorization": `Bearer ${store.token}`
							},
						})

					let data = await response.json();
					console.log(data)
					if (response.ok) {
						setStore({
							...store,
							ordenCo: data
						})

					}
				} catch (error) {

					console.log(error)
				}
			},


			filterProducts: async (description) => {
				let store = getStore()
				let filtered = store.products.filter((product) => product.description.includes(description) == true)
				setStore({

					...store,
					filterProducts: filtered
				})
				console.log(filtered)
			},

			addOrdenCo: async (ordenco) => {
				let store = getStore()

				try {
					let response = await fetch(`${store.urlBase}/ordenco`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(ordenco)
					})
					console.log(response)
					if (response.ok) {

						getActions().getOrdenCo()
					}

				} catch (error) {

					console.log("explote",error)
				}

			},

			deleteOrdenCo: async (ordenco_id) => {
				console.log(ordenco_id)
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/ordenco/${ordenco_id}`, {
						method: "DELETE",
						headers: {
							
							"Authorization": `Bearer ${store.token}`
						},

					})
					console.log(response)
					if (response.ok) {
						getActions().getOrdenCo()
						console.log("me borré")
					}

				} catch (error) {
					console.log(error)
				}

			},
		}

	};
};

export default getState;
