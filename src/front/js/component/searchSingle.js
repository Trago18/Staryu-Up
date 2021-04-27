import React, { useContext } from "react";
import "../../styles/searchResults.scss";
import { Media, Card, Button } from "react-bootstrap";
import imgGarden from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

// This is the loop for the search result component

export const Search_Single = () => {
	const { store, actions } = useContext(Context);

	const favorite = id => {
		actions.postFavorites(id);
	};

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
										src={
											value.profile_pic == null
												? "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg"
												: value.profile_pic
										}
										alt="Generic placeholder"
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
									<Button onClick={() => favorite(value.id)}>
										<i className="far fa-heart fa-2x p-2" />
									</Button>
								</Media>
							</Card.Body>
						</Card>
					</>
				);
			})}
		</div>
	);
};
