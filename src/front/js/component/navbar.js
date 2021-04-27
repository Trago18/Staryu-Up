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
			<div className="logo">
				<h1 className="display-4">
					<i className="fa fa-star-half-alt fa-3x" />
				</h1>
			</div>
			<div className="menu">
				<ul>
					<li>
						<Link to="/">
							<div>Inicio</div>
						</Link>
					</li>
					<li>
						<Link to="/user">
							<div>Perfil Usuario</div>
						</Link>
					</li>
					<li>
						<Link to="/supplier/1">
							<div>Perfil Proveedor</div>
						</Link>
					</li>
					<li>
						<div>Contáctenos</div>
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
