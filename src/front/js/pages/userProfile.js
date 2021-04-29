import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/userProfile.scss";
import { Media, Tab, Tabs, Container, Row, Col } from "react-bootstrap";

export const User_Profile = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUser();
		actions.getFavorites();
	}, []);

	const removeFavorite = id => {
		actions.deleteFavorites(id);
	};

	return (
		<Container className="bg-light my-5">
			<Row>
				<Col className="userCard py-3 px-4 " style={{ width: "100%", height: "160px" }}>
					<Media>
						<img
							width={130}
							height={130}
							className=" rounded-circle  "
							src={
								store.userData.profile_pic == null
									? "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg"
									: store.userData.profile_pic
							}
							alt="user_profile_photo"
						/>
						<Media.Body>
							<div className="row">
								<h5 className="col-9 pl-4">
									{store.userData.first_name + " " + store.userData.last_name}
								</h5>
								<div className="col mt-4 d-flex justify-content-center">
									<input type="submit" className="boton15" value="Perfil proveedor" />
								</div>
								<hr />
							</div>
						</Media.Body>
					</Media>
				</Col>
			</Row>
			<Row>
				<Tabs defaultActiveKey="cuenta" id="uncontrolled-tab-example" className="tabs pr-5 justify-content-end">
					<Tab eventKey="cuenta" title="Mi Cuenta" className="userTab">
						<div className="userInfo pl-3 pt-3"></div>
						<div className="userAccount pl-3 ">
							<div>
								<span>Email: {store.userData.email}</span>
								<hr />
							</div>
							<div>
								<span>Contraseña: {store.userData.password}</span>
								<hr />
							</div>
							<div>
								<span>Teléfono: {store.userData.phone_number}</span>
								<hr />
							</div>
						</div>
					</Tab>
					<Tab eventKey="favoritos" title="Favoritos" className="favoritesTab">
						<div className="userAccount pl-3 pt-3">
							<div>
								<h5>Mi lista de favoritos:</h5>
								<hr />
								<Row />
								{store.favorites != "" &&
									store.favorites.map((value, index) => {
										return (
											<>
												<div className="row">
													<ul className="col-11" key={index}>
														{value.name}
													</ul>
													<div
														className="col basurero2"
														onClick={() => removeFavorite(value.id)}>
														<i className="fas fa-trash-alt trash2" />
													</div>
												</div>
												<hr />
											</>
										);
									})}
							</div>
						</div>
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
};
