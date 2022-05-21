import React from "react";
import { AuthGoogleProvider } from "./Context/AuthGoogle";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
};
