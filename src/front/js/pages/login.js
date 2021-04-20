import React from "react";
import "../../styles/login.scss";

export const Login = () => {
	return (
		<body id="page-top-login">
			<div className="cabecera bg-white">
				<div className="container" />
			</div>
			<div className="content">
				<div className="container">
					<div className="row justify-content-center mt-5">
						<div className="col-md-6 contents">
							<div className="row justify-content-center">
								<div className="col-md-12">
									<div className="form-block">
										<div className="mb-4">
											<h3>
												Sign In to <strong>Colorlib</strong>
											</h3>
											<p className="mb-4">
												Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
												adipisicing.
											</p>
										</div>
										<form action="#" method="post">
											<div className="form-group first">
												<label htmlFor="username">Username</label>
												<input type="text" className="form-control" id="username" />
											</div>
											<div className="form-group last mb-4">
												<label htmlFor="password">Password</label>
												<input type="password" className="form-control" id="password" />
											</div>

											<div className="d-flex mb-5 align-items-center">
												<label className="control control--checkbox mb-0">
													<span className="caption">Remember me</span>
													<input type="checkbox" checked="checked" />
													<div className="control__indicator" />
												</label>
												<span className="ml-auto">
													<a href="#" className="forgot-pass">
														Forgot Password
													</a>
												</span>
											</div>

											<input
												type="submit"
												value="Log In"
												className="btn btn-pill text-white btn-block btn-primary"
											/>

											<span className="d-block text-center my-4 text-muted">
												{" "}
												or sign in with
											</span>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cabecera bg-white">
				<div className="container p-5" />
			</div>
		</body>
	);
};
