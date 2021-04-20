import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<>
			{/* <!-- Navbar--> */}
			<header className="container-cabecera">
				<nav className="nav navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand text-white" href="#">
						<h1 className="display-3">A</h1>
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
										<bold>INICIO</bold>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<bold>CATEGORÍA</bold>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<bold>PERFÍL</bold>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<bold>CONTÁCTENOS</bold>
									</h6>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									<h6>
										<bold>INICIAR SECIÓN</bold>
									</h6>
								</a>
							</li>
						</ul>
						{/* <!--Buscador--> */}
						<form className="form-inline">
							<div className="input-group">
								<input
									type="text"
									className="form-control rounded-pill border-dark"
									placeholder="Buscador"
								/>
							</div>
						</form>
					</div>
				</nav>
			</header>
		</>
	);
};
