import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/userRegister.scss";

export const User_Register = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		first_name: "",
		last_name: "",
		phone_number: "",
		email: "",
		password: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontUserRegister = e => {
		e.preventDefault();
		//console.log(data.first_name, data.last_name, data.phone_number, data.email, data.password);
		actions.postUserRegister(data.first_name, data.last_name, data.phone_number, data.email, data.password);
	};

	return (
		<div className="page text-center">
			<div id="page-top-register">
				<div className="registro">
					<div className="row">
						<div className="login">
							<i className="fa fa-user-shield fa-4x mr-4" />
							<h3>Bienvenido</h3>
							<Link to="/login">
								<input type="submit" name="" value="Login" />
							</Link>
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
									<form className="row form-regist" onSubmit={frontUserRegister}>
										<div className="col-md-11">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Nombre *"
													name="first_name"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Apellido *"
													name="last_name"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Celular *"
													name="phone_number"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Correo Electrónico*"
													name="email"
													onChange={handleInputChange}
												/>
											</div>
											<div className="form-group">
												<input
													type="password"
													className="form-control"
													placeholder="Contraseña *"
													name="password"
													onChange={handleInputChange}
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
