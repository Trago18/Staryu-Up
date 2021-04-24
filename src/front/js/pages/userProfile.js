import React, { useContext } from "react";
import "../../styles/userProfile.scss";
import { Media, Tab, Tabs, Container, Row, Col, Button } from "react-bootstrap";
import imgGarden from "../../img/landscapingvert.jpg";
import googleMaps from "../../img/googleMaps.jpg";
import { Context } from "../store/appContext";

export const User_Profile = () => {
	const { store } = useContext(Context);

	return (
		<Container className="bg-light my-5">
			<Row>
				<div className="userCard p-4 " style={{ width: "100%", height: "140px" }}>
					<Media>
						<img
							width={120}
							height={120}
							className="mr-3 rounded-circle"
							src={imgGarden}
							alt="Supplier avatar"
						/>
						<Media.Body>
							<div>
								<h5>Jimenez Landscaping</h5>
							</div>
							<span>Poás, Alajuela</span>
						</Media.Body>
						<Button className="userButton m-2" href="#">
							Ver mi perfil de Experto
						</Button>
					</Media>
				</div>
			</Row>
			<Row>
				<Tabs defaultActiveKey="cuenta" id="uncontrolled-tab-example" className="tabs pr-5 justify-content-end">
					<Tab eventKey="cuenta" title="Mi Cuenta" className="userTab">
						<div className="userAccount pl-3 pt-3">
							<div>
								<span>Email: {store.userData.email}</span>
								<hr />
							</div>
							<div>
								<span>
									Contraseña:
									{store.userData.password}
								</span>
								<hr />
							</div>
						</div>

						<div className="userInfo pl-3 pb-3">
							<div>
								<span>
									Nombre y apellido: {store.userData.first_name + " " + store.userData.last_name}
								</span>
							</div>
							<hr />
							<div>
								<span>
									Teléfono:
									{store.userData.phone_number}
								</span>
								<hr />
							</div>
						</div>
					</Tab>
					<Tab eventKey="favoritos" title="Favoritos" className="favoritesTab">
						<div className="userAccount pl-3 pt-3">
							<div>
								<h5>Mi lista de favoritos:</h5>
								<hr />
								<ul>
									<li />
									<hr />
									<li />
									<hr />
									<li />
									<hr />
									<li />
								</ul>
							</div>
						</div>
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
};
