import React from "react";
import "../../styles/login.scss";

export const Login = () => {
	return (
		<body id="page-top-register">
			<div className="cabecera-space bg-white">
				<div className="container" />
			</div>
			<div className="container-fluid register">
				<div className="row">
					<div className="col-md-3 register-left">
						<i className="fas fa-key fa-3x" />

						<h3>Bienvenido</h3>
						<input type="submit" name="" value="Registrarse" />
						<br />
					</div>
					<div className="col-md register-right">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab">
								<h3 className="register-heading">Inicio de seción</h3>
								<div className="row register-form">
									<div className="col-md-11">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Username *" />
										</div>

										<div className="form-group">
											<input
												type="password"
												className="form-control"
												placeholder="Contraseña *"
											/>
										</div>
									</div>
									<div className="col-md-8">
										<input type="submit" className="btnRegister" value="Login" />
									</div>
									<div className="row register-form">
										<div className="col-md">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="flexCheckDefault"
												/>
												<label className="form-check-label" htmlFor="flexCheckDefault">
													Recuerdame
												</label>
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
	);
};
