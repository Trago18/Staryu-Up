const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
				rate: "",
				schedule: "",
				description: "",
				profile_pic: "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg",
				image_url: ""
			},
			search: "",
			searchData: [],
			favorites: [],
			commentaries: [],
			rate: "",
			token: null || sessionStorage.Token || localStorage.Token
		},
		actions: {
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
						Authorization: "Bearer " + getStore().token
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
					headers: { "Content-Type": "application/json", Authorization: "Bearer " + getStore().token },
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
			postLogin: (email, password, checkbox) => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				};
				fetch(process.env.BACKEND_URL + "/login", requestOptions)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						checkbox == "on"
							? (localStorage.Token = data.access_token)
							: (sessionStorage.Token = data.access_token);
						setStore({ token: data.access_token });
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
						Authorization: "Bearer " + getStore().token
					}
				};
				fetch(process.env.BACKEND_URL + "/favorite", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ favorites: data }))
					.catch(error => console.log("Error get favorites", error));
			},
			postFavorites: id => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					},
					body: JSON.stringify({ favorite: id })
				};
				fetch(process.env.BACKEND_URL + "/favorite", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ favorites: data }))
					.catch(error => console.log("Error post favorites", error));
			},
			deleteFavorites: id => {
				const requestOptions = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					},
					body: JSON.stringify({ favorite: id })
				};
				fetch(process.env.BACKEND_URL + "/favorite", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ favorites: data }))
					.catch(error => console.log("Error delete favorites", error));
			},
			getCommentaries: id => {
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/comment")
					.then(res => res.json())
					.then(data => setStore({ commentaries: data }))
					.catch(error => console.log("Error get commentaries", error));
			},
			postCommentaries: (id, comment) => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					},
					body: JSON.stringify({ comment: comment })
				};
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/comment", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ commentaries: data }))
					.catch(error => console.log("Error post commentaries", error));
			},
			deleteCommentaries: (id, comment) => {
				const requestOptions = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					},
					body: JSON.stringify({ comment: comment })
				};
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/comment", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ commentaries: data }))
					.catch(error => console.log("Error delete commentaries", error));
			},
			userRate: async (id, rate) => {
				let method = "";
				if (rate == "0") {
					method = "DELETE";
				} else {
					method = "POST";
				}
				const requestOptions = {
					method: method,
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					},
					body: JSON.stringify({ rate: rate })
				};
				await fetch(process.env.BACKEND_URL + "/supplier/" + id + "/rate", requestOptions);
				await fetch(process.env.BACKEND_URL + "/supplier/" + id, { method: "POST" });
			},
			getRate: id => {
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/rate")
					.then(res => res.json())
					.then(data => setStore({ rate: data }))
					.catch(error => console.log("Error get rate", error));
			}
		}
	};
};

export default getState;
