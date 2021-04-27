import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		email: "",
		password: "",
		checkbox: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontLogin = e => {
		e.preventDefault();
		// console.log(data.email, data.password, data.checkbox);
		actions.postLogin(data.email, data.password, data.checkbox);
	};

	return (
		<div className="register">
			{store.token != null && <Redirect to="/" />}
			<div className="row">
				<div className="register-left">
					<i className="fab fa-keycdn fa-4x mr-4" />
					<h3>Bienvenido</h3>
					<Link to="/user-register">
						<input type="submit" name="" value="Registrarse" />
					</Link>
					<br />
				</div>
				<div className="col-md-9 col-sd-4 register-right">
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<h3 className="register-heading pb-4">Inicio de sesión</h3>
							<form className="row inicio-sesion" onSubmit={frontLogin}>
								<div className="col-md-11 col-sd-2">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Correo electrónico *"
											name="email"
											onChange={handleInputChange}
										/>
									</div>
									<div className="space" />
									<div className="form-group">
										<input
											type="password"
											className="form-control"
											placeholder="Contraseña *"
											name="password"
											onChange={handleInputChange}
										/>
									</div>
									<input
										type="checkbox"
										className="form-check-input"
										id="exampleCheck1"
										name="checkbox"
										onChange={handleInputChange}
									/>
									<div className="space" />
									<div className="col-md" />

									<div className="form-grupo mb-5">
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
											<div className="recup">
												<Link to="/recovery">
													<input
														type="submit"
														className="boton3"
														value="Recuperar contraseña"
													/>
												</Link>
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
	);
};
