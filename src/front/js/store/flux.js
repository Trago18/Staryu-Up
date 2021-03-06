import userImg from "../../img/avatar.jpg";
import supplierImg from "../../img/supplier.png";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userInfo: "",
			supplierInfo: "",
			userData: {
				first_name: "",
				last_name: "",
				phone_number: "",
				email: "",
				password: "",
				profile_pic: userImg
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
				profile_pic: supplierImg,
				member_since: "",
				image_url: ""
			},
			search: "",
			searchData: [],
			favorites: [],
			commentaries: [],
			rate: "",
			favorite: "",
			recovery: "",
			suppURL: "",
			token: null || sessionStorage.Token || localStorage.Token
		},
		actions: {
			getSupplier: id => {
				fetch(process.env.BACKEND_URL + "/supplier/" + id)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ supplierData: data[0] });
					})
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
					})
					.catch(error => console.log("Error search", error));
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
					.then(data => setStore({ userInfo: data }))
					.catch(error => console.log("Error user register", error));
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
					.then(data => setStore({ supplierInfo: data }))
					.catch(error => console.log("Error supplier register", error));
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
						//console.log(data);
						checkbox == "on"
							? (localStorage.Token = data.access_token)
							: (sessionStorage.Token = data.access_token);
						setStore({ token: data.access_token });
					})
					.catch(error => console.log("Error login", error));
			},
			postRecovery: email => {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email })
				};
				fetch(process.env.BACKEND_URL + "/password_recovery", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ recovery: data }))
					.catch(error => console.log("Error password recovery", error));
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
				await fetch(process.env.BACKEND_URL + "/supplier/" + id + "/rate", requestOptions).catch(error =>
					console.log("Error post/delete rate user", error)
				);
				await fetch(process.env.BACKEND_URL + "/supplier/" + id, { method: "POST" }).catch(error =>
					console.log("Error post rate supplier", error)
				);
			},
			getRate: id => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					}
				};
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/rate", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ rate: data }))
					.catch(error => console.log("Error get rate", error));
			},
			getFavoriteSup: id => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					}
				};
				fetch(process.env.BACKEND_URL + "/supplier/" + id + "/favorite", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ favorite: data }))
					.catch(error => console.log("Error get favorite sup", error));
			},
			getSupURL: () => {
				const requestOptions = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + getStore().token
					}
				};
				fetch(process.env.BACKEND_URL + "/supplier", requestOptions)
					.then(res => res.json())
					.then(data => setStore({ suppURL: data }))
					.catch(error => console.log("Error get sup url", error));
			}
		}
	};
};

export default getState;
