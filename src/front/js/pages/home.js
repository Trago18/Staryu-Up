import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<body id="page-top">
			{/* <!-- Masthead--> */}
			<header className="inicio text-center">
				<div className="container p-5 height d-flex align-items-center flex-column">
					{/* <!-- Masthead Heading--> */}
					<h1 className="masthead-heading mt-5 p-5">ENCUENTRE SU EXPERTO</h1>
				</div>
			</header>
			{/* <!-- Portfolio Section--> */}
			<section className="page-section portfolio pt-5 pb-5" id="portfolio">
				<div className="container">
					{/* <!-- Icon Divider--> */}
					<div className="row categ m-2">
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-wrench fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-paint-roller fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-balance-scale fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-desktop fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-mobile-alt fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-gamepad fa-3x mb-5" />
							</div>
						</div>
					</div>
					<div className="row pt-3 m-1">
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-camera-retro fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-paw fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-plug fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-truck fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-music fa-3x mb-5" />
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card-body-face p-4">
								<i className="fa fa-couch fa-3x mb-5" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Unete a nuestra red--> */}
			<div className="inicio-red text-center">
				<div className="container p-5 height d-flex align-items-center flex-column">
					<h1 className="page-section-expertos mt-5 p-5">UNETE A NUESTRA RED DE EXPERTOS</h1>
				</div>
			</div>
		</body>
	);
};
