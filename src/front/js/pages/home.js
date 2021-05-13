import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [data, setData] = useState({
		search: "",
		change: ""
	});

	const handleInputChange = e => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const handleClick = value => {
		console.log(value);
		setData({ change: value });
		store.search = value;
		actions.postSearch(value);
	};

	const frontSearch = e => {
		e.preventDefault();
		// console.log(data.search);
		store.search = data.search;
		setData({ change: data.search });
		actions.postSearch(data.search);
	};

	return (
		<div id="page-top">
			{data.change != "" && <Redirect to="/results" />}
			{/* <!-- Area de expertos y buscador--> */}
			<div className="inicio">
				<div className="section-serch p-5 height d-flex align-items-center flex-column">
					<h1 className="serch mt-5 text-center">
						<strong>ENCUENTRE SU EXPERTO</strong>
						<h6>CON LA RECOMENDACIÓN CONFIABLE DE LA COMUNIDAD</h6>
					</h1>
					<form className="container d-flex justify-content-center px-5" onSubmit={frontSearch}>
						<div className="search">
							<input
								type="text"
								className="search-input"
								placeholder="Búsqueda por proveedor..."
								name="search"
								onChange={handleInputChange}
							/>
							<button href="#" className="search-icon">
								<i className="fa fa-search" />
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* <!-- Seccón de categorías--> */}
			<section className="page-section portfolio pb-5" id="portfolio">
				<div className="container">
					<div className="categ-pop pb-3">
						<h3>Categorías populares</h3>
					</div>
					{/* <!-- Iconos--> */}
					<div className="row ">
						<div className="categ col-md-2">
							<Link onClick={() => handleClick("Mascotas")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-paw fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Mascotas</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Pintor")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-paint-roller fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Pintor</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Transporte")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-truck-moving fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Transporte</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Fotógrafo")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-camera-retro fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Fotógrafo</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Catering")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-utensils fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Catering</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Jardinero")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-spa fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Jardinero</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-md-2">
							<Link onClick={() => handleClick("Express")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-motorcycle fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Express</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Construcción")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-toolbox fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Construcción</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Computación")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-laptop fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Computación</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Eléctrico")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-charging-station fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Eléctrico</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Enseñanza")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-chalkboard-teacher fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Enseñanza</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-md-2">
							<Link onClick={() => handleClick("Mecánica")}>
								<div className="card-inner p-3 d-flex flex-column align-items-center">
									<i className="icono fa fa-wrench fa-3x" />
									<div className="text-center mg-text pt-2">
										<span className="mg-text">Mecánica</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Unete a nuestra red--> */}
			<div className="red-expertos text-center">
				<div className="container height d-flex align-items-center flex-column">
					<h1 className="seccion-expertos mt-5 pt-5">ÚNETE A NUESTRA RED DE EXPERTOS</h1>
				</div>
			</div>
		</div>
	);
};
