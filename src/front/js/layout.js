import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Search_Results } from "./pages/searchResults";
import { User_Register } from "./pages/userRegister";
import { Supplier_Register } from "./pages/supplierRegister";
import { Login } from "./pages/login";
import { Password_Recovery } from "./pages/passwordRecovery";
import { User_Profile } from "./pages/userProfile";
import { Supplier_Profile } from "./pages/supplierProfile";
import { Rigo } from "./pages/rigo";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar_menu } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar_menu />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/results">
							<Search_Results />
						</Route>
						<Route exact path="/user-register">
							<User_Register />
						</Route>
						<Route exact path="/supplier-register">
							<Supplier_Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/recovery">
							<Password_Recovery />
						</Route>
						<Route exact path="/user">
							<User_Profile />
						</Route>
						<Route exact path="/supplier/:supplierid">
							<Supplier_Profile />
						</Route>
						<Route exact path="/rigo">
							<Rigo />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
