import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
//Outlet will return if user is logged in ( it will output any page we are trying to load)
//if not logged in we use navigate to redirect us

function PrivateRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
