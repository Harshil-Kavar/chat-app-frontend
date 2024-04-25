import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutePropTypes {
  children?: any;
  user: boolean;
  redirect?: string;
}

const ProtectedRoute = ({
  children,
  user,
  redirect = "/login",
}: ProtectedRoutePropTypes) => {
  if (!user) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
