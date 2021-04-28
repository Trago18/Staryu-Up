import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar_menu = () => {
	const { store } = useContext(Context);

	const logout = () => {
		sessionStorage.removeItem("Token");
		localStorage.removeItem("Token");
	};

	return (
		<nav>
			<Link to="/">
				<div className="logo">
					<h1 className="display-4">
						<i className="fa fa-star-half-alt fa-3x" />
					</h1>
				</div>
			</Link>
			<div className="menu">
				<ul>
					<li>
						<Link to="/">
							<div>Inicio</div>
						</Link>
					</li>
					<li>
						<Link to="/supplier-register">
							<div>Hacerme Proveedor</div>
						</Link>
					</li>
					<li>
						<Link to="/user">
							<div>Perfil Usuario</div>
						</Link>
					</li>
					<li>
						<div className="form-contact">
							<a className="btnContact" href="#openContact">
								Contáctenos
							</a>
						</div>
						<div id="openContact" className="modalContact">
							<div className="cont-header pt-4">
								<a href="#close" title="Close" className="close">
									X
								</a>
								<h2>Formulario de contacto</h2>
								<div className="contact_form">
									<div className="form-cont">
										<form action="submeter-formulario.php" method="post">
											<p>
												<label htmlFor="nombre" className="label2 colocar_nombre">
													Nombre
													<span className="obligatorio">*</span>
												</label>
												<input
													className="input2"
													type="text"
													name="introducir_nombre"
													id="nombre"
													required="obligatorio"
													placeholder="Escribe tu nombre"
												/>
											</p>

											<p>
												<label htmlFor="email" className="label2 colocar_email">
													Email
													<span className="obligatorio">*</span>
												</label>
												<input
													className="input2"
													type="email"
													name="introducir_email"
													id="email"
													required="obligatorio"
													placeholder="Escribe tu correo electrónico"
												/>
											</p>
											<p>
												<label htmlFor="asunto" className="label2 colocar_asunto">
													Asunto
													<span className="obligatorio">*</span>
												</label>
												<input
													className="input2"
													type="text"
													name="introducir_asunto"
													id="assunto"
													required="obligatorio"
													placeholder="Escribe un asunto"
												/>
											</p>
											<p>
												<label htmlFor="mensaje" className="label2 colocar_mensaje">
													Mensaje
													<span className="obligatorio">*</span>
												</label>
												<textarea
													name="introducir_mensaje"
													className="texto_mensaje"
													id="mensaje"
													required="obligatorio"
													placeholder="Deja aquí tu comentario..."></textarea>
											</p>
											<button
												className="btnSubmit"
												type="submit"
												name="enviar_formulario"
												id="enviar">
												<p className="enviar">Enviar</p>
											</button>
											<p className="aviso">
												<span className="obligatorio"> * </span>Los campos son obligatorios.
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						{store.token == null ? (
							<Link to="/login">
								<div>Iniciar Sesión</div>
							</Link>
						) : (
							<a href="/">
								<div onClick={logout}>Cerrar Sesión</div>
							</a>
						)}
						{/* <Link to="/login">
							<div>Iniciar Sesión</div>
						</Link> */}
					</li>
				</ul>
			</div>
		</nav>
	);
};
