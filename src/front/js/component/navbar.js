import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
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
						<Link to="/supplier/:supplierid">
							<div>Perfil Proveedor</div>
						</Link>
					</li>
					<li>
						<div>Contáctenos</div>
					</li>
					<li>
						<Link to="/login">
							<div>Iniciar Sesión</div>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
