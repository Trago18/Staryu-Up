const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			searchRequest: [{ search: "one" }, { search: "two" }, { search: "three" }, { search: "four" }],
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
<<<<<<< HEAD
				profile_pic:
					"https://www.kindpng.com/picc/m/442-4426528_round-picture-profile-blond-hd-png-download.png"
=======
				profile_pic: ""
>>>>>>> b8b821881ae8c0792cda85c6ca262c677abe59b5
			},
			supplierData: {
				name: "",
				phone_number: "",
				category: "",
				email: "",
				address: "",
				schedule: "",
				description: "",
				profile_pic: "",
				image_url: ""
			}
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
			getUser: id => {
				fetch(process.env.BACKEND_URL + "/user/" + id)
					.then(res => res.json())
					.then(data => setStore({ userData: data[0] }))
					.catch(error => console.log("Error user profile", error));
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
