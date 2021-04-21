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
										<div className="col-md-6">
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
												<input type="text" className="form-control" placeholder="Dirección *" />
											</div>
										</div>
										<div className="col-md-6">
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
												<select className="form-control">
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
											<div className="form-group">
												<label>Descripción</label>
												<br />
												<textarea name="descripcion" rows="4" cols="25" />
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
