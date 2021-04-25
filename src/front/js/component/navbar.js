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
						<a href="#">Inicio</a>
					</li>
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" href="#">
							Perfil<span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>
								<a href="#">Page 1-1</a>
							</li>
							<li>
								<a href="#">Page 1-2</a>
							</li>
							<li>
								<a href="#">Page 1-3</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Contáctenos</a>
					</li>
					<li>
						<a href="#">Iniciar Sesión </a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
