import React, { useContext } from "react";
import "../../styles/supplierProfile.scss";
import { Media, Card, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import imgGarden from "../../img/landscapingvert.jpg";
import imgProfile from "../../img/gardProfile.jpg";
import googleMaps from "../../img/googleMaps.jpg";

export const Supplier_Profile = () => {
	return (
		<Container fluid className="bg-light">
			<Row>
				<Col className="supplierCard p-4 mt-3" style={{ width: "100%", height: "200px" }}>
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
							<hr />
							<Card.Link href="#">
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
							</Card.Link>
						</Media.Body>
					</Media>
				</Col>
			</Row>
			<Row>
				<Tabs defaultActiveKey="informacion" id="uncontrolled-tab-example" className="tabs ml-auto">
					<Tab eventKey="informacion" title="Información" className="ml-auto">
						<Supplier_Info />
					</Tab>
					<Tab eventKey="reviews" title="Reviews">
						<>
							When in disgrace with fortune and men's eyes I all alone beweep my outcast state, And
							trouble deaf heaven with my bootless cries, And look upon myself, and curse my fate, Wishing
							me like to one more rich in hope, Featur'd like him,{" "}
						</>
					</Tab>
					<Tab eventKey="galeria" title="Galería" disabled>
						<> </>
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
};

const Supplier_Info = () => {
	// Supplier info tabs section
	return (
		<Row>
			<Col xs={9}>
				<Row>
					<Col xs={7}>
						<div className="supplierInfo p-3">
							<h6>Sobre mi</h6>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo
							</p>
							<hr />
							<h6>Mis servicios</h6>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium,
							</p>
							<hr />
							<h6>Reviews</h6>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo
							</p>
						</div>
					</Col>
					<Col xs={5} className="supplierGallery">
						<img
							width={350}
							height={450}
							className="img-fluid w-100 py-3"
							src={imgGarden}
							alt="landscaping"
						/>
					</Col>
				</Row>
			</Col>

			<Col xs={3} className="supplierMap">
				<Row>
					<Col xs={12} className="justify-content-center">
						<img
							style={{ width: "100%", height: "100%" }}
							className="p-1"
							src={googleMaps}
							alt="Google maps location"
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="justify-content-center ">
						<hr />
						<h5>Información de contacto</h5>
						<div>
							<p>
								<i className="fas fa-phone m-3" />
								Teléfono
							</p>
							<hr />
							<p>
								<i className="fas fa-envelope m-3" />
								Email
							</p>
							<hr />
							<p>
								<i className="fas fa-map-marker-alt m-3" />
								Email
							</p>
							<hr />
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
