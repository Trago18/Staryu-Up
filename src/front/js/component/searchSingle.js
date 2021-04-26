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
			{store.searchData.map((value, index) => {
				return (
					<>
						<Card style={{ width: "100%" }}>
							<Card.Body>
								<Media>
									<img
										width={180}
										height={200}
										className="mr-3"
										src={value.profile_pic}
										alt="Generic placeholder"
									/>
									<Media.Body>
										<Card.Link href="#">
											<h5>{value.name}</h5>
										</Card.Link>
										<span>
											<b>{value.address}</b>
										</span>
										<hr />
										<p>{value.description}</p>
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
