import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Media, Card, Container } from "react-bootstrap";
import imgGarden from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

// This is the loop for the search result component

export const Search_Single = () => {
	const { store } = useContext(Context);

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
											src={value.profile_pic}
											alt="Supplier Avatar"
										/>
										<Media.Body>
											<Card.Link href="#">
												<h5 className="name-result">{value.name}</h5>
											</Card.Link>
											<span>
												<b>{value.address}</b>
											</span>
											<hr />
											<p>{value.description}</p>
										</Media.Body>
										<Card.Link href="#" className="resultsStars p-2">
											<i className="far fa-star fa-2x" />
											<i className="far fa-star fa-2x" />
											<i className="far fa-star fa-2x" />
											<i className="far fa-star fa-2x" />
											<i className="far fa-star fa-2x" />
										</Card.Link>
										<div className="supplierRating p-2"> {"4.5 stars"}</div>
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
