import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<>
			{/* <!--Buscador--> */}
			<nav className="navbar navbar-inverse">
				<div className="container height d-flex align-items-center flex-column">
					<form className="navbar-form navbar-left" action="/action_page.php">
						<div className="input-group">
							<input
								className="form-control mr-sm-2 rounded-pill px-lg-5"
								type="search"
								placeholder="Buscador..."
								aria-label="Search"
							/>
							<button className="btn btn-info my-2 my-sm-0" type="submit">
								BUSCAR
							</button>
							<div className="input-group-btn">
								<button className="btn btn-default" type="submit">
									<i className="glyphicon glyphicon-search" />
								</button>
							</div>
						</div>
					</form>
				</div>
			</nav>
			{/* <!-- Navigation--> */}
			<nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll-trigger px-lg-1" href="#page-top">
						APP
					</a>
					<button
						className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						Menu
						<i className="fas fa-bars" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 rounded js-scroll-trigger" href="#portfolio">
									INICIO
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-2 rounded js-scroll-trigger" href="#about">
									CATEGORIAS
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-2 rounded js-scroll-trigger" href="#contact">
									PERFIL
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-2 rounded js-scroll-trigger" href="#contact">
									CONTCTENOS
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-5 rounded js-scroll-trigger" href="#contact">
									INICIAR SECIÓN
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
