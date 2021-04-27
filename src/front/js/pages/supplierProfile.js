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
		actions.getCommentaries(params.supplierid);
	}, []);

	const addComment = e => {
		e.preventDefault();
		if (e.key === "Enter") {
			actions.postCommentaries(params.supplierid, e.target.value);
			e.target.value = "";
		}
	};

	return (
		<Container className="bg-light my-5">
			<Row>
				<Col className="supplierCard py-3 px-4" style={{ width: "100%", height: "180px" }}>
					<Media>
						<img
							width={130}
							height={130}
							className=" rounded-circle"
							src={
								store.supplierData.profile_pic == null
									? "https://image.freepik.com/vector-gratis/diseno-avatar-persona_24877-38131.jpg"
									: store.supplierData.profile_pic
							}
							alt="supplier_profile_photo"
						/>
						<Media.Body>
							<Row className="justify-content-between px-3">
								<div>
									<Card.Link href="#">
										<i className="far fa-star fa-2x" />
										<i className="far fa-star fa-2x" />
										<i className="far fa-star fa-2x" />
										<i className="far fa-star fa-2x" />
										<i className="far fa-star fa-2x" />
									</Card.Link>
									<div className="supplierRating p-2"> {"4.5 stars"}</div>
								</div>

								<a href="#" className="likeButton">
									<i className="far fa-heart fa-2x p-2" />
								</a>
							</Row>
							<h5>{store.supplierData.name}</h5>
							<hr />
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
					<Tab eventKey="informacion" title="Información" className="supplierInfoTab">
						<Container>
							<Row className="pb-4 mx-3">
								<Col sm={6}>
									<Card className="p-2 supplierInfo text-left">
										<div>
											<h6>Sobre mi</h6>
											<p> {store.supplierData.description}</p>
											<hr />

											<h6>Mis horarios</h6>
											<span>{store.supplierData.schedule} </span>
										</div>
									</Card>
								</Col>
								<Col sm={3} className="supplierContact  text-center">
									<Card className="p-2 text-center">
										<h6>Información de contacto</h6>
										<div className="text-left">
											<p>
												<i className="fas fa-phone m-3" />
												Teléfono: {store.supplierData.phone_number}
											</p>
											<hr />
											<p>
												<i className="fas fa-envelope m-3" />
												Email: {store.supplierData.email}
											</p>
											<hr />
											<p>
												<i className="fas fa-map-marker-alt m-3" />
												Ubicación: {store.supplierData.address}
											</p>
											<hr />
										</div>
									</Card>
								</Col>
								<Col sm={3} className="supplierMap ">
									<Card
										className="mapCard p-2  text-center"
										style={{ width: "100%", height: "100%" }}>
										<h6>Mapa de Localización</h6>
										<img className="p-1" src={googleMaps} alt="Google maps location" />
									</Card>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey="reviews" title="Reviews" className="ml-auto supplierReviewsTab">
						<div className="supplierInfo px-4">
							<h6>Valoramos su opinión</h6>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>Su comentario aquí:</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl onKeyUp={addComment} as="textarea" aria-label="With textarea" />
							</InputGroup>
							<hr />
							<h6>Reviews de otros usuarios</h6>
							<span>{""}</span>
							{store.commentaries != "" &&
								store.commentaries.map((value, index) => {
									return (
										<>
											<p key={index}>{value.message}</p>
											<hr />
										</>
									);
								})}
						</div>
					</Tab>
					<Tab eventKey="galeria" title="Galería" className="ml-auto supplierGalleryTab">
						<Container>
							<Row className="justify-content-center">
								<Col xs={4}>
									<Card.Link href="http://via.placeholder.com/440x260">
										<Image src="http://via.placeholder.com/440x260" thumbnail />
									</Card.Link>
								</Col>
								<Col xs={4}>
									<Card.Link href="http://via.placeholder.com/440x260">
										<Image src="http://via.placeholder.com/440x260" thumbnail />
									</Card.Link>
								</Col>
								<Col xs={4}>
									<Card.Link href="http://via.placeholder.com/440x260">
										<Image src="http://via.placeholder.com/440x260" thumbnail />
									</Card.Link>
								</Col>
							</Row>
						</Container>
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
};
