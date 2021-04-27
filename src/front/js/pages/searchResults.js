import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Search_Single } from "../component/searchSingle";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Search_Results = () => {
	const { store } = useContext(Context);

	const numberResults = store.searchData.length; //Pulls the number of search results from the store

	return (
		<Container className="p-3">
			<Row>
				<Col>
					<form className="col-12 d-flex justify-content-center px-5">
						<div className="search">
							<input type="text" className="search-input" placeholder="Búsqueda..." name="search" />
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
						Resultado(s) encontrados para {' " " '}
					</h5>
				</Col>
			</Row>
			<Row>
				<Col className="resultsSingle">
					<Search_Single />
				</Col>
			</Row>
		</Container>
	);
};
