import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Media, Card } from "react-bootstrap";
import imgGarden from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

// This is the loop for the search result component

export const Search_Single = () => {
	const { store } = useContext(Context);

	return (
		<div>
			{store.searchRequest.map(() => {
				return (
					<>
						<Card style={{ width: "100%" }}>
							<Card.Body>
								<Media>
									<img
										width={180}
										height={200}
										className="mr-3"
										src={imgGarden}
										alt="Generic placeholder"
									/>
									<Media.Body>
										<Card.Link href="#">
											<h5 className="name-result">Jimenez Landscaping</h5>
										</Card.Link>
										<span>
											<b>Poás, Alajuela</b>
										</span>
										<hr />
										<p>
											Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
											ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
											tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
											Donec lacinia congue felis in faucibus.
										</p>
									</Media.Body>
									<Card.Link href="#">
										<i className="far fa-heart fa-2x p-2" />
									</Card.Link>
								</Media>
							</Card.Body>
						</Card>
					</>
				);
			})}
		</div>
	);
};
