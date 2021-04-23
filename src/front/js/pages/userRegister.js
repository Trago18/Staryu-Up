import React from "react";
import "../../styles/userRegister.scss";

export const User_Register = () => {
	return (
		<div className="page text-center">
			<div id="page-top-register">
				<div className="registro">
					<div className="row">
						<div className="login">
							<i className="fa fa-user-shield fa-4x mr-4" />
							<h3>Bienvenido</h3>

							<input type="submit" name="" value="Login" />
							<br />
						</div>
						<div className="col-md-9 formulario">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab">
									<h3 className="formulario-encabezado pb-4">Formulario de registro</h3>
									<div className="row form-regist">
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
												<input
													type="password"
													className="form-control"
													placeholder="Contraseña *"
												/>
											</div>
											<div className="col-md" />
											<div
												className="tab-pane fade show"
												id="profile"
												role="tabpanel"
												aria-labelledby="profile-tab">
												<div className="row register-form">
													<div className="col-md">
														<input
															type="submit"
															className="btnRegistrarse"
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
			</div>
		</div>
	);
};
