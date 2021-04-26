import React from "react";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<footer className="footer mt-auto text-center text-white">
			<div className="container">
				{/*<!-- Social -->*/}
				<section className="mb-1">
					<ul className="social-network social-circle pt-3">
						<li>
							<a href="#" className="icoFacebook" title="Facebook">
								<i className="fab fa-facebook-f" />
							</a>
						</li>
						<li>
							<a href="#" className="icoLinkedin" title="Linkedin">
								<i className="fab fa-linkedin-in" />
							</a>
						</li>
						<li>
							<a href="#" className="icoTwiter" title="Twitter">
								<i className="fab fa-twitter" />
							</a>
						</li>
						<li>
							<a href="#" className="icoGoogle" title="Google">
								<i className="fab fa-google" />
							</a>
						</li>
						<li>
							<a href="#" className="icoInstagram" title="Instagram">
								<i className="fab fa-instagram" />
							</a>
						</li>
						<li>
							<a href="#" className="icoGithub" title="Github">
								<i className="fab fa-github" />
							</a>
						</li>
					</ul>
				</section>
			</div>

			{/*<!-- Copyright -->*/}
			<div className="copy text-center p-3">© 2021 Copyright: Trago, Majo, Banban, Manudo </div>
		</footer>
	);
};
