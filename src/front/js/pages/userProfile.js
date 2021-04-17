import React from "react";
import "../../styles/userProfile.scss";

export const User_Profile = () => {
	return (
		<body id="page-top-login">
			<header className="cabecera bg-white">
				<div className="container p-5 height d-flex align-items-center rounded flex-column" />
			</header>

			<div className="container d-flex flex-column bg-secondary">
				<div className="row">
					<div className="col-6">1 of 2</div>
					<div className="col-6">1 of 2</div>
				</div>
			</div>
			<div className="container d-flex align-items-center rounded flex-column">
				<div className="card mb-3">
					<div className="card-body pl-5 text-dark">
						<h5 className="card-title">Mi cuenta</h5>
					</div>
					<div className="d-flex align-items-center rounded flex-column">
						<div className="card-login rounded text-dark bg-white">
							<p className="card-title">Usuario</p>
						</div>
					</div>
					<div className="card-body text-dark">
						<h5 className="card-title">Mis datos personales</h5>
					</div>
				</div>
			</div>

			<div className="container register">
				<div className="row">
					<div className="col-md-3 register-left">
						<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
						<h3>Welcome</h3>
						<p>You are 30 seconds away from earning your own money!</p>
						<input type="submit" name="" value="Login" />
						<br />
					</div>
					<div className="col-md-9 register-right">
						<ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true">
									Employee
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false">
									Hirer
								</a>
							</li>
						</ul>
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab">
								<h3 className="register-heading">Apply as a Employee</h3>
								<div className="row register-form">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="First Name *" />
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="Last Name *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												placeholder="Password *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												placeholder="Confirm Password *"
												value=""
											/>
										</div>
										<div className="form-group">
											<div className="maxl">
												<label className="radio inline">
													<input type="radio" name="gender" value="male" checked />
													<span> Masculino </span>
												</label>
												<label className="radio inline">
													<input type="radio" name="gender" value="female" />
													<span>Femenino </span>
												</label>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="email"
												className="form-control"
												placeholder="Your Email *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												minLength="10"
												maxLength="10"
												name="txtEmpPhone"
												className="form-control"
												placeholder="Your Phone *"
												value=""
											/>
										</div>
										<div className="form-group">
											<select className="form-control">
												<option className="hidden" selected disabled>
													Please select your Sequrity Question
												</option>
												<option>What is your Birthdate?</option>
												<option>What is Your old Phone Number</option>
												<option>What is your Pet Name?</option>
											</select>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="Enter Your Answer *"
												value=""
											/>
										</div>
										<input type="submit" className="btnRegister" value="Register" />
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade show"
								id="profile"
								role="tabpanel"
								aria-labelledby="profile-tab">
								<h3 className="register-heading">Apply as a Hirer</h3>
								<div className="row register-form">
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="First Name *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="Last Name *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="email"
												className="form-control"
												placeholder="Email *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												maxLength="10"
												minLength="10"
												className="form-control"
												placeholder="Phone *"
												value=""
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												placeholder="Password *"
												value=""
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												placeholder="Confirm Password *"
												value=""
											/>
										</div>
										<div className="form-group">
											<select className="form-control">
												<option className="hidden" selected disabled>
													Please select your Sequrity Question
												</option>
												<option>What is your Birthdate?</option>
												<option>What is Your old Phone Number</option>
												<option>What is your Pet Name?</option>
											</select>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control"
												placeholder="`Answer *"
												value=""
											/>
										</div>
										<input type="submit" className="btnRegister" value="Register" />
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
