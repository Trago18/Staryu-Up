import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/supplierProfile.scss";
import { Media, Card, Container, Row, Col } from "react-bootstrap";
import imgGarden from "../../img/landscapingvert.jpg";
import googleMaps from "../../img/googleMaps.jpg";

export const Supplier_Profile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getSupplier(params.supplierid);
	}, []);

	return (
		<Container fluid className="bg-light">
			{console.log(store.supplierData)}
			<Row>
				<Col xs={9}>
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
										<h5>{store.supplierData.name}</h5>
									</div>
									<span>{store.supplierData.address}</span>
								</Media.Body>
								<Card.Link href="#">
									<i className="far fa-star fa-2x" />
									<i className="far fa-star fa-2x" />
									<i className="far fa-star fa-2x" />
									<i className="far fa-star fa-2x" />
									<i className="far fa-star fa-2x" />
								</Card.Link>
							</Media>
						</div>
					</Row>
					<Row>
						<Col xs={7}>
							<div className="supplierInfo p-3">
								<h6>Sobre mi</h6>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
								</p>
								<hr />
								<h6>Mis servicios</h6>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium,
								</p>
								<hr />
								<h6>Reviews</h6>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo
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
		</Container>
	);
};
