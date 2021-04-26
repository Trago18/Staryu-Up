import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Search_Single } from "../component/searchSingle";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Search_Results = () => {
	const { store } = useContext(Context);

	const numberResults = store.searchData.length; //Pulls the number of search results from the store

	return (
		<Container className="p-3 m-auto">
			<h5 className="my-3">
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
