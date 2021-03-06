import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/supplierRegister.scss";

export const Supplier_Register = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		name: "",
		phone_number: "",
		email: "",
		category: "",
		address: "",
		schedule: "",
		description: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name)
		// console.log(event.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontSupplierRegister = e => {
		e.preventDefault();
		// console.log(data.name, data.phone_number, data.email, data.category, data.address, data.schedule, data.description);
		actions.postSupplierRegister(
			data.name,
			data.phone_number,
			data.email,
			data.category,
			data.address,
			data.schedule,
			data.description
		);
	};

	return (
		<div className="registro-proveedor">
			{console.log(store.supplierInfo.msg)}
			{store.supplierInfo.msg == "The supplier was successfully created" && (
				<Redirect to={"/supplier/" + store.supplierInfo.id} />
			)}
			<div className="row">
				<div className="usuario">
					<i className="fa fa-address-card fa-4x mr-5" />
					<h3>Bienvenido</h3>
					{/* <Link to="/login">
						<input type="submit" name="" value="Login" />
					</Link> */}
					<br />
				</div>
				<div className="col-md-9 formulario-proveedor">
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<h3 className="formulario-titulo pb-4">Formulario de Proveedor</h3>
							<form className="row registrarse-formulario " onSubmit={frontSupplierRegister}>
								<div className="col">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Nombre comercial *"
											name="name"
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											placeholder="Correo electr??nico *"
											name="email"
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Tel??fono *"
											name="phone_number"
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Direcci??n *"
											name="address"
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="form-group">
										<select
											className="form-control"
											name="category"
											onChange={handleInputChange}
											required>
											<option className="hidden" selected disabled>
												Categor??a
											</option>
											<option>Mascotas</option>
											<option>Pintor</option>
											<option>Transporte</option>
											<option>Fot??grafo</option>
											<option>Catering</option>
											<option>Jardinero</option>
											<option>Express</option>
											<option>Construcci??n </option>
											<option>Computaci??n</option>
											<option>El??ctrico</option>
											<option>Ense??anza</option>
											<option>Mec??nica</option>
										</select>
									</div>
								</div>
								<div>
									<div className="form-group">
										<div className="horario d-flex justify-content-center">
											<a className="btnModal text-center" href="#openModal">
												Horario laboral
											</a>
										</div>
										<div id="openModal" className="modalDialog">
											<div>
												<a href="#close" title="Close" className="close">
													X
												</a>
												<h2>Horario laboral</h2>
												<p>Seleccione los d??as en que labora con su respectivo horario.</p>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Lun.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Mar.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Mi??r.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Jue.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Vier.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														S??b.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
												<div className="form-group form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Dom.
													</label>
													<label className="star">de</label>
													<input type="time" name="hora" />
													<label className="final">a</label>
													<input type="time" name="hora" />
												</div>
											</div>
										</div>
									</div>

									<div className="col form-group">
										<label>Descripci??n</label>
										<br />
										<textarea
											className="form-control"
											name="description"
											rows="4"
											cols="30"
											maxLength="50"
											onChange={handleInputChange}
											required
										/>
									</div>
								</div>
								<div className="col-12 register-form d-flex justify-content-center mt-3">
									<input type="submit" className="btnRegistrar" value="Registrarse" />
								</div>
								{/* <p className="aviso3 align-self-center">
									<span className="obligatorio3">
										<i className="alert fas fa-exclamation-triangle"></i>
									</span>
									Inicia sesi??n antes de crear tu perfil de proveedor.
								</p> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
