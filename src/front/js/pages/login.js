import React from "react";
import "../../styles/login.scss";

export const Login = () => {
	return (
		<div className="register">
			<div className="row">
				<div className="register-left">
					<i className="fab fa-keycdn fa-4x mr-4" />
					<h3>Bienvenido</h3>
					<input type="submit" name="" value="Registrarse" />
					<br />
				</div>
				<div className="col-md-9 col-sd-4 register-right">
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<h3 className="register-heading pb-4">Inicio de sesión</h3>
							<div className="row register-form">
								<div className="col-md-11 col-sd-2">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Correo electrónico *"
										/>
									</div>
									<div className="space" />
									<div className="form-group">
										<input type="password" className="form-control" placeholder="Constraseña *" />
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

									<div className="form-grupo mb-5">
										<div
											className="tab-pane fade show"
											id="profile"
											role="tabpanel"
											aria-labelledby="profile-tab">
											<div className="row register-form">
												<div className="col-md col-sd-2">
													<input type="submit" className="btnLogin" value="Login" />
												</div>
												<div className="login_form is_closed">
													<div className="col-md btnsocial">
														<div className="social_login">
															<a href="#" className="google">
																<i className="fab fa-google" />
																<span>Inicia con Google</span>
															</a>
															<a href="#" className="fb">
																<i className="fab fa-facebook" />
																<span>Inicia con Facebook</span>
															</a>
															<a href="#" className="tw">
																<i className="fab fa-twitter" />
																<span>Inicia con Twitter</span>
															</a>
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
		</div>
	);
};
