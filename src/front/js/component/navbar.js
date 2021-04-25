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
<<<<<<< HEAD
		</nav>
=======
            */}
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
							<Link to="/user/1">
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
							<Link to="/login">
								<div>Iniciar Sesión</div>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
>>>>>>> 9219e17e5d5cc84d3e70fc6ebd1b8b73f891ebfa
	);
};
