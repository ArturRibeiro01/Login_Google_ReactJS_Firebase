import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from ".";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
