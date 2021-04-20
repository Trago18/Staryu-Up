import React from "react";
import "../../styles/userRegister.scss";

export const User_Register = () => {
	return (
		<body id="page-top-register">
			<div className="cabecera-space bg-white">
				<div className="container" />
			</div>
			<div className="container-fluid register">
				<div className="row">
					<div className="col-md-3 register-left">
						<i className="far fa-user fa-3x" />
						<h3>Bienvenido</h3>
						<input type="submit" name="" value="Login" />
						<br />
					</div>
					<div className="col-md register-right">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab">
								<h3 className="register-heading">Registro de Usuario</h3>
								<div className="row register-form">
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
									</div>
									<div className="col-md-8">
										<input type="submit" className="btnRegister" value="Registrarse" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-space bg-white">
				<div className="container p-5" />
			</div>
		</body>
	);
};
