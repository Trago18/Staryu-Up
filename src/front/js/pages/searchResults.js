import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Search_Single } from "../component/searchSingle";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Search_Results = () => {
	const { store } = useContext(Context);

	const numberResults = store.searchData.length; //Pulls the number of search results from the store

	return (
		<Container className="row p-3 m-auto">
			<form className="col-12 d-flex justify-content-center px-5">
				<div className="search">
					<input type="text" className="search-input" placeholder="Búsqueda por proveedor..." name="search" />
					<button href="#" className="search-icon">
						<i className="fa fa-search" />
					</button>
				</div>
			</form>
			<h5 className="results pt-4 pb-3">
				{numberResults + " "}
				Resultado(s) encontrados para {' " " '}
			</h5>

			<Row>
				<Col>
					<Search_Single />
				</Col>
			</Row>
		</Container>
	);
};
