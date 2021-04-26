import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/supplierProfile.scss";
import { Media, Card, Container, Row, Col, Tab, Tabs, InputGroup, FormControl, Image } from "react-bootstrap";
import imgGarden from "../../img/landscapingvert.jpg";
import imgProfile from "../../img/gardProfile.jpg";
import googleMaps from "../../img/googleMaps.jpg";

export const Supplier_Profile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getSupplier(params.supplierid);
	}, []);

	return (
		<Container className="bg-light my-5">
			<Row>
				<Col className="supplierCard py-3 px-5" style={{ width: "100%", height: "180px" }}>
					<Media>
						<img
							width={130}
							height={130}
							className="mr-3 rounded-circle"
							src={store.supplierData.profile_pic}
							alt="supplier_profile_photo"
						/>
						<Media.Body>
							<Row className="justify-content-between">
								<h5>Jimenez Landscaping</h5>
								<span>
									<i className="far fa-heart fa-2x p-2" />
								</span>
							</Row>
							<span>Poás, Alajuela</span>
							<hr />
							<Card.Link href="#">
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
								<i className="far fa-star fa" />
							</Card.Link>
							<span> Reviews</span>
						</Media.Body>
					</Media>
				</Col>
			</Row>
			<Row>
				{/* Tabs section starts here  */}
				<Tabs
					defaultActiveKey="informacion"
					id="uncontrolled-tab-example"
					className="tabs pr-5 mb-5 justify-content-end">
					<Tab eventKey="informacion" title="Información" className="ml-auto supplierInfoTab">
						<Supplier_Info />
					</Tab>
					<Tab eventKey="reviews" title="Reviews" className="ml-auto supplierReviewsTab">
						<Supplier_Reviews />
					</Tab>
					<Tab eventKey="galeria" title="Galería" className="ml-auto supplierGalleryTab">
						<Supplier_Gallery />
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
};

// Supplier info tab section here
const Supplier_Info = () => {
	return (
		<Row className="pb-4">
			<Col xs={6}>
				<div className="supplierInfo px-4">
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
					<h6>Mis horarios</h6>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
				</div>
			</Col>
			<Col xs={3} className="supplierMap justify-content-center text-center">
				<Card className="mapCard" style={{ width: "100%", height: "100%" }}>
					<h6>Mi Mapa de Localización</h6>
					<img className="p-1" src={googleMaps} alt="Google maps location" />
				</Card>
			</Col>
			<Col xs={3} className="supplierContact  text-center">
				<h6>Información de contacto</h6>
				<div className="text-left">
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
						Ubicación
					</p>
					<hr />
				</div>
			</Col>
		</Row>
	);
};

// Supplier reviews tabs section here
const Supplier_Reviews = () => {
	return (
		<div className="supplierInfo px-4">
			<h6>Valoramos su opinión</h6>
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text>Deje un comentario</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl as="textarea" aria-label="With textarea" />
			</InputGroup>
			<hr />
			<h6>Reviews de otros usuarios</h6>
			<span>{""}</span>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
			<hr />
		</div>
	);
};

// Supplier gallery tabs section here
const Supplier_Gallery = () => {
	return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={4}>
					<Card.Link>
						<Image src="http://via.placeholder.com/440x260" thumbnail />
					</Card.Link>
				</Col>
				<Col xs={4}>
					<Image src="http://via.placeholder.com/440x260" thumbnail />
				</Col>
				<Col xs={4}>
					<Image src="http://via.placeholder.com/440x260" thumbnail />
				</Col>
			</Row>
		</Container>
	);
};
