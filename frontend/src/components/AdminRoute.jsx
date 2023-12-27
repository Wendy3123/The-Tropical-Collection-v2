import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
//Outlet will return if user is logged in as admin( it will output any page we are trying to load)
//if not logged or not admin in we use navigate to redirect us

function AdminRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default AdminRoute;
