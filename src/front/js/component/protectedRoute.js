import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (isAuth) {
					return <Component />;
				} else {
					return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
				}
			}}
		/>
	);
};
ProtectedRoute.propTypes = {
	location: PropTypes.object,
	isAuth: PropTypes.string,
	component: PropTypes.any
};
