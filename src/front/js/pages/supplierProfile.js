import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/supplierProfile.scss";
import { Media, Card, Container, Row, Col, Tab, Tabs, InputGroup, FormControl, Image, Button } from "react-bootstrap";
import supplierImg from "../../img/supplier.png";
import imagen1 from "../../img/prof1.jpg";
import imagen2 from "../../img/prof2.png";
import imagen3 from "../../img/prof3.jpg";

export const Supplier_Profile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [data, setData] = useState({
		checked5: false,
		checked4: false,
		checked3: false,
		checked2: false,
		checked1: false
	});

	const [fav, setFav] = useState({
		favorite: ""
	});

	useEffect(() => {
		actions.getSupplier(params.supplierid);
		actions.getCommentaries(params.supplierid);
		actions.getRate(params.supplierid);
		actions.getFavoriteSup(params.supplierid);
	}, []);

	const addComment = e => {
		if (e.key === "Enter") {
			actions.postCommentaries(params.supplierid, e.target.value);
			e.target.value = "";
		}
	};

	const removeComment = comment => {
		actions.deleteCommentaries(params.supplierid, comment);
	};

	const handdleFavorite = e => {
		if (e.target.checked == true) {
			actions.postFavorites(params.supplierid);
			store.favorite = true;
		} else if (e.target.checked == false) {
			actions.deleteFavorites(params.supplierid);
			store.favorite = false;
		}
	};

	if (store.rate.rate == 5) {
		setData({ checked5: true, checked4: false, checked3: false, checked2: false, checked1: false });
		store.rate.rate = 0;
	} else if (store.rate.rate == 4) {
		setData({ checked5: false, checked4: true, checked3: false, checked2: false, checked1: false });
		store.rate.rate = 0;
	} else if (store.rate.rate == 3) {
		setData({ checked5: false, checked4: false, checked3: true, checked2: false, checked1: false });
		store.rate.rate = 0;
	} else if (store.rate.rate == 2) {
		setData({ checked5: false, checked4: false, checked3: false, checked2: true, checked1: false });
		store.rate.rate = 0;
	} else if (store.rate.rate == 1) {
		setData({ checked5: false, checked4: false, checked3: false, checked2: false, checked1: true });
		store.rate.rate = 0;
	}

	const handleInputTest = e => {
		if (data.checked5 == false && e.target.value == "5") {
			setData({
				checked5: true,
				checked4: false,
				checked3: false,
				checked2: false,
				checked1: false
			});
			actions.userRate(params.supplierid, e.target.value);
		} else if (data.checked4 == false && e.target.value == "4") {
			setData({
				checked5: false,
				checked4: true,
				checked3: false,
				checked2: false,
				checked1: false
			});
			actions.userRate(params.supplierid, e.target.value);
		} else if (data.checked3 == false && e.target.value == "3") {
			setData({
				checked5: false,
				checked4: false,
				checked3: true,
				checked2: false,
				checked1: false
			});
			actions.userRate(params.supplierid, e.target.value);
		} else if (data.checked2 == false && e.target.value == "2") {
			setData({
				checked5: false,
				checked4: false,
				checked3: false,
				checked2: true,
				checked1: false
			});
			actions.userRate(params.supplierid, e.target.value);
		} else if (data.checked1 == false && e.target.value == "1") {
			setData({
				checked5: false,
				checked4: false,
				checked3: false,
				checked2: false,
				checked1: true
			});
			actions.userRate(params.supplierid, e.target.value);
		} else if (
			(data.checked5 == true && e.target.value == "5") ||
			(data.checked4 == true && e.target.value == "4") ||
			(data.checked3 == true && e.target.value == "3") ||
			(data.checked2 == true && e.target.value == "2") ||
			(data.checked1 == true && e.target.value == "1")
		) {
			setData({
				checked5: false,
				checked4: false,
				checked3: false,
				checked2: false,
				checked1: false
			});
			actions.userRate(params.supplierid, "0");
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
							src={store.supplierData.profile_pic == null ? supplierImg : store.supplierData.profile_pic}
							alt="supplier_profile_photo"
						/>
						<Media.Body>
							<Row className="ratingBox justify-content-between px-3 ">
								<div>
									<Col>
										<form>
											<p className="clasificacion my-0 ">
												<input
													className="input1"
													id="radio1"
													type="radio"
													name="star"
													value="5"
													checked={data.checked5}
													onClick={handleInputTest}
												/>
												<label className="label1 my-0" htmlFor="radio1">
													<i className="fa fa-star"></i>
												</label>
												<input
													className="input1"
													id="radio2"
													type="radio"
													name="star"
													value="4"
													checked={data.checked4}
													onClick={handleInputTest}
												/>
												<label className="label1 my-0" htmlFor="radio2">
													<i className="fa fa-star"></i>
												</label>
												<input
													className="input1"
													id="radio3"
													type="radio"
													name="star"
													value="3"
													checked={data.checked3}
													onClick={handleInputTest}
												/>
												<label className="label1 my-0" htmlFor="radio3">
													<i className="fa fa-star"></i>
												</label>
												<input
													className="input1"
													id="radio4"
													type="radio"
													name="star"
													value="2"
													checked={data.checked2}
													onClick={handleInputTest}
												/>
												<label className="label1 my-0" htmlFor="radio4">
													<i className="fa fa-star"></i>
												</label>
												<input
													className="input1"
													id="radio5"
													type="radio"
													name="star"
													value="1"
													checked={data.checked1}
													onClick={handleInputTest}
												/>
												<label className="label1 my-0" htmlFor="radio5">
													<i className="fa fa-star"></i>
												</label>
											</p>
										</form>
									</Col>
									<div className="supplierRating pt-0 ml-3">
										{"Stars: " + store.supplierData.rate}
									</div>
								</div>
								<form>
									<p className="clasificacion2">
										<input
											className="input2"
											id="radios"
											type="checkbox"
											name="heart"
											checked={store.favorite}
											onClick={handdleFavorite}
										/>
										<label className="label2" htmlFor="radios">
											<i className="fas fa-heart"></i>
										</label>
									</p>
								</form>
							</Row>
							<div className="pl-3 ">
								<h5>{store.supplierData.name}</h5>
							</div>
							<div>
								<p className="pl-3 mt-3 mb-0">Miembro desde:</p>
								<p className="pl-3">{store.supplierData.member_since}</p>
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
											<h6>Descripción</h6>
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
												Correo: {store.supplierData.email}
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
										<iframe
											src="https://maps.google.com/maps?width=250&amp;height=130&amp;hl=es&amp;q=Fuente%20de%20la%20Hispanidad+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
											style={{
												width: "250",
												height: "130",
												border: "0",
												ariaHidden: "false",
												tabIndex: "0"
											}}></iframe>
									</Card>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey="reviews" title="Comentarios" className="ml-auto supplierReviewsTab">
						<div className="supplierInfo px-4">
							<h6>Valoramos su opinión</h6>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>Su comentario aquí:</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl onKeyUp={addComment} as="textarea" aria-label="With textarea" />
							</InputGroup>
							<hr />
							<h6>Comentarios de otros usuarios</h6>
							<span>{""}</span>
							{store.commentaries != "" &&
								store.commentaries.map((value, index) => {
									return (
										<>
											<div className="row">
												<p className="col-12" key={"comment " + index}>
													{value.comment}
												</p>
												<p className="col-11" key={"name " + index}>
													{value.name}
												</p>
												<div
													className="col basurero"
													onClick={() => removeComment(value.comment)}>
													<i className="fas fa-trash-alt trash" />
												</div>
											</div>
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
									<Card.Link href={imagen1}>
										<Image src={imagen1} thumbnail />
									</Card.Link>
								</Col>
								<Col xs={4}>
									<Card.Link href={imagen2}>
										<Image src={imagen2} thumbnail />
									</Card.Link>
								</Col>
								<Col xs={4}>
									<Card.Link href={imagen3}>
										<Image src={imagen3} thumbnail />
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
