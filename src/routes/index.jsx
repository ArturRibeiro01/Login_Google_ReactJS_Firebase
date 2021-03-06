import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGoogleContext } from "../Context/AuthGoogle";

export const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);

  return signed ? <Outlet /> : <Navigate to="/" />;
};
