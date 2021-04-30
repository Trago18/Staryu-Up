import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/passwordRecovery.scss";

export const Password_Recovery = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		email: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontRecovery = e => {
		e.preventDefault();
		//console.log(data.email);
		actions.postRecovery(data.email);
	};

	if (store.recovery.msg == "The email was send") {
		alert("Su contraseña fue enviada satisfactoriamente a su correo");
		store.recovery = "";
	}

	return (
		<div className="recovery">
			<div className="row">
				<div className="recovery-left">
					<i className="fa fa-lock fa-4x mr-4" />
					<h3>Bienvenido</h3>
					<Link to="/login">
						<input type="submit" name="" value="Login" />
					</Link>
				</div>
				<div className="col-md-9 col-sd-4 recovery-right">
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<h3 className="recuperar-contraseña pb-4">Recuperar contraseña</h3>
							<form className="row recupass" onSubmit={frontRecovery}>
								<div className="col-md-11 col-sd-2">
									<div className="form-group">
										<label className="correo">Ingrese su correo electronico</label>
										<input
											type="email"
											className="form-control"
											placeholder="Correo electrónico *"
											name="email"
											onChange={handleInputChange}
											required
										/>
									</div>

									<div className="form-grupo mb-5">
										<div className="row register-form">
											<div className="col-md col-sd-2 d-flex justify-content-center">
												<input type="submit" className="btnEnviar" value="Enviar" />
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
