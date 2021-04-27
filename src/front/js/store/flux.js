const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			userData: {
				first_name: "",
				last_name: "",
				phone_number: "",
				email: "",
				password: "",
				profile_pic: "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg"
			},
			supplierData: {
				name: "",
				phone_number: "",
				category: "",
				email: "",
				address: "",
				schedule: "",
				description: "",
				profile_pic: "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg",
				image_url: ""
			},
			searchData: [],
			favorites: [],
			commentaries: [],
			token: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getSupplier: id => {
				fetch(process.env.BACKEND_URL + "/supplier/" + id)
					.then(res => res.json())
					.then(data => setStore({ supplierData: data[0] }))
					.catch(error => console.log("Error supplier profile", error));
			},
			getUser: () => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token.access_token
					}
				};
				fetch(process.env.BACKEND_URL + "/user", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ userData: data[0] }))
					.catch(error => console.log("Error user profile", error));
			},
			postSearch: search => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ search: search })
				};
				fetch(process.env.BACKEND_URL + "/search", requestOptions)
					.then(response => response.json())
					.then(data => {
						//console.log(data);
						setStore({ searchData: data });
					});
			},
			postUserRegister: (first_name, last_name, phone_number, email, password) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						phone_number: phone_number,
						email: email,
						password: password
					})
				};
				fetch(process.env.BACKEND_URL + "/user_signup", requestOptions)
					.then(response => response.json())
					.then(data => console.log(data));
			},
			postSupplierRegister: (name, phone_number, email, category, address, schedule, description) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						phone_number: phone_number,
						email: email,
						category: category,
						address: address,
						schedule: schedule,
						description: description
					})
				};
				fetch(process.env.BACKEND_URL + "/supplier_signup", requestOptions)
					.then(response => response.json())
					.then(data => console.log(data));
			},
			postLogin: (email, password) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				};
				fetch(process.env.BACKEND_URL + "/login", requestOptions)
					.then(response => response.json())
					.then(data => {
						console.log(data[0]);
						setStore({ token: data[1] });
					});
			},
			postRecovery: email => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email })
				};
				fetch(process.env.BACKEND_URL + "/password_recovery", requestOptions)
					.then(response => response.json())
					.then(data => console.log(data));
			},
			getFavorites: () => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token.access_token
					}
				};
				fetch(process.env.BACKEND_URL + "/favorite", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ favorites: data }))
					.catch(error => console.log("Error get favorites", error));
			},
			postFavorites: favorite => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token.access_token
					},
					body: JSON.stringify({ favorite: favorite })
				};
				fetch(process.env.BACKEND_URL + "/favorite", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ favorites: data }))
					.catch(error => console.log("Error post favorites", error));
			},
			getCommentaries: id => {
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/comment")
					.then(res => res.json())
					.then(data => setStore({ commentaries: data }))
					.catch(error => console.log("Error get commentaries", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
