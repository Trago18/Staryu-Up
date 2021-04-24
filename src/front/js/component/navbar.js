import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		search: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const frontSearch = e => {
		e.preventDefault();
		//console.log(data.search);
		actions.postSearch(data.search);
	};

	return (
		<>
			{/* <!-- Navbar--> */}
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
						{/* <!--Buscador--> */}
						<form className="form-inline" onSubmit={frontSearch}>
							<div className="input-group">
								<input
									type="text"
									className="form-control rounded-pill border-dark"
									placeholder="Buscador"
									name="search"
									onChange={handleInputChange}
								/>
							</div>
						</form>
					</div>
				</nav>
			</div>
		</>
	);
};
