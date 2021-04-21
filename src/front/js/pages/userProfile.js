import React, { useContext } from "react";
import "../../styles/userProfile.scss";
import { Media, Tab, Tabs, Container, Row, Col, Button } from "react-bootstrap";
import imgGarden from "../../img/landscapingvert.jpg";
import googleMaps from "../../img/googleMaps.jpg";

export const User_Profile = () => {
	return (
		<Container className="bg-light">
			<Row className="mt-5">
				<div className="supplierCard p-4 " style={{ width: "100%", height: "200px" }}>
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
						<Button href="#">Ver mi perfil de Experto</Button>
					</Media>
				</div>
			</Row>
			<Row>
				<Tabs defaultActiveKey="cuenta" id="uncontrolled-tab-example">
					<Tab eventKey="cuenta" title="Mi Cuenta">
						<div className="userAccount pl-3 pt-3">
							<p>
								<b>Usuario:</b>
							</p>
							<p>
								<b>Email:</b>
							</p>
							<p>
								<b>Contraseña:</b>
							</p>
						</div>
						<hr />
						<div className="userInfo pl-3 pb-3">
							<p>
								<b>Nombre y apellido:</b>
							</p>
							<p>
								<b>Email:</b>
							</p>
							<p>
								<b>Teléfono:</b>
							</p>
						</div>
					</Tab>
					<Tab eventKey="favoritos" title="Favoritos">
						<>
							When in disgrace with fortune and men's eyes I all alone beweep my outcast state, And
							trouble deaf heaven with my bootless cries, And look upon myself, and curse my fate, Wishing
							me like to one more rich in hope, Featur'd like him,{" "}
						</>
					</Tab>
					<Tab eventKey="transacciones" title="Transacciones" disabled>
						<> </>
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
};
