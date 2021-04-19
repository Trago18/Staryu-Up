import React from "react";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<body id="page-top">
			{/* <!-- Masthead--> */}
			<header className="encabezado text-center">
				<div className="container p-5 height d-flex align-items-center flex-column">
					{/* <!-- Masthead Heading--> */}
					<h1 className="masthead-heading mt-5 p-5">ENCUENTRE SU EXPERTO</h1>
				</div>
			</header>
			{/* <!-- Portfolio Section--> */}
			<section className="page-section portfolio pt-5 pb-5" id="portfolio">
				<div className="container">
					{/* <!-- Icon Divider--> */}
					<div className="row">
						<div className="col-sm-2">
							<div className="card">
								<div className="card-body" />
								<a
									className="btn btn-link btn-floating btn-lg  btn-floating m-1"
									href="#!"
									role="button">
									<i className="fab fa-facebook-f" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Unete a nuestra red--> */}
			<div className="encabezado text-center">
				<div className="container p-5 height d-flex align-items-center flex-column">
					<h1 className="page-section-expertos mt-5 p-5">UNETE A NUESTRA RED DE EXPERTOS</h1>
				</div>
			</div>
		</body>
	);
};
