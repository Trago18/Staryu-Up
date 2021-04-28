import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Media, Card, Button, Container, Col } from "react-bootstrap";
import imgGarden from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

// This is the loop for the search result component

export const Search_Single = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.searchData.map((value, index) => {
				return (
					<>
						<Container>
							<Card style={{ width: "100%" }}>
								<Card.Body>
									<Media>
										<img
											width={180}
											height={200}
											className="mr-3"
											src={
												value.profile_pic == null
													? "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg"
													: value.profile_pic
											}
											alt="Supplier Avatar"
										/>
										<Media.Body>
											<Card.Link href={"/supplier/" + value.id}>
												<h5 className="name-result">{value.name}</h5>
											</Card.Link>
											<span>
												<b>{value.address}</b>
											</span>
											<hr />
											<p>{value.description}</p>
										</Media.Body>
										<Col xs={1} className="resultsStars p-1">
											<Button>
												<i className="far fa-star fa-2x" />
											</Button>
											<p className="supplierRating p-2"> {"4.5 stars"}</p>
										</Col>
									</Media>
								</Card.Body>
							</Card>
						</Container>
					</>
				);
			})}
		</div>
	);
};
