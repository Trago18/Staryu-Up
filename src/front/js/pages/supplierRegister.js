import React from "react";
import "../../styles/supplierRegister.scss";

export const Supplier_Register = () => {
	return (
		<header className="page text-center">
			<body id="page-top-register">
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
									<h3 className="formulario-titulo pb-4">Formulario de registro</h3>
									<div className="row registrarse-formulario">
										<div className="col-md-11">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Nombre *" />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Apellido *" />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Celular *" />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Correo *" />
											</div>
											<div className="form-group">
												<select className="form-control">
													<option className="hidden" selected disabled>
														Seleccione una categoría
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
											<div className="col-md" />
											<div className="form-check form-switch">
												<input
													className="form-check-input"
													type="checkbox"
													id="flexSwitchCheckDefault"
												/>
												<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
													Recuerdame
												</label>
											</div>
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</header>
	);
};
