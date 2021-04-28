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
							<div>
								<a href="#close" title="Close" className="close">
									X
								</a>
								<h2>Horario laboral</h2>
								<p>Seleccione los días en que labora con su respectivo horario.</p>
								<div calssName="row">
									<div calssName="form-group col-sm-6">
										<label htmlFor="name" calssName="h4">
											Name
										</label>
										<input
											type="text"
											calssName="form-control"
											id="name"
											placeholder="Enter name"
											required
										/>
									</div>
									<div calssName="form-group col-sm-6">
										<label htmlFor="email" calssName="h4">
											Email
										</label>
										<input
											type="email"
											calssName="form-control"
											id="email"
											placeholder="Enter email"
											required
										/>
									</div>
								</div>
								<div calssName="form-group">
									<label htmlFor="message" calssName="h4 ">
										Message
									</label>
									<textarea
										id="message"
										calssName="form-control"
										rows="5"
										placeholder="Enter your message"
										required></textarea>
								</div>
								<button type="submit" id="form-submit" calssName="btn btn-success btn-lg pull-right ">
									Submit
								</button>
								<div id="msgSubmit" calssName="h3 text-center hidden">
									Message Submitted!
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
