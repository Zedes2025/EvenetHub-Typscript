import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import HomePage, { loader as eventLoader } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: eventLoader,
      },
    ],
  },
]);

export default router;
