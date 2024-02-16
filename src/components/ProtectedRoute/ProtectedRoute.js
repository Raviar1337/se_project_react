import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
};

export default ProtectedRoute;
