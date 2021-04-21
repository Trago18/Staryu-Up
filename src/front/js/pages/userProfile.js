import React, { useContext } from "react";
import "../../styles/userProfile.scss";
import { Media, Card, Container, Row, Col, Button } from "react-bootstrap";
import imgGarden from "../../img/landscapingvert.jpg";
import googleMaps from "../../img/googleMaps.jpg";

export const User_Profile = () => {
	return (
		<Container fluid className="bg-light">
			<h5>...............</h5>
			<Row>
				<Col>
					<Row>
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
					<Row />
				</Col>
			</Row>
		</Container>
	);
};
