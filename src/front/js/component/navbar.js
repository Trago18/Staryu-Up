import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<>
			{/* <!-- Navbar-->
			<div className="container-cabecera">
				<nav className="menu nav navbar navbar-expand-lg navbar-light ">
					<a className="navbar-brand text-white" href="#">
						<h1 className="display-4">
							<i className="fa fa-star-half-alt fa-3x" />
						</h1>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse flex-column" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<b>INICIO</b>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<b>CATEGORÍA</b>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<b>PERFIL</b>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<b>CONTÁCTENOS</b>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<b>INICIAR SESIÓN</b>
									</h6>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
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
	);
};
