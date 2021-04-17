import React from "react";
import "../../styles/userProfile.scss";

export const User_Profile = () => {
	return (
		<body id="page-top-login">
			<div className="cabecera bg-white">
				<div className="container p-5" />
			</div>
			<div className="container register">
				<div className="row">
					<div className="col-md-3 register-left">
						<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
						<h3>Bienvenido</h3>
						<input type="submit" name="" value="Login" />
						<br />
					</div>
					<div className="col-md-9 register-right">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab">
								<h3 className="register-heading">Datos personales</h3>
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
			<div className="cabecera bg-white">
				<div className="container p-5" />
			</div>
		</body>
	);
};
