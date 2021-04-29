import React, { useState, useContext } from "react";
import "../../styles/searchResults.scss";
import { Search_Single } from "../component/searchSingle";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Search_Results = () => {
	const { store, actions } = useContext(Context);

	const numberResults = store.searchData.length; //Pulls the number of search results from the store

	const [data, setData] = useState({
		search: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontSearch = e => {
		e.preventDefault();
		// console.log(data.search);
		store.search = data.search;
		actions.postSearch(data.search);
	};

	return (
		<Container className="p-3">
			<Row>
				<Col>
					<form className="col-12 d-flex justify-content-center px-5" onSubmit={frontSearch}>
						<div className="search">
							<input
								type="text"
								className="search-input"
								placeholder="Búsqueda por proveedor..."
								name="search"
								onChange={handleInputChange}
							/>
							<button href="#" className="search-icon">
								<i className="fa fa-search" />
							</button>
						</div>
					</form>
				</Col>
			</Row>

			<Row>
				<Col>
					<h5 className="results py-4">
						{numberResults + " "}
						{numberResults == 1
							? "Resultado encontrado para " + store.search
							: "Resultados encontrados para " + store.search}
					</h5>
				</Col>
			</Row>
			<Row>
				<Col className="resultsSingle">
					{store.searchData.name ? console.log(true) : console.log(false)}
					{/* <Search_Single /> */}
				</Col>
			</Row>
		</Container>
	);
};
