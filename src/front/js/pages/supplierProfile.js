import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/supplierProfile.scss";
import { Media, Card, Container, Row, Col, Tab, Tabs, InputGroup, FormControl, Image, Button } from "react-bootstrap";
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
		// e.preventDefault();
		if (e.key === "Enter") {
			actions.postCommentaries(params.supplierid, e.target.value);
			e.target.value = "";
		}
	};

	const removeComment = comment => {
		actions.deleteCommentaries(params.supplierid, comment);
	};

	const handleInputChange = e => {
		console.log(e.target.value);
		// actions.postRate(e.target.value);
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
							<Row className="justify-content-between px-4">
								<div>
									<Card.Link href="#">
										<form>
											<p className="clasificacion">
												<input
													id="radio1"
													type="radio"
													name="star"
													value="5"
													onChange={handleInputChange}
												/>
												<label htmlFor="radio1">
													<i className="fa fa-star"></i>
												</label>
												<input
													id="radio2"
													type="radio"
													name="star"
													value="4"
													onChange={handleInputChange}
												/>
												<label htmlFor="radio2">
													<i className="fa fa-star"></i>
												</label>
												<input
													id="radio3"
													type="radio"
													name="star"
													value="3"
													onChange={handleInputChange}
												/>
												<label htmlFor="radio3">
													<i className="fa fa-star"></i>
												</label>
												<input
													id="radio4"
													type="radio"
													name="star"
													value="2"
													onChange={handleInputChange}
												/>
												<label htmlFor="radio4">
													<i className="fa fa-star"></i>
												</label>
												<input
													id="radio5"
													type="radio"
													name="star"
													value="1"
													onChange={handleInputChange}
												/>
												<label htmlFor="radio5">
													<i className="fa fa-star"></i>
												</label>
											</p>
										</form>
									</Card.Link>
									<div className="supplierRating pt-0 pl-2">{"Rate: " + store.supplierData.rate}</div>
								</div>
							</Row>
							<div className="pl-2 pt-4">
								<h5>{store.supplierData.name}</h5>
							</div>

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
											<div>
												<i className="fas fa-phone m-3" />
												Teléfono: {store.supplierData.phone_number}
											</div>
											<hr />
											<div>
												<i className="fas fa-envelope m-3" />
												Email: {store.supplierData.email}
											</div>
											<hr />
											<div>
												<i className="fas fa-map-marker-alt m-3" />
												Ubicación: {store.supplierData.address}
											</div>
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
											<p key={"comment " + index}>{value.comment}</p>
											<p key={"name " + index}>{value.name}</p>
											<button onClick={() => removeComment(value.comment)}>
												<i className="fas fa-trash" />
											</button>
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
