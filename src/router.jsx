import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import HomePage, { loader as eventLoader } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./components/UI/SignIn.jsx";
import SignUp from "./components/UI/signup.jsx";
import { useState } from "react";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
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
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/events/:id",
        element: <EventDetailPage />,
        loader: eventDetailLoader,
      },
    ],
  },
]);

export default router;
