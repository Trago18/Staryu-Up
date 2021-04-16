import React from "react";
import "../../styles/home.scss";
import polygonoImageUrl from "../../img/polygono.png";

/* <!--import cakeImageUrl from "../../img/cake.png";
import circusImageUrl from "../../img/circus.png";
import gameImageUrl from "../../img/game.png";
import safeImageUrl from "../../img/safe.png";
import submarineImageUrl from "../../img/submarine.png";
import polygonoImageUrl from "../../img/polygono.png";-->*/

export const Home = () => {
	return (
		<body id="page-top">
			{/* <!--Navbar-->
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
			</nav> */}

			{/* <!-- Masthead--> */}
			<header className="masthead bg-white text-center">
				<div className="container p-5 height d-flex align-items-center flex-column">
					{/* <!-- Masthead Heading--> */}
					<h1 className="masthead-heading mb-5 p-5">ENCUENTRE SU EXPERTO</h1>
				</div>
			</header>
			{/* <!-- Portfolio Section--> */}
			<section className="page-section portfolio pt-5 pb-5" id="portfolio">
				<div className="container">
					{/* <!-- Icon Divider--> */}
					<div className="divider-custom">
						<div className="divider-custom-line" />
						<div className="divider-custom-line" />
					</div>
					{/* <!-- Portfolio Grid Items--> */}
					<div className="row justify-content-center">
						{/* <!-- Portfolio Item 1--> */}
						<div className="col-md-6 col-lg-4 mb-0">
							<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white" />
								</div>
								<img className="img-fluid" src={polygonoImageUrl} alt="..." />
							</div>
						</div>
						{/* <!-- Portfolio Item 2--> */}
						<div className="col-md-6 col-lg-4 mb-0">
							<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white" />
								</div>
								<img className="img-fluid" src={polygonoImageUrl} alt="..." />
							</div>
						</div>
						{/* <!-- Portfolio Item 3--> */}
						<div className="col-md-6 col-lg-4 mb-0">
							<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white" />
								</div>
								<img className="img-fluid" src={polygonoImageUrl} alt="..." />
							</div>
						</div>
						{/* <!-- Portfolio Item 4--> */}
						<div className="col-md-6 col-lg-4 mb-0 mb-lg-0">
							<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white" />
								</div>
								<img className="img-fluid" src={polygonoImageUrl} alt="..." />
							</div>
						</div>
						{/* <!-- Portfolio Item 5--> */}
						<div className="col-md-6 col-lg-4 mb-0 mb-md-0">
							<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white" />
								</div>
								<img className="img-fluid" src={polygonoImageUrl} alt="..." />
							</div>
						</div>
						{/* <!-- Portfolio Item 6--> */}
						<div className="col-md-6 col-lg-4 mb-0 mb-md-0">
							<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white" />
								</div>
								<img className="img-fluid" src={polygonoImageUrl} alt="..." />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Unete a nuestra red--> */}
			<section className="page-section-about mb-0">
				<div className="container ">
					<h2 className="page-section-heading pt-5">UNASE A NUESTRA RED DE EXPERTOS</h2>
				</div>
			</section>
			{/* <!-- Nosotrso--> */}
			<section className="page-section-us mb-0">
				<div className="container ">
					<h2 className="page-section-us pt-5">SOBRE NOSOTROS</h2>
				</div>
			</section>

			{/* <!-- Copyright Section--> *
			<div className="copyright py-4 text-center text-white">
				<div className="container">
					<small>
						Copyright &copy; Your Website
						{/* <!-- This script automatically adds the current year to your website footer--> */}
			{/* <!-- (credit: https://updateyourfooter.com/)--> 
						<script>document.write(new Date().getFullYear());</script>
					</small>
				</div>
			</div>
			<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> 
			<div className="scroll-to-top d-lg-none position-fixed">
				<a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                        <i className="fa fa-chevron-up" />
				</a>
			</div>--*/}
			{/* ########################################################################################################################################################## */}
			{/* <!-- Portfolio Modals--> */}
			{/* <!-- Portfolio Modal 1--> */}
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal1"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal1Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* <!-- Portfolio Modal - Title--> */}
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal1Label">
											Log Cabin
										</h2>
										{/* <!-- Icon Divider--> */}
										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>
										{/* <!-- Portfolio Modal - Image--> */}
										<img className="img-fluid rounded mb-5" src={polygonoImageUrl} alt="..." />
										{/* <!-- Portfolio Modal - Text--> */}
										<p className="mb-5">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
											assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
											quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
											consequuntur itaque. Nam.
										</p>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Portfolio Modal 2--> */}
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal2"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal2Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* <!-- Portfolio Modal - Title--> */}
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal2Label">
											Tasty Cake
										</h2>
										{/* <!-- Icon Divider--> */}
										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>
										{/* <!-- Portfolio Modal - Image--> */}
										<img className="img-fluid rounded mb-5" src={polygonoImageUrl} alt="..." />
										{/* <!-- Portfolio Modal - Text--> */}
										<p className="mb-5">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
											assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
											quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
											consequuntur itaque. Nam.
										</p>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Portfolio Modal 3--> */}
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal3"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal3Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* <!-- Portfolio Modal - Title--> */}
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal3Label">
											Circus Tent
										</h2>
										{/* <!-- Icon Divider--> */}
										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>
										{/* <!-- Portfolio Modal - Image--> */}
										<img className="img-fluid rounded mb-5" src={polygonoImageUrl} alt="..." />
										{/* <!-- Portfolio Modal - Text--> */}
										<p className="mb-5">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
											assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
											quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
											consequuntur itaque. Nam.
										</p>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Portfolio Modal 4--> */}
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal4"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal4Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* <!-- Portfolio Modal - Title--> */}
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal4Label">
											Controller
										</h2>
										{/* <!-- Icon Divider--> */}
										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>
										{/* <!-- Portfolio Modal - Image--> */}
										<img className="img-fluid rounded mb-5" src={polygonoImageUrl} alt="..." />
										{/* <!-- Portfolio Modal - Text--> */}
										<p className="mb-5">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
											assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
											quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
											consequuntur itaque. Nam.
										</p>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Portfolio Modal 5--> */}
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal5"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal5Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* <!-- Portfolio Modal - Title--> */}
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal5Label">
											Locked Safe
										</h2>
										{/* <!-- Icon Divider--> */}
										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>
										{/* <!-- Portfolio Modal - Image--> */}
										<img className="img-fluid rounded mb-5" src={polygonoImageUrl} alt="..." />
										{/* <!-- Portfolio Modal - Text--> */}
										<p className="mb-5">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
											assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
											quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
											consequuntur itaque. Nam.
										</p>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Portfolio Modal 6--> */}
			<div
				className="portfolio-modal modal fade"
				id="portfolioModal6"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="portfolioModal6Label"
				aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">
								<i className="fas fa-times" />
							</span>
						</button>
						<div className="modal-body text-center">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* <!-- Portfolio Modal - Title--> */}
										<h2
											className="portfolio-modal-title text-secondary text-uppercase mb-0"
											id="portfolioModal6Label">
											Submarine
										</h2>
										{/* <!-- Icon Divider--> */}
										<div className="divider-custom">
											<div className="divider-custom-line" />
											<div className="divider-custom-icon">
												<i className="fas fa-star" />
											</div>
											<div className="divider-custom-line" />
										</div>
										{/* <!-- Portfolio Modal - Image--> */}
										<img className="img-fluid rounded mb-5" src={polygonoImageUrl} alt="..." />
										{/* <!-- Portfolio Modal - Text--> */}
										<p className="mb-5">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
											assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
											quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod
											consequuntur itaque. Nam.
										</p>
										<button className="btn btn-primary" data-dismiss="modal">
											<i className="fas fa-times fa-fw" />
											Close Window
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
};
