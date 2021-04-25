import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
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
		<div className="page text-center">
			<div id="page-top-register">
				<div className="registro-proveedor">
					<div className="row">
						<div className="usuario">
							<i className="fa fa-address-card fa-4x mr-5" />
							<h3>Bienvenido</h3>

							<input type="submit" name="" value="Login" />
							<br />
						</div>
						<div className="col-md-9 formulario-proveedor">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab">
									<h3 className="formulario-titulo pb-4">Formulario de Proveedor</h3>
									<form className="row registrarse-formulario" onSubmit={frontSupplierRegister}>
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Nombre comercial *"
													name="name"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Correo electrónico *"
													name="email"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Teléfono *"
													name="phone_number"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Dirección *"
													name="address"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<select
													className="form-control"
													name="category"
													onChange={handleInputChange}>
													<option className="hidden" selected disabled>
														Categoría
													</option>
													<option>Bienes raíces</option>
													<option>Electronica</option>
													<option>Vehículos</option>
													<option>Computación</option>
													<option>Pintura</option>
													<option>Jardinería</option>
													<option>Construcción</option>
													<option>Fotografo</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<select
													className="form-control"
													name="schedule"
													onChange={handleInputChange}>
													<option className="hidden" selected disabled>
														Horario
													</option>
													<option>Lunes a viernes</option>
													<option>Lunes a sábados</option>
													<option>Sábados y domingos</option>
													<option>Toda la semana</option>
												</select>
											</div>
											<div className="form-group">
												<label>Horario</label>
												<form name="formulario" method="post" action="/send.php">
													<label className="star">De</label>
													<input
														type="time"
														name="hora"
														min="18:00"
														max="21:00"
														step="3600"
													/>
													<label className="final">a</label>
													<input
														type="time"
														name="hora"
														min="18:00"
														max="21:00"
														step="3600"
													/>
												</form>
											</div>

											<div className="form-group">
												<label>Descripción</label>
												<br />
												<textarea
													name="description"
													rows="4"
													cols="25"
													onChange={handleInputChange}
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div
												className="tab-pane fade show"
												id="profile"
												role="tabpanel"
												aria-labelledby="profile-tab">
												<div className="row register-form">
													<div className="col-md">
														<input
															type="submit"
															className="btnRegistrar"
															value="Registrarse"
														/>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
