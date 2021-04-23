import React from "react";
import "../../styles/passwordRecovery.scss";

export const Password_Recovery = () => {
	return (
		<div className="recovery">
			<div className="row">
				<div className="recovery-left">
					<i className="fa fa-lock fa-4x mr-4" />
					<h3>Bienvenido</h3>
				</div>
				<div className="col-md-9 col-sd-4 recovery-right">
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<h3 className="recuperar-contraseña pb-4">Recuperar contraseña</h3>
							<div className="row recupass">
								<div className="col-md-11 col-sd-2">
									<div className="form-group">
										<label className="correo">Ingrese su correo electronico</label>
										<input
											type="text"
											className="form-control"
											placeholder="Correo electrónico *"
										/>
									</div>

									<div className="form-grupo mb-5">
										<div className="row register-form">
											<div className="col-md col-sd-2">
												<input type="submit" className="btnEnviar" value="Enviar" />
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
