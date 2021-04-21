import React from "react";
import "../../styles/login.scss";

export const Login = () => {
	return (
		<header className="encabezado text-center">
			<body id="page-top-register">
				<div className=" register">
					<div className="row">
						<div className="register-left">
							<i className="fab fa-keycdn fa-4x mr-4" />

							<h3>Bienvenido</h3>

							<input type="submit" name="" value="Registrarse" />
							<br />
						</div>
						<div className="col-md-9 register-right">
							<div className="tab-content" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab">
									<h3 className="register-heading pb-4">Inicio de sesión</h3>
									<div className="row register-form">
										<div className="col-md-11">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Username *" />
											</div>
											<div className="space" />
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													placeholder="Confirm Password *"
												/>
											</div>
											<div className="space" />
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
														<input type="submit" className="btnLogin" value="Login" />
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
