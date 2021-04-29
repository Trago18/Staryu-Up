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
						<div
							className="tab-pane fade show active ml-2"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab">
							<h3 className="register-heading p-4">Inicio de sesión</h3>
							<form className="pl-5 inicio-sesion" onSubmit={frontLogin}>
								<div className="col-md-11 col-sd-2">
									<div className="form-group px-4 pt-3">
										<input
											type="email"
											className="form-control"
											placeholder="Correo electrónico *"
											name="email"
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="space" />
									<div className="form-group px-4 pb-3">
										<input
											type="password"
											className="form-control"
											placeholder="Contraseña *"
											name="password"
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="checkboxLogin mx-4 mb-4">
										<input
											type="checkbox"
											id="exampleCheck1"
											name="checkbox"
											onChange={handleInputChange}
										/>
										{"  "}
										Recordar contraseña
									</div>

									<div className="form-grupo mb-2">
										<div className="row register-form">
											<div className="btnLoginDiv mt-2 d-flex justify-content-center">
												<input type="submit" className="btnLogin" value="Login" />
											</div>
											<div className="login_form">
												<div className="row btnsocial mt-4 d-flex justify-content-center">
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
											<div className="recup mt-5 d-flex justify-content-center">
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
